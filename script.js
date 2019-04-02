const body = document.querySelector("#gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const hex = document.querySelector('#Hex');
const rgb = document.querySelector('#rgb');

var SetGradient = () => {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  hex.textContent = "Hex Color Value: " + color1.value + ", " + color2.value;
  rgb.textContent = "CSS Property: " + body.style.background + ";";

}

color1.addEventListener("input", SetGradient);
color2.addEventListener("input", SetGradient);
