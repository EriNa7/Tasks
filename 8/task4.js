const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let big = 0;
let small = 0;
let letters = 0;

for (let letters of str) {
  if (letters === letters.toLowerCase() && letters !== " ") {
    small += 1;
  } else if (letters !== " ") {
    big += 1;
  }
}
console.log("big = " + big);
console.log("small = " + small);
