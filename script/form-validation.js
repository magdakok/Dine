const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(name.value);
});