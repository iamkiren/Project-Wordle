import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessInputs, setGuessInputs] = React.useState([]);

  function handleGuessInput(currentGuess) {
    const nextGuesses = [...guessInputs, currentGuess];
    setGuessInputs(nextGuesses);

    if (currentGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults guessInputs={guessInputs} answer={answer} />
      <GuessInput handleGuessInput={handleGuessInput} gameStatus={gameStatus} />

      {gameStatus === "won" && <WonBanner numOfGuesses={guessInputs.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
