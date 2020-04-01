let myLibrary = ["Bible", "Harry Potter", "cars"];

function Book() {}

function addBookToLibrary() {}

// function render() {
//   let listItems = myLibrary.reduce((result, item) => {
//     result += `<li>${item}</li>`;
//     return result;
//   }, "");
//   let store = document.querySelector("#store");
//   store.innerHTML = listItems;
// }

function render() {
  let store = document.querySelector("#store");
  myLibrary.forEach(function(element) {
    store.innerHTML +=
      element +
      "<br>" +
      "<form action='new.html'> <button>Remove</button></form>";
  });
}

render();
