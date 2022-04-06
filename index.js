let operation = '';
let currentNumber = 1;
let num1 = undefined;
let num2 = undefined;
let screenValue = 0;
let e = 0;
const output = document.querySelector("#output-text");

function updateScreen() {
    output.innerHTML = screenValue;
}

function operate(operation, num1, num2) {
    if (operation == "+") {
        return parseInt(num1) + parseInt(num2);
    } else if (operation == "-") {
        return parseInt(num1) - parseInt(num2);
    } else if (operation == "*") {
        return parseInt(num1) * parseInt(num2);
    } else if (operation == "/") {
        return Math.round((parseInt(num1) / parseInt(num2)) * 10) / 10;
    }
}

function setOperation(op) {
    currentNumber = 2;
    operation = op;
}

function setNumber(number) {
    if (num1 === undefined && currentNumber === 1) {
        num1 = number;
        screenValue = num1;
        updateScreen();
    } else if (num2 === undefined && currentNumber === 2) {
        num2 = number;
        screenValue = num2;
        updateScreen();
    } else if (num1 === e) {
        num1 = number;
        screenValue = num1;
        updateScreen();
    } else if (num1 !== undefined && currentNumber === 1) {
        num1 = parseInt(num1.toString().concat(number.toString()));
        screenValue = num1;
        updateScreen();
    } else if (num2 !== undefined && currentNumber === 2) {
        num2 = parseInt(num2.toString().concat(number.toString()));
        screenValue = num2;
        updateScreen();
    }
}

function empty() {
    currentNumber = 1;
    operation = '';
    num1 = undefined;
    num2 = undefined;
    screenValue = 0;
    updateScreen();
    e = 0;
}

function ev() {
    if (num1 === undefined || num2 === undefined) {
        return false;
    } else if (operation === '') {
        return false;
    } else if (num2 === 0 && operation == '/') {
        screenValue = "NaN";
        updateScreen();
        return true;
    } else {
        e = operate(operation, num1, num2);
        screenValue = e;
        updateScreen();
        operation = '';
        num1 = e;
        num2 = undefined;
        currentNumber = 1;
    }
}