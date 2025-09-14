package com.aitutor.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ChatRequest {
    
    @NotBlank(message = "Message is required")
    @Size(min = 1, max = 1000, message = "Message must be between 1 and 1000 characters")
    private String message;
    
    private String subject; // Optional: Java, Data Structures, etc.
    private String context; // Optional: Previous conversation context
    
    // Constructors
    public ChatRequest() {}
    
    public ChatRequest(String message) {
        this.message = message;
    }
    
    public ChatRequest(String message, String subject) {
        this.message = message;
        this.subject = subject;
    }
    
    // Getters and Setters
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public String getSubject() {
        return subject;
    }
    
    public void setSubject(String subject) {
        this.subject = subject;
    }
    
    public String getContext() {
        return context;
    }
    
    public void setContext(String context) {
        this.context = context;
    }
}
