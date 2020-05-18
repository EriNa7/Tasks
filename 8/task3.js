const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let big = 0;
let small = 0;
let letters = 0;
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let letters of str) {
  if (alphabet.includes(letters)) {
    small += 1;
  } else if (letters !== " ") {
    big += 1;
  }
}
console.log("big = " + big);
console.log("small = " + small);
