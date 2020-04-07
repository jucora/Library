var store = document.querySelector("#store");

function getLocalstorage() {
  let currentLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  return currentLibrary;
}

let myLibrary = getLocalstorage();
//FUNCTIONS

function drawBook(item, element) {
  let bookRecord;
  let boxRecord;
  if (element.read === true) {
    bookRecord = "Read";
    boxRecord = "checked = 'checked'";
  } else {
    bookRecord = "Not Read";
    boxRecord = "";
  }
  item.innerHTML =
    "<center><h2>" +
    element.title +
    "</h2></center>" +
    "<center><img src= 'images/book_store.png' width='200px' class='book-cover'>" +
    "<p>Author: " +
    element.author +
    "</p>" +
    "<p>Pages: " +
    element.number_of_pages +
    "</p>" +
    "<input type='checkbox' id = 'read-box' data-value='" +
    element.title +
    "'" +
    boxRecord +
    ">" +
    "<label for='read' id = 'read-label' data-value='" +
    element.title +
    "'>" +
    bookRecord +
    "</label>\n" +
    "<br/></br><button class = 'btn btn-primary remove' data-value='" +
    element.title +
    "'>Remove</button>";
  store.appendChild(item);
}

function render(myLibrary) {
  myLibrary.forEach(function (element) {
    var item = document.createElement("li");
    item.classList.add("book");
    drawBook(item, element);
  });
}

function ready() {
  if (myLibrary == null) {
    myLibrary = [
      {
        title: "Harry Potter",
        author: "J. K. Rowling",
        number_of_pages: 200,
      },
      {
        title: "Lord of rings",
        author: "J. R. R. Tolkien",
        number_of_pages: 300,
      },
      {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        number_of_pages: 150,
      },
      {
        title: "Bible",
        author: "No author",
        number_of_pages: 500,
      },
    ];
    myLibrary.forEach(function (book) {
      book.read = false;
    });
  }
  render(myLibrary);
}

document.addEventListener("DOMContentLoaded", ready);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.number_of_pages = pages;
}

Book.prototype.read = false;

function saveLocalstorage(myLibrary) {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  getLocalstorage();
}

function checkMessage() {
  let message = document.getElementById("submit-message");
  if (document.contains(message)) {
    message.remove();
  }
}

//EVENT LISTENERS

document.querySelector(".new").addEventListener("click", function () {
  document.querySelector("#add-new-book").innerHTML =
    "<h1>New Book</h1>" +
    "<div class='container'>" +
    "<div class='row form'>" +
    "<div class='col-md-6'>" +
    "<form name = 'newform'>" +
    "<label for='author'>Author:</label><br />" +
    "<input type='text' id='author' class='form-control' /><br />" +
    "<label for='title'>Title:</label><br />" +
    "<input type='text' id='title' class='form-control' /><br />" +
    "<label for='number_pages'>Number of pages:</label><br />" +
    "<input type='text' id='number_pages' class='form-control'/><br /><br />" +
    "<center>" +
    "<a id = 'new-book' class='btn btn-primary'>Add Book</a>" +
    "</center>" +
    "</form></div><div class='col-md-6'><img src='images/book.png' alt='Book image' class='img-fluid' />" +
    "</div></div></div>";

  document.querySelector("#new-book").addEventListener("click", function () {
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#number_pages").value;

    let message = document.createElement("p");
    message.setAttribute("id", "submit-message");
    checkMessage();
    if (author === "" || title === "" || pages === "") {
      document.getElementById("new-book").removeAttribute("href");
      message.textContent = "All fields are required!";
    } else {
      document.getElementById("new-book").setAttribute("href", "#banner");
      let book = new Book(title, author, pages);
      book.read = false;
      myLibrary.push(book);
      saveLocalstorage(myLibrary);
      message.textContent = "Added!";
      document.querySelector("#author").value = "";
      document.querySelector("#title").value = "";
      document.querySelector("#number_pages").value = "";
      var item = document.createElement("li");
      item.classList.add("book");
      drawBook(item, book);
      document.getElementById("add-new-book").innerHTML = "";
    }
    document.forms.newform.appendChild(message);
  });
});

store.addEventListener("click", function (e) {
  if (e.target && e.target.matches("input")) {
    let index = myLibrary
      .map((book) => book.title)
      .indexOf(e.target.dataset.value);
    if (myLibrary[index].read === false) {
      myLibrary[index].read = true;
      e.target.nextSibling.innerHTML = "Read";
    } else {
      myLibrary[index].read = false;
      e.target.nextSibling.innerHTML = "Not Read";
    }
    saveLocalstorage(myLibrary);
  }
});

store.addEventListener("click", function (e) {
  if (e.target && e.target.matches("button")) {
    let index = myLibrary
      .map((book) => book.title)
      .indexOf(e.target.dataset.value);

    myLibrary.splice(index, 1);

    e.target.parentNode.parentNode.remove(e.target);
    saveLocalstorage(myLibrary);
  }
});
