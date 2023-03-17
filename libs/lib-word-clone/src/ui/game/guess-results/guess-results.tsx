import styles from './guess-board.module.css';

/* eslint-disable-next-line */
export interface GuessBoardProps {
  guessedWords: string[];
}

export function GuessResults({
  guessedWords,
}: GuessBoardProps) {
  return (
    <div className="guess-results">
      {guessedWords.map((word, index) => (
        <p key={index} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
