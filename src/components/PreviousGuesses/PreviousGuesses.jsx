import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
const PreviousGuesses = ({ guesses, answer, setIsGameOver }) => {
  const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const emptyRows = [];
  for (const i in range(0, remainingGuesses)) {
    emptyRows.push(<Guess key={crypto.randomUUID()} />);
  }
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.id} guessedWord={guess.value} answer={answer} />
      ))}
      {emptyRows}
    </div>
  );
};

export default PreviousGuesses;
