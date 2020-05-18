const readlineSync = require("readline-sync");

let count = readlineSync.question("Words count\n> ");
let words = [];
for (let i = 0; i < count; ++i) {
  word = readlineSync.question("Word\n> ");
  words.push(word);
}

console.log(words.join(", "));
