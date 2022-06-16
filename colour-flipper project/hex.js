const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colours = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    hexColour += hex[getRandomColour()];
  }
  document.body.style.backgroundColor = hexColour;
  colours.textContent = hexColour;
});
function getRandomColour() {
  return Math.floor(Math.random() * hex.length);
}
