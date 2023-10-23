books = ['Sapiens', 'The Great Gatsby']

for(const book of books){
    addBook(book);
}

let counter = 0;
function addBook(book){
    const checkboxContainer = document.getElementById('todoList');
    let div = document.createElement('div');
    div.classList.add('conform-check');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    checkbox.id = book;
    let label = document.createElement('label');
    label.classList.add('form-check-label');
    label.innerHTML = book;
    div.appendChild(checkbox);
    div.appendChild(label)
    checkboxContainer.insertBefore(div, checkboxContainer.children[3]);
}

function addNewBook(){
    let bookName = document.getElementById('newBook').value.toString();
    if(bookName.length!=0){
        addBook(bookName);
    }
}

function deleteBook(){
    let checkboxes = document.getElementsByClassName('form-check-input');
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            checkbox.parentElement.remove();
        }
    }
}

function updateCompletedBooks(){
    let checkboxes = document.getElementsByClassName('form-check-input');
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            let divCompleted = document.getElementById('completedBooks');
            let completedBook = document.createElement('h3');
            completedBook.innerHTML = checkbox.getAttribute('id').toString();
            divCompleted.appendChild(completedBook);
            checkbox.parentElement.remove();
        }
    }
}

