// selecting our elements
const jokeText = document.getElementsByClassName("joke-H2")[0] as HTMLElement;
const jokeButton = document.getElementsByClassName(
  "other-Joke"
)[0] as HTMLAnchorElement;
const loadingAnimation = document.getElementsByClassName(
  "loading-Animation"
)[0] as HTMLElement;

// getting our api key
const apiKey = "https://icanhazdadjoke.com";
loadingAnimation.style.display = "none";

// fechting our api text
async function getJoke(apiKey: string) {
  loadingAnimation.style.display = "flex";
  jokeText.textContent = "";
  try {
    const response = await fetch(apiKey, {
      headers: {
        Accept: "text/plain",
      },
    });
    // if ip has errors throw this text
    if (!response.ok) {
      throw new Error(`Failed to fetch joke. Status: ${response.status}`);
    }
    // get text from response
    let data: string = await response.text();
    loadingAnimation.style.display = "none";

    showTextFunc(data);

    // if any errors consloe log it
  } catch (error) {
    console.log(`There is an error: `, error);
  }
}

// our functions

const showTextFunc: (data: string) => void = (data) => {
  jokeText.textContent = data;
};

// our event lisnters
jokeButton.addEventListener("click", () => getJoke(apiKey));

// running the code one time when entering the website
getJoke(apiKey);
