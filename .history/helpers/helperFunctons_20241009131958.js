const separateUserSearchText = (text, arrOfBooks, func) => {
  text = text.replace(/:/g, " ");
  let searchArr = text.trim().split(" ");
  console.log("searchArr: ", searchArr);
  console.log("arrOfBooks: ", arrOfBooks);

  if (searchArr.length === 1) {
    const isBook = arrOfBooks.some((book) => book.book_name === searchArr[0]);
    console.log("isBook: ", isBook);
    if (isBook) {
      func("ReadingScreen", { book: searchArr[0], chap: 1 });
    } else {
      console.error("Try narrowing your search");
    }
  } else if (searchArr.length === 2) {
    const isBook = arrOfBooks.some((book) => book.book_name === searchArr[0]);
    console.log("isBook: ", isBook);
    console.log("searchArr[1]: ", searchArr[1]);
    if(isBook && !isNaN(searchArr[1])) {
        func("ReadingScreen", { book: searchArr[0], chap: searchArr[1] });
    } else {
        (isBook) ? console.error("Try narrowing your search") : console.error("Book not found");
    }
  } else if (searchArr === 3) {
    const isBook = arrOfBooks.some((book) => book.book_name === searchArr[0]);
    console.log("isBook: ", isBook);
    console.log("searchArr[1]: ", searchArr[1]);
    console.log("searchArr[2]: ", searchArr[2]);
    if(isBook && !isNaN(searchArr[1]) && !isNaN(searchArr[2])) {
        func("ReadingScreen", { book: searchArr[0], chap: searchArr[1], verse: searchArr[2] });
    } else {
        (isBook) ? console.error("Try narrowing your search") : console.error("Book not found");
    }
  }
};

export { separateUserSearchText };
