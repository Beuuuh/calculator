let label = document.querySelector(".label");
let firstInput = "";
let operatorInput = undefined;
let secondInput = "";

const del = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const cleanScreen = document.querySelector("#cleanScreen");
const firstOperand = document.querySelector("#firstOperand");
const lastOperand = document.querySelector("#lastOperand");
const operators = [];
const numbers = [];

numbers.push(document.querySelectorAll([".number"]));
operators.push(document.querySelectorAll([".operator"]));

operators[0].forEach((e) => {
    e.addEventListener('click', () => {labelChanger(e.innerText)});
});

numbers[0].forEach((e) => {
    e.addEventListener('click', () => {labelChanger(e.innerText)});
});

function labelChanger(Button) {
    label.textContent += Button;
};

function add(firstNumber, SecondNumber) {
    return firstNumber + SecondNumber;
};

function subtracion(firstNumber, SecondNumber) { 
    return firstNumber - SecondNumber;
};

function multiply(firstNumber, SecondNumber) {
    return firstNumber * SecondNumber;
};

function divide(firstNumber, SecondNumber) {
    return firstNumber / SecondNumber
};