async function getBibleBooks(db, func) {
  const result = await db.getAllAsync(
    `SELECT DISTINCT book_name FROM asvBible ORDER BY id;`
  );
  await func(result);
}

async function getChapters(db, book, chapter, func) {
  const result = await db.getAllAsync(
    `SELECT verse, text, chapter FROM asvBible WHERE book_name = ? AND chapter = ?;`,
    [book, chapter]
  );
  for (const book of result) {
    func((prev) => prev + " " + book.verse + ". " + book.text);
  }
}

async function getNumOfChap(db, book, func) {
  const result = await db.getAllAsync(
    `SELECT DISTINCT chapter FROM asvBible WHERE book_name = ?;`,
    [book]
  );
  func(result.length);
}

async function getVerses(db, book, chapter, fromVerse, toVerse, func) {
  const result = await db.getAllAsync(
    `SELECT verse, text, chapter FROM asvBible WHERE book_name = ? AND chapter = ? AND verse BETWEEN ? AND ?;`,
    [book, chapter, fromVerse, toVerse]
  );
  for (const book of result) {
    func((prev) => prev + " " + book.verse + ". " + book.text);
  }
}

async function getUserSettings(db, user_id, func) {

  const result = await db.getFirstAsync(
    `SELECT * FROM userSettings WHERE user_id = ?;`,
    [user_id]
  );
  func({ type: "INITIAL_USER_STATE", payload: result });
  // console.log(result[0]);
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
};
