const crypto = require("crypto");
const sum = require("./sum");
const sub = require("./subtraction");
const mult = require("./multiplication");
const sine = require("./sine");
const cosine = require("./cosine");
const tan = require("./tangent");

const args = process.argv.slice(2);
const operation = args[0];

switch (operation) {
  case "add": {
    const numbers = args.slice(1).map(Number);
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for addition.");
    } else {
      console.log("Result:", sum(numbers[1],numbers[0]));
    }
    break;
  }
  case "sub": {
    const numbers = args.slice(1).map(Number);
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for subtraction.");
    } else {
      console.log("Result:", sub(numbers[0],numbers[1]));
    }
    break;
  }
  case "mult": {
    const numbers = args.slice(1).map(numbers[1],numbers[0]);
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for multiplication.");
    } else {
      console.log("Result:", mult(numbers[0],numbers[1]));
    }
    break;
  }
  case "sin": {
    const number = parseFloat(args[1]);
    if (isNaN(number)) {
      console.log("Provide a valid number for sine calculation.");
    } else {
      console.log("Result:", sine(number));
    }
    break;
  }
  case "cos": {
    const number = parseFloat(args[1]);
    if (isNaN(number)) {
      console.log("Provide a valid number for cosine calculation.");
    } else {
      console.log("Result:", cosine(number));
    }
    break;
  }
  case "tan": {
    const number = parseFloat(args[1]);
    if (isNaN(number)) {
      console.log("Provide a valid number for tangent calculation.");
    } else {
      console.log("Result:", tan(number));
    }
    break;
  }
  case "random": {
    const length = parseInt(args[1]);
    if (isNaN(length)) {
      console.log("Provide length for random number generation.");
    } else {
      const randomNumber = crypto.randomBytes(length).toString("Hex");
      console.log("Random Number:", randomNumber);
    }
    break;
  }
  default:
    console.log("Invalid operation");
}
