import { checkGuess } from "../../game-helpers";

let letters = [];
const Guess = ({ guessedWord = "", answer }) => {
  if (guessedWord.length > 0) {
    letters = checkGuess(guessedWord, answer);
  } else {
    letters = [
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ];
  }
  return (
    <div className="guess-results">
      <p className="guess">
        {letters.map((letter) => (
          <span key={crypto.randomUUID()} className={`cell ${letter.status}`}>
            {letter.letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Guess;
