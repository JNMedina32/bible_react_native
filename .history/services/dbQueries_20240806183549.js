import * as SQLite from "expo-sqlite";



const allRows = await db.getAllAsync('SELECT DISTINCT book_name FROM bible WHERE id <= 39');

async function getChapters(book, chapter, func) {
  setBookText("");
  const result = await db.getAllAsync(
    `SELECT verse, text, chapter FROM bible WHERE book_name = ? AND chapter = ?;`,
    [book, chapter]
  );
  for (const book of result) {
    setBookText((prev) => prev + " " + book.verse + ". " + book.text);
  }
}

async function getNumOfChap(book) {
  const result = await db.getAllAsync(
    `SELECT DISTINCT chapter FROM bible WHERE book_name = ?;`,
    [book]
  );
  setNumOfChap(result.length);
}

console.log(allRows);