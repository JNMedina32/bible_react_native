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

CREATE TABLE IF NOT EXISTS akjVbible (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    text TEXT
);