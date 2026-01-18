const background = document.querySelector(".background");
const loading = document.querySelector(".loading");

let loader = 0;
let count = setInterval(blurring, 30);

function blurring() {
  loader++;

  if (loader === 100) {
    clearInterval(count);
  }

  loading.innerHTML = `${loader}%`;
  loading.style.opacity = scale(loader, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
