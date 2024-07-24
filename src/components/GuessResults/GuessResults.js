import React from "react";

function GuessResults({ guessInputs }) {
  return (
    <div className="guess-results">
      {guessInputs.map((currentWord, index) => (
        <p className="guess" key={index}>
          {currentWord}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

<p className="guess">GUESS</p>;
