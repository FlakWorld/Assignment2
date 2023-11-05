function registration(){
    alert("Successful registration!")
}
let correctUsername = false;
let correctPassword = false;
let correctConfirm = false;

function updateRegistrationButton(){
    const button = document.getElementById("registerBtn");
    if(correctUsername&&correctPassword&&correctConfirm){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}


function validateUsername(){
    const username = document.getElementById("username").value;
    const invalid = document.getElementById("invalidUsername")
    const valid = document.getElementById("validUsername");
    if(username.length<5){
        invalid.innerHTML = "Username should have at least 5 characters!"
        valid.innerHTML  = "";
        correctUsername = false;
    }
    else{
        valid.innerHTML = "Looks good!";
        invalid.innerHTML = "";
        correctUsername = true;
    }
    updateRegistrationButton()
}

function validatePassword(){
    const password = document.getElementById("password").value;
    const valid = document.getElementById("validPassword");
    const invalid = document.getElementById('invalidPassword');
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)){
        valid.innerHTML = "Looks good!";
        invalid.innerHTML = "";
        correctPassword = true;
    }
    else{
        invalid.innerHTML = "Password should be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
        valid.innerHTML = "";
        correctPassword = false;
    }
    updateRegistrationButton();
}

function validateConfirm(){
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const valid = document.getElementById("validConfirm");
    const invalid = document.getElementById("invalidConfirm");
    if(password===confirmPassword){
        valid.innerHTML = "Looks good!";
        invalid.innerHTML = "";
        correctConfirm = true;
    }
    else{
        invalid.innerHTML = "Passwords must be the same!";
        valid.innerHTML = "";
        correctConfirm = false;
    }
    updateRegistrationButton();
}

const form = document.getElementById('registrationForm');
form.addEventListener('submit', registration);

const username = document.getElementById("username");
username.addEventListener("change", validateUsername)

const password = document.getElementById("password");
password.addEventListener("change", validatePassword)

const confirm = document.getElementById("confirmPassword");
confirm.addEventListener("change", validateConfirm)