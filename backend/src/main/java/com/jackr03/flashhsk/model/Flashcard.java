package com.jackr03.flashhsk.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "flashcards")
@Getter
@Setter
public class Flashcard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String character;
    private String pinyin;
    private String translation;
    private int hskLevel;

    public Flashcard() {}

    public Flashcard(String character, String pinyin, String translation, int hskLevel) {
        this.character = character;
        this.pinyin = pinyin;
        this.translation = translation;
        this.hskLevel = hskLevel;
    }
}
