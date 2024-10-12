function parseSearchInput(input) {
  const referencePattern =
    /^(?<book_name>[1-3]?\s?\w+)\s(?<chapter>\d+)(:(?<verseStart>\d+)(-(?<verseEnd>\d+))?)?$/i;
  const referenceMatch = input.match(referencePattern);

  if (referenceMatch) {
    const { bookName, chapter, verseStart, verseEnd } = referenceMatch.groups;
    return {
      type: "reference",
      bookName,
      chapter: parseInt(chapter),
      verseStart: verseStart ? parseInt(verseStart) : null,
      verseEnd: verseEnd ? parseInt(verseEnd) : null,
    };
  } else {
    // User is doing a text search, like "Jesus wept" or "Jesus turns water into wine"
    return { type: "text", query: input.trim() };
  }
}

export { parseSearchInput };
