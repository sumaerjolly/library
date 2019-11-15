// var tableRow = document.querySelectorAll("tr");
// var tableData = document.querySelectorAll("td");
// var addButton = document.querySelector(".add");


const myLibrary = [];

function Book(title,author,pages,status = "unread") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let newBook = new Book("Test Book","Othmane","100");
let secondBook = new Book("Second Book","Sumaer","100");

function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookToLibrary(newBook);
addBookToLibrary(secondBook);

function render(table, library) {
    for (let book of library) {
      let row = table.insertRow();
      for (let key in book) {
        let cell = row.insertCell();
        if(key === "status"){
            let button = document.createElement("BUTTON");
            button.innerHTML = book[key];
            button.classList.add("statusButton")
            cell.appendChild(button);
            let deleteCell = document.createElement("BUTTON");
            deleteCell.innerHTML = "Delete";
            deleteCell.classList.add("delete");
            cell.appendChild(deleteCell);
            
        }else{
            let text = document.createTextNode(book[key]);
            cell.appendChild(text);
        }
        
        
      }
    }
}
  let table = document.querySelector("table");
  render(table, myLibrary);

  function addToTable(table,book){
    let row = table.insertRow();
    for (let key in book) {
        let cell = row.insertCell();
        if(key === "status"){
            let button = document.createElement("BUTTON");
            button.innerHTML = book[key];
            button.classList.add("statusButton")
            cell.appendChild(button);
            let deleteCell = document.createElement("BUTTON");
            deleteCell.innerHTML = "Delete";
            deleteCell.classList.add("delete");
            cell.appendChild(deleteCell);
            
        }else{
            let text = document.createTextNode(book[key]);
            cell.appendChild(text);
        }
  }

  }
  let statusButton = document.querySelectorAll(".statusButton")
  
//   for(let i = 0; i < selectedButton.length; i++){
//     selectedButton[i].addEventListener("click",function(){
//         if(this.textContent === "read"){
//             this.classList.remove("selected");
//             this.textContent = "unread";
//         }
//         else{
//             this.classList.add("selected");
//             this.textContent = "read";
//         }
       
//     })
// }  

//read unread fucntionality 

  statusButton.forEach(btn => btn.addEventListener("click", function(){
    if(this.textContent == "read"){
        this.classList.remove("selected");
        this.textContent = "unread";
        
    }
    else{
        this.classList.add("selected");
        this.textContent = "read";
    }
   
}));

//delete book functionality 

let deleteItems = document.querySelectorAll(".delete");

deleteItems.forEach(function(item){
    item.addEventListener('click',function(e) {
        const td = e.target.parentElement;
        const tr = td.parentElement;
        tr.parentNode.removeChild(tr);
    })
})

// display a form

//function addForm() {
//   const bookForm = document.createElement("FORM");
//   bookForm.setAttribute("id", "myForm");
//   document.body.appendChild(bookForm);

//   const titleLabel = document.createElement("label");
//   titleLabel.textContent = "Book title:"
//   titleLabel.addClassName("label");
//   //title.setAttribute("for", "bookTitle");
//   document.getElementById("myForm").appendChild(titleLabel);

//   const title = document.createElement("INPUT");
//   //title.setAttribute("id", "bookTitle");
//   title.setAttribute("type", "text");
//   title.setAttribute("placeholder","Add book title");
//   document.getElementById("myForm").appendChild(title);

//   const author = document.createElement("INPUT");
//   author.setAttribute("type", "text");
//   author.setAttribute("placeholder","Add author name");
//   document.getElementById("myForm").appendChild(author);
// }

//addForm();

//Show the book form
let hiddenForm = document.querySelector(".hiddenForm")
let addButton = document.querySelector(".add");
let showForm = function(){
  hiddenForm.style.display = "block";
}
addButton.addEventListener("click", showForm)

//Hide the form data

let cancelButton = document.querySelector(".cancel");
let hideForm = function(){
  hiddenForm.style.display = "none";
}
cancelButton.addEventListener("click", hideForm)


// addButton.addEventListener("click",function(){
    
// })

// for(var i = 0; i < myLibrary.length; i++){
//     tableData.textContent = (myLibrary[i].title);
// }


//submitting functionality 
function submittedBook(){
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let submittedBook = new Book(title,author,pages);
    return submittedBook
}
function submit(){
    addBookToLibrary(submittedBook());
    addToTable(table, submittedBook())
    
}

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
    submit();
    hideForm();
})


