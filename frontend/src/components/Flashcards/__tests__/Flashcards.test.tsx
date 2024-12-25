import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Flashcard } from '../../../types.ts';
import Flashcards from '../Flashcards.tsx';

const mockFlashcards: Flashcard[] = [
  {
    character: '我',
    pinyin: 'wǒ',
    translation: 'I, me',
    hskLevel: 1
  },
  {
    character: '你',
    pinyin: 'nǐ',
    translation: 'you',
    hskLevel: 1
  },
  {
    character: '他',
    pinyin: 'tā',
    translation: 'he, him',
    hskLevel: 1
  }
];

describe('Flashcards', () => {
  beforeEach(() => {
    render(<Flashcards flashcards={mockFlashcards} />);
  });

  it('should render correctly', () => {
    const { asFragment } = render(<Flashcards flashcards={mockFlashcards} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the first flashcard by default', () => {
    expect(screen.getByTestId('character')).toHaveTextContent('我');
    expect(screen.getByTestId('pinyin')).toHaveTextContent('wǒ');
    expect(screen.queryByTestId('translation')).not.toBeInTheDocument();
  });

  it('should not show previous button when on first card', () => {
    expect(screen.queryByTestId('previous-button')).not.toBeInTheDocument();
    expect(screen.getByTestId('next-button')).toBeInTheDocument();
  });

  it('should flip the card then go to next card when clicked', async () => {
    expect(screen.getByTestId('character')).toHaveTextContent('我');

    await userEvent.click(screen.getByTestId('flashcard'));
    expect(screen.getByTestId('translation')).toHaveTextContent('I, me');

    await userEvent.click(screen.getByTestId('flashcard'));
    expect(screen.getByTestId('character')).toHaveTextContent('你');
  });

  it('should flip the card then go to next card when pressing space', async () => {
    expect(screen.getByTestId('character')).toHaveTextContent('我');

    await userEvent.keyboard(' ');
    expect(screen.getByTestId('translation')).toHaveTextContent('I, me');

    await userEvent.keyboard(' ');
    expect(screen.getByTestId('character')).toHaveTextContent('你');
  });

  it('should navigate between cards when pressing arrow keys', async () => {
    expect(screen.getByTestId('character')).toHaveTextContent('我');

    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByTestId('character')).toHaveTextContent('你');

    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.getByTestId('character')).toHaveTextContent('我');
  });
});