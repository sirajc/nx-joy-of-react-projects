import { render } from '@testing-library/react';

import GuessResults from './guess-results';

describe('GuessResults', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GuessResults guessedWords={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
