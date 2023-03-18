import { sample } from '@joy/shared/utils';
import { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GameEndResult from './game-end-result/game-end-result';
import GameKeyboardInput from './game-keyboard-input/game-keyboard-input';
import GameTextInput from './game-text-input/game-text-input';
import GuessResults from './guess-results/guess-results';

export enum GameState {
  PLAY,
  WIN,
  LOSE,
}

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setGussedWords] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAY);

  const [keyStatus, setKeyStatus] = useState<Map<string, string>>(new Map());

  function handleAddGuess(guessedWord: string) {
    if (guessedWord === answer) {
      setGameState(GameState.WIN);
    } else if (guessedWords.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameState(GameState.LOSE);
    }
    setGussedWords([...guessedWords, guessedWord]);

    const nextKeyStatus = new Map(keyStatus);

    checkGuess(guessedWord, answer)?.map((guessStatus) =>
      nextKeyStatus.set(guessStatus.letter, guessStatus.status)
    );
    setKeyStatus(nextKeyStatus);
  }

  return (
    <>
      <GuessResults guessedWords={guessedWords} answer={answer} />
      <GameTextInput
        onAddGuess={handleAddGuess}
        gameOver={gameState !== GameState.PLAY}
      />
      <GameKeyboardInput keyStatus={keyStatus} />
      <GameEndResult
        gameState={gameState}
        noOfGuesses={guessedWords.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
