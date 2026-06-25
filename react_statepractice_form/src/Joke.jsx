import React, { useState, useEffect } from "react";

// Move URL outside the component so both functions can access it safely
const URL = "https://official-joke-api.appspot.com/random_joke";

export default function Joke() {
  // Give an initial object state to prevent rendering crashes
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  // Fixed syntax, fixed typo, and wrapped correctly
  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <p>Joke!</p>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}
