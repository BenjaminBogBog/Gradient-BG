const body = document.querySelector("#gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const hex = document.querySelector('#Hex');
const css = document.querySelector('#CSS');
const boganim = document.querySelector('#boganim');
const button = document.querySelector('.play')

var SetGradient = () => {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  hex.textContent = "Hex Color: " + color1.value + ", " + color2.value;
  css.textContent = "background: " + body.style.background + ";";
  button.style.background = "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
}

var startAnim = () => {
  boganim.className = "bogbog";
    button.disabled = true;
  setTimeout(function () {
    button.disabled = false;
    boganim.className = "";
  }, 4000);
}

color1.addEventListener("input", SetGradient);
color2.addEventListener("input", SetGradient);
