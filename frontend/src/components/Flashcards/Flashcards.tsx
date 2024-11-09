import { useCallback, useEffect, useState } from "react";
import { Flashcard } from "../../types";
import FlashcardButtons from "./FlashcardButtons";
import FlashcardInfo from "./FlashcardInfo";

interface FlashcardProps {
  flashcards: Flashcard[];
}

const Flashcards: React.FC<FlashcardProps> = ({ flashcards }) => {
  // TODO: Load flashcards from an API
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [currentCardIsFlipped, setCurrentCardIsFlipped] =
    useState<boolean>(false);

  const showPreviousButton = currentCardIndex > 0;
  const showNextButton = currentCardIndex < flashcards.length - 1;

  const handleCardClick = useCallback(() => {
    setCurrentCardIsFlipped((currentCardIsFlipped) => {
      // If the card is already flipped, move to the next card
      if (currentCardIsFlipped) {
        setCurrentCardIndex((currentCardIndex) =>
          Math.min(flashcards.length - 1, currentCardIndex + 1)
        );
      }

      return !currentCardIsFlipped;
    });
  }, [flashcards]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        handleCardClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCardClick]);

  const handlePreviousClick = () => {
    setCurrentCardIndex((currentCardIndex) =>
      Math.max(0, currentCardIndex - 1)
    );
    setCurrentCardIsFlipped(false);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((currentCardIndex) =>
      Math.min(flashcards.length - 1, currentCardIndex + 1)
    );
    setCurrentCardIsFlipped(false);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <button onClick={handleCardClick}>
        <FlashcardInfo
          flashcard={flashcards[currentCardIndex]}
          isFlipped={currentCardIsFlipped}
        />
      </button>

      <FlashcardButtons
        showPreviousButton={showPreviousButton}
        showNextButton={showNextButton}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </section>
  );
};

export default Flashcards;
