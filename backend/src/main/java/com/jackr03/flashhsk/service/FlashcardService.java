package com.jackr03.flashhsk.service;

import com.jackr03.flashhsk.model.Flashcard;
import com.jackr03.flashhsk.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardService {

    // TODO: Uncomment this line after creating the FlashcardRepository
//    @Autowired
//    private FlashcardRepository flashcardRepository;

    public List<Flashcard> getAllFlashcards() {
        return List.of(
                new Flashcard("你好", "nǐ hǎo", "hello", 1),
                new Flashcard("我", "wǒ", "I", 1),
                new Flashcard("是", "shì", "am", 1),
                new Flashcard("美国人", "měi guó rén", "American", 1)
        );
    }
}
