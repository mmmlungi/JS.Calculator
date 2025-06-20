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
    if (currentValue === '0') {
        // If the display is currently 0, replace it with the new value
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
    }

    alert('You pressed: ' + value);
    
}

function cleardisplay() {
        console.log('clear button was pressed');

        alert('clear button was clicked');
    }

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
