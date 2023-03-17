import { range } from '@joy/shared/utils';
import { GUESS_WORD_LENGTH } from '../../../../constants';

export interface GuessProps {
  word?: string;
}

export function Guess({ word }: GuessProps) {
  const letters = word?.split('') ?? range(0, GUESS_WORD_LENGTH).map(() => '');

  return (
    <>
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
