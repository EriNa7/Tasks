const fs = require("fs");

let todo = JSON.parse(fs.readFileSync("todo.json"));

for (let i = 0; i < todo.length; ++i) {
  let sign = "";
  if (todo[i].completed === true) {
    sign = "[x]";
  } else {
    sign = "[ ]";
  }

  console.log(sign + " " + (i + 1) + ". " + todo[i].title);
}
