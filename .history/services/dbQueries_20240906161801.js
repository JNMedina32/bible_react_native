async function getBibleBooks(db, func) {
  try {
    const result = await db.getAllAsync(
      `SELECT DISTINCT book_name FROM bible ORDER BY id;`
    );
    func(result);
  } catch (error) {
    console.log(error);
  }
}

async function getChapters(db, book, chapter, func) {

}

async function getNumOfChap(db, book, func) {
  const result = await db.getAllAsync(
    `SELECT DISTINCT chapter FROM bible WHERE book_name = ?;`,
    [book]
  );
  func(result.length);
}

async function getVerses(db, book, chapter, fromVerse, toVerse, func) {
  func("");
  const result = await db.getAllAsync(
    `SELECT verse, text, chapter FROM bible WHERE book_name = ? AND chapter = ? AND verse BETWEEN ? AND ?;`,
    [book, chapter, fromVerse, toVerse]
  );
  for (const book of result) {
    func((prev) => prev + " " + book.verse + ". " + book.text);
  }
}

async function setSettings([{}]) {}

async function getNotes(db, userID, func) {
  const result = await db.getAllAsync(
    `SELECT * FROM userNotes WHERE user_id = ?;`,
    [userID]
  );
  func(result);
  console.log(result);
}

export {
  getBibleBooks,
  getChapters,
  getNumOfChap,
  getVerses,
  setSettings,
  getNotes,
};