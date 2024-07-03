CREATE TABLE bible (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER NOT NULL,
    text TEXT NOT NULL
);