const body = document.querySelector("#gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

var SetGradient = () => {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", SetGradient);
color2.addEventListener("input", SetGradient);
