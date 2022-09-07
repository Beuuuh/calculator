let label = document.querySelector(".label");
let firstInput = "";
let operatorInput = "";
let secondInput = "";

const numbers = [];
numbers.push(document.querySelectorAll([".number"]));

numbers.forEach((e) => {
    addEventListener('click', () => {labelChanger(e.innerText)});
});

function labelChanger(numberButton) {
    label.textContent += numberButton;
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