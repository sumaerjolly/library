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
            cell.appendChild(button);
        }else{
            let text = document.createTextNode(book[key]);
            cell.appendChild(text);
        }
        
      }
    }
  }
  let table = document.querySelector("table");
  render(table, myLibrary);
  let selectedButton = document.querySelectorAll("button")
  
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

  selectedButton.forEach(btn => btn.addEventListener("click", function(){
    if(this.textContent == "read"){
        this.classList.remove("selected");
        this.textContent = "unread";
    }
    else{
        this.classList.add("selected");
        this.textContent = "read";
    }
   
}));
  





// addButton.addEventListener("click",function(){
    
// })

// for(var i = 0; i < myLibrary.length; i++){
//     tableData.textContent = (myLibrary[i].title);
// }



