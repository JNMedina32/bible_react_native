const translationTableMap = {
  "American Standard Version": "asvBible",
  "Authorized King James Version": "akjvBible",
};

async function getBibleBooks(db, translation, func) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT DISTINCT book_name FROM ${tableName} ORDER BY id;`
    );
    func(result);
  } else {
    console.error("Invalid translation provided.");
  }
}

async function getChapters(db, book_name, chapter, translation, func) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT verse, text, chapter FROM ${tableName} WHERE book_name = ? AND chapter = ?;`,
      [book_name, chapter]
    );
    let verseObj = {};
    for (const book_name of result) {
      verseObj = { ...verseObj, [book_name.verse]: book_name.text };
    }
    func(verseObj);
  } else {
    console.error("Something went wrong getting the chapters");
  }
}

async function getNumOfChap(db, book_name, translation, func) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT DISTINCT chapter FROM ${tableName} WHERE book_name = ?;`,
      [book_name]
    );
    func(result.length);
  } else {
    console.error("Something went wrong getting number of chapters");
  }
}

async function getVerses(
  db,
  book_name,
  chapter,
  translation,
  func,
  fromVerse,
  toVerse = fromVerse,

) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT book_name, verse, text, chapter FROM ${tableName} WHERE book_name = ? AND chapter = ? AND verse BETWEEN ? AND ?;`,
      [book_name, chapter, fromVerse, toVerse]
    );
    let verseObj = {};
    for (const book_name of result) {
      verseObj = { ...verseObj, [book_name.verse]: book_name.text };
    }
    func(verseObj);
  } else {
    console.error("Something went wrong getting the verses");
  }
}

async function getUserSearch(db, searchItem, translation, func){
  const tableName = translationTableMap[translation];
  const param = `%${searchItem}%`;

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT book_name, verse, text, chapter FROM ${tableName} WHERE text LIKE ? ORDER BY book_name, chapter, verse, text;`,
      [param]
    );
    console.log("getUserSearch results: ", result);
    func(result);
  } else {
    console.error("Something went wrong getting your search");
  }
}

async function getBibleTranslations(db, func) {
  const result = await db.getAllAsync(`SELECT * FROM translations;`);
  func(result);
}

async function getUserSettings(db, user_id, func) {
  const result = await db.getFirstAsync(
    `SELECT * FROM userSettings WHERE user_id = ?;`,
    [user_id]
  );
  func({ type: "INITIAL_USER_STATE", payload: result });
}

async function getNotes(db, userID, func) {
  const result = await db.getAllAsync(
    `SELECT * FROM userNotes WHERE user_id = ?;`,
    [userID]
  );
  await func(result);
}

export {
  getBibleBooks,
  getChapters,
  getNumOfChap,
  getVerses,
  getUserSettings,
  getNotes,
  getBibleTranslations,
  getUserSearch,
};
