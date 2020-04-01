const audio = document.querySelector(".audio");
const play = document.querySelector(".play");
const muted = document.querySelector(".muted");
const volume = document.querySelector(".volume");

play.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

muted.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    muted.innerHTML = "Mute";
  } else {
    audio.muted = true;
    muted.innerHTML = "Unmute";
  }
});

volume.addEventListener("change", () => {
  audio.volume = volume.value / 100;
});
