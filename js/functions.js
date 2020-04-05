function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.number_of_pages = pages;
}

function render(myLibrary) {
  store.innerHTML = "";
  console.log(store);
  myLibrary.forEach(function (element, index) {
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

  boxes.forEach(function (box, index) {
    box.addEventListener("change", function () {
      if (labels[index].textContent === "Read") {
        console.log(labels[index]);
        labels[index].textContent = "Not Read";
      } else if (labels[index].textContent === "Not Read") {
        console.log(labels[index]);
        labels[index].textContent = "Read";
      }
    });
  });
  remove_buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      books[index].remove();
      myLibrary.splice(index, 1);
      render(myLibrary);
    });
  });
}

function check_message() {
  let message = document.getElementById("submit-message");
  if (document.contains(message)) {
    message.remove();
  }
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
