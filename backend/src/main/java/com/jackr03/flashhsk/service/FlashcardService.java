package com.jackr03.flashhsk.service;

import com.jackr03.flashhsk.model.Flashcard;
import com.jackr03.flashhsk.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;

    public List<Flashcard> getAllFlashcards() {
        return flashcardRepository.findAll();
    }

    public List<Flashcard> getFlashcardsByHskLevel(int hskLevel) {
        return flashcardRepository.findByHskLevel(hskLevel);
    }
}
