import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import FlashcardButtons from '../FlashcardButtons.tsx';

describe('FlashcardButtons', () => {
  it('renders both buttons correctly', () => {
    render(<FlashcardButtons
      showPreviousButton={true}
      showNextButton={true}
      onPreviousClick={() => {}}
      onNextClick={() => {}}
    />);

    expect(screen.queryByTestId('previous-button')).toBeInTheDocument();
    expect(screen.queryByTestId('next-button')).toBeInTheDocument();
  });

  it('only renders previous button when showNextButton is false', () => {
    render(<FlashcardButtons
      showPreviousButton={true}
      showNextButton={false}
      onPreviousClick={() => {}}
      onNextClick={() => {}}
    />);

    expect(screen.queryByTestId('previous-button')).toBeInTheDocument();
    expect(screen.queryByTestId('next-button')).not.toBeInTheDocument();
  });

  it('only renders next button when showPreviousButton is false', () => {
    render(<FlashcardButtons
      showPreviousButton={false}
      showNextButton={true}
      onPreviousClick={() => {}}
      onNextClick={() => {}}
    />);

    expect(screen.queryByTestId('previous-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('next-button')).toBeInTheDocument();
  });
});