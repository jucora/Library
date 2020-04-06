function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.number_of_pages = pages;
}

Book.prototype.read = false;

document.addEventListener("DOMContentLoaded", ready);
var myLibrary = get_localstorage();

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

function get_localstorage() {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  return myLibrary;
}

function save_localstorage(myLibrary) {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  get_localstorage();
}

function render(myLibrary) {
  myLibrary.forEach(function (element) {
    var item = document.createElement("li");
    item.classList.add("book");
    draw_book(item, element);
  });
}

function check_message() {
  let message = document.getElementById("submit-message");
  if (document.contains(message)) {
    message.remove();
  }
}

function draw_book(item, element) {
  var store = document.querySelector("#store");

  item.innerHTML =
    "<center><h2>" +
    element.title +
    "</h2></center>" +
    "<center><img src= 'images/book_store.png' width='200px'>" +
    "<p>Author: " +
    element.author +
    "</p>" +
    "<p>Pages: " +
    element.number_of_pages +
    "</p>" +
    "<input type='checkbox' id = 'read-box' data-value='" +
    element.title +
    "'>" +
    "<label for='read' id = 'read-label' data-value='" +
    element.title +
    "'>Not Read</label>\n" +
    "<br/></br><button class = 'btn btn-primary remove' data-value='" +
    element.title +
    "'>Remove</button>";
  store.appendChild(item);
  var boxes = document.querySelectorAll("#read-box"); // checkboxes
  var labels = document.querySelectorAll("#read-label");
}

store.addEventListener("click", function (e) {
  if (e.target && e.target.matches("input")) {
    let index = myLibrary
      .map((book) => book.title)
      .indexOf(e.target.dataset.value);
    if (myLibrary[index].read == false) {
      myLibrary[index].read = true;
      e.target.nextSibling.innerHTML = "Read";
    } else {
      myLibrary[index].read = false;
      e.target.nextSibling.innerHTML = "Not Read";
    }
    save_localstorage(myLibrary);
  }
});

store.addEventListener("click", function (e) {
  if (e.target && e.target.matches("button")) {
    let index = myLibrary
      .map((book) => book.title)
      .indexOf(e.target.dataset.value);

    myLibrary.splice(index, 1);

    e.target.parentNode.parentNode.remove(e.target);
    save_localstorage(myLibrary);
  }
});
