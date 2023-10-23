// Array to store tasks
var tasks = [];

// Add a new task
function addTask(task) {
    tasks.push({
        task: task,
        completed: false
    });
}

// Delete a task by its index
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Toggle the completion status of a task by its index
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Render tasks in the task list
function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.task}</span>
            <button class="completeButton" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="deleteButton" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Example usage of the functions
addTask("Subscribe to our social media.");
addTask("Like and comment our Instagram posts.");
addTask("Post a picture of yourself on your account.");
addTask("Use the hashtag #aituMerch.");
addTask("Tag astana_it_university.");

// Initial rendering of tasks
renderTasks();

// Handle adding a new task from user input
function handleAddTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        renderTasks();
        taskInput.value = "";
    }
}

// Event listener for the "Add" button
var addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", handleAddTask);
