let displayValue;
let firstOperand;
let operator;
let secondOperand;

function add(...operands) {
  return operands.reduce((acc, cur) => acc + cur);
}
function subtract(...operands) {
  return operands.reduce((acc, cur) => acc - cur);
}
function multiply(...operands) {
  return operands.reduce((acc, cur) => acc * cur);
}
function divide(...operands) {
  return operands.reduce((acc, cur) => acc / cur);
}
function operate(firstOperand, operator, secondOperand) {
  switch(operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "x":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  }
}

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    display.textContent += button.id;
  })
});

const pointButton = document.querySelector("#point");
pointButton.addEventListener("click", () => {
  display.textContent += pointButton.textContent
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    firstOperand = +display.textContent;
    operator = button.textContent;
    display.textContent = "";
  })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => display.textContent = "");

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
  secondOperand = +display.textContent;
  display.textContent = operate(firstOperand, operator, secondOperand);
});