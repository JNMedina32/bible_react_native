function parseSearchInput(input) {
  const referencePattern =
    /^(?<book_name>[1-3]?\s?\w+)\s(?<chapter>\d+)(:(?<verse_start>\d+)(-(?<verse_end>\d+))?)?$/i;
  const referenceMatch = input.match(referencePattern);

  if (referenceMatch) {
    const { book_name, chapter, verse_start, verse_end } = referenceMatch.groups;
    console.log("referenceMatch: ", referenceMatch.groups);
    return {
      type: "reference",
      book_name,
      chapter: parseInt(chapter),
      verse_start: verse_start ? parseInt(verse_start) : 1,
      verse_end: verse_end ? parseInt(verse_end) : verse_start ? parseInt(verse_start) : 1,
    };
  } else {
    // User is doing a text search, like "Jesus wept" or "Jesus turns water into wine"
    return { type: "text", query: input.trim() };
  }
}

export { parseSearchInput };
