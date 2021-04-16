const hueInterval = 1;
const hueMaxChange = 1;
let rat = document.getElementById("rat");
let hue = 0;

// random paste from mdn
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function updateRat() {
  rat.style.filter = `hue-rotate(${hue}deg)`;
  rat.style["-webkit-filter"] = `hue-rotate(${hue}deg)`;
}

function doColor() {
  hue += 1 //getRandomInt(-1 * hueMaxChange, 1 * hueMaxChange);
  if (hue > 360) {
    hue -= 360;
  }
  else if (hue < 0) {
    hue += 360;
  }
  updateRat();
}

setInterval(doColor, colorInterval);
