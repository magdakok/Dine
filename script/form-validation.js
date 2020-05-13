const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const inputs = document.querySelectorAll('input');

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
        printError(name,'This field is required', true);
        addFocusoutCheck(name,correctName);
    } else {
        name.classList.remove('errorColor');
        printError(name);
    }
};

function correctEmail() {
    const emailTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value) {
        email.classList.add('errorColor');
        printError(email,'This field is required', true);
        addFocusoutCheck(email,correctEmail);
    } else if (!emailTemplate.test(String(email.value).toLowerCase())) {
        email.classList.add('errorColor');
        printError(email,'Invalid email address', true);
        addFocusoutCheck(email,correctEmail);
    } else {
        email.classList.remove('errorColor');
        printError(email);
    }
};


function correctDate () {
    dateValidation.forEach(el => {
        if (el.element.value === '') {
            el.element.classList.add('errorColor');
            printError(el.element.parentElement, 'This field is required', true);
            addFocusoutCheck(el.element,correctDate);
        } else {
            if (dateValidation[0].element.value !== '' && dateValidation[1].element.value !== '' && dateValidation[2].element.value !== '') {
                el.element.classList.remove('errorColor');
                printError(el.element.parentElement);
            }
            el.element.classList.remove('errorColor');
        }
    });
}

function correctTime () {
    timeValidation.forEach(el => {
        if (el.element.value === '') {
            el.element.classList.add('errorColor');
            printError(el.element.parentElement, 'This field is required', true);
            addFocusoutCheck(el.element,correctTime);
        } else {
            if (timeValidation[0].element.value !== '' && timeValidation[1].element.value !== '') {
                el.element.classList.remove('errorColor');
                printError(el.element.parentElement);
            }
            el.element.classList.remove('errorColor');
        }
    });
}


function printError (formElement, err, whatToDo) {
    //get the parent element of the input
    const parent = formElement.parentElement;
    //get error message box
    const small = parent.querySelector('small');

    if (whatToDo) {
        //add error class
        parent.classList.add('error');
        //prints error message
        small.innerText = err;
    } else {
        //remove error class
        parent.classList.remove('error');
        //removes error message
        small.innerText = '';
    }
    
};

function addFocusoutCheck (inp,fn) {
    inp.addEventListener('focusout', fn);
}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    correctName();
    correctEmail();
    correctDate();
    correctTime();
});

