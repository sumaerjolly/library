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
// delete book functionality 

let thead = document.querySelector("thead");
thead.addEventListener("click", function(e){
    if(e.target.className == "delete"){
        const td = e.target.parentElement;
        const tr = td.parentElement;
        tr.parentNode.removeChild(tr);
    }   
})


// changing status from read to unread 

thead.addEventListener("click",function(e){
    if(e.target.textContent == "unread"){
       e.target.textContent = "read";
       e.target.classList.add("selected");
    }
    else{
        e.target.textContent = "unread";
        e.target.classList.remove("selected");
    }
})



//Show the book form
let hiddenForm = document.querySelector(".hiddenForm")
let addButton = document.querySelector(".add");
let showForm = function(){
  hiddenForm.style.display = "block";
}
addButton.addEventListener("click", showForm)

//Hide the form 

let cancelButton = document.querySelector(".cancel");
let hideForm = function(){
  hiddenForm.style.display = "none";
}
cancelButton.addEventListener("click", hideForm)



//submitting functionality 
const getRadioValue = function(){
    const statusNode = document.querySelectorAll('.form-check-input');
    for (let i = 0; i <statusNode.length; i+=1){
        if(statusNode[i].checked){
            return statusNode[i].value
        }
    }
}
//console.log(getRadioValue())
function submittedBook(){
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const radioValue = getRadioValue();
    
    // var status_value;
    // if(status == "read"){
    //     status_value = document.getElementById('status1').value;
    // }
    // else{
    //     status_value = document.getElementById('status2').value;
    // }
    
    let submittedBook = new Book(title,author,pages,radioValue);
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


