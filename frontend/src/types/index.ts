export interface User {
  id: string;
  name: string;
  email: string;
  roles: Role[];
  enabled: boolean;
  currentStreak: number;
  totalQuizzes: number;
  averageScore: number;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  user: {
    id: string;
    name: string;
    email: string;
    roles: Role[];
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  difficulty: Difficulty;
  questions: Question[];
  timeLimit: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  answers: number[];
  score: number;
  maxScore: number;
  startedAt: string;
  completedAt?: string;
  timeSpent: number;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  subject: string;
  tags: string[];
  userId: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Progress {
  id: string;
  userId: string;
  subject: string;
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
  totalTimeSpent: number;
  lastActivityAt: string;
  skillLevel: SkillLevel;
}

export interface TutorMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

export interface TutorSession {
  id: string;
  userId: string;
  subject: string;
  messages: TutorMessage[];
  startedAt: string;
  endedAt?: string;
  status: SessionStatus;
}

export type Role = 'STUDENT' | 'TUTOR' | 'ADMIN';
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type SkillLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type SessionStatus = 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface DashboardStats {
  currentStreak: number;
  totalQuizzes: number;
  averageScore: number;
  topicsStudied: number;
  recentQuizzes: QuizAttempt[];
  weeklyProgress: {
    day: string;
    completed: boolean;
  }[];
}
