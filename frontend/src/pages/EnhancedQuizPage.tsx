import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Play, RotateCcw, ArrowLeft, BookOpen, Trophy, Target } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { QuizSet, getRandomQuizSet, shuffleQuestions } from '../data/enhancedQuizStructure';
import { allSubjectQuizzes, getSubjectQuizzes, getQuizCountForSubject } from '../data/allSubjectQuizzes';
import { progressService, QuizResult, QuestionResult } from '../services/progressService';
import { useAuth } from '../context/AuthContext';

type ViewMode = 'subjects' | 'difficulty' | 'quiz' | 'results';
type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';

const EnhancedQuizPage: React.FC = () => {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<ViewMode>('subjects');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('EASY');
  const [currentQuiz, setCurrentQuiz] = useState<QuizSet | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [questionTimeRemaining, setQuestionTimeRemaining] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<Date | null>(null);
  const [questionStartTimes, setQuestionStartTimes] = useState<Date[]>([]);

  // Timer effects
  useEffect(() => {
    if (currentQuiz && isTimerActive && timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && isTimerActive) {
      handleSubmitQuiz();
    }
  }, [timeRemaining, isTimerActive, currentQuiz, showResults]);

  useEffect(() => {
    if (currentQuiz && isTimerActive && questionTimeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setQuestionTimeRemaining(questionTimeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (questionTimeRemaining === 0 && isTimerActive && !showResults) {
      handleNextQuestion();
    }
  }, [questionTimeRemaining, isTimerActive, currentQuiz, showResults]);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setViewMode('difficulty');
  };

  const handleDifficultySelect = (difficulty: DifficultyLevel) => {
    setSelectedDifficulty(difficulty);
    const subjectData = getSubjectQuizzes(selectedSubject);
    
    if (!subjectData) {
      alert('No quizzes available for this subject yet. More coming soon!');
      return;
    }
    
    let availableQuizzes: any[];
    switch (difficulty) {
      case 'EASY':
        availableQuizzes = subjectData.easy;
        break;
      case 'MEDIUM':
        availableQuizzes = subjectData.medium;
        break;
      case 'HARD':
        availableQuizzes = subjectData.hard;
        break;
      default:
        availableQuizzes = [];
    }
    
    if (availableQuizzes.length === 0) {
      alert('No quizzes available for this difficulty level yet. More coming soon!');
      return;
    }
    
    const quiz = getRandomQuizSet(availableQuizzes);
    if (quiz) {
      const shuffledQuestions = shuffleQuestions(quiz.questions);
      const quizWithShuffledQuestions = { ...quiz, questions: shuffledQuestions };
      
      setCurrentQuiz(quizWithShuffledQuestions);
      setTimeRemaining(quiz.totalTimeLimit * 60);
      setQuestionTimeRemaining(quiz.questions[0]?.timeLimit || 60);
      setViewMode('quiz');
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowResults(false);
      setIsTimerActive(true);
      
      // Track quiz start time
      const startTime = new Date();
      setQuizStartTime(startTime);
      setQuestionStartTimes([startTime]);
    }
  };

  const startQuiz = (quiz: QuizSet) => {
    const shuffledQuestions = shuffleQuestions(quiz.questions);
    const quizWithShuffledQuestions = { ...quiz, questions: shuffledQuestions };
    
    setCurrentQuiz(quizWithShuffledQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeRemaining(quiz.totalTimeLimit * 60);
    setQuestionTimeRemaining(quiz.questions[0]?.timeLimit || 60);
    setIsTimerActive(true);
    setShowResults(false);
    setViewMode('quiz');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuiz!.questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setQuestionTimeRemaining(currentQuiz!.questions[nextIndex]?.timeLimit || 60);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setQuestionTimeRemaining(currentQuiz!.questions[prevIndex]?.timeLimit || 60);
    }
  };

  const handleSubmitQuiz = async () => {
    setIsTimerActive(false);
    setShowResults(true);
    setViewMode('results');
    
    // Submit quiz result to progress tracking
    if (currentQuiz && quizStartTime && user) {
      try {
        const endTime = new Date();
        const timeTakenSeconds = Math.floor((endTime.getTime() - quizStartTime.getTime()) / 1000);
        
        // Calculate question results
        const questionResults: QuestionResult[] = currentQuiz.questions.map((question, index) => ({
          questionId: `${currentQuiz.id}-${index}`,
          selectedAnswer: userAnswers[index] ?? -1,
          correctAnswer: question.correctAnswer,
          isCorrect: userAnswers[index] === question.correctAnswer,
          timeSpentSeconds: Math.floor(timeTakenSeconds / currentQuiz.questions.length) // Approximate time per question
        }));
        
        const correctAnswers = questionResults.filter(q => q.isCorrect).length;
        const score = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
        
        const quizResult: QuizResult = {
          quizId: currentQuiz.id,
          subject: selectedSubject,
          difficulty: selectedDifficulty,
          score: score,
          totalQuestions: currentQuiz.questions.length,
          correctAnswers: correctAnswers,
          timeTakenSeconds: timeTakenSeconds,
          questionResults: questionResults,
          completedAt: endTime.toISOString()
        };
        
        // Submit to backend
        console.log('🚀 Submitting quiz result to backend:', quizResult);
        const updatedProgress = await progressService.submitQuizResult(quizResult);
        console.log('✅ Quiz result submitted successfully!');
        console.log('📊 Updated progress:', updatedProgress);
        
        // Show success message to user
        alert(`Quiz completed! Your progress has been updated.\nScore: ${score}%\nTime: ${formatTime(timeTakenSeconds)}`);
      } catch (error) {
        console.error('Failed to submit quiz result:', error);
      }
    }
  };

  const calculateScore = () => {
    if (!currentQuiz) return 0;
    let correct = 0;
    currentQuiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / currentQuiz.questions.length) * 100);
  };

  const resetToSubjects = () => {
    setViewMode('subjects');
    setSelectedSubject('');
    setCurrentQuiz(null);
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

  const getDifficultyColor = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
      case 'EASY': return 'bg-green-500 hover:bg-green-600';
      case 'MEDIUM': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'HARD': return 'bg-red-500 hover:bg-red-600';
    }
  };

  const getDifficultyIcon = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
      case 'EASY': return '🟢';
      case 'MEDIUM': return '🟡';
      case 'HARD': return '🔴';
    }
  };

  // Subject Selection View
  if (viewMode === 'subjects') {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Choose Your Subject
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Select a subject to start practicing with randomized quiz sets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allSubjectQuizzes.map((subject) => {
                const quizCounts = getQuizCountForSubject(subject.subject);
                const totalQuizzes = quizCounts.easy + quizCounts.medium + quizCounts.hard;
                
                return (
                  <div
                    key={subject.subject}
                    onClick={() => handleSubjectSelect(subject.subject)}
                    className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{subject.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {subject.subject}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {subject.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-600 dark:text-green-400">Easy:</span>
                        <span className="font-semibold">{quizCounts.easy} sets</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-yellow-600 dark:text-yellow-400">Medium:</span>
                        <span className="font-semibold">{quizCounts.medium} sets</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-red-600 dark:text-red-400">Hard:</span>
                        <span className="font-semibold">{quizCounts.hard} sets</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex justify-between items-center font-semibold">
                          <span>Total Quiz Sets:</span>
                          <span className="text-primary-600 dark:text-primary-400">{totalQuizzes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Difficulty Selection View
  if (viewMode === 'difficulty') {
    const subjectData = getSubjectQuizzes(selectedSubject);
    const quizCounts = getQuizCountForSubject(selectedSubject);

    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <button
                onClick={() => setViewMode('subjects')}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Subjects
              </button>
              
              <div className="text-center">
                <div className="text-5xl mb-4">{subjectData?.icon}</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedSubject}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {subjectData?.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(['EASY', 'MEDIUM', 'HARD'] as DifficultyLevel[]).map((difficulty) => {
                const count = difficulty === 'EASY' ? quizCounts.easy : 
                             difficulty === 'MEDIUM' ? quizCounts.medium : quizCounts.hard;
                const isAvailable = count > 0;

                return (
                  <div
                    key={difficulty}
                    onClick={() => isAvailable && handleDifficultySelect(difficulty)}
                    className={`card p-8 text-center transition-all duration-300 ${
                      isAvailable 
                        ? 'cursor-pointer hover:shadow-lg hover:scale-105' 
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-4xl mb-4">{getDifficultyIcon(difficulty)}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {difficulty}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {difficulty === 'EASY' && '20 questions • 60s per question'}
                      {difficulty === 'MEDIUM' && '20 questions • 90s per question'}
                      {difficulty === 'HARD' && '20 questions • 120s per question'}
                    </p>
                    <div className="mb-6">
                      <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        {count} Quiz Sets Available
                      </span>
                    </div>
                    {isAvailable ? (
                      <button className={`btn-primary w-full ${getDifficultyColor(difficulty)}`}>
                        <Play className="w-5 h-5 mr-2" />
                        Start Random Quiz
                      </button>
                    ) : (
                      <div className="text-gray-500 dark:text-gray-400">
                        Coming Soon
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Quiz View
  if (viewMode === 'quiz' && currentQuiz && !showResults) {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;

    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quiz Header */}
            <div className="card p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentQuiz.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedDifficulty} Level • Set {currentQuiz.setNumber}
                  </p>
                </div>
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
                Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
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
                  onClick={handlePreviousQuestion}
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
                  {currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results View
  if (viewMode === 'results' && currentQuiz) {
    const score = calculateScore();
    const correctAnswers = currentQuiz.questions.filter((_, index) => 
      userAnswers[index] === currentQuiz.questions[index].correctAnswer
    ).length;

    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-8 text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                score >= 80 ? 'bg-green-100 dark:bg-green-900' : 
                score >= 60 ? 'bg-yellow-100 dark:bg-yellow-900' : 'bg-red-100 dark:bg-red-900'
              }`}>
                {score >= 80 ? (
                  <Trophy className="w-10 h-10 text-green-600 dark:text-green-400" />
                ) : score >= 60 ? (
                  <Target className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Quiz Completed!
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                {currentQuiz.title}
              </p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-8">
                Score: {score}%
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {currentQuiz.questions.length}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Total Questions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {correctAnswers}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Correct Answers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {formatTime((currentQuiz.totalTimeLimit * 60) - timeRemaining)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Time Taken</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleDifficultySelect(selectedDifficulty)}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Try Another Quiz</span>
                </button>
                <button
                  onClick={() => setViewMode('difficulty')}
                  className="btn-secondary"
                >
                  Change Difficulty
                </button>
                <button
                  onClick={resetToSubjects}
                  className="btn-secondary"
                >
                  Choose New Subject
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return null;
};

export default EnhancedQuizPage;
