function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1;
let operator;
let num2;

function operate(firstInputNum, inputOperator, secondInputNum) {
    if (inputOperator == '+') {
        return add(firstInputNum, secondInputNum);
    } else if (inputOperator == '-') {
        return subtract(firstInputNum, secondInputNum);
    } else if (inputOperator == '*') {
        return multiply(firstInputNum, secondInputNum);
    } else if (inputOperator == '/') {
        return divide(firstInputNum, secondInputNum);
    }
}