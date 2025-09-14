import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Token expired or invalid - just log the error, don't auto-redirect
      console.error('🔒 Authentication failed - token may be expired:', error.response?.data);
    }
    return Promise.reject(error);
  }
);

export interface QuizResult {
  id?: string;
  userId?: string;
  quizId: string;
  subject: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTakenSeconds: number;
  questionResults: QuestionResult[];
  completedAt?: string;
}

export interface QuestionResult {
  questionId: string;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface StudentProgress {
  id?: string;
  userId: string;
  totalStudyTimeMinutes: number;
  totalQuizzesCompleted: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate?: string;
  subjectProgress: { [key: string]: SubjectProgress };
  monthlyActivity: MonthlyActivity[];
  studyDates: string[];
  achievements: Achievement[];
  createdAt?: string;
  updatedAt?: string;
}

export interface SubjectProgress {
  subject: string;
  quizzesCompleted: number;
  totalQuizzes: number;
  averageScore: number;
  studyTimeMinutes: number;
  lastStudied?: string;
}

export interface MonthlyActivity {
  year: number;
  month: number;
  quizzesCompleted: number;
  studyTimeMinutes: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  earned: boolean;
  earnedAt?: string;
}

export interface ProgressStats {
  totalStudyTimeHours: number;
  totalQuizzesCompleted: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
  totalSubjects: number;
  earnedAchievements: number;
}

export interface PerformanceTrends {
  recentAverageScore: number;
  totalRecentTime: number;
  improvementTrend: 'improving' | 'declining' | 'stable' | 'insufficient_data';
  strongSubjects: string[];
  weakSubjects: string[];
}

class ProgressService {
  /**
   * Get student progress overview
   */
  async getProgressOverview(): Promise<StudentProgress> {
    const response = await api.get('/progress/overview');
    return response.data;
  }

  /**
   * Get recent quiz results
   */
  async getRecentResults(): Promise<QuizResult[]> {
    const response = await api.get('/progress/recent-results');
    return response.data;
  }

  /**
   * Get subject-wise progress
   */
  async getSubjectProgress(): Promise<{ [key: string]: SubjectProgress }> {
    const response = await api.get('/progress/subjects');
    return response.data || {};
  }

  /**
   * Get monthly activity data
   */
  async getMonthlyActivity(): Promise<MonthlyActivity[]> {
    const response = await api.get('/progress/monthly-activity');
    return response.data;
  }

  /**
   * Get activity calendar data for the year
   */
  async getActivityCalendarData(year?: number): Promise<any> {
    const endpoint = year ? `/progress/activity-calendar/${year}` : '/progress/activity-calendar';
    const response = await api.get(endpoint);
    return response.data;
  }

  /**
   * Get study calendar for a specific month
   */
  async getStudyCalendar(year: number, month: number): Promise<string[]> {
    const response = await api.get('/progress/calendar', {
      params: { year, month }
    });
    return response.data;
  }

  /**
   * Get achievements
   */
  async getAchievements(): Promise<Achievement[]> {
    const response = await api.get('/progress/achievements');
    return response.data || [];
  }

  /**
   * Get quiz results by subject
   */
  async getResultsBySubject(subject: string): Promise<QuizResult[]> {
    const response = await api.get(`/progress/results/subject/${encodeURIComponent(subject)}`);
    return response.data;
  }

  /**
   * Get statistics summary
   */
  async getStatistics(): Promise<ProgressStats> {
    const response = await api.get('/progress/stats');
    return response.data;
  }

  /**
   * Submit quiz result and update progress
   */
  async submitQuizResult(quizResult: QuizResult): Promise<StudentProgress> {
    const response = await api.post('/progress/submit-result', quizResult);
    
    // Track daily activity for quiz completion
    await this.trackDailyActivity('quiz', {
      quizId: quizResult.quizId,
      score: quizResult.score,
      subject: quizResult.subject
    });
    
    return response.data;
  }

  /**
   * Track daily activity (login, quiz, tutor, notes)
   */
  async trackDailyActivity(activityType: 'login' | 'quiz' | 'tutor' | 'notes', metadata?: any): Promise<void> {
    try {
      await api.post('/progress/track-activity', {
        activityType,
        date: new Date().toISOString().split('T')[0],
        metadata
      });
    } catch (error) {
      console.error('Failed to track daily activity:', error);
    }
  }

  /**
   * Get performance trends
   */
  async getPerformanceTrends(): Promise<PerformanceTrends> {
    const response = await api.get('/progress/trends');
    return response.data;
  }

  /**
   * Format study time from minutes to readable format
   */
  formatStudyTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) {
      return `${mins}m`;
    } else if (mins === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${mins}m`;
    }
  }

  /**
   * Calculate completion percentage for subject
   */
  calculateCompletionPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  }

  /**
   * Get score color class based on score
   */
  getScoreColorClass(score: number): string {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  }

  /**
   * Get achievement category icon
   */
  getAchievementIcon(category: string): string {
    switch (category) {
      case 'milestone': return '🏆';
      case 'subject': return '📚';
      case 'streak': return '🔥';
      case 'performance': return '⭐';
      case 'time': return '⏰';
      default: return '🎯';
    }
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  /**
   * Get month name from number
   */
  getMonthName(month: number): string {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[month - 1] || '';
  }
}

export const progressService = new ProgressService();
