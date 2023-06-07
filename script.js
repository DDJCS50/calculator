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

let num1 = '';
let operator = '';
let num2 = '';
let displayValue = 0;

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
    totalDisplay.textContent = '';
    populateDisplay(0);
});
let divideBtn = document.querySelector('#divideBtn');
divideBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    populateDisplay('\xa0/\xa0');
    // call operate function using inputted data !!!
});
let sevenBtn = document.querySelector('#sevenBtn');
sevenBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    prepareOperation();
    getNum1('7');
});
let eightBtn = document.querySelector('#eightBtn');
eightBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('8');
});
let nineBtn = document.querySelector('#nineBtn');
nineBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('9');
});
let multiplyBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    populateDisplay('\xa0x\xa0');
    prepareOperation();
    let numDisplay = document.getElementById('num1');
    numDisplay.innerText = num1;
    getOperator('x');
});
let fourBtn = document.querySelector('#fourBtn');
fourBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('4');
});
let fiveBtn = document.querySelector('#fiveBtn');
fiveBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('5');
});
let sixBtn = document.querySelector('#sixBtn');
sixBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('6');
});
let subtractBtn = document.querySelector('#subtractBtn');
subtractBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    populateDisplay('\xa0-\xa0');
    // call operate function using inputted data !!!
});
let oneBtn = document.querySelector('#oneBtn');
oneBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('1');
});
let twoBtn = document.querySelector('#twoBtn');
twoBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('2');
});
let threeBtn = document.querySelector('#threeBtn');
threeBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    populateDisplay('3');
});
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    populateDisplay('\xa0+\xa0');
    // call operate function using inputted data !!!
});
let zeroBtn = document.querySelector('#zeroBtn');
zeroBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    populateDisplay('0');
});
let equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    // call operate function using inputted data !!!
});

let totalDisplay = document.querySelector('#displayContainer');

function populateDisplay(btn) {
    let newDisplayElement = document.createElement('p');
    newDisplayElement.innerText = btn;
    newDisplayElement.style.display = 'flex';
    newDisplayElement.style.justifyContent = 'center';
    newDisplayElement.style.flexDirection = 'column';
    newDisplayElement.style.alignItems = 'flex-end';
    newDisplayElement.style.fontWeight = 'bolder';
    newDisplayElement.style.fontSize = '48px';
    totalDisplay.appendChild(newDisplayElement);
    return newDisplayElement;
}

function getNum1(num) {
   if (num1 == '') {
    num1 = num;
   } else {
    num1 += num;
   } 
   let numDisplay = document.getElementById('num1');
   numDisplay.innerText = num1;
}

function getOperator(symbol) {
    if (operator == '') {
        operator = symbol;
       } else if (operator == 'x' || operator == '/' || operator == '+' || operator == '-') {
        operator = symbol;
       } 
       let operatorDisplay = document.getElementById('operator');
       operatorDisplay.innerText = `\xa0${operator}\xa0`;
}

function getNum2(num) {
    if (num2 == '') {
        num2 = num;
       } else {
        num2 += num;
       } 
       let numDisplay = document.getElementById('num2');
       numDisplay.innerText = num2;
}

function prepareOperation() {
    totalDisplay.textContent = '';
    displayNum1 = populateDisplay('');
    displayNum1.setAttribute('id', 'num1');
    displayOperator = populateDisplay('');
    displayOperator.setAttribute('id', 'operator');
    displayNum2 = populateDisplay('');
    displayNum2.setAttribute('id', 'num2');
}