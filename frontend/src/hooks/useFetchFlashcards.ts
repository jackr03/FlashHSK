import { useEffect, useState } from 'react';
import axios from 'axios';

import { Flashcard } from '../types.ts';
import sampleFlashcards from '../data/sample-flashcards.json';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

const useFetchFlashcards = () => {
  const flashcardsUrl = `${backendURL}/v1/flashcards`;

  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get(flashcardsUrl);
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // TODO: Handle error better
        console.error('Error fetching flashcards:', error.message);

        // Use sample flashcards if backend isn't running
        return sampleFlashcards;
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlashcards().then((flashcards) => setFlashcards(flashcards));
  }, [flashcardsUrl]);

  return { flashcards, isLoading };
};

export default useFetchFlashcards;
