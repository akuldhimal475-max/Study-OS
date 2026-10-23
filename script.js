let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
  let crtlist = document.createElement("li");
  crtlist.classList.add("crtlist");
  let taskText = document.createElement("span");
  taskText.textContent = task.name;
  taskText.classList.add("taskText");
  crtlist.appendChild(taskText);

  let tskdiv = document.createElement("div");
  tskdiv.classList.add("tskdiv");
  crtlist.appendChild(tskdiv);

  //same like the button
  let combtn = document.createElement("button");
  combtn.textContent = "Complete";
  combtn.classList.add("complete-btn");

  tskdiv.appendChild(combtn);
  if (task.completed === true) {
    taskText.classList.add("chanText");
    combtn.textContent = "Incomplete";
  }

  combtn.addEventListener("click", () => {
    if (combtn.textContent === "Complete") {
      taskText.classList.add("chanText");
      combtn.textContent = "Incomplete";
      task.completed = true;
      saveTasks();
    } else {
      taskText.classList.remove("chanText");
      combtn.textContent = "Complete";
      task.completed = false;
      saveTasks();
    }
  });

  //like the delete button
  let delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.classList.add("delete-btn");
  tskdiv.appendChild(delbtn);
  delbtn.addEventListener("click", () => {
    let index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      saveTasks();
    }
    crtlist.remove();
  });

  document.querySelector(".task-list").appendChild(crtlist);
}

tasks.forEach((task) => {
  renderTask(task);
});

//---MAIN-----CODE
//----MAIN-----CODE
document.querySelector(".addbtn").addEventListener("click", () => {
  let input = document.querySelector(".input").value.trim();

  if (!input) {
    console.log("data missing");
    return;
  }

  let task = {
    name: input,
    completed: false,
  };

  tasks.push(task);
  saveTasks();

  renderTask(task);

  document.querySelector(".input").value = "";

  console.log("data found");
});
