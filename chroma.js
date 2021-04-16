let rat = document.getElementById("rat");
let r = 0;
let g = 0;
let b = 0;

// random paste from mdn
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function updateRat() {
  rat.style = `color: rgb(${r},${g},${b})`
}

function doChroma() {

}
