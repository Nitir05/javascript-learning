const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var btnId = e.target.id;
    switch (btnId) {
      case "grey":
        body.style.backgroundColor = btnId;
        break;
      case "white":
        body.style.backgroundColor = btnId;
        break;
      case "blue":
        body.style.backgroundColor = btnId;
        break;
      case "yellow":
        body.style.backgroundColor = btnId;
        break;
      case "orange":
        body.style.backgroundColor = btnId;
        break;
      default:
        break;
    }
  });
});
