const audio = document.querySelector(".audio");
const play = document.querySelector(".play");

play.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
