import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

// Create axios instance for AI API calls
const aiClient = axios.create({
  baseURL: `${API_BASE_URL}/ai`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout for AI responses
});

// Request interceptor to add auth token
aiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
aiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('AI API Error:', error);
    return Promise.reject(error);
  }
);

export interface ChatRequest {
  message: string;
  subject?: string;
  context?: string;
}

export interface ChatResponse {
  response: string;
  messageId: string;
  timestamp: string;
  success: boolean;
  subject?: string;
}

export interface AIStatus {
  aiServiceAvailable: boolean;
  openaiConfigured: boolean;
  fallbackMode: boolean;
  message: string;
}

export interface TopicSuggestions {
  topic: string;
  suggestions: string[];
}

export interface SupportedTopics {
  programming: string[];
  dataStructures: string[];
  algorithms: string[];
  concepts: string[];
}

export const aiService = {
  /**
   * Send a chat message to the AI tutor
   */
  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    try {
      const response: AxiosResponse<ChatResponse> = await aiClient.post('/chat', request);
      return response.data;
    } catch (error: any) {
      console.error('Failed to send message to AI:', error);
      
      // Return a fallback error response
      return {
        response: "I'm sorry, I'm having trouble responding right now. Please try again in a moment.",
        messageId: `error_${Date.now()}`,
        timestamp: new Date().toISOString(),
        success: false,
        subject: request.subject
      };
    }
  },

  /**
   * Get AI service status
   */
  async getStatus(): Promise<AIStatus> {
    try {
      const response: AxiosResponse<AIStatus> = await aiClient.get('/status');
      return response.data;
    } catch (error: any) {
      console.error('Failed to get AI status:', error);
      return {
        aiServiceAvailable: false,
        openaiConfigured: false,
        fallbackMode: true,
        message: 'Unable to connect to AI service'
      };
    }
  },

  /**
   * Get supported topics
   */
  async getSupportedTopics(): Promise<SupportedTopics> {
    try {
      const response: AxiosResponse<SupportedTopics> = await aiClient.get('/topics');
      return response.data;
    } catch (error: any) {
      console.error('Failed to get supported topics:', error);
      // Return default topics as fallback
      return {
        programming: ['Java', 'Python', 'C++', 'JavaScript'],
        dataStructures: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees'],
        algorithms: ['Sorting', 'Searching', 'Graph Algorithms'],
        concepts: ['OOP', 'Databases', 'Operating Systems']
      };
    }
  },

  /**
   * Get topic-specific suggestions
   */
  async getSuggestions(topic: string = 'general'): Promise<TopicSuggestions> {
    try {
      const response: AxiosResponse<TopicSuggestions> = await aiClient.post('/suggest', { topic });
      return response.data;
    } catch (error: any) {
      console.error('Failed to get suggestions:', error);
      // Return default suggestions as fallback
      return {
        topic,
        suggestions: [
          "What programming language should I learn first?",
          "Explain object-oriented programming concepts",
          "How do I improve my coding problem-solving skills?",
          "What are the most important data structures to know?"
        ]
      };
    }
  }
};

export { aiClient };
