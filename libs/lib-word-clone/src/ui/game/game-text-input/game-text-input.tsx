import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface GameTextInputProps {
  onAddGuess: (gussedWord: string) => void;
  gameOver: boolean;
  incorrectLetters: string;
  appendLetter: string;
}

export function GameTextInput({
  onAddGuess,
  gameOver,
  incorrectLetters,
  appendLetter,
}: GameTextInputProps) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  useEffect(() => {
    setTentativeGuess((prevGuess) => {
      const newTentativeGuess = prevGuess + appendLetter;
      if (newTentativeGuess.length === 5) {
        onAddGuess(newTentativeGuess);
        return '';
      }
      return newTentativeGuess;
    });
  }, [appendLetter, onAddGuess]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    onAddGuess(tentativeGuess);
    setTentativeGuess('');
  }

  function handleChange(event: any) {
    const newGuess: string = event?.target.value.toUpperCase();

    // User is deleting the char so just let it go
    if (newGuess.length < tentativeGuess.length) {
      setTentativeGuess(newGuess);
    }
    // Already guessed incorrect keys, don't let them add it
    if (incorrectLetters.includes(newGuess.slice(newGuess.length - 1))) {
      return;
    }
    setTentativeGuess(newGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
        disabled={gameOver}
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GameTextInput;
