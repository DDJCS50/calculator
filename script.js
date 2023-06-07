function add(a, b) {
    return +(+a + +b).toFixed(2);
}

function subtract(a, b) {
    return +(+a - +b).toFixed(2);
}

function multiply(a, b) {
    return +(+a * +b).toFixed(2);
}

function divide(a, b) {
    if (+b == 0 || +b == undefined || +b == null) {
        alert('DON\'T EVEN TRY IT');
        resetValues();
        return;
    }
    return +(+a / +b).toFixed(2);
}

let num1 = '';
let operator = '';
let num2 = '';
let displayValue = 0;
let evaluation = '';

let calcDisplay = document.querySelector('#display');
calcDisplay.innerText = displayValue;

function operate(firstInputNum, inputOperator, secondInputNum) {
    if (inputOperator == '+') {
        return add(firstInputNum, secondInputNum);
    } else if (inputOperator == '-') {
        return subtract(firstInputNum, secondInputNum);
    } else if (inputOperator == 'x') {
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
    resetValues();
});
let divideBtn = document.querySelector('#divideBtn');
divideBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    prepareOperation();
    let numDisplay = document.getElementById('num1');
    numDisplay.innerText = num1;
    if (operator != '') {
        prepareOperation();
        evaluation = operate(num1, operator, num2);
        getEvaluation(evaluation);
        num2 = '';
    }
    getOperator('/');
});
let sevenBtn = document.querySelector('#sevenBtn');
sevenBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    prepareOperation();
    if (operator == '') {
        getNum1('7');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('7');
    }
});
let eightBtn = document.querySelector('#eightBtn');
eightBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('8');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('8');
    }
});
let nineBtn = document.querySelector('#nineBtn');
nineBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('9');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('9');
    }
});
let multiplyBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    prepareOperation();
    let numDisplay = document.getElementById('num1');
    numDisplay.innerText = num1;
    if (operator != '') {
        prepareOperation();
        evaluation = operate(num1, operator, num2);
        getEvaluation(evaluation);
        num2 = '';
    }
    getOperator('x');
});
let fourBtn = document.querySelector('#fourBtn');
fourBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('4');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('4');
    }
});
let fiveBtn = document.querySelector('#fiveBtn');
fiveBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('5');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('5');
    }
});
let sixBtn = document.querySelector('#sixBtn');
sixBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('6');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('6');
    }
});
let subtractBtn = document.querySelector('#subtractBtn');
subtractBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    prepareOperation();
    let numDisplay = document.getElementById('num1');
    numDisplay.innerText = num1;
    if (operator != '') {
        prepareOperation();
        evaluation = operate(num1, operator, num2);
        getEvaluation(evaluation);
        num2 = '';
    }
    getOperator('-');
});
let oneBtn = document.querySelector('#oneBtn');
oneBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('1');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('1');
    }
});
let twoBtn = document.querySelector('#twoBtn');
twoBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('2');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('2');
    }
});
let threeBtn = document.querySelector('#threeBtn');
threeBtn.addEventListener('click', function(event) {
    if (totalDisplay.textContent == 0) totalDisplay.textContent = '';
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('3');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('3');
    }
});
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    prepareOperation();
    let numDisplay = document.getElementById('num1');
    numDisplay.innerText = num1;
    if (operator != '') {
        prepareOperation();
        evaluation = operate(num1, operator, num2);
        getEvaluation(evaluation);
        num2 = '';
    }
    getOperator('+');
});
let zeroBtn = document.querySelector('#zeroBtn');
zeroBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    prepareOperation();
    if (operator == '') {
        getNum1('0');
    } else {
        let numDisplay = document.getElementById('num1');
        numDisplay.innerText = num1;
        let operatorDisplay = document.getElementById('operator');
        operatorDisplay.innerText = `\xa0${operator}\xa0`;
        getNum2('0');
    }
});
let equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    prepareOperation();
    evaluation = operate(num1, operator, num2);
    getEvaluation(evaluation);
    resetValues();
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
   } else if (num1.length < 9) {
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
       } else if (num2.length < 9) {
        num2 += num;
       } 
       let numDisplay = document.getElementById('num2');
       numDisplay.innerText = num2;
}

function getEvaluation(num) {
    if (evaluation == '') {
        evaluation = 0;
    } else if (evaluation == undefined && num1 == '') {
        evaluation = 0;
    } else if (evaluation == undefined) {
        evaluation = num1;
    } else {
        num1 = evaluation;
    }
    let numDisplay = document.getElementById('num1');
    numDisplay.innerText = evaluation;
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

function resetValues() {
    num1 = '';
    operator = '';
    num2 = '';
    displayValue = 0;
    evaluation = '';
}