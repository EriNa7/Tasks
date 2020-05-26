const readlineSync = require("readline-sync");
const fs = require("fs");
let n = parseInt(readlineSync.question("remove?\n> "));
let todo = JSON.parse(fs.readFileSync("todo.json"));

if (todo.length >= n) {
  todo.splice(n - 1, 1);
  fs.writeFileSync("todo.json", JSON.stringify(todo));

  console.log("done!");
} else {
  console.log("wrong number");
}
