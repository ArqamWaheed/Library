const changeLibrary = (function() {
    const _myLibrary = [];

    // Cache dom
    const $bookName = document.querySelector("#title");
    const $authorName = document.querySelector("#author");
    const $pages = document.querySelector("#pages");
    const $readStatus = document.querySelector("#readstatus");
    const $cardContainer = document.querySelector(".main");
    const $form = document.querySelector(".form");

    // Bind eventListeners
    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        addBook();
        _clearInputs();
    });

    $cardContainer.addEventListener('click', function(event) {
        if (event.target.tagName == "BUTTON") {
            let id = (event.target.closest("div")).id;
            console.log(id);
            removeBook(id);
        }
    })  

    // Define events

    class _Book {
        constructor(name, author, pages, readstatus) {
            this.name = name,
            this.author = author,
            this.pages = pages,
            this.readstatus = readstatus,
            this.id = crypto.randomUUID()
        }

        readInfo() {
            return this.readstatus ? "Read ✅" : "Read ❌"; 
        }
    }

    function _render() {
        while ($cardContainer.firstChild) { // deleting all elements
            $cardContainer.removeChild($cardContainer.firstChild);
        }

        for (let i = 0; i < _myLibrary.length; i++) { // recreating all elements
            const $card = document.createElement("div");
            $card.classList.toggle("card");
            let tempArr = [_myLibrary[i].name, _myLibrary[i].author, _myLibrary[i].pages, _myLibrary[i].readInfo()]; 
            for (let j = 0; j < tempArr.length; j++) {
                let $p = document.createElement("p");
                $p.textContent = tempArr[j];
                $card.appendChild($p);
            }
            const $cardButton = document.createElement("button");
            $cardButton.textContent = "❌";
            $card.appendChild($cardButton);
            $card.id = _myLibrary[i].id;
            tempArr = null;
            $cardContainer.appendChild($card);
        }
    }

    function _clearInputs() {
        $bookName.value = "";
        $authorName.value = "";
        $pages.value = "";
        $readStatus.checked = false;
    }

    function addBook(name, author, pages, readStatus) {
        name = (typeof name === "string") ? name : $bookName.value;
        author = (typeof author === "string") ? author : $authorName.value;
        pages = (typeof pages === "number") ? pages : parseInt($pages.value, 10);
        readStatus = (typeof readStatus === "boolean") ? readStatus : $readStatus.checked;
        let book = new _Book(name, author, pages, readStatus);
        _myLibrary.push(book);
        _render();
    }


    function removeBook(id) {
        for (let i = 0; i < _myLibrary.length; i++) {
            if (_myLibrary[i].id == id) {
                _myLibrary.splice(i, 1);
                _render();
            };
        }
    }

    // Return IIFE 
    return {
        addBook: addBook,
        removeBook: removeBook,
    };
})();




