import { useState, useEffect } from "react";
import axios from "axios";
import sampleFlashcards from "./data/sample-flashcards.json";
import { Flashcard } from "./types";
import Flashcards from "./components/Flashcards/Flashcards";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/flashcards");
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards: ', error);

        // ! Use sample flashcards if backend isn't running
        setFlashcards(sampleFlashcards);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

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
