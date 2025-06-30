
// function addBookToLibrary() {
//     let book = new Book(title.value, author.value, pages.value, readstatus.checked);
//     myLibrary.push(book);
// }

// const Book = (function() {

// })()



const changeLibrary = (function() {
    _myLibrary = [];

    // Cache dom
    $bookName = document.querySelector("#title");
    $authorName = document.querySelector("#author");
    $pages = document.querySelector("#pages");
    $readStatus = document.querySelector("#readstatus");
    $submitButton = document.querySelector("#submit");
    $cardContainer = document.querySelector(".main");
    $form = document.querySelector(".form");

    // Bind event Listeners
    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        addBook();
    });

    // Define events
    function _render() {
        $card = document.createElement("div");
        $card.classList.toggle("card");
        tempArr = [$bookName.value, $authorName.value, pages.value]; 
        for (let i = 0; i < tempArr.length; i++) {
            $p = document.createElement("p");
            $p.textContent = tempArr[i];
            $card.appendChild($p);
        }
        $cardContainer.appendChild($card);
    }

    function addBook(name, author, pages, readStatus) {
        name = (typeof name === "string") ? name : $bookName.value;
        author = (typeof author === "string") ? author : $authorName.value;
        pages = (typeof pages === "number") ? pages : $pages.value;
        readStatus = (typeof readStatus === "boolean") ? readStatus : $readStatus.value;
        book = new _Book(name, author, pages, readStatus);
        _myLibrary.push(book);
        _render();
    }

    function removeBook() {

    }

    function _Book(name, author, pages, readstatus) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.readstatus = readstatus;
    }

    // Return IIFE 
    return {
        addBook: addBook,
        removeBook: removeBook,
    };
})();




