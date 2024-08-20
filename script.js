function add(...array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}
function subtract(...array) {
  return array.reduce((acc, cur) => acc - cur, 0);
}
function multiply(...array) {
  return array.reduce((acc, cur) => acc * cur);
}
function divide(...array) {
  return array.reduce((acc, cur) => acc / cur);
}
