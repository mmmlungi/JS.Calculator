// Reference display elements
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('button pressed: value');

    let currentValue = display.value;

    if (justCalculated) {
        // If we just calculated, clear the display
        currentValue = '';
        justCalculated = false;
        return
    }

    // Append the value to the display
    if (currentValue === '0' && value !== '.') {
        // If the display is currently 0, replace it with the new value
        display.value = currentValue + value;
    else if (currentValue === '') {
        // get the current value of the display
        let lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
        // only add decimal point if the last number does not already contain one
        if (lastNumber.includes('.') && value === '.') {
            console.log('Decimal point already exists in the last number');
            return; // Do not append if the last number already has a decimal point
        }   
        display.value = value;
    }
    else {
        // Otherwise, append the new value
        display.value += value;
    }
    console.log('Current display value: ', display.value);
    // Alert the user about the value pressed
    // reset justCalculated flag when a button is pressed

    justCalculated = false;

    console.log('justCalculated flag reset to false');
    display.value = currentValue + value;

    function cleardisplay() {
    console.log('clear button was pressed');    
    display.value = '0'; // Reset the display to 0
    justCalculated = false; // Reset the justCalculated flag
    }

    alert('You pressed: ' + value);
    
}

function cleardisplay() {
        console.log('clear button was pressed');
        display.value = '0'; // Reset the display to 0
        justCalculated = false; // Reset the justCalculated flag

        display.style.backgroundColor = '#f0f0f0'; // Reset background color
        setTimeout(() => {   
            display.style.backgroundColor = ''; // Reset background color after 1 second
        }, 150);

function deleteLast() {
    console.log('Backspace button pressed');

    let currentValue = display.value;

    if (currentValue.length > 1 || currentValue === '0') {
        // Remove the last character if there are more than one characters
        display.value = currentValue.slice(0, -1);
    }



    alert('backspace button was clicked');
    }

function calculate() {
    console.log('Equals button pressed');

    alert('Equals button was clicked');
}
document.addEventListener ('keydown', function (event) { 
    console.log('Key pressed: ', event.key);

    if (event.key >=  '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (event.key === 'Backspace') {
        appendToDisplay('.')
    } else if (event.key === '+') {
        appendToDisplay('+');
    } else if (event.key === '-') {
        appendToDisplay('-');
    } else if (event.key === '/') {
        appendToDisplay('/');
    } else if (event.key === '*') {
        event.preventDefault(); // Prevent default action for multiplication 
        appendToDisplay('*');

    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
        cleardisplay();
    } else if (event.key === 'Backspace') {
        deleteLast();
        console.log('Unsupported key pressed: ', event.key);
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
