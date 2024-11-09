interface FlashcardButtonProps {
  text: string;
  onClick: () => void;
}

const FlashcardButton: React.FC<FlashcardButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="border-2 text-black bg-white rounded-xl shadow-md px-4 py-2 hover:bg-blue-200 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

interface FlashcardButtonsProps {
  showPreviousButton: boolean;
  showNextButton: boolean;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

// TODO: Use an icon library instead of text
const FlashcardButtons: React.FC<FlashcardButtonsProps> = ({
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
}) => {
  return (
    <div className="flex justify-between w-full py-4">
      {
        showPreviousButton ? (
          <FlashcardButton text="Prev" onClick={onPreviousClick} />
        ) : (
          <div></div>
        ) // Placeholder for layout
      }

      {showNextButton && <FlashcardButton text="Next" onClick={onNextClick} />}
    </div>
  );
};

export default FlashcardButtons;
