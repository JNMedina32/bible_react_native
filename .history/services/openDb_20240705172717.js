import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('bible.db');

const allRows = await db.