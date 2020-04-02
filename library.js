let myLibrary = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    number_of_pages: 200
  },
  {
    title: "Lord of rings",
    author: "J. R. R. Tolkien",
    number_of_pages: 300
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    number_of_pages: 150
  }
];

function Book(title, author, number_of_pages) {
  this.title = title;
  this.author = author;
  this.number_of_pages = number_of_pages;
}

function addBookToLibrary(title, author, number_of_pages) {
  new_book = new Book(title, author, number_of_pages);
  myLibrary.push(new_book);
  render(myLibrary);
}

function render(myLibrary) {
  var store = document.querySelector("#store");
  myLibrary.forEach(function(element) {
    var item = document.createElement("li");
    item.classList.add("book");
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
      "<br/><button class = 'btn btn-primary remove' data-value= " +
      element +
      ">Remove</button>" +
      "<input type='checkbox' value =" +
      +"name='read'> <label for='read'>Read</label>";
    store.appendChild(item);
  });
}

render(myLibrary);

document.querySelectorAll(".book").forEach(function(element) {
  element.querySelector(".remove").addEventListener("click", function() {
    store.removeChild(element);
  });
});

document.querySelector(".new").addEventListener("click", function() {
  document.querySelector("#new").innerHTML =
    "<h1>New Book</h1>" +
    "<div class='container'>" +
    "<div class='row form'>" +
    "<div class='col-md-6'>" +
    "<form onsubmit='addBookToLibrary()'>" +
    "<label for='author'>Author:</label><br />" +
    "<input type='text' id='author' class='form-control' /><br />" +
    "<label for='title'>Title:</label><br />" +
    "<input type='text' id='title' class='form-control' /><br />" +
    "<label for='number_pages'>Number of pages:</label><br />" +
    "<input type='text' id='number_pages' class='form-control'/><br /><br />" +
    "<center>" +
    "<input type='submit' value='Add Book' class='btn btn-primary' />" +
    "</center>" +
    "</form></div><div class='col-md-6'><img src='images/book.png' alt='Book image' class='img-fluid' />" +
    "</div></div></div>";
});
