const pageLeft = document.querySelector(".split.left");
const pageRight = document.querySelector(".split.right");

// Hover Left
pageLeft.addEventListener("mouseenter", () =>
  pageLeft.classList.add("hover-left"),
);
pageLeft.addEventListener("mouseleave", () =>
  pageLeft.classList.remove("hover-left"),
);

// HoverRight
pageRight.addEventListener("mouseenter", () =>
  pageRight.classList.add("hover-right"),
);
pageRight.addEventListener("mouseleave", () =>
  pageRight.classList.remove("hover-right"),
);
