import { Quiz } from './cseQuizData';
import { additionalQuizzes } from './additionalQuizzes';
import { moreCSEQuizzes } from './moreCSEQuizzes';
import { finalCSEQuizzes } from './finalCSEQuizzes';

// Data Structures & Algorithms - Easy
export const dsaEasyQuiz: Quiz = {
  id: 'dsa-easy',
  title: 'Data Structures Basics',
  subject: 'Data Structures & Algorithms',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'dsa-e-1',
      question: 'What is the time complexity of accessing an element in an array by index?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correctAnswer: 0,
      explanation: 'Array elements can be accessed directly using their index in constant time O(1).',
      timeLimit: 60
    },
    {
      id: 'dsa-e-2',
      question: 'Which data structure follows LIFO (Last In First Out) principle?',
      options: ['Queue', 'Stack', 'Array', 'Linked List'],
      correctAnswer: 1,
      explanation: 'Stack follows LIFO principle where the last element added is the first one to be removed.',
      timeLimit: 60
    },
    {
      id: 'dsa-e-3',
      question: 'What is the maximum number of children a binary tree node can have?',
      options: ['1', '2', '3', 'Unlimited'],
      correctAnswer: 1,
      explanation: 'In a binary tree, each node can have at most 2 children (left and right).',
      timeLimit: 60
    },
    {
      id: 'dsa-e-4',
      question: 'Which operation is NOT typically supported by a stack?',
      options: ['Push', 'Pop', 'Peek/Top', 'Random Access'],
      correctAnswer: 3,
      explanation: 'Stacks do not support random access to elements. You can only access the top element.',
      timeLimit: 60
    },
    {
      id: 'dsa-e-5',
      question: 'What is the space complexity of an array of size n?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 2,
      explanation: 'An array of size n requires O(n) space to store n elements.',
      timeLimit: 60
    }
  ]
};

// Python - Medium
export const pythonMediumQuiz: Quiz = {
  id: 'python-medium',
  title: 'Python Advanced Concepts',
  subject: 'Python',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'py-m-1',
      question: 'What is the output of: print([1, 2, 3] * 2)?',
      options: ['[2, 4, 6]', '[1, 2, 3, 1, 2, 3]', '[1, 2, 3, 2]', 'Error'],
      correctAnswer: 1,
      explanation: 'The * operator on lists creates a new list by repeating the original list.',
      timeLimit: 90
    },
    {
      id: 'py-m-2',
      question: 'Which of the following is a mutable data type in Python?',
      options: ['tuple', 'string', 'list', 'int'],
      correctAnswer: 2,
      explanation: 'Lists are mutable in Python, meaning their contents can be changed after creation.',
      timeLimit: 90
    },
    {
      id: 'py-m-3',
      question: 'What does the enumerate() function return?',
      options: ['List of values', 'List of indices', 'Tuples of (index, value)', 'Dictionary'],
      correctAnswer: 2,
      explanation: 'enumerate() returns an iterator of tuples containing (index, value) pairs.',
      timeLimit: 90
    },
    {
      id: 'py-m-4',
      question: 'What is a lambda function in Python?',
      options: ['A named function', 'An anonymous function', 'A class method', 'A built-in function'],
      correctAnswer: 1,
      explanation: 'Lambda functions are anonymous functions defined using the lambda keyword.',
      timeLimit: 90
    },
    {
      id: 'py-m-5',
      question: 'What is the difference between "is" and "==" in Python?',
      options: [
        '"is" checks identity, "==" checks equality',
        '"is" checks equality, "==" checks identity',
        'They are the same',
        '"is" is faster than "=="'
      ],
      correctAnswer: 0,
      explanation: '"is" checks if two variables point to the same object, while "==" checks if values are equal.',
      timeLimit: 90
    }
  ]
};

