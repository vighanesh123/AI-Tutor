package com.aitutor.dto;

import java.util.Map;

public class ActivityTrackingRequest {
    private String activityType; // login, quiz, tutor, notes
    private String date; // YYYY-MM-DD format
    private Map<String, Object> metadata;

    // Constructors
    public ActivityTrackingRequest() {}

    public ActivityTrackingRequest(String activityType, String date, Map<String, Object> metadata) {
        this.activityType = activityType;
        this.date = date;
        this.metadata = metadata;
    }

    // Getters and Setters
    public String getActivityType() {
        return activityType;
    }

    public void setActivityType(String activityType) {
        this.activityType = activityType;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Map<String, Object> getMetadata() {
        return metadata;
    }

    public void setMetadata(Map<String, Object> metadata) {
        this.metadata = metadata;
    }
}
