// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]),
// 2. Add ids, titles and authors for your two favourite books.
// 3. Use the prototype keyword to add a theme property to the  books.
// 4. Add at least one theme to each of your books.

function Book(id, title, author, themes = []) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.themes = themes;
}

Book.prototype.addTheme = function (theme) {
  return (this.themes = [...this.themes, theme]);
};

const favoriteBook = new Book(1, "Song of ice and fire", "RR Martin");
const favoriteBook2 = new Book(2, "Inner engineering", "Sadghuru");

favoriteBook.addTheme("World Building");
favoriteBook2.addTheme("Self Help");

console.log(favoriteBook);
console.log(favoriteBook2);
