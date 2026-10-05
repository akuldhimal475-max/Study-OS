document.querySelector(".btn").addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  let unolist = document.querySelector(".task-list");
  if (!input) {
    console.log("data missing");
  } else {
    // create list

    let crtlist = document.createElement("li");
    unolist.appendChild(crtlist);

    // Add Class

    crtlist.classList.add("crtlist");

    let taskText = document.createElement("span");
    taskText.textContent = input;
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
    combtn.classList.add("btn");
    tskdiv.appendChild(combtn);

    combtn.addEventListener("click", () => {
      taskText.classList.add("chanText");
    });

    // delete button

    let delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.classList.add("btn");
    tskdiv.appendChild(delbtn);
    delbtn.addEventListener("click", () => {
      crtlist.remove();
    });
  }
});
