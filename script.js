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
let displayValue = 1;

let calcDisplay = document.querySelector('#display');
calcDisplay.innerText = displayValue;

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

let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    displayValue = 0;
    calcDisplay.innerText = displayValue;
});
let divideBtn = document.querySelector('#divideBtn');
let sevenBtn = document.querySelector('#sevenBtn');
let eightBtn = document.querySelector('#eightBtn');
let nineBtn = document.querySelector('#nineBtn');
let multiplyBtn = document.querySelector('#multiplyBtn');
let fourBtn = document.querySelector('#fourBtn');
let fiveBtn = document.querySelector('#fiveBtn');
let sixBtn = document.querySelector('#sixBtn');
let subtractBtn = document.querySelector('#subtractBtn');
let oneBtn = document.querySelector('#oneBtn');
let twoBtn = document.querySelector('#twoBtn');
let threeBtn = document.querySelector('#threeBtn');
let addBtn = document.querySelector('#addBtn');
let zeroBtn = document.querySelector('#zeroBtn');
let equalsBtn = document.querySelector('#equalsBtn');

function populateDisplay(btn) {

}