const chromaInterval = 100;
const chromaMaxChange = 1;
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

function doChroma() {
  let h = getRandomInt(-1 * chromaMaxChange, 1 * chromaMaxChange);
  hue += h;
  updateRat();
}

doChroma()
setInterval(doChroma, chromaInterval);
