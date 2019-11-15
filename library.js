const myLibrary = [];


// Book Class
function Book(title, author, pages, status = 'unread') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const newBook = new Book('Test Book', 'Othmane', '100');
const secondBook = new Book('Second Book', 'Sumaer', '100');

// Add book to library Function
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(newBook);
addBookToLibrary(secondBook);

// Render Table method
function render(table, library) {
  for (const book of library) {
    const row = table.insertRow();
    for (const key in book) {
    // book.forEach(key => {
      const cell = row.insertCell();
      if (key === 'status') {
        const button = document.createElement('BUTTON');
        button.innerHTML = book[key];
        button.classList.add('statusButton');
        cell.appendChild(button);
        const deleteCell = document.createElement('BUTTON');
        deleteCell.innerHTML = 'Delete';
        deleteCell.classList.add('delete');
        cell.appendChild(deleteCell);
      } else {
        const text = document.createTextNode(book[key]);
        cell.appendChild(text);
      }
    }// );
  }
}
const table = document.querySelector('table');
render(table, myLibrary);


// Add a book to the table method
function addToTable(table, book) {
  const row = table.insertRow();
  for (let i = 0; i < Object.keys(book).length; i += 1) {
    const key = Object.keys(book)[i];
    const cell = row.insertCell();
    if (key === 'status') {
      const button = document.createElement('BUTTON');
      button.innerHTML = book[key];
      if (button.innerHTML === 'read') {
        button.classList.add('selected');
      }
      button.classList.add('statusButton');
      cell.appendChild(button);
      const deleteCell = document.createElement('BUTTON');
      deleteCell.innerHTML = 'Delete';
      deleteCell.classList.add('delete');
      cell.appendChild(deleteCell);
    } else {
      const text = document.createTextNode(book[key]);
      cell.appendChild(text);
    }
  }
}
//  delete book functionality
const thead = document.querySelector('thead');
thead.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const td = e.target.parentElement;
    const tr = td.parentElement;
    tr.parentNode.removeChild(tr);
  }
});
// changing status from read to unread
thead.addEventListener('click', (e) => {
  if (e.target.className === 'statusButton') {
    e.target.innerHTML = 'read';
    e.target.classList.add('selected');
  } else if (e.target.innerHTML === 'read') {
    e.target.innerHTML = 'unread';
    e.target.classList.remove('selected');
  }
});
// Show the book form
const hiddenForm = document.querySelector('.hiddenForm');
const addButton = document.querySelector('.add');
const showForm = () => {
  hiddenForm.style.display = 'block';
};
addButton.addEventListener('click', showForm);

// Hide the book form

const cancelButton = document.querySelector('.cancel');
const hideForm = () => {
  hiddenForm.style.display = 'none';
};
cancelButton.addEventListener('click', hideForm);
// submit a new book
function submittedBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('statusValue');
  const selectedStatus = status.options[status.selectedIndex].value;
  const submittedBook = new Book(title, author, pages, selectedStatus);
  return submittedBook;
}
function submit() {
  addBookToLibrary(submittedBook());
  addToTable(table, submittedBook());
}

const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', () => {
  submit();
  hideForm();
});