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
  },
  {
    title: "Bible",
    author: "No author",
    number_of_pages: 500
  },
  {
    title: "Music",
    author: "Palisca",
    number_of_pages: 150
  }
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.number_of_pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  let new_item = document.createElement("li");
  new_item.classList.add("book");
  draw_book(new_item, book);
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
    "<input type='checkbox' id = 'read-box'> " +
    "<label for='read' id = 'read-label'>Not Read</label>\n" +
    "<br/></br><button class = 'btn btn-primary remove' data-value= " +
    element +
    ">Remove</button>";
  store.appendChild(item);
}

function render(myLibrary) {
  store.innerHTML = "";
  console.log(store);
  myLibrary.forEach(function(element, index) {
    if (!store.contains(store.children[index])) {
      var item = document.createElement("li");
      item.classList.add("book");
      draw_book(item, element);
    }
  });
  var boxes = document.querySelectorAll("#read-box");
  var labels = document.querySelectorAll("#read-label");
  var remove_buttons = document.querySelectorAll(".remove");
  var books = document.querySelectorAll(".book");

  boxes.forEach(function(box, index) {
    box.addEventListener("change", function() {
      if (labels[index].textContent === "Read") {
        console.log(labels[index]);
        labels[index].textContent = "Not Read";
      } else if (labels[index].textContent === "Not Read") {
        console.log(labels[index]);
        labels[index].textContent = "Read";
      }
    });
  });
  remove_buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      books[index].remove();
      myLibrary.splice(index, 1);
      render(myLibrary);
    });
  });
}

render(myLibrary);

document.querySelector(".new").addEventListener("click", function() {
  document.querySelector("#new").innerHTML =
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
    "<input type='submit' value='Add Book' class='btn btn-primary' id = 'new-book'/>" +
    "</center>" +
    "</form></div><div class='col-md-6'><img src='images/book.png' alt='Book image' class='img-fluid' />" +
    "</div></div></div>";

  function check_message() {
    let message = document.getElementById("submit-message");
    if (document.contains(message)) {
      message.remove();
    }
  }
  document.querySelector("#new-book").addEventListener("click", function() {
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#number_pages").value;

    let message = document.createElement("p");
    message.setAttribute("id", "submit-message");
    check_message();
    if (author == "" || title == "" || pages == "") {
      message.textContent = "All fields are required!";
    } else {
      let book = new Book(title, author, pages);
      //addBookToLibrary(book);
      myLibrary.push(book);
      render(myLibrary);
      message.textContent = "Added!";
      document.querySelector("#author").value = "";
      document.querySelector("#title").value = "";
      document.querySelector("#number_pages").value = "";
    }
    document.forms.newform.appendChild(message);
  });
});
