package com.aitutor.controller;

import com.aitutor.dto.ChatRequest;
import com.aitutor.dto.ChatResponse;
import com.aitutor.service.GeminiService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
public class AIController {
    
    private static final Logger logger = LoggerFactory.getLogger(AIController.class);
    
    @Autowired
    private GeminiService geminiService;
    
    @PostMapping("/chat")
    public ResponseEntity<?> chat(@Valid @RequestBody ChatRequest request) {
        try {
            logger.info("Received chat request for subject: {}", request.getSubject());
            
            ChatResponse response = geminiService.getChatResponse(request);
            
            if (response.isSuccess()) {
                logger.info("Successfully generated chat response");
                return ResponseEntity.ok(response);
            } else {
                logger.warn("Chat response generation failed");
                return ResponseEntity.status(500).body(response);
            }
            
        } catch (Exception e) {
            logger.error("Error processing chat request: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body(
                ChatResponse.error("Sorry, I'm experiencing technical difficulties. Please try again later.")
            );
        }
    }
    
    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getStatus() {
        try {
            Map<String, Object> status = new HashMap<>();
            status.put("aiServiceAvailable", true);
            status.put("geminiConfigured", geminiService.isGeminiConfigured());
            status.put("fallbackMode", !geminiService.isGeminiConfigured());
            status.put("message", geminiService.isGeminiConfigured() ? 
                "AI Tutor is powered by Google Gemini Pro" : 
                "AI Tutor is running in intelligent fallback mode");
            
            logger.info("AI service status checked - Gemini configured: {}", 
                geminiService.isGeminiConfigured());
            
            return ResponseEntity.ok(status);
            
        } catch (Exception e) {
            logger.error("Error checking AI service status: {}", e.getMessage(), e);
            Map<String, Object> errorStatus = new HashMap<>();
            errorStatus.put("aiServiceAvailable", false);
            errorStatus.put("error", "Unable to check AI service status");
            return ResponseEntity.status(500).body(errorStatus);
        }
    }
    
    @GetMapping("/topics")
    public ResponseEntity<Map<String, Object>> getSupportedTopics() {
        try {
            Map<String, Object> topics = new HashMap<>();
            topics.put("programming", new String[]{
                "Java", "Python", "C++", "JavaScript", "C#", "Go", "Rust"
            });
            topics.put("dataStructures", new String[]{
                "Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Hash Tables"
            });
            topics.put("algorithms", new String[]{
                "Sorting Algorithms", "Search Algorithms", "Graph Algorithms", 
                "Dynamic Programming", "Greedy Algorithms", "Divide and Conquer"
            });
            topics.put("concepts", new String[]{
                "Object-Oriented Programming", "Databases", "Operating Systems", 
                "Computer Networks", "Software Engineering", "System Design"
            });
            
            return ResponseEntity.ok(topics);
            
        } catch (Exception e) {
            logger.error("Error fetching supported topics: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body(Map.of("error", "Unable to fetch topics"));
        }
    }
    
    @PostMapping("/suggest")
    public ResponseEntity<?> getSuggestions(@RequestBody Map<String, String> request) {
        try {
            String topic = request.getOrDefault("topic", "general");
            String[] suggestions;
            
            switch (topic.toLowerCase()) {
                case "java":
                    suggestions = new String[]{
                        "Explain Java inheritance with examples",
                        "How does polymorphism work in Java?",
                        "What are Java interfaces vs abstract classes?",
                        "Explain Java exception handling"
                    };
                    break;
                case "data structures":
                    suggestions = new String[]{
                        "What's the difference between Stack and Queue?",
                        "How does a binary search tree work?",
                        "Explain time complexity of different sorting algorithms",
                        "When should I use a HashMap vs ArrayList?"
                    };
                    break;
                case "algorithms":
                    suggestions = new String[]{
                        "How does binary search work?",
                        "Explain the merge sort algorithm",
                        "What is dynamic programming?",
                        "How do you solve the fibonacci sequence efficiently?"
                    };
                    break;
                default:
                    suggestions = new String[]{
                        "What programming language should I learn first?",
                        "Explain object-oriented programming concepts",
                        "How do I improve my coding problem-solving skills?",
                        "What are the most important data structures to know?"
                    };
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("topic", topic);
            response.put("suggestions", suggestions);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            logger.error("Error generating suggestions: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body(Map.of("error", "Unable to generate suggestions"));
        }
    }
}
