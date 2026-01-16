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
  updateStep();
  updateLine();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateStep();
  updateLine();
});

function updateStep() {
  steps.forEach((step, i) => {
    if (i < currentActive) {
      step.classList.add("active");
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
    next.disabled = false;
  }
}

function updateLine() {
  lines.forEach((line, i) => {
    if (i < currentActive - 1) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
}
