import { render } from '@testing-library/react';
import { GameState } from '../game';

import GameEndResult from './game-end-result';

describe('GameEndResult', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameEndResult
        answer="WORLD"
        gameState={GameState.PLAY}
        noOfGuesses={0}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
