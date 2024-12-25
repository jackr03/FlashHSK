package com.jackr03.flashhsk.controller;

import com.jackr03.flashhsk.model.Flashcard;
import com.jackr03.flashhsk.service.FlashcardService;
import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Validated
@RestController
@RequestMapping("/v1/flashcards")
public class FlashcardController {

    @Autowired
    private FlashcardService flashcardService;

    @GetMapping
    public List<Flashcard> getFlashcards(
            @RequestParam(value = "hskLevel", required = false)
            @Range(min = 1, max = 6, message = "HSK level must be between 1 and 6")
            Integer hskLevel) {
        return hskLevel == null
                ? flashcardService.getAllFlashcards()
                : flashcardService.getFlashcardsByHskLevel(hskLevel);
    }
}
