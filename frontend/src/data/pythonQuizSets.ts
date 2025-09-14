import { QuizSet } from './enhancedQuizStructure';
import { pythonAdditionalEasySets, pythonAdditionalMediumSets, pythonHardSets as additionalHardSets } from './pythonAdditionalSets';

// Python - Easy Level (Set 1 of 10)
export const pythonEasySet1: QuizSet = {
  id: 'python-easy-1',
  setNumber: 1,
  title: 'Python Fundamentals - Set 1',
  subject: 'Python',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'py-e1-1',
      question: 'What is Python?',
      options: ['A snake', 'A high-level programming language', 'A database', 'An operating system'],
      correctAnswer: 1,
      explanation: 'Python is a high-level, interpreted programming language known for its simplicity and readability.',
      timeLimit: 60
    },
    {
      id: 'py-e1-2',
      question: 'Which of the following is the correct file extension for Python files?',
      options: ['.python', '.py', '.pt', '.pyt'],
      correctAnswer: 1,
      explanation: 'Python source files use the .py extension.',
      timeLimit: 60
    },
    {
      id: 'py-e1-3',
      question: 'How do you print "Hello World" in Python?',
      options: ['echo "Hello World"', 'print("Hello World")', 'console.log("Hello World")', 'printf("Hello World")'],
      correctAnswer: 1,
      explanation: 'The print() function is used to display output in Python.',
      timeLimit: 60
    },
    {
      id: 'py-e1-4',
      question: 'Which of the following is a mutable data type in Python?',
      options: ['tuple', 'string', 'list', 'int'],
      correctAnswer: 2,
      explanation: 'Lists are mutable in Python, meaning their contents can be changed after creation.',
      timeLimit: 60
    },
    {
      id: 'py-e1-5',
      question: 'What is the correct way to create a comment in Python?',
      options: ['// This is a comment', '/* This is a comment */', '# This is a comment', '-- This is a comment'],
      correctAnswer: 2,
      explanation: 'In Python, comments start with the # symbol.',
      timeLimit: 60
    },
    {
      id: 'py-e1-6',
      question: 'Which keyword is used to define a function in Python?',
      options: ['function', 'def', 'func', 'define'],
      correctAnswer: 1,
      explanation: 'The def keyword is used to define functions in Python.',
      timeLimit: 60
    },
    {
      id: 'py-e1-7',
      question: 'What is the output of print(type(5))?',
      options: ['<class "int">', '<class "integer">', '<class "number">', '<class "digit">'],
      correctAnswer: 0,
      explanation: 'The type() function returns the class type, and 5 is an integer, so it returns <class "int">.',
      timeLimit: 60
    },
    {
      id: 'py-e1-8',
      question: 'Which of the following is used to get user input in Python?',
      options: ['input()', 'get()', 'read()', 'scan()'],
      correctAnswer: 0,
      explanation: 'The input() function is used to get user input in Python.',
      timeLimit: 60
    },
    {
      id: 'py-e1-9',
      question: 'What does the len() function do?',
      options: ['Returns the length of an object', 'Creates a new list', 'Sorts a list', 'Removes elements'],
      correctAnswer: 0,
      explanation: 'The len() function returns the number of items in an object.',
      timeLimit: 60
    },
    {
      id: 'py-e1-10',
      question: 'Which of the following is the correct way to create a list?',
      options: ['list = (1, 2, 3)', 'list = [1, 2, 3]', 'list = {1, 2, 3}', 'list = <1, 2, 3>'],
      correctAnswer: 1,
      explanation: 'Lists in Python are created using square brackets [].',
      timeLimit: 60
    },
    {
      id: 'py-e1-11',
      question: 'What is indentation used for in Python?',
      options: ['Decoration', 'To define code blocks', 'Comments', 'Variable names'],
      correctAnswer: 1,
      explanation: 'Python uses indentation to define code blocks instead of curly braces.',
      timeLimit: 60
    },
    {
      id: 'py-e1-12',
      question: 'Which operator is used for exponentiation in Python?',
      options: ['^', '**', 'exp', 'pow'],
      correctAnswer: 1,
      explanation: 'The ** operator is used for exponentiation in Python.',
      timeLimit: 60
    },
    {
      id: 'py-e1-13',
      question: 'What is the output of print(3 + 2 * 2)?',
      options: ['10', '7', '8', '6'],
      correctAnswer: 1,
      explanation: 'Following operator precedence, multiplication is performed first: 3 + (2 * 2) = 3 + 4 = 7.',
      timeLimit: 60
    },
    {
      id: 'py-e1-14',
      question: 'Which of the following is a Python keyword?',
      options: ['variable', 'function', 'if', 'method'],
      correctAnswer: 2,
      explanation: 'if is a reserved keyword in Python used for conditional statements.',
      timeLimit: 60
    },
    {
      id: 'py-e1-15',
      question: 'What does the range() function return?',
      options: ['A list', 'A tuple', 'A range object', 'A string'],
      correctAnswer: 2,
      explanation: 'The range() function returns a range object, which is an iterable sequence of numbers.',
      timeLimit: 60
    },
    {
      id: 'py-e1-16',
      question: 'How do you create a dictionary in Python?',
      options: ['dict = []', 'dict = ()', 'dict = {}', 'dict = <>'],
      correctAnswer: 2,
      explanation: 'Dictionaries in Python are created using curly braces {}.',
      timeLimit: 60
    },
    {
      id: 'py-e1-17',
      question: 'What is the correct syntax for a for loop in Python?',
      options: ['for i in range(5):', 'for (i = 0; i < 5; i++):', 'for i = 1 to 5:', 'loop i in range(5):'],
      correctAnswer: 0,
      explanation: 'Python for loops use the syntax: for variable in iterable:',
      timeLimit: 60
    },
    {
      id: 'py-e1-18',
      question: 'Which method is used to add an element to the end of a list?',
      options: ['add()', 'append()', 'insert()', 'push()'],
      correctAnswer: 1,
      explanation: 'The append() method adds an element to the end of a list.',
      timeLimit: 60
    },
    {
      id: 'py-e1-19',
      question: 'What is the output of print("Hello" + "World")?',
      options: ['Hello World', 'HelloWorld', 'Hello+World', 'Error'],
      correctAnswer: 1,
      explanation: 'String concatenation with + joins strings without spaces: "Hello" + "World" = "HelloWorld".',
      timeLimit: 60
    },
    {
      id: 'py-e1-20',
      question: 'Which of the following is used to handle exceptions in Python?',
      options: ['try-catch', 'try-except', 'catch-throw', 'handle-error'],
      correctAnswer: 1,
      explanation: 'Python uses try-except blocks to handle exceptions.',
      timeLimit: 60
    }
  ]
};

