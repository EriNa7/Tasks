const readlineSync = require("readline-sync");
const fs = require("fs");

let str = readlineSync.question("todo?\n> ");

let todo = JSON.parse(fs.readFileSync("todo.json"));

let newTask = {
  title: str,
  completed: false,
};

todo.push(newTask);

fs.writeFileSync("todo.json", JSON.stringify(todo));

console.log("done!");
