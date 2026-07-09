// Henter ut elementer fra ID
const inputGuess = document.getElementById("input-guess");
const randomJoke = document.getElementById("joke");
const submitGuess = document.getElementById("submit-guess");

fetchData();

async function fetchData() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    if (!response.ok) {
      throw new Error("Couldnt fetch");
    }
    const data = await response.json();

    randomJoke.textContent = data.setup;

    submitGuess.addEventListener("click", () => {
      if (inputGuess.value === data.punchline) {
        alert("Correct");
      } else {
        alert("Wrong");
      }
    });
  } catch (error) {
    console.error(error);
  }
}
