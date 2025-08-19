let myName = "Dana";
let age = 30;

function greet(personName) {
  let message = "Hello, " + personName + "!";
  return message;
}

function sayHello(someName) {
  let message = "Hello, " + someName + "!";
  console.log(message);
}

let greeting = greet(myName);
console.log(greet(myName));