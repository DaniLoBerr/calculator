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

let firstOperand;
let operator;
let secondOperand;

function operate(firstOperand, operator, secondOperand) {
  switch(operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  }
}
