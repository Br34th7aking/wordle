import React from "react";

const GuessForm = ({ addNewGuess, isGameOver }) => {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newGuess = { id: crypto.randomUUID(), value: guess };
        addNewGuess(newGuess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isGameOver}
        required
        value={guess}
        id="guess-input"
        type="text"
        pattern="([a-zA-Z]){5,5}"
        title="5 Letter word"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessForm;
