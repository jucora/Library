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
    check_message();
    if (author == "" || title == "" || pages == "") {
      document.getElementById("new-book").removeAttribute("href");
      message.textContent = "All fields are required!";
    } else {
      document.getElementById("new-book").setAttribute("href", "#banner");
      let book = new Book(title, author, pages);
      book.read = false;
      myLibrary.push(book);
      console.log(myLibrary);
      save_localstorage(myLibrary);
      message.textContent = "Added!";
      document.querySelector("#author").value = "";
      document.querySelector("#title").value = "";
      document.querySelector("#number_pages").value = "";
      var item = document.createElement("li");
      item.classList.add("book");
      draw_book(item, book);
      document.getElementById("add-new-book").innerHTML = "";
    }
    document.forms.newform.appendChild(message);
  });
});
