import { render } from '@testing-library/react';

import GameTextInput from './game-text-input';

describe('GameTextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameTextInput />);
    expect(baseElement).toBeTruthy();
  });
});
