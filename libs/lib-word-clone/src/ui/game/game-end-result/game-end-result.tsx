import { GameState } from '../game';

/* eslint-disable-next-line */
export interface GameEndResultProps {
  gameState: GameState;
  noOfGuesses: number;
  answer: string;
}

export function GameEndResult({
  gameState,
  noOfGuesses,
  answer,
}: GameEndResultProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  let gameResult: JSX.Element = <></>;
  if (gameState === GameState.WIN) {
    gameResult = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {noOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }
  if (gameState === GameState.LOSE) {
    gameResult = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return gameResult;
}

export default GameEndResult;
