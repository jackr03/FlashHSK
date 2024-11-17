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
          className="absolute left-0 border-2 text-black bg-white rounded-xl shadow-md px-4 py-2 hover:bg-blue-200 hover:text-white"
          onClick={onPreviousClick}
      >
        Prev
      </button>
      }

      {showNextButton && <button
          className="absolute right-0 border-2 text-black bg-white rounded-xl shadow-md px-4 py-2 hover:bg-blue-200 hover:text-white"
          onClick={onNextClick}
      >
        Next
      </button>
      }
    </div>
  );
};

export default FlashcardButtons;
