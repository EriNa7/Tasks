const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");

let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let number = "";
let numbers = [];
let a;
let b;
let c;

for (i = 0; i < str.length; ++i) {
  let char = str[i];
  if (digits.includes(char)) {
    number += char;
  }
  if ((number.length > 0 && !digits.includes(char)) || i === str.length - 1) {
    if (a === undefined) {
      a = parseInt(number);
    } else if (b === undefined) {
      b = parseInt(number);
    } else if (c === undefined) {
      c = parseInt(number);
    }
    number = "";
  }
}
if (
  (str.includes("+") && a + b === c) ||
  (str.includes("-") && a - b === c) ||
  (str.includes("/") && a / b === c) ||
  (str.includes("*") && a * b === c)
) {
  console.log(true);
} else {
  console.log(false);
}
