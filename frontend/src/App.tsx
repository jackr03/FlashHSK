import { useState, useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';

import sampleFlashcards from './data/sample-flashcards.json';
import { Flashcard } from './types';
import Flashcards from './components/Flashcards/Flashcards';

const App: React.FC = () => {
  const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';
  const flashcardsUrl = `${backendURL}/v1/flashcards`;

  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      loadingBarRef.current?.start();

      try {
        const response = await axios.get(flashcardsUrl);
        return response.data;
      } catch (error) {
        console.error('Error fetching flashcards: ', error);
        // Use sample flashcards if backend isn't running
        return sampleFlashcards;
      } finally {
        loadingBarRef.current?.complete();
        setIsLoading(false);
      }
    };

    fetchFlashcards()
      .then((flashcards) => setFlashcards(flashcards));
  }, [flashcardsUrl]);

  return (
    <>
      <LoadingBar
        color="red"
        height={4}
        ref={loadingBarRef}
      />

      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        {isLoading ? (
          <ClipLoader color="red" size={50} />
        ) : (
          <Flashcards flashcards={flashcards}/>
        )}
      </div>
    </>
  );
};

export default App;
