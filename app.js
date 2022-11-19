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
        };
    });
});

numbers[0].forEach((e) => {
    e.addEventListener('click', () => {labelChanger(e.innerText)});
});

equals.addEventListener("click", () => {equalsTo()});
cleanScreen.addEventListener("click", () => {clear()});
dot.addEventListener("click", () => {labelChanger(".")});

function labelChanger(Button) {
    firstOperand.textContent += Button;
    firstInput = parseFloat(firstOperand.innerText);
    if(operatorInput != undefined) {
        lastOperand.textContent += Button;
        secondInput = parseFloat(lastOperand.innerText);
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
    };
};

function add(firstNumber, SecondNumber) {
    lastOperand.innerText = "";
    operatorInput = undefined;
    return firstOperand.innerText = firstNumber + SecondNumber;
};

function subtraction(firstNumber, SecondNumber) {
    lastOperand.innerText = "";
    operatorInput = undefined;
    return firstOperand.innerText = firstNumber - SecondNumber;
};

function multiply(firstNumber, SecondNumber) {
    lastOperand.innerText = "";
    operatorInput = undefined;
    return firstOperand.innerText = firstNumber * SecondNumber;
};

function divide(firstNumber, SecondNumber) {
    lastOperand.innerText = "";
    operatorInput = undefined;
    return firstOperand.innerText = firstNumber / SecondNumber;
};

function clear() {
    firstInput = "";
    firstOperand.innerText = "";
    secondInput = "";
    lastOperand.innerText = "";
    operatorInput = undefined;
};