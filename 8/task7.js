const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");
let str2 = "";

for (let i = 0; i < str.length; ++i) {
  if (str[i] !== " " && str[i - 1] === " ") {
    str2 += str[i - 1];
  }
  if (str[i] !== " ") {
    str2 += str[i];
  }
}
console.log(str2);
