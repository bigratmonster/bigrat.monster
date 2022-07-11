const $ = id => document.getElementById(id);
let audio, button;
let isPlaying = false;

window.onload = () => {
  audio = $("printer-audio"); 
  button = $("audio-button");

  button.addEventListener('pointerdown', () => {

    if (isPlaying) {
      audio.pause();
      button.innerHTML = "printer";
      isPlaying = false;
    } else {
      audio.play();
      button.innerHTML = "stop printing";
      isPlaying = true;
    };
  });
};
