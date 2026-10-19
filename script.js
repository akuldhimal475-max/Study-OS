let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

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

  let unolist = document.querySelector(".task-list");

  // create list

  let crtlist = document.createElement("li");
  unolist.appendChild(crtlist);

  // Add Class

  crtlist.classList.add("crtlist");

  let taskText = document.createElement("span");
  taskText.textContent = input;
  taskText.classList.add("taskText");
  crtlist.appendChild(taskText);

  console.log("data found");

  //empty the box

  document.querySelector(".input").value = "";

  let tskdiv = document.createElement("div");
  tskdiv.classList.add("tskdiv");
  crtlist.appendChild(tskdiv);

  //complete button

  let combtn = document.createElement("button");
  combtn.textContent = "Complete";
  combtn.classList.add("complete-btn");

  tskdiv.appendChild(combtn);

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

  // delete button

  let delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.classList.add("delete-btn");
  tskdiv.appendChild(delbtn);
  delbtn.addEventListener("click", () => {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
    saveTasks();
    crtlist.remove();
  });
});
