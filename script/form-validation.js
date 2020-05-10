const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');

function correctName() {
    if (!name.value) {
        printError(name,'This field is required');
    }
};

function correctEmail() {
    if (!email.value) {
        printError(email,'This field is required');
    } 
    //else if email doesn't contain @ printError(email, 'This is not an email address');
};


function printError (formElement, err) {
    //get the parent element of the input
    const parent = formElement.parentElement;
    //add error class
    parent.classList.add('error');
    //get error message box
    const small = parent.querySelector('small');
    //prints error message
    small.innerText = err;
};

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    correctName();
    correctEmail();
    //here start all checking functions
});

