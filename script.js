const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
}

function createTodoItem(todoText) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTodo);

    const text = document.createElement("span");
    text.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteButton);

    return todoItem;
}

function toggleTodo(event) {
    const checkbox = event.target;
    const todoItem = checkbox.parentElement;

    if (checkbox.checked) {
        todoItem.classList.add("checked");
        todoList.appendChild(todoItem);
    } else {
        todoItem.classList.remove("checked");
        todoList.prepend(todoItem);
    }
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const todoItem = deleteButton.parentElement;
    todoList.removeChild(todoItem);
}
