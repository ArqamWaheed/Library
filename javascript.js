const myLibrary = [];
const container = document.querySelector(".main");
const submit = document.querySelector(".form");
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readstatus = document.querySelector('#readstatus');


function Book(name, author, pages, readstatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readstatus = readstatus;
}

function addBookToLibrary() {
    let book = new Book(title.value, author.value, pages.value, readstatus.checked);
    myLibrary.push(book);
}


for (book of myLibrary) {
    cardCreate(book.name, book.author, book.pages, book.readstatus);
}

function cardCreate(bookName, authorName, numPages, boolRead) {
    let card = document.createElement("div");
    let titleContent = document.createElement("h1");
    let authorContent  = document.createElement("p");
    let pagesContent  = document.createElement("p");
    let readstatusContent = document.createElement("p");
    let deletebutton = document.createElement("button");
    card.classList.toggle("card");
    titleContent.textContent = bookName;
    authorContent.textContent = `Written by ${authorName}`;
    pagesContent.textContent = `${numPages} pages in the book`;
    readstatusContent.textContent = (boolRead === true) ? "Yes have read the book!" : "No have not read the book!";
    container.appendChild(card);
    card.appendChild(titleContent);
    card.appendChild(authorContent);
    card.appendChild(pagesContent);
    card.appendChild(readstatusContent);
    deletebutton.textContent = "❌";
    card.appendChild(deletebutton);
}

submit.addEventListener("submit", function(event) {
    event.preventDefault();
    cardCreate(title.value, author.value, pages.value, readstatus.checked);
    addBookToLibrary();
    title.value = "";
    author.value = "";
    pages.value = "";
    readstatus.checked = false;
})



