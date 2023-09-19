import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const addNewGuess = (newGuess) => {
    if (newGuess.value === answer) {
      setIsGameOver(true);
      setIsGameWon(true);
    }
    const updatedGuesses = [...guesses, newGuess];
    setGuesses(updatedGuesses);
    if (updatedGuesses.length >= 6) {
      setIsGameOver(true);
    }
  };

  return (
    <>
      <PreviousGuesses
        guesses={guesses}
        answer={answer}
        setIsGameOver={setIsGameOver}
      />
      <GuessForm addNewGuess={addNewGuess} isGameOver={isGameOver} />{" "}
      {isGameOver && isGameWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {isGameOver && !isGameWon && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>
            .
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
