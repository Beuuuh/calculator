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
        appendOperator(e.innerText);
        switch(e.innerText) {
            case "+":
                operatorInput = "+";
                break;
            case "-":
                operatorInput = "-";
                break;
            case "*":
                operatorInput = "*";
                break;
            case "/":
                operatorInput = "/";
                break;
        };
    });
});

numbers[0].forEach((e) => {
    e.addEventListener('click', () => {appendNumber(e.innerText)});
});

equals.addEventListener("click", () => {equalsTo()});
cleanScreen.addEventListener("click", () => {clear()});
dot.addEventListener("click", () => {appendDot(".")});
del.addEventListener("click", () => {deleteNumber()});

function appendOperator(Button) {
    firstOperand.innerText += Button;
    if(operatorInput != undefined) {
        firstOperand.innerText = firstOperand.textContent.toString().slice(0,-1);
    };
    if(Button != operatorInput) {
        firstOperand.innerText = firstOperand.textContent.toString().slice(0,-1);
        firstOperand.innerText += Button;
    };
};

function equalsTo() {
    switch(operatorInput) {
        case "+":
            add(firstInput, secondInput);
            break;
        case "-":
            subtraction(firstInput, secondInput);
            break;
        case "*":
            multiply(firstInput, secondInput);
            break;
        case "/":
            evaluate();
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
    if(SecondNumber != 0){
        return firstOperand.innerText = firstNumber / SecondNumber;
    } else {
        evaluate();
    };
};

function resetScreen() {
    firstOperand.innerText = "";
};

function clear() {
    firstInput = "";
    firstOperand.innerText = "0";
    secondInput = "";
    lastOperand.innerText = "";
    operatorInput = undefined;
};

function deleteNumber() {
    firstOperand.innerText = firstOperand.textContent.toString().slice(0,-1);
    if(firstOperand.innerText == "") {
        firstOperand.innerText = "0";
    }
};

function evaluate() {
    if(operatorInput == "divide" && secondInput == 0) {
        window.alert("You can't divide by 0!");
        clear();
    };
};

function appendNumber(Button) {
    if(firstOperand.innerText === "0") resetScreen();
    firstOperand.innerText += Button;
    firstInput = parseFloat(firstOperand.innerText);
    if(operatorInput != undefined) {
        lastOperand.innerText += Button;
        secondInput = parseFloat(lastOperand.innerText);
    };
};

function appendDot(dot) {
    firstOperand.innerText += dot;
};