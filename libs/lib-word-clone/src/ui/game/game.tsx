import { sample } from '@joy/shared/utils';
import { WORDS } from '../../data';
import GameTextInput from './game-text-input/game-text-input';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <GameTextInput />;
}

export default Game;
