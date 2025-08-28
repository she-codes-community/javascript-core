// Math utilities
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : 0; }
function square(x) { return x * x; }

export function average(arr) {
  let sum = 0;
  for (let x of arr) sum += x;
  return arr.length === 0 ? 0 : sum / arr.length;
}
