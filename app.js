const BUTTONS = [
    firstRow = document.querySelector(".frstrow"),
    secondRow = document.querySelector(".scndrow"),
    thirdRow = document.querySelector(".thrdrow"),
    fourthRow = document.querySelector(".frthrow"),
    fifthRow = document.querySelector(".fithrow")
];

let label = document.querySelector(".label");

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