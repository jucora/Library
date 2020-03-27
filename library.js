let myLibrary = ["Bible", "Harry Potter"];

function Book() {}

function addBookToLibrary() {}

function render() {
  let listItems = myLibrary.reduce((result, item) => {
    result += `<li>${item}</li>`;
    return result;
  }, "");
  let store = document.querySelector("#store");
  store.innerHTML = listItems;
}

render();
