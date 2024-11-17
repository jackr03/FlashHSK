import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Flashcard } from "../../../types.ts";
import FlashcardInfo from "../FlashcardInfo.tsx";

const mockFlashcard: Flashcard = {
  character: '的',
  pinyin: 'de',
  translation: 'of',
  hskLevel: 1,
};

describe('FlashcardInfo', () => {
  it('should render the character and pinyin only when not flipped', () => {
    render(<FlashcardInfo flashcard={mockFlashcard} isFlipped={false} />);

    expect(screen.queryByTestId('character')).toBeInTheDocument();
    expect(screen.queryByTestId('pinyin')).toBeInTheDocument();
    expect(screen.queryByTestId('translation')).not.toBeInTheDocument();
  });


  it('should render the translation only when flipped', () => {
    render(<FlashcardInfo flashcard={mockFlashcard} isFlipped={true} />);

    expect(screen.queryByTestId('character')).not.toBeInTheDocument();
    expect(screen.queryByTestId('pinyin')).not.toBeInTheDocument();
    expect(screen.queryByTestId('translation')).toBeInTheDocument();
  });
});