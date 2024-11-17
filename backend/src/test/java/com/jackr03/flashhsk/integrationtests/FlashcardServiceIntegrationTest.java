package com.jackr03.flashhsk.integrationtests;

import com.jackr03.flashhsk.model.Flashcard;
import com.jackr03.flashhsk.repository.FlashcardRepository;
import com.jackr03.flashhsk.service.FlashcardService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest
@ActiveProfiles("test")
public class FlashcardServiceIntegrationTest {

    @Autowired
    private FlashcardService flashcardService;

    @Autowired
    private FlashcardRepository flashcardRepository;

    @BeforeEach
    void setup() {
        Flashcard flashcard1 = new Flashcard("我", "wǒ", "I", 1);
        Flashcard flashcard2 = new Flashcard("学", "xué", "to learn, study", 1);
        Flashcard flashcard3 = new Flashcard("吗", "ma", "(question particle for yes/no questions)", 1);
        Flashcard flashcard4 = new Flashcard("明天", "míngtiān", "tomorrow", 2);
        Flashcard flashcard5 = new Flashcard("朋友", "péngyǒu", "friend", 2);

        flashcardRepository.saveAll(List.of(flashcard1, flashcard2, flashcard3, flashcard4, flashcard5));
    }

    @AfterEach
    void cleanup() {
        flashcardRepository.deleteAll();
    }

    @Test
    void getAllFlashcards_returnsAllCards() {
        List<Flashcard> allFlashcards = flashcardService.getAllFlashcards();
        assert allFlashcards.size() == 5;
    }

    @Test
    void getFlashcardByHskLevel_returnsCardsByLevel() {
        List<Flashcard> level1Flashcards = flashcardService.getFlashcardsByHskLevel(1);
        List<Flashcard> level2Flashcards = flashcardService.getFlashcardsByHskLevel(2);

        assert level1Flashcards.size() == 3;
        assert level2Flashcards.size() == 2;
    }

    @Test
    void getFlashcardByHskLevel_returnsEmptyListForInvalidLevel() {
        List<Flashcard> level7Flashcards = flashcardService.getFlashcardsByHskLevel(7);
        assert level7Flashcards.isEmpty();
    }
}
