function bookInfo(item, element, boxRecord, bookRecord) {
  item.innerHTML =
    `<center><h2>${element.title}</h2></center>` +
    "<center><img src= 'images/book_store.png' width='200px' class='book-cover'>" +
    `<p>Author: ${element.author}</p>` +
    `<p>Pages: ${element.number_of_pages}</p>` +
    `<input type='checkbox' id = 'read-box' data-value='${element.title}'${boxRecord}>` +
    `<label for='read' id = 'read-label' data-value='${element.title}'>${bookRecord}</label>\n` +
    `<br/></br><button class = 'btn btn-primary remove' data-value='${element.title}'>Remove</button>`;
}

function newBookInfo() {
  document.querySelector("#add-new-book").innerHTML =
    "<h1>New Book</h1>" +
    "<div class='container'>" +
    "<div class='row form'>" +
    "<div class='col-md-6'>" +
    "<form name = 'newform' >" +
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
}
