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

async function getChapters(db, book, chapter, translation, func) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT verse, text, chapter FROM ${tableName} WHERE book_name = ? AND chapter = ?;`,
      [book, chapter]
    );
    let verseObj = {};
    for (const book of result) {
      verseObj = { ...verseObj, [book.verse]: book.text };
    }
    func(verseObj);
  } else {
    console.error("Something went wrong getting the chapters");
  }
}

async function getNumOfChap(db, book, translation, func) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT DISTINCT chapter FROM ${tableName} WHERE book_name = ?;`,
      [book]
    );
    func(result.length);
  } else {
    console.error("Something went wrong getting number of chapters");
  }
}

async function getVerses(
  db,
  book,
  chapter,
  fromVerse,
  toVerse,
  translation,
  func
) {
  const tableName = translationTableMap[translation];

  if (tableName) {
    const result = await db.getAllAsync(
      `SELECT verse, text, chapter FROM ${tableName} WHERE book_name = ? AND chapter = ? AND verse BETWEEN ? AND ?;`,
      [book, chapter, fromVerse, toVerse]
    );
    let verseObj = {};
    for (const book of result) {
      verseObj = { ...verseObj, [book.verse]: book.text };
    }
    func(verseObj);
  } else {
    console.error("Something went wrong getting the verses");
  }
}

async function getBibleTranslations(db, func) {
  const result = await db.getAllAsync(`SELECT * FROM bibleTranslations;`);
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
};
