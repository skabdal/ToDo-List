const addButton = document.getElementById("add-btn");
const inputField = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add event listener for the 'Add' button
addButton.addEventListener("click", addTask);

// Function to add a task
function addTask() {
    const taskText = inputField.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item 
    const li = document.createElement("li");

    // Create the text element for the task
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Create the 'Delete' button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteButton);

    // Add the new task to the list
    todoList.appendChild(li);

    // Clear the input field
    inputField.value = "";
}

// Allow pressing "Enter" to add the task
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});