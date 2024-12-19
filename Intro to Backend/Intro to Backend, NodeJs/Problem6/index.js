const sum = require("./sum");
const sub = require("./subtraction");
const mult = require("./multiplication");
const div = require("./division");


let a = process.argv[2];
let b = process.argv[3];

let sumResult = sum(a, b);
let subResult = sub(a, b);
let multResult = mult(a, b);
let divResult = b !== 0 ? div(a, b) : "Cannot divide by zero";


console.log(`Sum: ${sumResult}`);
console.log(`Subtraction: ${subResult}`);
console.log(`Multiplication: ${multResult}`);
console.log(`Division: ${divResult}`);