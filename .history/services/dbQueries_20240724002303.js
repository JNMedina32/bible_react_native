import * as SQLite from "expo-sqlite";



const allRows = await db.getAllAsync('SELECT DISTINCT book_name FROM bible WHERE id <= 39');

console.log(allRows);