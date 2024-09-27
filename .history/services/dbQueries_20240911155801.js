import * as SQLite from "expo-sqlite/legacy";

//These variable are used with legacy SQLite3. They were not needed before
// const db = SQLite.openDatabase("../assets/bible.db");
// const readOnly = true;

// //This function was a test to see if Legacy SQLite would work 
// async function getBibleBooksLegacy(func) {
//   await db.transactionAsync(async (tx) => {
//     const result = await tx.executeSqlAsync(
//       `SELECT DISTINCT book_name FROM asvBible ORDER BY id;`,
//       []
//     );
//     func(result);
//   }, readOnly);
// }

//These queries were working as intended with the new SQLite3
async function getBibleBooks(db, func) {
  const result = await db.getAllAsync(
    `SELECT DISTINCT book_name FROM asvBible ORDER BY id;`
  );
  await func(result);
}


// async function getChapters(db, book, chapter, func) {
//   func("");
//   const result = await db.getAllAsync(
//     `SELECT verse, text, chapter FROM asvBible WHERE book_name = ? AND chapter = ?;`,
//     [book, chapter]
//   );
//   for (const book of result) {
//     func((prev) => prev + " " + book.verse + ". " + book.text);
//   }
// }

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
  setSettings,
  getNotes,
};