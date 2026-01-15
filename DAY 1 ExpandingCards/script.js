const cards = document.querySelectorAll(".card");
const caption = document.querySelectorAll(".caption");

function unactive() {
  cards.forEach(function (card) {
    card.classList.remove("active");
  });
}

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    unactive();
    card.classList.add("active");
  });
});
