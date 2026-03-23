const cards = document.querySelectorAll(".card");
const caption = document.querySelectorAll(".caption");

function unactive() {
  cards.forEach(card => {
    card.classList.remove("active");
    card.classList.add("hover");
  });
}

cards.forEach(card => {
  card.addEventListener("click", function () {
    unactive();
    card.classList.add("active");
    card.classList.remove("hover");
  });
});
