// getting our api key
const apiKey = "https://icanhazdadjoke.com";

// fechting our api text
async function getJoke(apiKey: string) {
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
    let data = await response.text();
    console.log(data);

    // if any errors consloe log it
  } catch (error) {
    console.log(`There is an error: `, error);
  }
}

getJoke(apiKey);
