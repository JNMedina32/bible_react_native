import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('bible.db');

const allRows = await db.getAllAsync('SELECT DISTINCT book_name FROM bible');
console.log(allRows);

