import { range } from '@joy/shared/utils';
import { KEYBOARD_ROWS } from '../../../constants';
import { GameState } from '../game';

/* eslint-disable-next-line */
export interface GameKeyboardInputProps {
  keyStatus: Map<string, string>;
  onAddLetter: (key: string) => void;
  gameState: GameState;
}

export function GameKeyboardInput({
  keyStatus,
  onAddLetter,
  gameState,
}: GameKeyboardInputProps) {
  return (
    <div className="game-keyboard">
      {range(1, 4).map((row, index) => (
        <p key={index} className="keyboard-row">
          {KEYBOARD_ROWS[row]?.split('').map((key) => {
            const isIncorrect = keyStatus.get(key) === 'incorrect';
            return (
              <button
                key={key}
                onClick={() => onAddLetter(key)}
                className={`keyboard-key ${keyStatus.get(key) ?? 'unused'}`}
                disabled={isIncorrect || gameState !== GameState.PLAY}
                style={{
                  cursor: isIncorrect ? 'not-allowed' : 'pointer',
                }}
              >
                {key}
              </button>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default GameKeyboardInput;
