import { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { ClipLoader } from 'react-spinners';

import Flashcards from './components/Flashcards/Flashcards';
import useFetchFlashcards from './hooks/useFetchFlashcards.ts';

const App: React.FC = () => {
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

      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        {isLoading ? (
          <ClipLoader color="red" size={50} />
        ) : (
          <Flashcards flashcards={flashcards} />
        )}
      </div>
    </>
  );
};

export default App;
