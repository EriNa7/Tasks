const readlineSync = require("readline-sync");

let word = readlineSync.question("word\n> ");

if (word[0] === word[word.length - 1] && word[1] === word[word.length - 2]) {
  console.log(true);
} else {
  console.log(false);
}
