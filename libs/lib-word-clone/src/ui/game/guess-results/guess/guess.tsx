import { range } from '@joy/shared/utils';
import { checkGuess } from '../../../../game-helpers';
import { GUESS_WORD_LENGTH } from '../../../../constants';

export interface GuessProps {
  word?: string;
  answer: string;
}

export function Guess({ word, answer }: GuessProps) {
  const result = checkGuess(word, answer);

  return (
    <>
      {range(GUESS_WORD_LENGTH).map((num) => (
        <span key={num} className={`cell ${result?.[num].status ?? ''}`}>
          {result?.[num].letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
