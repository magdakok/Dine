const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');

const dateValidation = [
    {
        name: 'month',
        element: document.getElementById('month'),
        minVal: 1,
        maxVal: 12,
    },
    {
        name: 'day',
        element: document.getElementById('day'),
        minVal: 1,
        maxVal: 31,
    },
    {
        name: 'year',
        element: document.getElementById('year'),
        minVal: 2020,
        maxVal: 2025,
    }
];

const timeValidation = [
       {
        name: 'hour',
        element: document.getElementById('hour'),
        minVal: 1,
        maxVal: 12,
    },
    {
        name: 'minute',
        element: document.getElementById('minute'),
        minVal: 1,
        maxVal: 59,
    },
];

function correctName() {
    if (!name.value) {
        name.classList.add('errorColor');
        printError(name,'This field is required');
    }
};

function correctEmail() {
    if (!email.value) {
        email.classList.add('errorColor');
        printError(email,'This field is required');
    } 
    //else if email doesn't contain @ printError(email, 'This is not an email address');
};

function correctNumberValues() {
    dateValidation.forEach(el => {
        if (el.element.value === '') {
            el.element.classList.add('errorColor');
            printError(el.element.parentElement, 'This field is required');
        }
    });
    timeValidation.forEach(el => {
        if (el.element.value === '') {
            el.element.classList.add('errorColor');
            printError(el.element.parentElement, 'This field is required');
        }
    });
}


function printError (formElement, err) {
    //get the parent element of the input
    console.log(formElement);
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
    correctNumberValues();
    //here start all checking functions
});

