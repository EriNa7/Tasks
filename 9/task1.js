const fs = require("fs");

const todo = [
  {
    title: "feed cat",
    completed: true,
  },
  {
    title: "buy products",
    completed: false,
  },
  {
    title: "watch TV",
    completed: false,
  },
];

fs.writeFileSync("todo.json", JSON.stringify(todo));
