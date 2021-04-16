const chromaInterval = 1;
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
  hue += 1;
  if (hue > 360) {
    hue-=360
  }
  else if (hue < 0) {
    hue+=360
  }
  updateRat();
}

doChroma()
setInterval(doChroma, chromaInterval);
