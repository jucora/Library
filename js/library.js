/* global bookInfo, bookInfo, newBookInfo */

const store = document.querySelector('#store');

function getLocalstorage() {
  const currentLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  return currentLibrary;
}

let myLibrary = getLocalstorage();
// FUNCTIONS

function drawBook(item, element) {
  let bookRecord;
  let boxRecord;
  if (element.read === true) {
    bookRecord = 'Read';
    boxRecord = "checked = 'checked'";
  } else {
    bookRecord = 'Not Read';
    boxRecord = '';
  }
  bookInfo(item, element, boxRecord, bookRecord);

  store.appendChild(item);
}

function render(myLibrary) {
  myLibrary.forEach((element) => {
    const item = document.createElement('li');
    item.classList.add('book');
    drawBook(item, element);
  });
}

function ready() {
  if (myLibrary == null) {
    myLibrary = [
      {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        number_of_pages: 200,
      },
      {
        title: 'Lord of rings',
        author: 'J. R. R. Tolkien',
        number_of_pages: 300,
      },
      {
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
        number_of_pages: 150,
      },
      {
        title: 'Bible',
        author: 'No author',
        number_of_pages: 500,
      },
    ];
    myLibrary.forEach((book) => {
      book.read = false;
    });
  }
  render(myLibrary);
}

document.addEventListener('DOMContentLoaded', ready);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.number_of_pages = pages;
}

Book.prototype.read = false;

function saveLocalstorage(myLibrary) {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  getLocalstorage();
}

function checkMessage() {
  const message = document.getElementById('submit-message');
  if (document.body.contains(message)) {
    message.remove();
  }
}

// EVENT LISTENERS

document.querySelector('.new').addEventListener('click', () => {
  newBookInfo();

  document.querySelector('#new-book').addEventListener('click', () => {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#number_pages').value;

    const message = document.createElement('p');
    message.setAttribute('id', 'submit-message');
    checkMessage();
    if (author === '' || title === '' || pages === '') {
      document.getElementById('new-book').removeAttribute('href');
      message.textContent = 'All fields are required!';
      document.forms.newform.appendChild(message);
    } else {
      document.getElementById('new-book').setAttribute('href', '#banner');
      const book = new Book(title, author, pages);
      book.read = false;
      myLibrary.push(book);
      saveLocalstorage(myLibrary);
      message.textContent = 'Added!';
      document.querySelector('#author').value = '';
      document.querySelector('#title').value = '';
      document.querySelector('#number_pages').value = '';
      const item = document.createElement('li');
      item.classList.add('book');
      drawBook(item, book);
      document.getElementById('add-new-book').innerHTML = '';
    }
  });
});

store.addEventListener('click', (e) => {
  if (e.target && e.target.matches('input')) {
    const index = myLibrary
      .map((book) => book.title)
      .indexOf(e.target.dataset.value);
    if (myLibrary[index].read === false) {
      myLibrary[index].read = true;
      e.target.nextSibling.innerHTML = 'Read';
    } else {
      myLibrary[index].read = false;
      e.target.nextSibling.innerHTML = 'Not Read';
    }
    saveLocalstorage(myLibrary);
  }
});

store.addEventListener('click', (e) => {
  if (e.target && e.target.matches('button')) {
    const index = myLibrary
      .map((book) => book.title)
      .indexOf(e.target.dataset.value);

    myLibrary.splice(index, 1);

    e.target.parentNode.parentNode.remove(e.target);
    saveLocalstorage(myLibrary);
  }
});
