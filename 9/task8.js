const fs = require("fs");

let todo = JSON.parse(fs.readFileSync("todo.json"));
let todoDo = [];

for (let task of todo) {
  if (task.completed === false) {
    todoDo.push(task);
  }
}

let x = todo.length - todoDo.length;

fs.writeFileSync("todo.json", JSON.stringify(todoDo));
console.log(x + " task removed");
