function parseSearchInput(input) {
  const referencePattern =
    /^(?<bookName>[1-3]?\s?\w+)\s(?<chapter>\d+)(:(?<verse>\d+))?$/i;
  const match = input.match(referencePattern);

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
