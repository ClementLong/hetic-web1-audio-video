const video = document.querySelector(".video");
const play = document.querySelector(".play");
const volumeDown = document.querySelector(".volumeDown");
const volumeUp = document.querySelector(".volumeUp");

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

volumeDown.addEventListener("click", () => {
  if (video.volume - 0.1 <= 0) {
    video.volume = 0;
  } else {
    video.volume -= 0.1;
  }

  console.log(video.volume);
});

volumeUp.addEventListener("click", () => {
  if (video.volume + 0.1 >= 1) {
    video.volume = 1;
  } else {
    video.volume += 0.1;
  }

  console.log(video.volume);
});
