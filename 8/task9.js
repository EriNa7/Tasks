const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");

let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let number = "";
let numbers = [];

for (i = 0; i < str.length; ++i) {
  let char = str[i];
  if (digits.includes(char)) {
    number += char;
  }
  if ((number.length > 0 && !digits.includes(char)) || i === str.length - 1) {
    numbers.push(parseInt(number));
    number = "";
  }
}
if (
  (str.includes("+") && numbers[0] + numbers[1] === numbers[2]) ||
  (str.includes("-") && numbers[0] - numbers[1] === numbers[2]) ||
  (str.includes("/") && numbers[0] / numbers[1] === numbers[2]) ||
  (str.includes("*") && numbers[0] * numbers[1] === numbers[2])
) {
  console.log(true);
} else {
  console.log(false);
}
