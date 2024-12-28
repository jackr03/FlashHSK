import { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { ClipLoader } from 'react-spinners';

import useFetchFlashcards from '../../hooks/useFetchFlashcards.ts';

import Flashcards from './Flashcards.tsx';

const FlashcardsPage: React.FC = () => {
  const { flashcards, isLoading } = useFetchFlashcards();
  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    if (isLoading) {
      loadingBarRef.current?.continuousStart();
    } else {
      loadingBarRef.current?.complete();
    }
  }, [isLoading]);

  return (
    <>
      <LoadingBar color="red" height={4} ref={loadingBarRef} />

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        {isLoading ? (
          <ClipLoader color="red" size={50} data-testid="loading-indicator" />
        ) : (
          <Flashcards flashcards={flashcards} />
        )}
      </div>
    </>
  );
};

export default FlashcardsPage;
