let counter = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnControls = e.currentTarget.classList;
    if (btnControls.contains("increase")) {
      counter++;
    } else if (btnControls.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      value.style.color = "green";
    }
    if (counter < 0) {
      value.style.color = "red";
    }
    if (counter === 0) {
      value.style.color = "hsl(209, 61%, 16%)";
    }
    value.textContent = counter;
  });
});
