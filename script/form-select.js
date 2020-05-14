const selectedDaytime = document.getElementById('selectedDaytime'); //default AM
const arrow = document.getElementById('arrow'); // add style -mirror when clicked
const tickAM = document.getElementById('tickAM');
const optionAM = document.querySelector('.m-daytime__options-AM');
const optionPM = document.querySelector('.m-daytime__options-PM'); 
const tickPM = document.getElementById('tickPM'); // default hidden
const optionsBox = document.querySelector('.m-daytime__options');


arrow.addEventListener('click', ()=> {
    optionsBox.classList.toggle('-hidden');
    arrow.classList.toggle('-mirror');
});

optionPM.addEventListener('click', ()=>{
    tickAM.classList.add('-hidden');
    tickPM.classList.remove('-hidden');
    selectedDaytime.innerText = 'PM';
    optionsBox.classList.toggle('-hidden');
    arrow.classList.toggle('-mirror');
});

optionAM.addEventListener('click', ()=>{
    tickAM.classList.remove('-hidden');
    tickPM.classList.add('-hidden');
    selectedDaytime.innerText = 'AM';
    optionsBox.classList.toggle('-hidden');
    arrow.classList.toggle('-mirror');
});