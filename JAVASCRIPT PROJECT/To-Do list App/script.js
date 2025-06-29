// todo-script.js

document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");
  li.textContent = taskText;
 

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}