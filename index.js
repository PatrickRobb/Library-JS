class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return (title + " by " + author + ", " + pages);
  }
}

const content = document.querySelector('.body-container');

let myLibrary = [];

addBookToLibrary(new Book("Brave New World", "Aldous Huxley", 311, true));

displayBooks();

function displayBooks() {
  myLibrary.forEach(book => {
    const nextBook = document.createElement('div');
    nextBook.classList.add('card');

    const nextBookTitle = document.createElement('p');
    nextBookTitle.textContent = "Title: " + book.title;

    const nextBookAuthor = document.createElement('p');
    nextBookAuthor.textContent = "Author: " + book.author;

    const nextBookPages = document.createElement('p');
    nextBookPages.textContent = "Page Count: " + book.pages;

    if(nextBook.read == true){
      nextBook.style.backgroundColor = "green";
    }

    const readButton = document.createElement('button')
    readButton.textContent = "Read?"

    nextBook.appendChild(nextBookTitle);
    nextBook.appendChild(nextBookAuthor);
    nextBook.appendChild(nextBookPages);
    nextBook.appendChild(readButton);

    content.appendChild(nextBook);
  })
}

const addButton = document.querySelector('.add');
const addBookForm = document.querySelector('.add-book');
const popup = document.querySelector('.popup');

addButton.addEventListener("click", () => {
  popup.classList.add('active');
})

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(bookFormResult());
  displayBooks();
  console.log(myLibrary);
})

const bookFormResult = () => {
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  const pages = document.querySelector('.pages-input').value;
  const read = document.querySelector(".read-input").value;
  content.innerHTML = '';
  popup.classList.remove('active');
  return (new Book(title, author, pages, read));
}

// function Book(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.info = function () {
//     return (title + " by " + author + ", " + pages);
//   }
// }

function addBookToLibrary(book) {
  myLibrary.push(book);
}