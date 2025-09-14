package com.aitutor.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "quiz_results")
public class QuizResult {
    @Id
    private String id;

    @NotBlank(message = "User ID is required")
    private String userId;

    @NotBlank(message = "Quiz ID is required")
    private String quizId;

    @NotBlank(message = "Subject is required")
    private String subject;

    @NotNull(message = "Difficulty is required")
    private Quiz.Difficulty difficulty;

    @NotNull(message = "Score is required")
    @Min(value = 0, message = "Score cannot be negative")
    @Max(value = 100, message = "Score cannot exceed 100")
    private Double score;

    @NotNull(message = "Total questions is required")
    @Min(value = 1, message = "Total questions must be at least 1")
    private Integer totalQuestions;

    @NotNull(message = "Correct answers is required")
    @Min(value = 0, message = "Correct answers cannot be negative")
    private Integer correctAnswers;

    @NotNull(message = "Time taken is required")
    @Min(value = 0, message = "Time taken cannot be negative")
    private Integer timeTakenSeconds;

    private List<QuestionResult> questionResults;

    @CreatedDate
    private LocalDateTime completedAt;

    // Constructors
    public QuizResult() {}

    public QuizResult(String userId, String quizId, String subject, Quiz.Difficulty difficulty, 
                     Double score, Integer totalQuestions, Integer correctAnswers, 
                     Integer timeTakenSeconds, List<QuestionResult> questionResults) {
        this.userId = userId;
        this.quizId = quizId;
        this.subject = subject;
        this.difficulty = difficulty;
        this.score = score;
        this.totalQuestions = totalQuestions;
        this.correctAnswers = correctAnswers;
        this.timeTakenSeconds = timeTakenSeconds;
        this.questionResults = questionResults;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuizId() {
        return quizId;
    }

    public void setQuizId(String quizId) {
        this.quizId = quizId;
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

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

    public Integer getCorrectAnswers() {
        return correctAnswers;
    }

    public void setCorrectAnswers(Integer correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public Integer getTimeTakenSeconds() {
        return timeTakenSeconds;
    }

    public void setTimeTakenSeconds(Integer timeTakenSeconds) {
        this.timeTakenSeconds = timeTakenSeconds;
    }

    public List<QuestionResult> getQuestionResults() {
        return questionResults;
    }

    public void setQuestionResults(List<QuestionResult> questionResults) {
        this.questionResults = questionResults;
    }

    public LocalDateTime getCompletedAt() {
        return completedAt;
    }

    public void setCompletedAt(LocalDateTime completedAt) {
        this.completedAt = completedAt;
    }

    // Inner class for individual question results
    public static class QuestionResult {
        private String questionId;
        private Integer selectedAnswer;
        private Integer correctAnswer;
        private Boolean isCorrect;
        private Integer timeSpentSeconds;

        // Constructors
        public QuestionResult() {}

        public QuestionResult(String questionId, Integer selectedAnswer, Integer correctAnswer, 
                            Boolean isCorrect, Integer timeSpentSeconds) {
            this.questionId = questionId;
            this.selectedAnswer = selectedAnswer;
            this.correctAnswer = correctAnswer;
            this.isCorrect = isCorrect;
            this.timeSpentSeconds = timeSpentSeconds;
        }

        // Getters and Setters
        public String getQuestionId() {
            return questionId;
        }

        public void setQuestionId(String questionId) {
            this.questionId = questionId;
        }

        public Integer getSelectedAnswer() {
            return selectedAnswer;
        }

        public void setSelectedAnswer(Integer selectedAnswer) {
            this.selectedAnswer = selectedAnswer;
        }

        public Integer getCorrectAnswer() {
            return correctAnswer;
        }

        public void setCorrectAnswer(Integer correctAnswer) {
            this.correctAnswer = correctAnswer;
        }

        public Boolean getIsCorrect() {
            return isCorrect;
        }

        public void setIsCorrect(Boolean isCorrect) {
            this.isCorrect = isCorrect;
        }

        public Integer getTimeSpentSeconds() {
            return timeSpentSeconds;
        }

        public void setTimeSpentSeconds(Integer timeSpentSeconds) {
            this.timeSpentSeconds = timeSpentSeconds;
        }
    }
}
