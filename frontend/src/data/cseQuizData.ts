export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  timeLimit: number; // seconds per question
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  questions: Question[];
  totalTimeLimit: number; // total quiz time in minutes
}

export const cseSubjects = [
  'C Programming',
  'C++',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Spring Boot',
  'Data Structures & Algorithms',
  'Computer Networks',
  'Operating Systems',
  'DBMS',
  'SQL',
  'Software Engineering',
  'Artificial Intelligence',
  'Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'IoT',
  'Big Data',
  'Compiler Design',
  'Computer Graphics',
  'Web Development'
];

// Sample quiz data for C Programming - Easy
export const cProgrammingEasyQuiz: Quiz = {
  id: 'c-easy',
  title: 'C Programming Basics',
  subject: 'C Programming',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'c-e-1',
      question: 'Which of the following is the correct syntax to declare a variable in C?',
      options: ['int x;', 'integer x;', 'var x;', 'declare x;'],
      correctAnswer: 0,
      explanation: 'In C, variables are declared using the data type followed by the variable name.',
      timeLimit: 60
    },
    {
      id: 'c-e-2',
      question: 'What is the output of printf("%d", 5 + 3);?',
      options: ['5 + 3', '8', '53', 'Error'],
      correctAnswer: 1,
      explanation: 'The expression 5 + 3 evaluates to 8, which is printed as an integer.',
      timeLimit: 60
    },
    {
      id: 'c-e-3',
      question: 'Which header file is required for printf() function?',
      options: ['<stdlib.h>', '<stdio.h>', '<string.h>', '<math.h>'],
      correctAnswer: 1,
      explanation: 'stdio.h (standard input/output) header file contains the declaration for printf().',
      timeLimit: 60
    },
    {
      id: 'c-e-4',
      question: 'What is the correct way to comment a single line in C?',
      options: ['# This is a comment', '// This is a comment', '/* This is a comment', '-- This is a comment'],
      correctAnswer: 1,
      explanation: '// is used for single-line comments in C (C99 standard and later).',
      timeLimit: 60
    },
    {
      id: 'c-e-5',
      question: 'Which of the following is NOT a valid C data type?',
      options: ['int', 'float', 'char', 'string'],
      correctAnswer: 3,
      explanation: 'string is not a primitive data type in C. Strings are represented as character arrays.',
      timeLimit: 60
    }
  ]
};

// Sample quiz data for Java - Medium
export const javaMediumQuiz: Quiz = {
  id: 'java-medium',
  title: 'Java Object-Oriented Programming',
  subject: 'Java',
  difficulty: 'MEDIUM',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'j-m-1',
      question: 'Which of the following is true about method overloading in Java?',
      options: [
        'Methods must have different return types',
        'Methods must have different parameter lists',
        'Methods must be in different classes',
        'Methods must have different access modifiers'
      ],
      correctAnswer: 1,
      explanation: 'Method overloading requires methods to have the same name but different parameter lists (number, type, or order of parameters).',
      timeLimit: 90
    },
    {
      id: 'j-m-2',
      question: 'What is the output of the following code?\nString s1 = "Hello";\nString s2 = "Hello";\nSystem.out.println(s1 == s2);',
      options: ['true', 'false', 'Compilation error', 'Runtime error'],
      correctAnswer: 0,
      explanation: 'String literals are stored in the string pool, so s1 and s2 reference the same object.',
      timeLimit: 90
    },
    {
      id: 'j-m-3',
      question: 'Which keyword is used to prevent method overriding in Java?',
      options: ['static', 'final', 'abstract', 'private'],
      correctAnswer: 1,
      explanation: 'The final keyword prevents a method from being overridden in subclasses.',
      timeLimit: 90
    },
    {
      id: 'j-m-4',
      question: 'What is the difference between ArrayList and LinkedList?',
      options: [
        'ArrayList is faster for random access',
        'LinkedList is faster for insertions/deletions',
        'ArrayList uses dynamic arrays, LinkedList uses doubly-linked list',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'All statements are correct. ArrayList provides O(1) random access, while LinkedList provides O(1) insertions/deletions at known positions.',
      timeLimit: 90
    },
    {
      id: 'j-m-5',
      question: 'Which of the following is true about interfaces in Java 8+?',
      options: [
        'Interfaces can have default methods',
        'Interfaces can have static methods',
        'Interfaces can have private methods (Java 9+)',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'Java 8 introduced default and static methods in interfaces, and Java 9 added private methods.',
      timeLimit: 90
    }
  ]
};

export const allCSEQuizzes: Quiz[] = [
  cProgrammingEasyQuiz,
  javaMediumQuiz
  // More quizzes will be added here
];
