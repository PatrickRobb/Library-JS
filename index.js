const content = document.querySelector('.body-container');

let myLibrary = [];

addBookToLibrary(new Book("Brave New World", "Aldous Huxley", 311));

displayBooks();

function displayBooks() {
  myLibrary.forEach(book => {
    const nextBook = document.createElement('div');
    nextBook.classList.add('card');

    const nextBookTitle = document.createElement('p');
    nextBookTitle.textContent = "Title: " + book.title;
    nextBookTitle.classList.add('bookTitle');

    const nextBookAuthor = document.createElement('p');
    nextBookAuthor.textContent = "Author: " + book.author;
    nextBookAuthor.classList.add('bookAuthor');

    const nextBookPages = document.createElement('p');
    nextBookPages.textContent = "Page Count: " + book.pages;
    nextBookPages.classList.add('bookPages');

    nextBook.appendChild(nextBookTitle);
    nextBook.appendChild(nextBookAuthor);
    nextBook.appendChild(nextBookPages);

    content.appendChild(nextBook);
  })
}

const addButton = document.querySelector('.add');
const addBookForm = document.querySelector('.add-book');
const popup = document.querySelector('.popup');

addButton.addEventListener("click", () => {
  const popup = document.querySelector('.popup');
  popup.classList.remove('hidden');
})

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(getFormBook());
  displayBooks();
  console.log(myLibrary);
})

const getFormBook = () => {
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  const pages = document.querySelector('.pages-input').value;
  content.innerHTML = '';
  popup.classList.add('hidden');
  return (new Book(title, author, pages));
}



function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return (title + " by " + author + ", " + pages);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}