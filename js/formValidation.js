

function validateForm(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(fname.length==0){
        alert('Input firstname!')
    }else if(lname.length==0){
        alert("Input lastname!")
    }else if(!regex.test(email)){
        alert("Input email in correct format!")
    }else{
        appendAlert('Your contact information has been sent!', 'success')
    }
}
