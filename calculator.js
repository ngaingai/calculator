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
    if (operator === '+') {
        console.log(add(num1, num2));
    } else if (operator === '-') {
        console.log(subtract(num1, num2));
    } else if (operator === '*') {
        console.log(multiply(num1, num2));
    } else if (operator === '/') {
        console.log(divide(num1, num2));
    }
}


const display = document.querySelector('#display');


function test (button) {
    let pressed = button.id;
    console.log(pressed);
}

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
})

const operators = document.querySelectorAll(".operators");

operators.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
})

const clear = document.querySelector(".clear");

clear.addEventListener('click', () => {
    display.textContent = "";
});

const equals = document.querySelector(".equals");

equals.addEventListener('click', () => {
    display.textContent = "";
});
