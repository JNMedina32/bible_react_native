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
    user_id INTEGER,
    bible_version TEXT DEFAULT 'ASV',
    font_size INTEGER DEFAULT 16,
    notifications BOOLEAN DEFAULT 0,
    notification_time TEXT DEFAULT '08:00',
    notification_days TEXT DEFAULT '1,2,3,4,5,6,7',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS userNotes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title
    note TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
