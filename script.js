let displayValue = 0;
let firstOperand = 0;
let operator = "";
let secondOperand = 0;
const display = document.querySelector("#display");
display.textContent = displayValue;

// Operations
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
    default:
      return 0;
  }
}
function clear() {
  display.textContent = 0;
  displayValue = 0;
  firstOperand = 0;
  operator = "";
  secondOperand = 0;
}
function equals() {
  secondOperand = +displayValue;
  displayValue = operate(firstOperand, operator, secondOperand);
  display.textContent = displayValue;
  firstOperand = +displayValue;
  operator = "";
  secondOperand = 0;
}

// Buttons
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (displayValue === 0 || operator) display.textContent = "";
    display.textContent += button.id;
    displayValue = display.textContent;
  })
});

const pointButton = document.querySelector("#point");
pointButton.addEventListener("click", () => {
  const pointNumberFilter = displayValue
    .split("")
    .filter(element => element === ".")
    .toString()
  if (pointNumberFilter === "") {
    display.textContent += pointButton.textContent;
    displayValue = display.textContent;
  }
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!firstOperand) {
      firstOperand = +displayValue;
      operator = button.textContent;
      displayValue = 0;
    } else if (operator === "") {
      operator = button.textContent;
    } else {
      secondOperand = +displayValue;
      displayValue = operate(firstOperand, operator, secondOperand);
      display.textContent = displayValue;
      firstOperand = +displayValue;
      displayValue = 0;
      operator = button.textContent;
      secondOperand = 0;
    }
  })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => equals());