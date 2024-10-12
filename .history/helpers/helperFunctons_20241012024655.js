function parseSearchInput(input) {
  const referencePattern = /^(?<bookName>[1-3]?\s?\w+)\s(?<chapter>\d+)(:(?<verseStart>\d+)(-(?<verseEnd>\d+))?)?$/i;
  const match = input.match(referencePattern);

  if (match) {
    // User is searching for a book/chapter/verse, like "John 3:16" or "1 John 2:3"
    const { book_name, chapter, verse } = match.groups;
    return { type: "reference", book_name, chapter, verse };
  } else {
    // User is doing a text search, like "Jesus wept" or "Jesus turns water into wine"
    return { type: "text", query: input.trim() };
  }
}

export { parseSearchInput };