// Python - Medium Level (Set 1 of 10)
export const pythonMediumSet1: QuizSet = {
  id: 'python-medium-1',
  setNumber: 1,
  title: 'Python Advanced Concepts - Set 1',
  subject: 'Python',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'py-m1-1',
      question: 'What is a lambda function in Python?',
      options: ['A named function', 'An anonymous function', 'A class method', 'A built-in function'],
      correctAnswer: 1,
      explanation: 'Lambda functions are anonymous functions defined using the lambda keyword.',
      timeLimit: 90
    },
    {
      id: 'py-m1-2',
      question: 'What does the enumerate() function return?',
      options: ['List of values', 'List of indices', 'Tuples of (index, value)', 'Dictionary'],
      correctAnswer: 2,
      explanation: 'enumerate() returns an iterator of tuples containing (index, value) pairs.',
      timeLimit: 90
    },
    {
      id: 'py-m1-3',
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
    },
    {
      id: 'py-m1-4',
      question: 'What is list comprehension?',
      options: [
        'A way to understand lists',
        'A concise way to create lists',
        'A method to sort lists',
        'A function to compress lists'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension provides a concise way to create lists based on existing lists.',
      timeLimit: 90
    },
    {
      id: 'py-m1-5',
      question: 'What is the output of [x**2 for x in range(3)]?',
      options: ['[0, 1, 4]', '[1, 4, 9]', '[0, 1, 2]', '[1, 2, 3]'],
      correctAnswer: 0,
      explanation: 'This list comprehension squares each number in range(3): 0²=0, 1²=1, 2²=4.',
      timeLimit: 90
    },
    {
      id: 'py-m1-6',
      question: 'What is a decorator in Python?',
      options: [
        'A design pattern',
        'A function that modifies another function',
        'A class method',
        'A built-in module'
      ],
      correctAnswer: 1,
      explanation: 'Decorators are functions that modify or extend the behavior of other functions.',
      timeLimit: 90
    },
    {
      id: 'py-m1-7',
      question: 'What does *args allow in a function?',
      options: [
        'Fixed number of arguments',
        'Variable number of positional arguments',
        'Keyword arguments only',
        'No arguments'
      ],
      correctAnswer: 1,
      explanation: '*args allows a function to accept a variable number of positional arguments.',
      timeLimit: 90
    },
    {
      id: 'py-m1-8',
      question: 'What does **kwargs allow in a function?',
      options: [
        'Variable number of keyword arguments',
        'Fixed keyword arguments',
        'Positional arguments only',
        'No keyword arguments'
      ],
      correctAnswer: 0,
      explanation: '**kwargs allows a function to accept a variable number of keyword arguments.',
      timeLimit: 90
    },
    {
      id: 'py-m1-9',
      question: 'What is the difference between append() and extend()?',
      options: [
        'No difference',
        'append() adds single element, extend() adds multiple elements',
        'extend() is faster',
        'append() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'append() adds a single element to the end, while extend() adds all elements from an iterable.',
      timeLimit: 90
    },
    {
      id: 'py-m1-10',
      question: 'What is a generator in Python?',
      options: [
        'A function that returns an iterator',
        'A class constructor',
        'A built-in module',
        'A type of loop'
      ],
      correctAnswer: 0,
      explanation: 'Generators are functions that return iterators and yield values one at a time.',
      timeLimit: 90
    },
    {
      id: 'py-m1-11',
      question: 'What keyword is used to create a generator?',
      options: ['return', 'yield', 'generate', 'create'],
      correctAnswer: 1,
      explanation: 'The yield keyword is used to create generators in Python.',
      timeLimit: 90
    },
    {
      id: 'py-m1-12',
      question: 'What is the purpose of the __init__ method?',
      options: [
        'To initialize object attributes',
        'To delete objects',
        'To copy objects',
        'To compare objects'
      ],
      correctAnswer: 0,
      explanation: '__init__ is the constructor method used to initialize object attributes when an instance is created.',
      timeLimit: 90
    },
    {
      id: 'py-m1-13',
      question: 'What is inheritance in Python?',
      options: [
        'Sharing money',
        'A class acquiring properties from another class',
        'Creating new variables',
        'Importing modules'
      ],
      correctAnswer: 1,
      explanation: 'Inheritance allows a class to acquire properties and methods from another class.',
      timeLimit: 90
    },
    {
      id: 'py-m1-14',
      question: 'What is the super() function used for?',
      options: [
        'To access parent class methods',
        'To create superclasses',
        'To delete classes',
        'To check class types'
      ],
      correctAnswer: 0,
      explanation: 'super() is used to access methods and properties from the parent class.',
      timeLimit: 90
    },
    {
      id: 'py-m1-15',
      question: 'What is method overriding?',
      options: [
        'Creating new methods',
        'Redefining parent class methods in child class',
        'Deleting methods',
        'Copying methods'
      ],
      correctAnswer: 1,
      explanation: 'Method overriding allows a child class to provide a specific implementation of a parent class method.',
      timeLimit: 90
    },
    {
      id: 'py-m1-16',
      question: 'What is the difference between remove() and pop()?',
      options: [
        'remove() by value, pop() by index',
        'pop() by value, remove() by index',
        'No difference',
        'remove() is faster'
      ],
      correctAnswer: 0,
      explanation: 'remove() removes the first occurrence of a value, while pop() removes and returns an element by index.',
      timeLimit: 90
    },
    {
      id: 'py-m1-17',
      question: 'What is a set in Python?',
      options: [
        'An ordered collection',
        'An unordered collection of unique elements',
        'A type of list',
        'A dictionary variant'
      ],
      correctAnswer: 1,
      explanation: 'Sets are unordered collections of unique elements in Python.',
      timeLimit: 90
    },
    {
      id: 'py-m1-18',
      question: 'What does the zip() function do?',
      options: [
        'Compresses files',
        'Combines multiple iterables',
        'Sorts lists',
        'Creates tuples'
      ],
      correctAnswer: 1,
      explanation: 'zip() combines multiple iterables (lists, tuples, etc.) element-wise.',
      timeLimit: 90
    },
    {
      id: 'py-m1-19',
      question: 'What is the purpose of the pass statement?',
      options: [
        'To skip execution',
        'A null operation placeholder',
        'To pass variables',
        'To return values'
      ],
      correctAnswer: 1,
      explanation: 'pass is a null operation used as a placeholder where syntactically some code is required.',
      timeLimit: 90
    },
    {
      id: 'py-m1-20',
      question: 'What is the difference between shallow and deep copy?',
      options: [
        'No difference',
        'Shallow copies references, deep copies creates new objects',
        'Deep copy is faster',
        'Shallow copy is more memory efficient'
      ],
      correctAnswer: 1,
      explanation: 'Shallow copy copies references to objects, while deep copy creates new objects recursively.',
      timeLimit: 90
    }
  ]
};

export const pythonEasySets: QuizSet[] = [pythonEasySet1, ...pythonAdditionalEasySets];
export const pythonMediumSets: QuizSet[] = [pythonMediumSet1, ...pythonAdditionalMediumSets];
export const pythonHardSets: QuizSet[] = [...additionalHardSets];
