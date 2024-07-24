import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInputs, setGuessInputs] = React.useState([]);

  function handleGuessInput(currentGuess) {
    setGuessInputs([...guessInputs, currentGuess]);
  }

  return (
    <>
      <GuessInput handleGuessInput={handleGuessInput} />
      <GuessResults guessInputs={guessInputs} />
    </>
  );
}

export default Game;
