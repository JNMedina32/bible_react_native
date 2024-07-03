import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("../assets/database/bible.db");

const allRows = await db.getAllAsync('SELECT  FROM test');
for (const row of allRows) {
  console.log(row.id, row.value, row.intValue);
}