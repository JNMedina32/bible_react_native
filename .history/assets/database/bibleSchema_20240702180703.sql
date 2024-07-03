CREATE TABLE bible (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_name TEXT,
    book_number INTEGER,
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    text TEXT NOT NULL
);