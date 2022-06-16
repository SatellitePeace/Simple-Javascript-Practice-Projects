const colors = [
  "green",
  "red",
  "pink",
  "#f15025",
  "yellow",
  "saddlebrown",
  "blue",
];

const colours = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const random = getRandomColour();
  document.body.style.backgroundColor = colors[random];
  colours.textContent = colors[random];
});
function getRandomColour() {
  return Math.floor(Math.random() * colors.length);
}
