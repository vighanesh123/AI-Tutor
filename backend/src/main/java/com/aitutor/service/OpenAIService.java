package com.aitutor.service;

import com.aitutor.dto.ChatRequest;
import com.aitutor.dto.ChatResponse;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.service.OpenAiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Service
public class OpenAIService {
    
    private static final Logger logger = LoggerFactory.getLogger(OpenAIService.class);
    
    @Value("${openai.api.key}")
    private String apiKey;
    
    @Value("${openai.api.model:gpt-3.5-turbo}")
    private String model;
    
    @Value("${openai.api.max-tokens:500}")
    private Integer maxTokens;
    
    @Value("${openai.api.temperature:0.7}")
    private Double temperature;
    
    @Value("${openai.api.timeout:30000}")
    private Integer timeout;
    
    private OpenAiService openAiService;
    
    private void initializeService() {
        if (openAiService == null && apiKey != null && !apiKey.equals("your-openai-api-key-here")) {
            try {
                openAiService = new OpenAiService(apiKey, Duration.ofMillis(timeout));
                logger.info("OpenAI service initialized successfully");
            } catch (Exception e) {
                logger.error("Failed to initialize OpenAI service: {}", e.getMessage());
            }
        }
    }
    
    public ChatResponse getChatResponse(ChatRequest request) {
        try {
            initializeService();
            
            // If OpenAI is not configured, return fallback response
            if (openAiService == null) {
                logger.warn("OpenAI service not available, returning fallback response");
                return getFallbackResponse(request);
            }
            
            // Build system prompt for tutoring context
            String systemPrompt = buildSystemPrompt(request.getSubject());
            
            // Create chat messages
            List<ChatMessage> messages = new ArrayList<>();
            messages.add(new ChatMessage(ChatMessageRole.SYSTEM.value(), systemPrompt));
            
            // Add context if provided
            if (request.getContext() != null && !request.getContext().isEmpty()) {
                messages.add(new ChatMessage(ChatMessageRole.ASSISTANT.value(), 
                    "Previous context: " + request.getContext()));
            }
            
            // Add user message
            messages.add(new ChatMessage(ChatMessageRole.USER.value(), request.getMessage()));
            
            // Create completion request
            ChatCompletionRequest completionRequest = ChatCompletionRequest.builder()
                    .model(model)
                    .messages(messages)
                    .maxTokens(maxTokens)
                    .temperature(temperature)
                    .build();
            
            // Get response from OpenAI
            var completion = openAiService.createChatCompletion(completionRequest);
            
            if (completion.getChoices() != null && !completion.getChoices().isEmpty()) {
                String aiResponse = completion.getChoices().get(0).getMessage().getContent();
                logger.info("Successfully generated AI response for subject: {}", request.getSubject());
                return ChatResponse.success(aiResponse, request.getSubject());
            } else {
                logger.warn("OpenAI returned empty response");
                return getFallbackResponse(request);
            }
            
        } catch (Exception e) {
            logger.error("Error generating AI response: {}", e.getMessage(), e);
            return ChatResponse.error("I'm having trouble connecting to my AI brain right now. Please try again in a moment!");
        }
    }
    
    private String buildSystemPrompt(String subject) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("You are an expert Computer Science tutor specializing in helping students learn programming and CS concepts. ");
        prompt.append("Your teaching style is friendly, encouraging, and explains complex topics in simple terms with examples. ");
        prompt.append("Always provide practical examples and encourage hands-on learning. ");
        prompt.append("If asked about topics outside Computer Science, politely redirect to CS topics. ");
        
        if (subject != null && !subject.isEmpty()) {
            prompt.append("The current topic focus is: ").append(subject).append(". ");
        }
        
        prompt.append("Keep responses concise but informative, usually 2-4 sentences unless a detailed explanation is specifically requested. ");
        prompt.append("Use markdown formatting for code examples and structure your responses clearly.");
        
        return prompt.toString();
    }
    
    private ChatResponse getFallbackResponse(ChatRequest request) {
        String message = request.getMessage().toLowerCase();
        String response;
        
        // Intelligent fallback responses based on keywords
        if (message.contains("java")) {
            response = "Java is a powerful object-oriented programming language! 🚀\n\n" +
                      "Key concepts to master:\n" +
                      "• **Classes & Objects** - Building blocks of Java\n" +
                      "• **Inheritance** - Code reusability with `extends`\n" +
                      "• **Polymorphism** - One interface, multiple implementations\n" +
                      "• **Encapsulation** - Data hiding with private/public\n\n" +
                      "Would you like me to explain any of these concepts in detail?";
        } else if (message.contains("data structure")) {
            response = "Data structures are the foundation of efficient programming! 📊\n\n" +
                      "Common structures to learn:\n" +
                      "• **Arrays** - Fixed-size, indexed elements\n" +
                      "• **Linked Lists** - Dynamic, connected nodes\n" +
                      "• **Stacks** - LIFO (Last In, First Out)\n" +
                      "• **Queues** - FIFO (First In, First Out)\n" +
                      "• **Trees** - Hierarchical data organization\n" +
                      "• **Graphs** - Networks of connected nodes\n\n" +
                      "Which data structure interests you most?";
        } else if (message.contains("algorithm")) {
            response = "Algorithms are step-by-step problem-solving procedures! 🧩\n\n" +
                      "Essential algorithm categories:\n" +
                      "• **Sorting** - Bubble, Merge, Quick Sort\n" +
                      "• **Searching** - Linear, Binary Search\n" +
                      "• **Graph Algorithms** - BFS, DFS, Dijkstra\n" +
                      "• **Dynamic Programming** - Optimal subproblems\n\n" +
                      "**Time Complexity** matters - Big O notation helps us compare efficiency!\n\n" +
                      "What specific algorithm would you like to explore?";
        } else if (message.contains("python")) {
            response = "Python is perfect for beginners and powerful for experts! 🐍\n\n" +
                      "Python strengths:\n" +
                      "• **Simple syntax** - Easy to read and write\n" +
                      "• **Versatile** - Web dev, AI, data science, automation\n" +
                      "• **Rich libraries** - NumPy, Pandas, Django, Flask\n" +
                      "• **Great for learning** - Focus on logic, not syntax\n\n" +
                      "Want to see some Python examples or discuss specific concepts?";
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
        
        logger.info("Using fallback response for message: {}", request.getMessage());
        return ChatResponse.success(response, request.getSubject());
    }
    
    public boolean isOpenAIConfigured() {
        return apiKey != null && !apiKey.equals("your-openai-api-key-here") && !apiKey.isEmpty();
    }
}
