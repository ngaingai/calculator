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
