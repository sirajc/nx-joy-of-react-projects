import { range } from '@joy/shared/utils';
import { KEYBOARD_ROWS } from '../../../constants';

/* eslint-disable-next-line */
export interface GameKeyboardInputProps {
  keyStatus: Map<string, string>;
}

export function GameKeyboardInput({ keyStatus }: GameKeyboardInputProps) {
  return (
    <div className="game-keyboard">
      {range(1, 4).map((row) => (
        <p className="keyboard-row">
          {KEYBOARD_ROWS[row]?.split('').map((key) => (
            <button
              className={`keyboard-key ${keyStatus.get(key) ?? 'unused'}`}
            >
              {key}
            </button>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GameKeyboardInput;
