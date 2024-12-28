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
    <div className="relative w-full py-4">
      {showPreviousButton && <button
          className="absolute left-0 rounded-xl border-2 bg-white px-4 py-2 text-black shadow-md hover:bg-blue-200 hover:text-white"
          onClick={onPreviousClick}
          data-testid="previous-button"
      >
        Prev
      </button>
      }

      {showNextButton && <button
          className="absolute right-0 rounded-xl border-2 bg-white px-4 py-2 text-black shadow-md hover:bg-blue-200 hover:text-white"
          onClick={onNextClick}
          data-testid="next-button"
      >
        Next
      </button>
      }
    </div>
  );
};

export default FlashcardButtons;
