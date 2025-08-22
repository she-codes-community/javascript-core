// Math utilities
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
export function divide(a, b) { return b !== 0 ? a / b : 0; }
export function square(x) { return x * x; }

export function average(arr) {
  let sum = 0;
  for (let x of arr) sum += x;
  return arr.length === 0 ? 0 : sum / arr.length;
}
