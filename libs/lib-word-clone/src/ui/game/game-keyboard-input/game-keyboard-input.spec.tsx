import { render } from '@testing-library/react';

import GameKeyboardInput from './game-keyboard-input';

describe('GameKeyboardInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameKeyboardInput keyStatus={new Map<string, string>()} />
    );
    expect(baseElement).toBeTruthy();
  });
});
