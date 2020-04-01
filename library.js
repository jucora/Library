let myLibrary = ["Bible", "HarryPotter", "cars"];

function Book() {
  this.name = name;
  this.description = description;
  this.number_of_pages = number_of_pages;
}

function addBookToLibrary() {
  let book = document.querySelector("#title").value;
  myLibrary.push(book);
  console.log(myLibrary);
  render();
}

function render() {
  var store = document.querySelector("#store");
  myLibrary.forEach(function(element) {
    var item = document.createElement("li");
    item.classList.add("book");
    item.innerHTML =
      "<center><h2>" +
      element +
      "</h2></center>" +
      "<img src= 'images/book_store.png' width='200px'>" +
      "<br/><center><button class = 'btn btn-primary remove' data-value= " +
      element +
      ">Remove</button></center>";
    store.appendChild(item);
  });
}

render();

document.querySelectorAll(".book").forEach(function(element) {
  element.querySelector(".remove").addEventListener("click", function() {
    store.removeChild(element);
  });
});

document.querySelector(".new").addEventListener("click", function() {
  document.querySelector("#new").innerHTML =
    "<h1>New Book</h1><div class='container'><div class='row form'><div class='col-md-6'>" +
    "<form onsubmit='addBookToLibrary()'><label for='author'>Author:</label><br />" +
    "<input type='text' id='author' class='form-control' /><br /><label for='title'>Title:</label><br />" +
    "<input type='text' id='title' class='form-control' /><br />" +
    "<label for='number_pages'>Number of pages:</label><br />" +
    "<input type='text' id='number_pages' class='form-control'/><br /><br />" +
    "<center><input type='submit' value='Add Book' class='btn btn-primary' /></center>" +
    "</form></div><div class='col-md-6'><img src='images/book.png' alt='Book image' class='img-fluid' />" +
    "</div></div></div>";
});
