--1. create DB
sqlite3 bible.db

--2. create tables
CREATE TABLE IF NOT EXISTS asvBible (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    text TEXT
);

CREATE TABLE IF NOT EXISTS akjvBible (
    id INTEGER PRIMARY KEY,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    text TEXT
);

CREATE TABLE IF NOT EXISTS bibleVersions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    version_name TEXT,
    version_code TEXT
);

CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT UNIQUE
    );

CREATE TABLE IF NOT EXISTS userSettings(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    bible_version TEXT DEFAULT 'ASV',
    font_size INTEGER DEFAULT 16,
    notifications BOOLEAN DEFAULT 0,
);

CREATE TABLE IF NOT EXISTS userNotes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    note TEXT
);
