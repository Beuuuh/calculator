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
        labelChanger(e.innerText);
        switch(e.innerText) {
            case "+":
                operatorInput = "add";
                break;
            case "-":
                operatorInput = "subtraction";
                break;
            case "*":
                operatorInput = "multiply";
                break;
            case "/":
                operatorInput = "divide";
                break;
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
    switch(operatorInput) {
        case "add":
            add(firstInput, secondInput);
            break;
        case "subtraction":
            subtraction(firstInput, secondInput);
            break;
        case "multiply":
            multiply(firstInput, secondInput);
            break;
        case "divide":
            divide(firstInput, secondInput);
            break;
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