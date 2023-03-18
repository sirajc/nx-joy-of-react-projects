import { render } from '@testing-library/react';
import { GameState } from '../game';

import GameKeyboardInput from './game-keyboard-input';

describe('GameKeyboardInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameKeyboardInput
        keyStatus={new Map<string, string>()}
        onAddLetter={() => null}
        gameState={GameState.PLAY}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
