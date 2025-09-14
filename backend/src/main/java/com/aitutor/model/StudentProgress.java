package com.aitutor.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Min;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Document(collection = "student_progress")
public class StudentProgress {
    @Id
    private String id;

    @NotBlank(message = "User ID is required")
    private String userId;

    // Overall Statistics
    @NotNull(message = "Total study time is required")
    @Min(value = 0, message = "Total study time cannot be negative")
    private Long totalStudyTimeMinutes;

    @NotNull(message = "Total quizzes completed is required")
    @Min(value = 0, message = "Total quizzes completed cannot be negative")
    private Integer totalQuizzesCompleted;

    @NotNull(message = "Average score is required")
    @Min(value = 0, message = "Average score cannot be negative")
    private Double averageScore;

    @NotNull(message = "Current streak is required")
    @Min(value = 0, message = "Current streak cannot be negative")
    private Integer currentStreak;

    @NotNull(message = "Longest streak is required")
    @Min(value = 0, message = "Longest streak cannot be negative")
    private Integer longestStreak;

    private LocalDate lastStudyDate;

    // Subject-wise Progress
    private Map<String, SubjectProgress> subjectProgress;

    // Monthly Activity
    private List<MonthlyActivity> monthlyActivity;

    // Study Calendar (dates when user studied)
    private List<LocalDate> studyDates;

    // Achievements
    private List<Achievement> achievements;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // Constructors
    public StudentProgress() {}

    public StudentProgress(String userId) {
        this.userId = userId;
        this.totalStudyTimeMinutes = 0L;
        this.totalQuizzesCompleted = 0;
        this.averageScore = 0.0;
        this.currentStreak = 0;
        this.longestStreak = 0;
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

    public Long getTotalStudyTimeMinutes() {
        return totalStudyTimeMinutes;
    }

    public void setTotalStudyTimeMinutes(Long totalStudyTimeMinutes) {
        this.totalStudyTimeMinutes = totalStudyTimeMinutes;
    }

    public Integer getTotalQuizzesCompleted() {
        return totalQuizzesCompleted;
    }

    public void setTotalQuizzesCompleted(Integer totalQuizzesCompleted) {
        this.totalQuizzesCompleted = totalQuizzesCompleted;
    }

    public Double getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(Double averageScore) {
        this.averageScore = averageScore;
    }

    public Integer getCurrentStreak() {
        return currentStreak;
    }

    public void setCurrentStreak(Integer currentStreak) {
        this.currentStreak = currentStreak;
    }

    public Integer getLongestStreak() {
        return longestStreak;
    }

    public void setLongestStreak(Integer longestStreak) {
        this.longestStreak = longestStreak;
    }

    public LocalDate getLastStudyDate() {
        return lastStudyDate;
    }

    public void setLastStudyDate(LocalDate lastStudyDate) {
        this.lastStudyDate = lastStudyDate;
    }

    public Map<String, SubjectProgress> getSubjectProgress() {
        return subjectProgress;
    }

    public void setSubjectProgress(Map<String, SubjectProgress> subjectProgress) {
        this.subjectProgress = subjectProgress;
    }

    public List<MonthlyActivity> getMonthlyActivity() {
        return monthlyActivity;
    }

    public void setMonthlyActivity(List<MonthlyActivity> monthlyActivity) {
        this.monthlyActivity = monthlyActivity;
    }

    public List<LocalDate> getStudyDates() {
        return studyDates;
    }

    public void setStudyDates(List<LocalDate> studyDates) {
        this.studyDates = studyDates;
    }

    public List<Achievement> getAchievements() {
        return achievements;
    }

    public void setAchievements(List<Achievement> achievements) {
        this.achievements = achievements;
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

    // Inner class for Subject Progress
    public static class SubjectProgress {
        private String subject;
        private Integer quizzesCompleted;
        private Integer totalQuizzes;
        private Double averageScore;
        private Long studyTimeMinutes;
        private LocalDateTime lastStudied;

        // Constructors
        public SubjectProgress() {}

        public SubjectProgress(String subject) {
            this.subject = subject;
            this.quizzesCompleted = 0;
            this.totalQuizzes = 0;
            this.averageScore = 0.0;
            this.studyTimeMinutes = 0L;
        }

        // Getters and Setters
        public String getSubject() {
            return subject;
        }

        public void setSubject(String subject) {
            this.subject = subject;
        }

        public Integer getQuizzesCompleted() {
            return quizzesCompleted;
        }

        public void setQuizzesCompleted(Integer quizzesCompleted) {
            this.quizzesCompleted = quizzesCompleted;
        }

        public Integer getTotalQuizzes() {
            return totalQuizzes;
        }

        public void setTotalQuizzes(Integer totalQuizzes) {
            this.totalQuizzes = totalQuizzes;
        }

        public Double getAverageScore() {
            return averageScore;
        }

        public void setAverageScore(Double averageScore) {
            this.averageScore = averageScore;
        }

        public Long getStudyTimeMinutes() {
            return studyTimeMinutes;
        }

        public void setStudyTimeMinutes(Long studyTimeMinutes) {
            this.studyTimeMinutes = studyTimeMinutes;
        }

        public LocalDateTime getLastStudied() {
            return lastStudied;
        }

        public void setLastStudied(LocalDateTime lastStudied) {
            this.lastStudied = lastStudied;
        }
    }

    // Inner class for Monthly Activity
    public static class MonthlyActivity {
        private Integer year;
        private Integer month;
        private Integer quizzesCompleted;
        private Long studyTimeMinutes;

        // Constructors
        public MonthlyActivity() {}

        public MonthlyActivity(Integer year, Integer month) {
            this.year = year;
            this.month = month;
            this.quizzesCompleted = 0;
            this.studyTimeMinutes = 0L;
        }

        // Getters and Setters
        public Integer getYear() {
            return year;
        }

        public void setYear(Integer year) {
            this.year = year;
        }

        public Integer getMonth() {
            return month;
        }

        public void setMonth(Integer month) {
            this.month = month;
        }

        public Integer getQuizzesCompleted() {
            return quizzesCompleted;
        }

        public void setQuizzesCompleted(Integer quizzesCompleted) {
            this.quizzesCompleted = quizzesCompleted;
        }

        public Long getStudyTimeMinutes() {
            return studyTimeMinutes;
        }

        public void setStudyTimeMinutes(Long studyTimeMinutes) {
            this.studyTimeMinutes = studyTimeMinutes;
        }
    }

    // Inner class for Achievement
    public static class Achievement {
        private String id;
        private String title;
        private String description;
        private String category;
        private Boolean earned;
        private LocalDateTime earnedAt;

        // Constructors
        public Achievement() {}

        public Achievement(String id, String title, String description, String category) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
            this.earned = false;
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

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public Boolean getEarned() {
            return earned;
        }

        public void setEarned(Boolean earned) {
            this.earned = earned;
        }

        public LocalDateTime getEarnedAt() {
            return earnedAt;
        }

        public void setEarnedAt(LocalDateTime earnedAt) {
            this.earnedAt = earnedAt;
        }
    }
}
