import { render } from '@testing-library/react';

import GameTextInput from './game-text-input';

describe('GameTextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameTextInput
        onAddGuess={() => null}
        gameOver={false}
        incorrectLetters={''}
        appendLetter={''}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
