const fs = require("fs");

let todo = JSON.parse(fs.readFileSync("todo.json"));
let i = 1;

for (let task of todo) {
  if (task.completed === true) {
    console.log(i + ". " + task.title);
    i += 1;
  }
}
