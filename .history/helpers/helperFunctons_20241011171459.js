function parseSearchInput(input) {
  const bibleReferenceRegex = /(\d?\s?[a-zA-Z]+\s?\d*:\d+)/;
  const match = input.match(bibleReferenceRegex);

  if (match) {
    // User is searching for a book/chapter/verse, like "John 3:16" or "1 John 2:3"
    const parts = match[0].split(/[\s:]/);
    const bookName = parts
      .slice(0, parts.length - 2)
      .join(" ")
      .trim();
    const chapter = parseInt(parts[parts.length - 2]);
    const verse = parseInt(parts[parts.length - 1]);
    return { type: "reference", bookName, chapter, verse };
  } else {
    // User is doing a text search, like "Jesus wept" or "Jesus turns water into wine"
    return { type: "text", query: input.trim() };
  }
}

export { parseSearchInput };