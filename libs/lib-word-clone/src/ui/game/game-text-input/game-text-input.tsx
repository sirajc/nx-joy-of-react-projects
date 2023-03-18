import { useState } from 'react';

/* eslint-disable-next-line */
export interface GameTextInputProps {
  onAddGuess: (gussedWord: string) => void;
  gameOver: boolean;
  incorrectLetters: string;
}

export function GameTextInput({
  onAddGuess,
  gameOver,
  incorrectLetters,
}: GameTextInputProps) {
  const [guess, setGuess] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    onAddGuess(guess);
    setGuess('');
  }

  function handleChange(event: any) {
    const newGuess: string = event?.target.value.toUpperCase();

    // User is deleting the char so just let it go
    if (newGuess.length < guess.length) {
      setGuess(newGuess);
    }
    // Already guessed incorrect keys, don't let them add it
    if (incorrectLetters.includes(newGuess.slice(newGuess.length - 1))) {
      return;
    }
    setGuess(newGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        pattern="[A-Z]{5}"
        required
        disabled={gameOver}
      />
    </form>
  );
}

export default GameTextInput;
