const container = document.querySelector(".main-container");
const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  container.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  container.classList.toggle("active");
});
