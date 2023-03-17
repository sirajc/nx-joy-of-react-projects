import { render } from '@testing-library/react';

import Guess from './guess';

describe('Guess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Guess />);
    expect(baseElement).toBeTruthy();
  });
});
