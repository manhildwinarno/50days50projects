const search = document.querySelector(".search");
const content = document.querySelector(".content");
const searchBar = document.querySelector(".search-bar");

search.addEventListener("click", () => {
  content.classList.toggle("active");

  if (content.classList.contains("active")) {
    searchBar.focus();
  }
});
