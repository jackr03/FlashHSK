import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import axios from 'axios';

import FlashcardsPage from '../FlashcardsPage.tsx';
import { Flashcard } from '../../../types.ts';

describe('FlashcardsPage', () => {
  it('should render loading indicators while fetching data', () => {
    render(<FlashcardsPage />);

    // TODO: Check for progress bar too
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    expect(screen.queryByTestId('flashcards')).not.toBeInTheDocument();
  });

  it('should render flashcards when data is fetched', async () => {
    const mockFlashcards: Flashcard[] = [
      {
        character: '我',
        pinyin: 'wǒ',
        translation: 'I, me',
        hskLevel: 1,
      },
    ];

    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockFlashcards });
    render(<FlashcardsPage />);

    await waitFor(() => expect(screen.getByText('我')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('wǒ')).toBeInTheDocument());
  });
});
