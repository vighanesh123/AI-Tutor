package com.aitutor.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;
import java.time.LocalDate;
import java.util.Map;

@Document(collection = "daily_activities")
public class DailyActivity {
    @Id
    private String id;
    
    @Indexed
    private String userId;
    
    @Indexed
    private LocalDate date;
    
    private boolean hasLogin;
    private boolean hasQuiz;
    private boolean hasTutor;
    private boolean hasNotes;
    
    private int quizCount;
    private int tutorMessageCount;
    private int notesCount;
    
    private Map<String, Object> metadata;

    // Constructors
    public DailyActivity() {}

    public DailyActivity(String userId, LocalDate date) {
        this.userId = userId;
        this.date = date;
        this.hasLogin = false;
        this.hasQuiz = false;
        this.hasTutor = false;
        this.hasNotes = false;
        this.quizCount = 0;
        this.tutorMessageCount = 0;
        this.notesCount = 0;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public boolean isHasLogin() {
        return hasLogin;
    }

    public void setHasLogin(boolean hasLogin) {
        this.hasLogin = hasLogin;
    }

    public boolean isHasQuiz() {
        return hasQuiz;
    }

    public void setHasQuiz(boolean hasQuiz) {
        this.hasQuiz = hasQuiz;
    }

    public boolean isHasTutor() {
        return hasTutor;
    }

    public void setHasTutor(boolean hasTutor) {
        this.hasTutor = hasTutor;
    }

    public boolean isHasNotes() {
        return hasNotes;
    }

    public void setHasNotes(boolean hasNotes) {
        this.hasNotes = hasNotes;
    }

    public int getQuizCount() {
        return quizCount;
    }

    public void setQuizCount(int quizCount) {
        this.quizCount = quizCount;
    }

    public int getTutorMessageCount() {
        return tutorMessageCount;
    }

    public void setTutorMessageCount(int tutorMessageCount) {
        this.tutorMessageCount = tutorMessageCount;
    }

    public int getNotesCount() {
        return notesCount;
    }

    public void setNotesCount(int notesCount) {
        this.notesCount = notesCount;
    }

    public Map<String, Object> getMetadata() {
        return metadata;
    }

    public void setMetadata(Map<String, Object> metadata) {
        this.metadata = metadata;
    }

    // Helper methods
    public boolean hasAnyActivity() {
        return hasLogin || hasQuiz || hasTutor || hasNotes;
    }

    public int getActivityLevel() {
        int level = 0;
        if (hasLogin) level++;
        if (hasQuiz) level++;
        if (hasTutor) level++;
        if (hasNotes) level++;
        return Math.min(level, 4); // Cap at level 4
    }
}
