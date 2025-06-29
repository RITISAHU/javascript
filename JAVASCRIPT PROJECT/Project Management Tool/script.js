function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const task = document.getElementById(data);
  const target = ev.target.classList.contains('task') ? ev.target.parentElement : ev.target;
  target.appendChild(task);
}

function addTask(columnId) {
  const taskText = prompt("Enter task name:");
  if (taskText) {
    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.id = "task-" + new Date().getTime();
    task.innerText = taskText;
    task.ondragstart = drag;
    document.getElementById(columnId).appendChild(task);
  }
}
