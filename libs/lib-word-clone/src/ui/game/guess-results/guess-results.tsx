import { range } from '@joy/shared/utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';
import Guess from './guess/guess';

/* eslint-disable-next-line */
export interface GuessBoardProps {
  guessedWords: string[];
  answer: string;
}

export function GuessResults({ guessedWords, answer }: GuessBoardProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          <Guess word={guessedWords[num]} answer={answer} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
