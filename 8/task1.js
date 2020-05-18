const readlineSync = require("readline-sync");

let word1 = readlineSync.question("First word\n> ");
let word2 = readlineSync.question("Second word\n> ");
let word3 = readlineSync.question("Third word\n> ");

console.log(word1 + ", " + word2 + ", " + word3);
