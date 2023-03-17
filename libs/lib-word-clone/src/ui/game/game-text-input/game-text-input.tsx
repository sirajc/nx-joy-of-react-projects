import { useState } from 'react';

/* eslint-disable-next-line */
export interface GameTextInputProps {
  onAddGuess: (gussedWord: string) => void
}

export function GameTextInput({ onAddGuess }: GameTextInputProps) {
  const [guess, setGuess] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    console.log({ guess });
    onAddGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event?.target.value.toUpperCase())}
        maxLength={5}
        pattern="[A-Z]{5}"
      />
    </form>
  );
}

export default GameTextInput;
