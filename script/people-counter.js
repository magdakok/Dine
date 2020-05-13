const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const peopleNumber = document.getElementById('peopleNumber');
const word = document.getElementById('personWord');
const formPeople = document.querySelector('.form__people');
let peopleCounter = 4;

minus.addEventListener('click', ()=> {
    if (peopleCounter > 2) {
        peopleCounter--;
        peopleNumber.innerText = peopleCounter;
    } else if (peopleCounter === 2) {
        peopleCounter--;
        peopleNumber.innerText = peopleCounter;
        word.innerText = 'person';
        minus.classList.add('-inactive');
    }
});

plus.addEventListener('click', ()=> {
    if (peopleCounter === 1) {
        peopleCounter++;
        peopleNumber.innerText = peopleCounter;
        word.innerText = 'people';
        minus.classList.remove('-inactive');
    } else if (peopleCounter > 1) {
        peopleCounter++;
        peopleNumber.innerText = peopleCounter;
    }
});


// MOUSE OVER AND OUT PEOPLE NUMBER ELEMENT
minus.addEventListener('mouseover', ()=> {
    formPeople.classList.add('-plusminusActive');
});
minus.addEventListener('mouseout', ()=> {
    formPeople.classList.remove('-plusminusActive');
});
plus.addEventListener('mouseover', ()=> {
    formPeople.classList.add('-plusminusActive');
});
plus.addEventListener('mouseout', ()=> {
    formPeople.classList.remove('-plusminusActive');
});