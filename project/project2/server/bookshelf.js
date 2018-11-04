let Bookshelf = require("./starterBookshelf");

let error = "";

const getBookshelfError = () => {
  return error;
};

const getBookshelf = () => {
  return { ...Bookshelf };
};

const getVolumeInfo = bookId => {
  error = "";
  const volumeInfo = Object.values(Bookshelf)
    .reduce((acc, shelf) => {
      return acc.concat(shelf);
    }, [])
    .find(book => book.id === bookId);
  if (!volumeInfo) error = `Book with ${bookId} is not on the bookshelf`;
  return volumeInfo;
};

const getBookIds = () => {
  return Object.values(Bookshelf).reduce((acc, books) => {
    const bookIds = books.map(book => book.id);
    return acc.concat(bookIds);
  }, []);
};

const hasBook = bookId => {
  return getBookIds().indexOf(bookId) > -1;
};

const findShelfForBook = (bookId, shelfIndex = 0) => {
  error = "";
  if (!hasBook(bookId)) {
    error = `Book with ID ${bookId} is not in the book shelf`;
    return "none";
  }

  const shelf = Object.keys(Bookshelf)[shelfIndex];
  const shelfBookIds = Bookshelf[shelf].map(book => bookId);
  if (shelfBookIds.indexOf(bookId) < 0)
    return findShelfForBook(bookId, shelfIndex + 1);
  else return shelf;
};

const addToBookshelf = (volumeInfo, shelf) => {
  Bookshelf[shelf] = [...Bookshelf[shelf], { ...volumeInfo, shelf }];
};

const deleteFromBookshelf = bookId => {
  Bookshelf = Object.entries({ ...Bookshelf }).reduce((acc, [shelf, books]) => {
    acc[shelf] = books.filter(book => book.id !== bookId);
    return acc;
  }, {});
};

const updateBookshelf = (volumeInfo, shelf) => {
  error = "";

  if (!Bookshelf[shelf] && shelf !== "none") {
    error = `Shelf ${shelf} does not exist`;
    return undefined;
  }

  if (!volumeInfo.hasOwnProperty("id")) {
    error = "Invalid volumeInfo";
    return undefined;
  }

  deleteFromBookshelf(volumeInfo.id);
  if (shelf !== "none") addToBookshelf(volumeInfo, shelf);
  return getBookshelf();
};

module.exports = {
  getBookshelfError,
  getBookshelf,
  getVolumeInfo,
  findShelfForBook,
  updateBookshelf
};

// Testing
/*
Bookshelf = {
  wantToRead: [{ title: "1", id: "1" }, { title: "2", id: "2" }],
  currentlyReading: [{ title: "3", id: "3" }, { title: "5", id: "5" }],
  read: [{ title: "4", id: "4" }]
};

console.log(getBookIds());
console.log(hasBook("4"));
console.log(getVolumeInfo("4"));
console.log(updateBookshelf({ title: "7", id: "7" }, "read"));
console.log(updateBookshelf({ title: "5", id: "5" }, "read"));
console.log(updateBookshelf({ title: "1", id: "1" }, "none"));
console.log(findShelfForBook("7"));
console.log(findShelfForBook("10"));
*/
