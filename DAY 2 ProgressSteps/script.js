const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > steps.length) {
    currentActive = steps.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  steps.forEach((step, i) => {
    if (i < currentActive) {
      step.classList.add("active");
      console.log(i);
    } else {
      step.classList.remove("active");
    }
  });

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === steps.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
  }
}
