package com.aitutor.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "quizzes")
public class Quiz {
    @Id
    private String id;

    @NotBlank(message = "Title is required")
    @Size(min = 3, max = 100, message = "Title must be between 3 and 100 characters")
    private String title;

    @NotBlank(message = "Subject is required")
    private String subject;

    @NotNull(message = "Difficulty is required")
    private Quiz.Difficulty difficulty;

    @Size(min = 1, message = "At least one question is required")
    private List<Question> questions;

    private int timeLimit; // in minutes

    private String createdBy;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // Constructors
    public Quiz() {}

    public Quiz(String title, String subject, Quiz.Difficulty difficulty, List<Question> questions, int timeLimit, String createdBy) {
        this.title = title;
        this.subject = subject;
        this.difficulty = difficulty;
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.createdBy = createdBy;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Quiz.Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Quiz.Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public int getTimeLimit() {
        return timeLimit;
    }

    public void setTimeLimit(int timeLimit) {
        this.timeLimit = timeLimit;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    // Inner class for Question
    public static class Question {
        @NotBlank(message = "Question text is required")
        private String question;

        @Size(min = 2, max = 6, message = "Must have between 2 and 6 options")
        private List<String> options;

        @NotNull(message = "Correct answer is required")
        private int correctAnswer;

        private String explanation;

        // Constructors
        public Question() {}

        public Question(String question, List<String> options, int correctAnswer, String explanation) {
            this.question = question;
            this.options = options;
            this.correctAnswer = correctAnswer;
            this.explanation = explanation;
        }

        // Getters and Setters
        public String getQuestion() {
            return question;
        }

        public void setQuestion(String question) {
            this.question = question;
        }

        public List<String> getOptions() {
            return options;
        }

        public void setOptions(List<String> options) {
            this.options = options;
        }

        public int getCorrectAnswer() {
            return correctAnswer;
        }

        public void setCorrectAnswer(int correctAnswer) {
            this.correctAnswer = correctAnswer;
        }

        public String getExplanation() {
            return explanation;
        }

        public void setExplanation(String explanation) {
            this.explanation = explanation;
        }
    }

    // Enum for difficulty
    public enum Difficulty {
        EASY, MEDIUM, HARD
    }
}
