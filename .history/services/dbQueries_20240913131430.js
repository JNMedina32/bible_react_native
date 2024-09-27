

 SQLite3
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

// async function getNumOfChap(db, book, func) {
//   const result = await db.getAllAsync(
//     `SELECT DISTINCT chapter FROM asvBible WHERE book_name = ?;`,
//     [book]
//   );
//   func(result.length);
// }

// async function getVerses(db, book, chapter, fromVerse, toVerse, func) {
//   func("");
//   const result = await db.getAllAsync(
//     `SELECT verse, text, chapter FROM asvBible WHERE book_name = ? AND chapter = ? AND verse BETWEEN ? AND ?;`,
//     [book, chapter, fromVerse, toVerse]
//   );
//   for (const book of result) {
//     func((prev) => prev + " " + book.verse + ". " + book.text);
//   }
// }

// async function setSettings([{}]) {}

async function getNotes(db, userID, func) {

  const result = await db.getAllAsync(
    `SELECT * FROM userNotes WHERE user_id = ?;`,
    [userID]
  );
  await func(result);
  // console.log(result);
}

export {
  getBibleBooks,
  // getChapters,
  // getNumOfChap,
  // getVerses,
  // setSettings,
  getNotes,
};