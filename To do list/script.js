let taskInput = document.getElementById("new-task");
let addTaskBtn = document.getElementById("add-task-btn");
let taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please Enter A Task");
        return;
    }

    // Create a new list item
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Create a Delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = deleteTask;

    // Complete Task
    newTask.addEventListener("click", completeTask);

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = "";  // Clear the input field
}

function completeTask(event) {
    const taskItem = event.target;
    taskItem.classList.toggle("completed");
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}
