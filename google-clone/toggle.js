const toggle = document.querySelector("#menuchocolatte");

const menu = document.querySelector("#menu");
const input = document.querySelector("#searchVal");
const dDown = document.querySelector(".search_bar__drop_down");

document.addEventListener("click", (e) => {
  if (e.target.parentElement.id === "menuchocolatte") {
    if (menu.classList.contains("hidden")) {
      menu.classList.replace("hidden", "block");
    } else {
      menu.classList.replace("block", "hidden");
    }
  } else if (e.target.id === "searchVal" || input.value !== "") {
    if (dDown.classList.contains("hidden")) {
      dDown.classList.replace("hidden", "flex");
    } else {
      dDown.classList.replace("flex", "hidden");
    }
  } else {
    menu.classList.replace("block", "hidden");
    dDown.classList.replace("flex", "hidden");
  }
});

// document.addEventListener("click", () => {
//   if (menu.classList.contains("block")) {
//     menu.classList.replace("block", "hidden");
//   }
// });
