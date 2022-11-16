let label = document.querySelector(".label");
let firstInput = "";
let operatorInput = undefined;
let secondInput = "";

const del = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const equals = document.querySelector("#equals");
const cleanScreen = document.querySelector("#cleanScreen");
const firstOperand = document.querySelector("#firstOperand");
const lastOperand = document.querySelector("#lastOperand");
const operators = [];
const numbers = [];

numbers.push(document.querySelectorAll([".number"]));
operators.push(document.querySelectorAll([".operator"]));

operators[0].forEach((e) => {
    e.addEventListener('click', () => {
        labelChanger(e.innerText)
        if(e.innerText == "+") {
            operatorInput = "add";
        } else if(e.innerText == "-") {
            operatorInput = "subtraction";
        } else if(e.innerText == "*") {
            operatorInput = "multiply";
        } else if(e.innerText == "/") {
            operatorInput = "divide";
        } else if(e.innerText == "SQRT") {
            operatorInput = "sqrt";
        } else if(e.innerText == "^") {
            operatorInput = "power";
        };
    });
});

numbers[0].forEach((e) => {
    e.addEventListener('click', () => {labelChanger(e.innerText)});
});

equals.addEventListener("click", () => {equalsTo()});
cleanScreen.addEventListener("click", () => {clear()});

function labelChanger(Button) {
    firstOperand.textContent += Button;
    firstInput = parseInt(firstOperand.innerText);
    if(operatorInput != undefined) {
        lastOperand.textContent += Button;
        secondInput = parseInt(lastOperand.innerText);
    };
};

function equalsTo() {
    if(operatorInput == "add") {
        add(firstInput, secondInput);
    } else if(operatorInput == "subtraction") {
        subtraction(firstInput, secondInput);
    } else if(operatorInput == "multiply") {
        multiply(firstInput, secondInput);
    } else if(operatorInput == "divide") {
        divide(firstInput, secondInput);
    } else if(operatorInput == "sqrt") {
        squareRoot(firstInput);
    } else if(operatorInput == "power") {
        power(firstInput,secondInput);
    };
};

function add(firstNumber, SecondNumber) {
    return firstOperand.innerText = firstNumber + SecondNumber;
};

function subtraction(firstNumber, SecondNumber) {
    return firstOperand.innerText = firstNumber - SecondNumber;
};

function multiply(firstNumber, SecondNumber) {
    return firstOperand.innerText = firstNumber * SecondNumber;
};

function divide(firstNumber, SecondNumber) {
    return firstOperand.innerText = firstNumber / SecondNumber;
};

function squareRoot(firstNumber) {
    return Math.sqrt(firstNumber);
};

function power(firstNumber, SecondNumber) {
    return firstOperand.innerText = firstNumber ** SecondNumber;
};

function clear() {
    firstInput = "";
    firstOperand.innerText = "";
    secondInput = "";
    lastOperand.innerText = "";
    operatorInput = undefined;
};