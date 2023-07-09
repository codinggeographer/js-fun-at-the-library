function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
};

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};

function checkoutBook(library, bookTitle, genre) {
  var shelf = library.shelves[genre];
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}.`
    }
  }

      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
};

function takeStock(library, genre) {
  var shelf = library.shelves[genre];
  if (genre) {
    return `There are a total of ${shelf.length} ${genre} books at the ${library.name}.`;
  } else {
    var totalBooks = 0;
    for (var key in library.shelves) {
      totalBooks += library.shelves[key].length;
    }

    return `There are a total of ${totalBooks} books at the ${library.name}.`;
  }
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};
