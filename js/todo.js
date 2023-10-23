// An array of books
books = ['Sapiens', 'The Great Gatsby']

// Loop through each book and call the addBook function
for(const book of books){
    addBook(book);
}

// Initialize a counter
let counter = 0;

// Function to add a book to the todo list
function addBook(book){
    // Get the checkbox container element
    const checkboxContainer = document.getElementById('todoList');

    // Create a div element for the book
    let div = document.createElement('div');
    div.classList.add('conform-check');

    // Create a checkbox element
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    checkbox.id = book;

    // Create a label element for the book
    let label = document.createElement('label');
    label.classList.add('form-check-label');
    label.innerHTML = book;

    // Append the checkbox and label to the div
    div.appendChild(checkbox);
    div.appendChild(label);

    // Insert the div into the checkboxContainer
    checkboxContainer.insertBefore(div, checkboxContainer.children[3]);
}

// Function to add a new book to the todo list
function addNewBook(){
    // Get the book name from the input field
    let bookName = document.getElementById('newBook').value.toString();

    // Check if the book name is not empty
    if(bookName.length != 0){
        // Call the addBook function to add the new book
        addBook(bookName);
    }
}

// Function to delete selected books from the todo list
function deleteBook(){
    // Get all the checkboxes
    let checkboxes = document.getElementsByClassName('form-check-input');

    // Loop through the checkboxes and remove the parent div if checked
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            checkbox.parentElement.remove();
        }
    }
}

// Function to move completed books to the completedBooks section
function updateCompletedBooks(){
    // Get all the checkboxes
    let checkboxes = document.getElementsByClassName('form-check-input');

    // Loop through the checkboxes
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            // Get the completedBooks div
            let divCompleted = document.getElementById('completedBooks');

            // Create an h3 element for the completed book and add it to divCompleted
            let completedBook = document.createElement('h3');
            completedBook.innerHTML = checkbox.getAttribute('id').toString();
            divCompleted.appendChild(completedBook);

            // Remove the parent div from the todo list
            checkbox.parentElement.remove();
        }
    }
}
