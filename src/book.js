function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns){
  return character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviewsArray) {
  if (!reviewsArray.includes(review)) {
    reviewsArray.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
};

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
