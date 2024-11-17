import { Flashcard } from "../../types";

interface FlashcardInfoProps {
  flashcard: Flashcard;
  isFlipped: boolean;
}

const FlashcardInfo: React.FC<FlashcardInfoProps> = ({
  flashcard,
  isFlipped,
}) => {
  const { character, pinyin, translation } = flashcard;

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-md w-60 h-72">
      {isFlipped ? (
        <p className="text-xl" data-testid="translation">{translation}</p>
      ) : (
        <>
          <h2 className="text-xl mb-2" data-testid="pinyin">{pinyin}</h2>
          <h1 className="text-6xl font-bold mb-5" data-testid="character">{character}</h1>
        </>
      )}
    </div>
  );
};

export default FlashcardInfo;
