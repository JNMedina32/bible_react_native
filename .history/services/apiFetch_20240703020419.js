import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("../assets/database/bible.db");

export const allRows = await db.getAllAsync('SELECT DISTNINCT book_name FROM bible WHERE id <= 39');
for (const row of allRows) {
  console.log(row.id, row.value, row.intValue);
}