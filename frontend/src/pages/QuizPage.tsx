import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Play, RotateCcw, Filter, Search } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Quiz, cseSubjects } from '../data/cseQuizData';
import { allQuizzes } from '../data/quizQuestions';
import { progressService, QuizResult, QuestionResult } from '../services/progressService';
import { useAuth } from '../context/AuthContext';

const QuizPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [questionTimeRemaining, setQuestionTimeRemaining] = useState(0);
  const [questionStartTimes, setQuestionStartTimes] = useState<number[]>([]);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);

  // Available quizzes from imported data
  const availableQuizzes: Quiz[] = allQuizzes.filter(quiz => {
    const subjectMatch = selectedSubject === 'All' || quiz.subject === selectedSubject;
    const difficultyMatch = selectedDifficulty === 'All' || quiz.difficulty === selectedDifficulty;
    const searchMatch = searchTerm === '' || 
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    return subjectMatch && difficultyMatch && searchMatch;
  });

  useEffect(() => {
    if (selectedQuiz && isTimerActive && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && isTimerActive) {
      handleSubmitQuiz();
    }
  }, [timeRemaining, isTimerActive, selectedQuiz]);

  // Question timer effect
  useEffect(() => {
    if (selectedQuiz && isTimerActive && questionTimeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setQuestionTimeRemaining(questionTimeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (questionTimeRemaining === 0 && isTimerActive && !showResults) {
      // Auto-move to next question when time runs out
      handleNextQuestion();
    }
  }, [questionTimeRemaining, isTimerActive, selectedQuiz, showResults]);

  const startQuiz = (quiz: Quiz) => {
    const now = Date.now();
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeRemaining(quiz.totalTimeLimit * 60);
    setQuestionTimeRemaining(quiz.questions[0]?.timeLimit || 60);
    setQuestionStartTimes([now]);
    setQuizStartTime(now);
    setIsTimerActive(true);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuiz!.questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const now = Date.now();
      setCurrentQuestionIndex(nextIndex);
      setQuestionTimeRemaining(selectedQuiz!.questions[nextIndex]?.timeLimit || 60);
      
      // Track start time for next question
      const newStartTimes = [...questionStartTimes];
      newStartTimes[nextIndex] = now;
      setQuestionStartTimes(newStartTimes);
    } else {
      handleSubmitQuiz();
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    setIsTimerActive(false);
    setIsSubmitting(true);
    
    try {
      if (selectedQuiz && user) {
        // Calculate question results with timing
        const questionResults: QuestionResult[] = selectedQuiz.questions.map((question, index) => {
          const startTime = questionStartTimes[index] || quizStartTime;
          const endTime = index < questionStartTimes.length - 1 
            ? questionStartTimes[index + 1] 
            : Date.now();
          
          return {
            questionId: `${selectedQuiz.id}-q${index}`,
            selectedAnswer: userAnswers[index] ?? -1,
            correctAnswer: question.correctAnswer,
            isCorrect: userAnswers[index] === question.correctAnswer,
            timeSpentSeconds: Math.round((endTime - startTime) / 1000)
          };
        });

        // Calculate overall results
        const correctAnswers = questionResults.filter(result => result.isCorrect).length;
        const score = Math.round((correctAnswers / selectedQuiz.questions.length) * 100);
        const totalTimeTaken = Math.round((Date.now() - quizStartTime) / 1000);

        // Create quiz result object
        const quizResult: QuizResult = {
          quizId: selectedQuiz.id,
          subject: selectedQuiz.subject,
          difficulty: selectedQuiz.difficulty as 'EASY' | 'MEDIUM' | 'HARD',
          score,
          totalQuestions: selectedQuiz.questions.length,
          correctAnswers,
          timeTakenSeconds: totalTimeTaken,
          questionResults
        };

        // Submit to backend
        await progressService.submitQuizResult(quizResult);
        console.log('Quiz result submitted successfully');
      }
    } catch (error) {
      console.error('Error submitting quiz result:', error);
      // Continue to show results even if submission fails
    } finally {
      setIsSubmitting(false);
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    if (!selectedQuiz) return 0;
    let correct = 0;
    selectedQuiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / selectedQuiz.questions.length) * 100);
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setIsTimerActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!selectedQuiz) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Practice Quizzes</h1>
              <p className="text-gray-600 dark:text-gray-300">Test your knowledge with our curated CSE quizzes</p>
            </div>

            {/* Filters */}
            <div className="card p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                    <input
                      type="text"
                      placeholder="Search quizzes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-12 pr-4"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="input-field"
                  >
                    <option value="All">All Subjects</option>
                    {cseSubjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="input-field"
                  >
                    <option value="All">All Levels</option>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedSubject('All');
                      setSelectedDifficulty('All');
                    }}
                    className="btn-secondary w-full"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableQuizzes.map((quiz) => (
                <div key={quiz.id} className="card p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{quiz.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{quiz.subject}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        quiz.difficulty === 'EASY' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        quiz.difficulty === 'MEDIUM' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}>
                        {quiz.difficulty}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{quiz.totalTimeLimit} min</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {quiz.questions.length} questions
                    </p>
                  </div>
                  
                  <button
                    onClick={() => startQuiz(quiz)}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Start Quiz</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-8 text-center">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                score >= 80 ? 'bg-green-100' : score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                {score >= 80 ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600" />
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quiz Completed!</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Your Score: {score}%</p>
              {isSubmitting ? (
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-6">Saving your progress...</p>
              ) : (
                <p className="text-sm text-green-600 dark:text-green-400 mb-6">✓ Progress saved successfully!</p>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedQuiz.questions.length}</p>
                  <p className="text-gray-600 dark:text-gray-400">Total Questions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {selectedQuiz.questions.filter((_, index) => userAnswers[index] === selectedQuiz.questions[index].correctAnswer).length}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Correct Answers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {formatTime((selectedQuiz.totalTimeLimit * 60) - timeRemaining)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Time Taken</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => startQuiz(selectedQuiz)}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={resetQuiz}
                  className="btn-secondary"
                >
                  Back to Quizzes
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quiz Header */}
          <div className="card p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedQuiz.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Question: {formatTime(questionTimeRemaining)}</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Total: {formatTime(timeRemaining)}</span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="text-gray-600 dark:text-gray-300">
              Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
            </p>
          </div>

          {/* Question */}
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                    userAnswers[currentQuestionIndex] === index
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                      userAnswers[currentQuestionIndex] === index
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-900 dark:text-white">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="btn-secondary disabled:opacity-50"
              >
                Previous
              </button>
              
              <button
                onClick={handleNextQuestion}
                disabled={userAnswers[currentQuestionIndex] === undefined}
                className="btn-primary disabled:opacity-50"
              >
                {currentQuestionIndex === selectedQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizPage;
