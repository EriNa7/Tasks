const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let big = 0;
let small = 0;
let letter = 0;

for (let letter of str) {
  if (letter === letter.toLowerCase() && letter !== " ") {
    small += 1;
  } else if (letter !== " ") {
    big += 1;
  }
}
console.log("big = " + big);
console.log("small = " + small);
