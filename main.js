const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = [];

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function loadTodos() {

    const data = localStorage.getItem("todos");

    if (data) {
        todos = JSON.parse(data);
    }
}

function displayTodos() {

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        const li = document.createElement("li");

        li.textContent = todo;

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {

            todos.splice(index, 1);

            saveTodos();

            displayTodos();
        });

        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {

    const todo = todoInput.value.trim();

    if (todo === "") {
        return;
    }

    todos.push(todo);

    saveTodos();

    displayTodos();

    todoInput.value = "";
});

loadTodos();
displayTodos();