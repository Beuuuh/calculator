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
    firstOperand.textContent += Button;
    firstInput = parseInt(firstOperand.innerText);
    if(operatorInput != undefined) {
        lastOperand.textContent += Button;
        secondInput = parseInt(lastOperand.innerText);
    };
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