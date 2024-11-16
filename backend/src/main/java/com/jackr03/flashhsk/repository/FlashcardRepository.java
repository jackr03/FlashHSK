package com.jackr03.flashhsk.repository;

import com.jackr03.flashhsk.model.Flashcard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {
    List<Flashcard> findByHskLevel(int hskLevel);
}
