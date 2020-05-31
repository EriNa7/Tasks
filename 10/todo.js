const readlineSync = require("readline-sync");
const fs = require("fs");

function loadTodo() {
  return JSON.parse(fs.readFileSync("todo.json"));
}

function saveTodo(todo) {
  fs.writeFileSync("todo.json", JSON.stringify(todo));
}

function renderTodo(num, todo) {
  let sign = "";
  if (todo.completed === true) {
    sign = "[x]";
  } else {
    sign = "[ ]";
  }

  console.log(sign + " " + num + ". " + todo.title);
}

function initTodo() {
  if (!fs.existsSync("todo.json")) {
    let todo = [
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

    saveTodo(todo);
  }
}

function listTodo(type) {
  let todos = loadTodo();
  if (type === "all") {
    for (let i = 0; i < todos.length; ++i) {
      renderTodo(i + 1, todos[i]);
    }
  } else if (type === "completed") {
    for (let i = 0; i < todos.length; ++i) {
      if (todos[i].completed === true) {
        renderTodo(i + 1, todos[i]);
      }
    }
  } else if (type === "uncompleted") {
    for (let i = 0; i < todos.length; ++i) {
      if (todos[i].completed === false) {
        renderTodo(i + 1, todos[i]);
      }
    }
  }
}

function addTodo(title) {
  let todo = loadTodo();

  let newTask = {
    title: title,
    completed: false,
  };

  todo.push(newTask);

  saveTodo(todo);

  console.log("done!");
}

function toggleTodo(num) {
  let todo = loadTodo();
  if (todo.length >= num) {
    todo[num - 1].completed = !todo[num - 1].completed;
    saveTodo(todo);
    renderTodo(num, todo[num - 1]);
  } else {
    console.log("wrong number");
  }
}

function removeTodo(num) {
  let todo = loadTodo();
  if (todo.length >= num) {
    todo.splice(num - 1, 1);
    saveTodo(todo);

    console.log("done!");
  } else {
    console.log("wrong number");
  }
}

function clearTodos() {
  let todo = loadTodo();
  let todoDo = [];

  for (let task of todo) {
    if (task.completed === false) {
      todoDo.push(task);
    }
  }

  let x = todo.length - todoDo.length;

  saveTodo(todoDo);
  console.log(x + " task removed");
}

while (true) {
  let str = readlineSync.question("> ");
  let words = str.split(" ");
  let command = words[0];

  if (command === "list-all") {
    listTodo("all");
  } else if (command === "list") {
    listTodo("uncompleted");
  } else if (command === "list-completed") {
    listTodo("completed");
  } else if (command === "add") {
    addTodo(words[1]);
  } else if (command === "toggle") {
    toggleTodo(words[1]);
  } else if (command === "remove") {
    removeTodo(words[1]);
  } else if (command === "clear") {
    clearTodos();
  } else if (command === "exit") {
    break;
  } else {
    console.log("wrong command");
  }
}
