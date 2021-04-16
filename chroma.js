const chromaInterval = 1000;

let rat = document.getElementById("rat");
let hue = 0;

// random paste from mdn
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function updateRat() {
  rat.style = `filter: hue-rotate(${hue}deg); -webkit-filter: hue-rotate(${hue}deg);`;
}

function doChroma() {
  hue = getRandomInt(0, 361);
  updateRat();
}

setInterval(doChroma, chromaInterval);
