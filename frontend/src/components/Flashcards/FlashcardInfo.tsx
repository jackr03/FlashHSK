import { Flashcard } from '../../types';

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
    <div className="flex h-72 w-60 flex-col items-center justify-center rounded-xl bg-white p-8 shadow-md">
      {isFlipped ? (
        <p className="text-xl" data-testid="translation">{translation}</p>
      ) : (
        <>
          <h2 className="mb-2 text-xl" data-testid="pinyin">{pinyin}</h2>
          <h1 className="mb-5 text-6xl font-bold" data-testid="character">{character}</h1>
        </>
      )}
    </div>
  );
};

export default FlashcardInfo;
