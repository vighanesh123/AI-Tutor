export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  timeLimit: number;
}

export interface QuizSet {
  id: string;
  setNumber: number;
  title: string;
  subject: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  questions: Question[];
  totalTimeLimit: number;
}

export interface SubjectQuizzes {
  subject: string;
  icon: string;
  description: string;
  easy: QuizSet[];
  medium: QuizSet[];
  hard: QuizSet[];
}

// Enhanced CSE Subjects List
export const enhancedCSESubjects = [
  'C Programming',
  'C++',
  'Java',
  'Python',
  'JavaScript',
  'HTML & CSS',
  'React',
  'Node.js',
  'Spring Boot',
  'Data Structures & Algorithms',
  'Computer Networks',
  'Operating Systems',
  'Database Management Systems',
  'SQL',
  'Software Engineering',
  'System Design',
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Cybersecurity',
  'Cloud Computing',
  'DevOps',
  'IoT',
  'Big Data',
  'Blockchain',
  'Compiler Design',
  'Computer Graphics',
  'Human Computer Interaction',
  'Mobile App Development',
  'Web Development'
];

// Utility function to get random quiz set
export const getRandomQuizSet = (quizSets: QuizSet[]): QuizSet | null => {
  if (quizSets.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * quizSets.length);
  return quizSets[randomIndex];
};

// Utility function to shuffle questions
export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
