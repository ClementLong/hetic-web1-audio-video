const video = document.querySelector(".video");
const play = document.querySelector(".play");

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
