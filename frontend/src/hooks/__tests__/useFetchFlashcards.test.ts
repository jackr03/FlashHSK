import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';

import useFetchFlashcards from '../useFetchFlashcards.ts';
import sampleFlashcards from '../../data/sample-flashcards.json';

describe('useFetchFlashcards', () => {
  it('should return flashcards from endpoint if successful', async () => {
    const mockFlashcards = [
      {
        character: '我',
        pinyin: 'wǒ',
        translation: 'I, me',
        hskLevel: 1,
      },
      {
        character: '你',
        pinyin: 'nǐ',
        translation: 'you',
        hskLevel: 1,
      },
      {
        character: '他',
        pinyin: 'tā',
        translation: 'he, him',
        hskLevel: 1,
      },
    ];

    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockFlashcards });

    const { result } = renderHook(() => useFetchFlashcards());

    expect(result.current.isLoading).toEqual(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    await waitFor(() =>
      expect(result.current.flashcards).toEqual(mockFlashcards),
    );
  });

  it('should return sample flashcards if endpoint fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValue(new Error('Failed to fetch'));

    const { result } = renderHook(() => useFetchFlashcards());

    expect(result.current.isLoading).toEqual(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    await waitFor(() =>
      expect(result.current.flashcards).toEqual(sampleFlashcards),
    );
  });
});
