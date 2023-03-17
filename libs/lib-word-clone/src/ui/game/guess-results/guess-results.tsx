import { range } from '@joy/shared/utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';
import Guess from './guess/guess';

/* eslint-disable-next-line */
export interface GuessBoardProps {
  guessedWords: string[];
  answer: string;
}

export function GuessResults({ guessedWords, answer }: GuessBoardProps) {
  const guesses = range(0, NUM_OF_GUESSES_ALLOWED).map(
    (value, index) => guessedWords[index] ?? null
  );

  return (
    <div className="guess-results">
      {guesses.map((word, index) => (
        <p key={index} className="guess">
          <Guess word={word} answer={answer} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
