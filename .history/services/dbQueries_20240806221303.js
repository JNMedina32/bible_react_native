import * as SQLite from "expo-sqlite";

async function getChapters(db, book, chapter, func) {
  func("");
  const result = await db.getAllAsync(
    `SELECT verse, text, chapter FROM bible WHERE book_name = ? AND chapter = ?;`,
    [book, chapter]
  );
  for (const book of result) {
    func((prev) => prev + " " + book.verse + ". " + book.text);
  }
}

async function getNumOfChap(db, book, func) {
  const result = await db.getAllAsync(
    `SELECT DISTINCT chapter FROM bible WHERE book_name = ?;`,
    [book]
  );
  func(result.length);
}

async function getVerses(db, book, chapter, fromVerse, toVerse, func){
  func("");
  const result = await db.getAllAsync(
    `SELECT verse, text, chapter FROM bible WHERE book_name = ? AND chapter = ? AND verse BETWEEN ? AND ?;`,
    [book, chapter, fromVerse, toVerse]
  );
  for (const book of result) {
    func((prev) => prev + " " + book.verse + ". " + book.text);
  }
};

export { getChapters, getNumOfChap };