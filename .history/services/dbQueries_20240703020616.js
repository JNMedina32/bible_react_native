import * as SQLite from "expo-sqlite";

const db = await SQLite.openDatabaseAsync("../assets/database/bible.db");

const allRows = await db.getAllAsync('SELECT DISTNINCT book_name FROM bible WHERE id <= 39');

export const testFunction = () => {
  console.log("Test function called");
};