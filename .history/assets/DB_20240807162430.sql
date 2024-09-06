--1. create DB
sqlite3 bible.db

--2. create table
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

CREATE TABLE IF NOT EXISTS userSettings(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    bible_version TEXT,
    font_size INTEGER,
    
);
