const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


btnEl.addEventListener("click", getJoke);
getJoke();

async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}