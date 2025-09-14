package com.aitutor.service;

import com.aitutor.dto.ChatRequest;
import com.aitutor.dto.ChatResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeminiService {
    
    private static final Logger logger = LoggerFactory.getLogger(GeminiService.class);
    
    @Value("${gemini.api.key:AIzaSyBbxtmYMyGr46DdvkWVEWJY0zepzGYTnow}")
    private String apiKey;
    
    @Value("${gemini.api.model:gemini-2.0-flash}")
    private String model;
    
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    
    public GeminiService() {
        // Configure RestTemplate with timeout
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(10000);
        factory.setReadTimeout(30000);
        this.restTemplate = new RestTemplate(factory);
        this.objectMapper = new ObjectMapper();
    }
    
    public ChatResponse getChatResponse(ChatRequest request) {
        try {
            logger.info("Processing chat request with Gemini API for subject: {}", request.getSubject());
            
            // If Gemini is not configured, return fallback response
            if (!isGeminiConfigured()) {
                logger.warn("Gemini API not configured, returning fallback response");
                return getFallbackResponse(request);
            }
            
            // Build prompt for tutoring context
            String prompt = buildTutoringPrompt(request);
            
            // Create request body for Gemini API
            Map<String, Object> requestBody = createGeminiRequest(prompt);
            
            // Set headers
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            
            // Create HTTP entity
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
            
            // Make API call to Gemini
            String url = String.format("https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent?key=%s", 
                    model, apiKey);
            
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            
            // Parse response
            if (response.getStatusCode() == HttpStatus.OK) {
                String aiResponse = extractResponseText(response.getBody());
                logger.info("Successfully generated Gemini response for subject: {}", request.getSubject());
                return ChatResponse.success(aiResponse, request.getSubject());
            } else {
                logger.warn("Gemini API returned non-200 status: {}", response.getStatusCode());
                return getFallbackResponse(request);
            }
            
        } catch (Exception e) {
            logger.error("Error calling Gemini API: {}", e.getMessage(), e);
            return ChatResponse.error("I'm having trouble connecting to my AI brain right now. Please try again in a moment!");
        }
    }
    
    private Map<String, Object> createGeminiRequest(String prompt) {
        Map<String, Object> request = new HashMap<>();
        
        // Create contents array
        Map<String, Object> content = new HashMap<>();
        Map<String, String> part = new HashMap<>();
        part.put("text", prompt);
        content.put("parts", List.of(part));
        
        request.put("contents", List.of(content));
        
        // Add generation config for better responses
        Map<String, Object> generationConfig = new HashMap<>();
        generationConfig.put("temperature", 0.7);
        generationConfig.put("topK", 40);
        generationConfig.put("topP", 0.95);
        generationConfig.put("maxOutputTokens", 1024);
        
        request.put("generationConfig", generationConfig);
        
        return request;
    }
    
    private String extractResponseText(String jsonResponse) throws Exception {
        try {
            JsonNode rootNode = objectMapper.readTree(jsonResponse);
            JsonNode candidates = rootNode.get("candidates");
            
            if (candidates != null && candidates.isArray() && candidates.size() > 0) {
                JsonNode firstCandidate = candidates.get(0);
                JsonNode content = firstCandidate.get("content");
                
                if (content != null) {
                    JsonNode parts = content.get("parts");
                    
                    if (parts != null && parts.isArray() && parts.size() > 0) {
                        JsonNode firstPart = parts.get(0);
                        JsonNode textNode = firstPart.get("text");
                        
                        if (textNode != null) {
                            return textNode.asText();
                        }
                    }
                }
            }
            
            logger.warn("Gemini response structure unexpected: {}", jsonResponse);
            throw new RuntimeException("Unable to extract response text from Gemini API response");
            
        } catch (Exception e) {
            logger.error("Error parsing Gemini response: {}", e.getMessage());
            throw new RuntimeException("Failed to parse Gemini API response: " + e.getMessage());
        }
    }
    
    private String buildTutoringPrompt(ChatRequest request) {
        StringBuilder prompt = new StringBuilder();
        
        prompt.append("You are an expert Computer Science tutor specializing in helping students learn programming and CS concepts. ");
        prompt.append("Your teaching style is friendly, encouraging, and explains complex topics in simple terms with examples. ");
        prompt.append("Always provide practical examples and encourage hands-on learning. ");
        prompt.append("If asked about topics outside Computer Science, politely redirect to CS topics. ");
        
        if (request.getSubject() != null && !request.getSubject().isEmpty()) {
            prompt.append("The current topic focus is: ").append(request.getSubject()).append(". ");
        }
        
        prompt.append("Keep responses concise but informative, usually 2-4 sentences unless a detailed explanation is specifically requested. ");
        prompt.append("Use markdown formatting for code examples and structure your responses clearly. ");
        
        // Add context if provided
        if (request.getContext() != null && !request.getContext().isEmpty()) {
            prompt.append("\n\nPrevious context: ").append(request.getContext());
        }
        
        prompt.append("\n\nStudent's question: ").append(request.getMessage());
        
        return prompt.toString();
    }
    
    private ChatResponse getFallbackResponse(ChatRequest request) {
        String message = request.getMessage().toLowerCase();
        String context = request.getContext() != null ? request.getContext().toLowerCase() : "";
        String response;
        
        // Check if this seems like a follow-up question based on context
        boolean isFollowUp = context.contains("ai:") && (message.contains("can you") || message.contains("what about") || 
                           message.contains("how about") || message.contains("explain") || message.contains("tell me more"));
        
        // Intelligent fallback responses based on keywords and context
        if (message.contains("inheritance") || message.contains("extends")) {
            response = "**Java Inheritance** is a fundamental OOP concept! 🌳\n\n" +
                      "Inheritance allows a class to inherit properties and methods from another class:\n\n" +
                      "```java\n" +
                      "class Animal {\n" +
                      "    protected String name;\n" +
                      "    public void eat() { ... }\n" +
                      "}\n\n" +
                      "class Dog extends Animal {\n" +
                      "    public void bark() { ... }\n" +
                      "}\n" +
                      "```\n\n" +
                      "**Key Benefits:**\n" +
                      "• **Code Reusability** - Don't repeat yourself\n" +
                      "• **Method Overriding** - Customize inherited behavior\n" +
                      "• **Polymorphism** - Treat objects of different classes uniformly\n\n" +
                      "Would you like me to explain method overriding or polymorphism next?";
        } else if (message.contains("java") || context.contains("java")) {
            if (isFollowUp) {
                response = "Absolutely! Java has many powerful features. Here are some more advanced concepts:\n\n" +
                          "• **Interfaces** - Contracts that classes must implement\n" +
                          "• **Abstract Classes** - Templates for other classes\n" +
                          "• **Exception Handling** - try/catch blocks for error management\n" +
                          "• **Collections** - ArrayList, HashMap, HashSet\n" +
                          "• **Multithreading** - Running multiple tasks concurrently\n\n" +
                          "Which of these topics interests you most?";
            } else {
                response = "Java is a powerful object-oriented programming language! 🚀\n\n" +
                          "Key concepts to master:\n" +
                          "• **Classes & Objects** - Building blocks of Java\n" +
                          "• **Inheritance** - Code reusability with `extends`\n" +
                          "• **Polymorphism** - One interface, multiple implementations\n" +
                          "• **Encapsulation** - Data hiding with private/public\n\n" +
                          "Would you like me to explain any of these concepts in detail?";
            }
        } else if (message.contains("stack") && message.contains("queue")) {
            response = "Great question about **Stacks vs Queues**! 📚\n\n" +
                      "**Stack (LIFO - Last In, First Out):**\n" +
                      "• Like a stack of plates - add/remove from top\n" +
                      "• Operations: `push()`, `pop()`, `peek()`\n" +
                      "• Use cases: Undo functionality, expression evaluation\n\n" +
                      "**Queue (FIFO - First In, First Out):**\n" +
                      "• Like a line at a store - first person served first\n" +
                      "• Operations: `enqueue()`, `dequeue()`, `front()`\n" +
                      "• Use cases: Task scheduling, breadth-first search\n\n" +
                      "Think of a stack like browser history and a queue like a printer queue!";
        } else if (message.contains("data structure") || context.contains("data structure")) {
            response = "Data structures are the foundation of efficient programming! 📊\n\n" +
                      "Common structures to learn:\n" +
                      "• **Arrays** - Fixed-size, indexed elements (O(1) access)\n" +
                      "• **Linked Lists** - Dynamic, connected nodes (O(1) insertion)\n" +
                      "• **Stacks** - LIFO operations (undo, function calls)\n" +
                      "• **Queues** - FIFO operations (scheduling, BFS)\n" +
                      "• **Trees** - Hierarchical data (file systems, databases)\n" +
                      "• **Graphs** - Networks of connected nodes (social networks)\n\n" +
                      "Which data structure would you like to explore first?";
        } else if (message.contains("algorithm") || context.contains("algorithm")) {
            response = "Algorithms are step-by-step problem-solving procedures! 🧩\n\n" +
                      "Essential algorithm categories:\n" +
                      "• **Sorting** - Bubble O(n²), Merge O(n log n), Quick Sort\n" +
                      "• **Searching** - Linear O(n), Binary Search O(log n)\n" +
                      "• **Graph Algorithms** - BFS, DFS, Dijkstra's shortest path\n" +
                      "• **Dynamic Programming** - Breaking down complex problems\n\n" +
                      "**Big O Notation** helps us measure algorithm efficiency!\n\n" +
                      "What specific algorithm would you like to explore?";
        } else if (message.contains("python") || context.contains("python")) {
            response = "Python is perfect for beginners and powerful for experts! 🐍\n\n" +
                      "Python strengths:\n" +
                      "• **Simple syntax** - Easy to read and write\n" +
                      "• **Versatile** - Web dev, AI, data science, automation\n" +
                      "• **Rich libraries** - NumPy, Pandas, Django, Flask\n" +
                      "• **Great for learning** - Focus on logic, not syntax\n\n" +
                      "Want to see some Python examples or discuss specific concepts?";
        } else if (isFollowUp) {
            response = "That's a great follow-up question! 👍\n\n" +
                      "Based on our conversation, I can dive deeper into:\n" +
                      "• **Practical examples** with code samples\n" +
                      "• **Real-world applications** of these concepts\n" +
                      "• **Common interview questions** on this topic\n" +
                      "• **Best practices** and coding patterns\n\n" +
                      "What specific aspect would you like me to focus on?";
        } else {
            response = "Great question! I'm here to help you master Computer Science concepts. 🤓\n\n" +
                      "I can assist you with:\n" +
                      "• **Programming Languages** (Java, Python, C++, JavaScript)\n" +
                      "• **Data Structures & Algorithms**\n" +
                      "• **Object-Oriented Programming**\n" +
                      "• **Database Design**\n" +
                      "• **Software Engineering Principles**\n" +
                      "• **Computer Networks**\n" +
                      "• **Operating Systems**\n\n" +
                      "What specific topic would you like to explore today?";
        }
        
        logger.info("Using contextual fallback response for message: {}", request.getMessage());
        return ChatResponse.success(response, request.getSubject());
    }
    
    public boolean isGeminiConfigured() {
        return apiKey != null && !apiKey.equals("your-gemini-api-key-here") && !apiKey.isEmpty() && apiKey.startsWith("AIza");
    }
}
