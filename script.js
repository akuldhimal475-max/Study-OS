document.querySelector(".btn").addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  if (!input) {
    console.log("data missing");
  } else {
    let unolist = document.querySelector(".task-list");
    let crtlist = document.createElement("li");
    crtlist.classList.add("crtlist");
    crtlist.textContent = input;
    unolist.appendChild(crtlist);
    console.log("data found");
    document.querySelector(".input").value = "";
    let combtn = document.createElement("button");
    combtn.textContent = "Complete";
    crtlist.appendChild(combtn);
    combtn.addEventListener("click", () => {
      combtn.parentElement.classList.add("combtn");
    });
    let delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.classList.add("delbtn");
    crtlist.appendChild(delbtn);
    delbtn.addEventListener("click", () => {
      delbtn.parentElement.remove("");
    });
  }
});
