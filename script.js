// Henter ut elementer fra ID
const inputGuess = document.getElementById("input-guess");
const jokeText = document.getElementById("joke");
const submitGuess = document.getElementById("submit-guess");

const correctPopup = document.getElementById("correct");
const wrongPopup = document.getElementById("wrong");

fetchData();

async function fetchData() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=10");

    if (!response.ok) {
      throw new Error("Couldnt fetch");
    }

    // velger et random nummer i fra data amount som nå er 10, hardcoded i fetch linken.
    const data = await response.json();
    const randomJoke = Math.floor(Math.random() * data.amount);

    jokeText.textContent = data.jokes[randomJoke].setup;
    const currentJoke = data.jokes[randomJoke];

    submitGuess.addEventListener("click", () => {
      // må bruke punchline / delivery på noen de har forskjellige struktur
      if (
        inputGuess.value === currentJoke.punchline ||
        inputGuess === currentJoke.delivery
      ) {
        correctPopup.style.display = "block";
      } else {
        wrongPopup.style.display = "block";
      }
    });
  } catch (error) {
    console.error(error);
  }
}
