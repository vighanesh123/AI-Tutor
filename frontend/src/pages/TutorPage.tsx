import React, { useState, useRef, useEffect } from 'react';
import { Send, Brain, User, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { aiService } from '../services/aiService';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const TutorPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello Vighnesh! I\'m your AI Tutor. I can help you with Computer Science topics like Java, Python, Data Structures, Operating Systems, and more. When I provide code examples, I\'ll keep lines intact without unnecessary breaks unless the line is genuinely too long. What would you like to learn today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useAuth(); // Authentication context (not currently used but available)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Completely disable auto-scroll
  useEffect(() => {
    // No auto-scroll behavior
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Build short conversation context from the last few messages (excluding the one we just added)
    const buildContext = () => {
      const recent = messages.slice(-6); // last 6 messages max
      const lines = recent.map(m => `${m.isUser ? 'User' : 'AI'}: ${m.content}`);
      return lines.join('\n');
    };

    try {
      const apiResponse = await aiService.sendMessage({
        message: userMessage.content,
        subject: undefined,
        context: buildContext()
      });

      // Track AI tutor activity
      const { progressService } = await import('../services/progressService');
      await progressService.trackDailyActivity('tutor', {
        messageCount: messages.length + 1,
        topic: userMessage.content.substring(0, 50)
      });

      const aiMessage: Message = {
        id: apiResponse.messageId || (Date.now() + 1).toString(),
        content: apiResponse.response,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        content: "I'm having trouble responding right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "Explain Java inheritance with examples",
    "What is the difference between Stack and Queue?",
    "How does binary search work?",
    "Explain TCP vs UDP protocols"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI Tutor Chat</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Ask me anything about Computer Science! I'm here to help you learn.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                <Sparkles className="w-4 h-4" />
                <span>Hello Vighnesh!</span>
              </div>
            </div>

            {/* Chat Container */}
            <div className="card max-w-4xl mx-auto h-[600px] flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-3xl ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-2 rounded-lg transition-colors duration-200 ${
                        message.isUser 
                          ? 'bg-primary-600 dark:bg-primary-500' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}>
                        {message.isUser ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Brain className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        )}
                      </div>
                      <div className={`p-4 rounded-lg transition-colors duration-200 ${
                        message.isUser 
                          ? 'bg-primary-600 dark:bg-primary-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}>
                        <div className="whitespace-pre-wrap overflow-x-auto">
                          {message.isUser ? (
                            message.content
                          ) : (
                            message.content
                          )}
                        </div>
                        <div className={`text-xs mt-2 ${
                          message.isUser 
                            ? 'text-blue-100 dark:text-blue-200' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3 max-w-3xl">
                      <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-200">
                        <Brain className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 transition-colors duration-200">
                        <LoadingSpinner size="small" />
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">AI is thinking...</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Suggested Questions:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInputMessage(question)}
                        className="text-left p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask me anything about Computer Science..."
                      className="input-field"
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isLoading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorPage;
