// DOM elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focuss = document.getElementById('focus');

//Options

const showAmPm = true;

// Show time

function showTime () {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

// Set AM or PM

const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr format

//hour = hour % 12 || 12;

// Output time

time.innerHTML = `${hour} <span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

setTimeout(showTime, 1000);
}

//Add Zeros

function addZero (n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// Set Background and Greeding

function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundColor = 'red';
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundColor = 'yellow';
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundColor = 'blue';
        greeting.textContent = 'Good Evening';
    }
}

//Set Name

function setName(e) {
    if(e.type === 'keypress') {
        if(e.witch === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

 // Get Name

 function getName () {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
 }

 //Set Focus

function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.witch === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

  // Get Focus

  function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focuss.textContent = '[Enter focus]';
    } else {
        focuss.textContent = localStorage.getItem('focus');
    }
 }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focuss.addEventListener('keypress', setFocus);
focuss.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();
