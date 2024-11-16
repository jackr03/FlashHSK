package com.jackr03.flashhsk.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name = "flashcards")
@Getter
@Setter
public class Flashcard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String character;

    @NotEmpty
    private String pinyin;

    @NotEmpty
    private String translation;

    @Range(min = 1, max = 6)
    private int hskLevel;

    public Flashcard() {}

    public Flashcard(String character, String pinyin, String translation, int hskLevel) {
        this.character = character;
        this.pinyin = pinyin;
        this.translation = translation;
        this.hskLevel = hskLevel;
    }
}
