const button = document.querySelectorAll(".btn");

// Audio
function playAudio(url) {
  new Audio(url).play();
}

button.forEach(btn => {
  btn.addEventListener("click", () => {
    playAudio(`sounds/${btn.textContent}.mp3`);
  });
});