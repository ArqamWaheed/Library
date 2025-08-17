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


container.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        let card = e.target.closest('.card');
        container.removeChild(card);
    }
});

const $titleField = document.querySelector("#title");
const $authorField = document.querySelector("#author");
const $pagesField = document.querySelector("#pages");
const $errorMessage = document.querySelector(".errorMsg");

submit.addEventListener("submit", function(event) {
    event.preventDefault();
    if ($titleField.checkValidity() && $authorField.checkValidity() && $pagesField.checkValidity()) {
        cardCreate(title.value, author.value, pages.value, readstatus.checked);
        addBookToLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
        readstatus.checked = false;
        if ($errorMessage.style.display !== "none") $errorMessage.style.display = "none"; 
    } else if ($titleField.checkValidity() === false) {
        showErrorTitle();
    } else if ($authorField.checkValidity() === false) {
        showErrorAuthor();
    } else if ($pagesField.checkValidity() === false) {
        showErrorPages();
    }
})

$titleField.addEventListener("input", function(event) {
    if (!$titleField.validity.valid){
        showErrorTitle();
    } else $errorMessage.style.display = "none";
})
$authorField.addEventListener("input", function(event) {
    if (!$authorField.validity.valid){
        showErrorAuthor();
    } else $errorMessage.style.display = "none";})
$pagesField.addEventListener("input", function(event) {
    if (!$pagesField.validity.valid){
        showErrorPages();
    } else $errorMessage.style.display = "none";})
function showErrorTitle() {
    if ($titleField.validity.valueMissing) {
        $errorMessage.style.display = "block";
        $errorMessage.textContent = "Enter a title!";
    } else if ($titleField.validity.tooShort) {
        $errorMessage.style.display = "block";
        $errorMessage.textContent = `The title is under ${$titleField.getAttribute("minlength")} characters!`
    } 
}

function showErrorAuthor() {
    if ($authorField.validity.valueMissing) {
        $errorMessage.style.display = "block";
        $errorMessage.textContent = "Enter an author name!";
    } else if ($authorField.validity.tooShort) {
        $errorMessage.style.display = "block";
        $errorMessage.textContent = `The author name is under ${$authorField.getAttribute("minlength")} characters!`;
    }
}


function showErrorPages() {
    if ($pagesField.validity.valueMissing) {
        $errorMessage.style.display = "block";
        $errorMessage.textContent = "Enter a the number of pages read";
    } else if ($pagesField.validity.rangeOverflow || $pagesField.validity.rangeUnderflow) {
        $errorMessage.style.display = "block";
        $errorMessage.textContent = `The number of pages are out of the set boundaries`
    }
}