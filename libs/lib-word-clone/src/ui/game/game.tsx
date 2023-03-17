import { sample } from '@joy/shared/utils';
import { useState } from 'react';
import { WORDS } from '../../data';
import GameTextInput from './game-text-input/game-text-input';
import GuessResults from './guess-results/guess-results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setGussedWords] = useState<string[]>([]);

  function handleAddGuess(guessedWord: string) {
    setGussedWords([...guessedWords, guessedWord]);
  }

  return (
    <>
      <GuessResults guessedWords={guessedWords} answer={answer} />
      <GameTextInput onAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
