// Reference display elements
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('button pressed: value');

    alert('You pressed: ' + value);
    
}

function cleardisplay() {
        console.log('clear button was pressed');

        alert('clear button was clicked');
    }

function deleteLast() {
    console.log('Backspace button pressed');

    alert('backspace button was clicked');
    }

function calculate() {
    console.log('Equals button pressed');

    alert('Equals button was clicked');
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('calculator loaded successfully');
    console.log('Display elemt', display);

    if (display) {
        console.log('Current display value: ', display.value)`
    } else {
        console.error('Display element not found');
    }
    
}

)
