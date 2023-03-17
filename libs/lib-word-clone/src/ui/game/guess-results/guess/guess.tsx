import { range } from '@joy/shared/utils';
import { checkGuess } from '../../../../game-helpers';
import { GUESS_WORD_LENGTH } from '../../../../constants';

export interface GuessProps {
  word?: string;
  answer: string;
}

export function Guess({ word, answer }: GuessProps) {
  const guesses =
    checkGuess(word, answer) ??
    range(0, GUESS_WORD_LENGTH).map(() => {
      return { letter: '', status: '' };
    });

  return (
    <>
      {guesses.map((guess, index) => (
        <span key={index} className={`cell ${guess.status}`}>
          {guess.letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
