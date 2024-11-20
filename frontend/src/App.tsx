import { useState, useEffect } from "react";
import axios from "axios";
import sampleFlashcards from "./data/sample-flashcards.json";
import { Flashcard } from "./types";
import Flashcards from "./components/Flashcards/Flashcards";

const App: React.FC = () => {
  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";
  const flashcardsUrl = `${backendURL}/v1/flashcards`;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get(flashcardsUrl);
        return response.data;
      } catch (error) {
        console.error('Error fetching flashcards: ', error);
        // Use sample flashcards if backend isn't running
        return sampleFlashcards;
      }
    };

    fetchFlashcards()
      .then((flashcards) => {
        setFlashcards(flashcards);
        setIsLoading(false);
      })
  }, [flashcardsUrl]);

  // TODO: A loading spinner while flashcards is empty or loading
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <Flashcards flashcards={flashcards} />
    </div>
  );
};

export default App;
