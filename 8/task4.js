const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");
let words = str.split(" ");
let max = 0;
let maxword = "";

for (let word of words) {
  if (word.length > max) {
    max = word.length;
    maxword = word;
  }
}

console.log(maxword);