// JavaScript - Hard
export const javascriptHardQuiz: Quiz = {
  id: 'js-hard',
  title: 'Advanced JavaScript Concepts',
  subject: 'JavaScript',
  difficulty: 'HARD',
  totalTimeLimit: 45,
  questions: [
    {
      id: 'js-h-1',
      question: 'What is the output of: console.log(typeof null)?',
      options: ['"null"', '"undefined"', '"object"', '"boolean"'],
      correctAnswer: 2,
      explanation: 'This is a well-known JavaScript quirk. typeof null returns "object" due to a legacy bug.',
      timeLimit: 120
    },
    {
      id: 'js-h-2',
      question: 'What is a closure in JavaScript?',
      options: [
        'A way to close a function',
        'A function that has access to outer scope variables',
        'A method to end program execution',
        'A type of loop'
      ],
      correctAnswer: 1,
      explanation: 'A closure is a function that retains access to variables from its outer (enclosing) scope.',
      timeLimit: 120
    },
    {
      id: 'js-h-3',
      question: 'What does "hoisting" mean in JavaScript?',
      options: [
        'Moving variables to the top of their scope',
        'Lifting heavy objects',
        'Increasing variable values',
        'Creating new variables'
      ],
      correctAnswer: 0,
      explanation: 'Hoisting is JavaScript\'s behavior of moving variable and function declarations to the top of their scope.',
      timeLimit: 120
    },
    {
      id: 'js-h-4',
      question: 'What is the difference between call(), apply(), and bind()?',
      options: [
        'They are the same',
        'call() and apply() invoke immediately, bind() returns a new function',
        'Only call() works with objects',
        'bind() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'call() and apply() invoke the function immediately, while bind() returns a new function with bound context.',
      timeLimit: 120
    },
    {
      id: 'js-h-5',
      question: 'What is the event loop in JavaScript?',
      options: [
        'A loop that handles events',
        'The mechanism that handles asynchronous operations',
        'A way to iterate over arrays',
        'A debugging tool'
      ],
      correctAnswer: 1,
      explanation: 'The event loop is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded.',
      timeLimit: 120
    }
  ]
};

// DBMS - Easy
export const dbmsEasyQuiz: Quiz = {
  id: 'dbms-easy',
  title: 'Database Management Basics',
  subject: 'DBMS',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'db-e-1',
      question: 'What does DBMS stand for?',
      options: ['Database Management System', 'Data Base Management Software', 'Database Manipulation System', 'Data Management System'],
      correctAnswer: 0,
      explanation: 'DBMS stands for Database Management System.',
      timeLimit: 60
    },
    {
      id: 'db-e-2',
      question: 'Which of the following is a primary key characteristic?',
      options: ['Can be null', 'Must be unique', 'Can have duplicates', 'Optional field'],
      correctAnswer: 1,
      explanation: 'A primary key must be unique and cannot be null.',
      timeLimit: 60
    },
    {
      id: 'db-e-3',
      question: 'What is a foreign key?',
      options: [
        'A key from another country',
        'A key that references primary key of another table',
        'A backup key',
        'An encrypted key'
      ],
      correctAnswer: 1,
      explanation: 'A foreign key is a field that references the primary key of another table.',
      timeLimit: 60
    },
    {
      id: 'db-e-4',
      question: 'Which SQL command is used to retrieve data?',
      options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
      correctAnswer: 2,
      explanation: 'SELECT command is used to retrieve data from database tables.',
      timeLimit: 60
    },
    {
      id: 'db-e-5',
      question: 'What is normalization in databases?',
      options: [
        'Making data normal',
        'Organizing data to reduce redundancy',
        'Increasing data size',
        'Encrypting data'
      ],
      correctAnswer: 1,
      explanation: 'Normalization is the process of organizing data to minimize redundancy and dependency.',
      timeLimit: 60
    }
  ]
};

// Operating Systems - Medium
export const osQuiz: Quiz = {
  id: 'os-medium',
  title: 'Operating Systems Concepts',
  subject: 'Operating Systems',
  difficulty: 'MEDIUM',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'os-m-1',
      question: 'What is a process in an operating system?',
      options: [
        'A program in execution',
        'A file on disk',
        'A hardware component',
        'A user interface'
      ],
      correctAnswer: 0,
      explanation: 'A process is a program in execution, including the program code and its current activity.',
      timeLimit: 90
    },
    {
      id: 'os-m-2',
      question: 'What is the difference between a process and a thread?',
      options: [
        'No difference',
        'Threads share memory space, processes don\'t',
        'Processes are faster',
        'Threads can\'t communicate'
      ],
      correctAnswer: 1,
      explanation: 'Threads within a process share the same memory space, while processes have separate memory spaces.',
      timeLimit: 90
    },
    {
      id: 'os-m-3',
      question: 'What is deadlock?',
      options: [
        'When a process stops running',
        'When two or more processes wait for each other indefinitely',
        'When memory is full',
        'When CPU usage is 100%'
      ],
      correctAnswer: 1,
      explanation: 'Deadlock occurs when processes are blocked forever, waiting for each other to release resources.',
      timeLimit: 90
    },
    {
      id: 'os-m-4',
      question: 'What is virtual memory?',
      options: [
        'Memory that doesn\'t exist',
        'RAM memory',
        'A memory management technique using disk space as extended RAM',
        'Cache memory'
      ],
      correctAnswer: 2,
      explanation: 'Virtual memory allows the system to use disk space as an extension of RAM.',
      timeLimit: 90
    },
    {
      id: 'os-m-5',
      question: 'What is the purpose of system calls?',
      options: [
        'To call other programs',
        'Interface between user programs and OS kernel',
        'To make phone calls',
        'To debug programs'
      ],
      correctAnswer: 1,
      explanation: 'System calls provide an interface for user programs to request services from the OS kernel.',
      timeLimit: 90
    }
  ]
};

export const allQuizzes: Quiz[] = [
  dsaEasyQuiz,
  pythonMediumQuiz,
  javascriptHardQuiz,
  dbmsEasyQuiz,
  osQuiz,
  ...additionalQuizzes,
  ...moreCSEQuizzes,
  ...finalCSEQuizzes
];
