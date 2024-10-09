let displayValue = 0;
let firstOperand = 0;
let operator = "";
let secondOperand = 0;
const display = document.querySelector("#display");
display.textContent = displayValue;
const maxDigitsDisplay = 11;

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
      if (secondOperand === 0) return "D'oh!!";
      else return divide(firstOperand, secondOperand);
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
  if (Number.isNaN(firstOperand)) {
    clear();
  } else {
    secondOperand = +displayValue;
    displayValue = operate(firstOperand, operator, secondOperand);
    display.textContent = roundDisplayValue(displayValue);
    firstOperand = +displayValue;
    operator = "";
    secondOperand = 0;
  }
}
function backspace() {
  if (
    displayValue.length === 1 || 
    displayValue === "D'oh!!"
  ) {
    displayValue = 0;
    display.textContent = 0;
  } else {
    displayValue = roundDisplayValue(displayValue);
    displayValue = displayValue.toString();
    displayValue = displayValue.replace(displayValue[displayValue.length-1], "");
    displayValue = +displayValue;
    display.textContent = displayValue;
  }
}

// Other functions
function fitsOnDisplay(value) {
  return value.toString().length < maxDigitsDisplay;
}

function roundDisplayValue(value) {
  if (fitsOnDisplay(value)) {
    return value;
  } else {
    return value
    .toString()
    .split("")
    .slice(0, maxDigitsDisplay)
    .join("");
  }
}

// Buttons
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (fitsOnDisplay(displayValue)) {
      if (displayValue[displayValue.length-1] === ".") displayValue += button.id;
      else if (
        displayValue === 0 ||
        displayValue === "D'oh!!" ||
        displayValue === 0 && operator
      ) {
        display.textContent = "";
        displayValue = button.id
      } else displayValue += button.id;
      
      display.textContent = displayValue;
    }
  })
});

const pointButton = document.querySelector("#point");
pointButton.addEventListener("click", () => {
  const pointNumberFilter = displayValue
    .split("")
    .filter(element => element === ".")
    .toString();
  if (pointNumberFilter === "") {
    displayValue += pointButton.textContent;
    display.textContent = displayValue;
  }
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!firstOperand) {
      firstOperand = +displayValue;
      operator = button.textContent;
      displayValue = 0;
    } else if(!operator) {
      operator = button.textContent;
      displayValue = 0;
    } else {
      secondOperand = +displayValue;
      displayValue = operate(firstOperand, operator, secondOperand);
      display.textContent = roundDisplayValue(displayValue);
      firstOperand = +displayValue;
      displayValue = 0;
      operator = button.textContent;
      secondOperand = 0;
    }
  })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", () => backspace());

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => equals());