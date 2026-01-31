// Task -- 1
function tellJock() {
    console.log(
      "Why don't scientists trust atoms? Because they make up everything!",
    );
}

// call tellJoke every 2 seconds
const jokeInterval = setInterval(tellJock, 2000);

// After 10 seconds, stop tell

setTimeout(() => {
  clearInterval(jokeInterval);
}, 10000);

// Task --- 2

async function fetchJoke() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single",
    );

    const data = await response.json();

    console.log(data.joke);
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

fetchJoke();
