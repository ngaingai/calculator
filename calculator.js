const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

let num1 = 0;
let num2 = 0;
let displayValue = '';
let gotNum1 = false;
let operator = '';
let result = 0;

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (num1, operator, num2) {
    console.log(num1+operator+num2+"in operate");
    if (operator === '+') {
        result = add(+num1, +num2); // Converts string to number
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    }
    return result;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {    // Set event listeners to all buttons
        if (buttons[i].className === "number" ) {
            if (gotNum1 === false) {
                display.textContent += e.target.id; // Input numbers until operator
                displayValue = display.textContent;
                num1 = displayValue;                // Assign num1
            } else if (gotNum1 === true) {
                display.textContent += e.target.id;
                displayValue = display.textContent;
                num2 = displayValue;
            }
        }
        else if (buttons[i].className === "operator" && gotNum1 === false) {
            operator = e.target.id;    // Assign operator
            display.textContent = '';               // Clear screen
            gotNum1 = true;             // Start looking for num2
        }
        else if (buttons[i].className === "equals") {
            result = operate(num1, operator, num2);
            display.textContent = result;
        }
        else if (buttons[i].className === "clear") {
            display.textContent = '';
            num1 = 0;
            num2 = 0;
            gotNum1 = false;
            result = 0;
        }

    });
} // End for
