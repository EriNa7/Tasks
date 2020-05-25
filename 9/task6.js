const readlineSync = require("readline-sync");
const fs = require("fs");
let n = parseInt(readlineSync.question("toggle?\n> "));
let todo = JSON.parse(fs.readFileSync("todo.json"));

if (todo.length >= n) {
  todo[n - 1].completed = !todo[n - 1].completed;
  fs.writeFileSync("todo.json", JSON.stringify(todo));

  let sign = "";
  if (todo[n - 1].completed === true) {
    sign = "[x]";
  } else {
    sign = "[ ]";
  }
  console.log(sign + " " + n + ". " + todo[n - 1].title);
} else {
  console.log("wrong number");
}
