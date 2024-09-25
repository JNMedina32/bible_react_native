-- ANY CHANGES TO THE DATABASE VIA SQLITE3 TERIMINAL REQUIRES AN  UNINSTALL OF EXPO USING: 
-- adb uninstall host.exp.exponent 
-- AND A REINSTALL OF THE APP
-- SEE https://github.com/expo/expo/issues/28176#issuecomment-2105660636 FOR MORE INFO

--1. create DB
sqlite3 assets/bible.db

--2. create tables

------------------AMERICAN STANDARD VERSION------------------
CREATE TABLE IF NOT EXISTS asvBible (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    text TEXT
);

------------------AUTHORIZED KING JAMES VERSION------------------
CREATE TABLE IF NOT EXISTS akjvBible (
    id INTEGER PRIMARY KEY,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    text TEXT
);

------------------BIBLE VERSIONS------------------
CREATE TABLE IF NOT EXISTS bibleTranslations(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    version_name TEXT,
    version_code TEXT
);

------------------USERS------------------
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT UNIQUE
);

------------------USER SETTINGS------------------
CREATE TABLE IF NOT EXISTS userSettings(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    bible_translation TEXT DEFAULT 'American Standard Version',
    font_size INTEGER DEFAULT 16,
    notifications BOOLEAN DEFAULT 0,
    notification_time TEXT DEFAULT '08:00',
    notification_days TEXT DEFAULT '1,2,3,4,5,6,7',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO userSettings (user_id) VALUES (1);

------------------USER NOTES------------------
CREATE TABLE IF NOT EXISTS userNotes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    note TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
