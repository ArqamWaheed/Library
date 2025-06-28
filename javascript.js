const myLibrary = [];
const container = document.querySelector(".main");
const submit = document.querySelector(".form");
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readstatus = document.querySelector('#readstatus');
let counter = 0;

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





