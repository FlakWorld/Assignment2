// Function to validate the form when the "Contact Us" button is clicked
function validateForm(){
    // Get the values of the first name, last name, and email input fields
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;

    // Regular expression to check the email format
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Check if the first name is empty
    if(fname.length == 0){
        alert('Input firstname!');
    }
    // Check if the last name is empty
    else if(lname.length == 0){
        alert("Input lastname!");
    }
    // Check if the email format is valid using the regular expression
    else if(!regex.test(email)){
        alert("Input email in correct format!");
    }
    // If all validation passes, display a success message
    else{
        // Call a function to append a success alert to the page
        appendAlert('Your contact information has been sent!', 'success');
    }
}
