import { GameState } from '../game';

/* eslint-disable-next-line */
export interface GameEndResultProps {
  gameState: GameState;
  noOfGuesses: number;
  answer: string;
  onRestart: () => void;
}

export function GameEndResult({
  gameState,
  noOfGuesses,
  answer,
  onRestart,
}: GameEndResultProps) {
  const restartButton = (
    <button className="restart" onClick={onRestart} autoFocus>
      <span className="restart-icon">↺</span> Restart
    </button>
  );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  let gameResult: JSX.Element = <></>;
  if (gameState === GameState.WIN) {
    gameResult = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{noOfGuesses === 1 ? ' 1 guess' : ` ${noOfGuesses} guesses`}</strong>.
        </p>
        {restartButton}
      </div>
    );
  }
  if (gameState === GameState.LOSE) {
    gameResult = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        {restartButton}
      </div>
    );
  }

  return gameResult;
}

export default GameEndResult;
