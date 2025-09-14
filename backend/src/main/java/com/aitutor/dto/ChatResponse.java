package com.aitutor.dto;

import java.time.LocalDateTime;

public class ChatResponse {
    
    private String response;
    private String messageId;
    private LocalDateTime timestamp;
    private boolean success;
    private String subject;
    
    // Constructors
    public ChatResponse() {
        this.timestamp = LocalDateTime.now();
    }
    
    public ChatResponse(String response) {
        this.response = response;
        this.success = true;
        this.timestamp = LocalDateTime.now();
        this.messageId = generateMessageId();
    }
    
    public ChatResponse(String response, String subject) {
        this.response = response;
        this.subject = subject;
        this.success = true;
        this.timestamp = LocalDateTime.now();
        this.messageId = generateMessageId();
    }
    
    private String generateMessageId() {
        return "msg_" + System.currentTimeMillis();
    }
    
    // Static factory methods
    public static ChatResponse success(String response) {
        return new ChatResponse(response);
    }
    
    public static ChatResponse success(String response, String subject) {
        return new ChatResponse(response, subject);
    }
    
    public static ChatResponse error(String errorMessage) {
        ChatResponse response = new ChatResponse();
        response.response = errorMessage;
        response.success = false;
        response.messageId = response.generateMessageId();
        return response;
    }
    
    // Getters and Setters
    public String getResponse() {
        return response;
    }
    
    public void setResponse(String response) {
        this.response = response;
    }
    
    public String getMessageId() {
        return messageId;
    }
    
    public void setMessageId(String messageId) {
        this.messageId = messageId;
    }
    
    public LocalDateTime getTimestamp() {
        return timestamp;
    }
    
    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
    
    public boolean isSuccess() {
        return success;
    }
    
    public void setSuccess(boolean success) {
        this.success = success;
    }
    
    public String getSubject() {
        return subject;
    }
    
    public void setSubject(String subject) {
        this.subject = subject;
    }
}
