import { QuizSet } from './enhancedQuizStructure';

// JavaScript - Easy Set 1
export const javascriptEasySet1: QuizSet = {
  id: 'js-easy-1',
  setNumber: 1,
  title: 'JavaScript Fundamentals - Set 1',
  subject: 'JavaScript',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'js-e1-1',
      question: 'What is JavaScript?',
      options: ['A Java library', 'A programming language for web development', 'A database', 'An operating system'],
      correctAnswer: 1,
      explanation: 'JavaScript is a high-level programming language primarily used for web development.',
      timeLimit: 60
    },
    {
      id: 'js-e1-2',
      question: 'How do you declare a variable in JavaScript?',
      options: ['variable x;', 'var x;', 'declare x;', 'x variable;'],
      correctAnswer: 1,
      explanation: 'Variables in JavaScript are declared using var, let, or const keywords.',
      timeLimit: 60
    },
    {
      id: 'js-e1-3',
      question: 'Which method is used to write output in JavaScript?',
      options: ['console.log()', 'print()', 'write()', 'output()'],
      correctAnswer: 0,
      explanation: 'console.log() is used to output data to the browser console.',
      timeLimit: 60
    },
    {
      id: 'js-e1-4',
      question: 'What is the correct way to create a function?',
      options: ['function myFunction() {}', 'create myFunction() {}', 'def myFunction() {}', 'func myFunction() {}'],
      correctAnswer: 0,
      explanation: 'Functions in JavaScript are created using the function keyword.',
      timeLimit: 60
    },
    {
      id: 'js-e1-5',
      question: 'Which operator is used for equality comparison?',
      options: ['=', '==', '===', 'equals'],
      correctAnswer: 2,
      explanation: '=== is used for strict equality comparison (value and type).',
      timeLimit: 60
    },
    {
      id: 'js-e1-6',
      question: 'How do you create an array in JavaScript?',
      options: ['var arr = [];', 'var arr = {};', 'var arr = ();', 'var arr = <>;'],
      correctAnswer: 0,
      explanation: 'Arrays in JavaScript are created using square brackets [].',
      timeLimit: 60
    },
    {
      id: 'js-e1-7',
      question: 'What is the correct syntax for an if statement?',
      options: ['if x == 5', 'if (x == 5)', 'if x = 5', 'if (x = 5)'],
      correctAnswer: 1,
      explanation: 'if statements require parentheses around the condition.',
      timeLimit: 60
    },
    {
      id: 'js-e1-8',
      question: 'Which method adds an element to the end of an array?',
      options: ['add()', 'push()', 'append()', 'insert()'],
      correctAnswer: 1,
      explanation: 'The push() method adds elements to the end of an array.',
      timeLimit: 60
    },
    {
      id: 'js-e1-9',
      question: 'What does NaN stand for?',
      options: ['Not a Name', 'Not a Number', 'New and Nice', 'Null and None'],
      correctAnswer: 1,
      explanation: 'NaN stands for "Not a Number" and represents an invalid number.',
      timeLimit: 60
    },
    {
      id: 'js-e1-10',
      question: 'How do you write a comment in JavaScript?',
      options: ['# This is a comment', '// This is a comment', '<!-- This is a comment -->', '* This is a comment'],
      correctAnswer: 1,
      explanation: 'Single-line comments in JavaScript start with //',
      timeLimit: 60
    },
    {
      id: 'js-e1-11',
      question: 'What is the result of 5 + "5" in JavaScript?',
      options: ['10', '"55"', 'Error', 'undefined'],
      correctAnswer: 1,
      explanation: 'JavaScript performs string concatenation when adding a number and string.',
      timeLimit: 60
    },
    {
      id: 'js-e1-12',
      question: 'Which keyword is used to declare a constant?',
      options: ['var', 'let', 'const', 'constant'],
      correctAnswer: 2,
      explanation: 'const keyword is used to declare constants in JavaScript.',
      timeLimit: 60
    },
    {
      id: 'js-e1-13',
      question: 'What is the correct way to access an object property?',
      options: ['obj.property', 'obj->property', 'obj::property', 'obj#property'],
      correctAnswer: 0,
      explanation: 'Object properties are accessed using dot notation (obj.property).',
      timeLimit: 60
    },
    {
      id: 'js-e1-14',
      question: 'Which method converts a string to a number?',
      options: ['parseInt()', 'toNumber()', 'convert()', 'number()'],
      correctAnswer: 0,
      explanation: 'parseInt() converts a string to an integer.',
      timeLimit: 60
    },
    {
      id: 'js-e1-15',
      question: 'What is the correct syntax for a for loop?',
      options: ['for (i = 0; i < 5; i++)', 'for i = 0 to 5', 'for (i in 5)', 'loop (i = 0; i < 5; i++)'],
      correctAnswer: 0,
      explanation: 'for loops use the syntax: for (initialization; condition; increment)',
      timeLimit: 60
    },
    {
      id: 'js-e1-16',
      question: 'What does the typeof operator return for an array?',
      options: ['array', 'object', 'list', 'collection'],
      correctAnswer: 1,
      explanation: 'typeof returns "object" for arrays in JavaScript.',
      timeLimit: 60
    },
    {
      id: 'js-e1-17',
      question: 'How do you create an object in JavaScript?',
      options: ['var obj = {};', 'var obj = [];', 'var obj = ();', 'var obj = new Object[]'],
      correctAnswer: 0,
      explanation: 'Objects in JavaScript are created using curly braces {}.',
      timeLimit: 60
    },
    {
      id: 'js-e1-18',
      question: 'Which method removes the last element from an array?',
      options: ['remove()', 'pop()', 'delete()', 'splice()'],
      correctAnswer: 1,
      explanation: 'The pop() method removes and returns the last element of an array.',
      timeLimit: 60
    },
    {
      id: 'js-e1-19',
      question: 'What is the difference between null and undefined?',
      options: ['No difference', 'null is assigned, undefined is not initialized', 'undefined is assigned, null is not initialized', 'Both are the same'],
      correctAnswer: 1,
      explanation: 'null is an assigned value meaning "no value", undefined means a variable has been declared but not assigned.',
      timeLimit: 60
    },
    {
      id: 'js-e1-20',
      question: 'Which event occurs when a user clicks on an HTML element?',
      options: ['onchange', 'onclick', 'onmouseclick', 'onselect'],
      correctAnswer: 1,
      explanation: 'The onclick event occurs when a user clicks on an HTML element.',
      timeLimit: 60
    }
  ]
};

// JavaScript - Medium Set 1
export const javascriptMediumSet1: QuizSet = {
  id: 'js-medium-1',
  setNumber: 1,
  title: 'JavaScript Advanced Concepts - Set 1',
  subject: 'JavaScript',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'js-m1-1',
      question: 'What is closure in JavaScript?',
      options: [
        'A way to close functions',
        'A function that has access to variables in its outer scope',
        'A method to close objects',
        'A type of loop'
      ],
      correctAnswer: 1,
      explanation: 'Closure allows a function to access variables from its outer (enclosing) scope even after the outer function has returned.',
      timeLimit: 90
    },
    {
      id: 'js-m1-2',
      question: 'What is the difference between let and var?',
      options: [
        'No difference',
        'let has block scope, var has function scope',
        'var is newer than let',
        'let is faster than var'
      ],
      correctAnswer: 1,
      explanation: 'let has block scope and is not hoisted, while var has function scope and is hoisted.',
      timeLimit: 90
    },
    {
      id: 'js-m1-3',
      question: 'What is hoisting in JavaScript?',
      options: [
        'Moving code up',
        'Variable and function declarations are moved to the top of their scope',
        'Lifting objects',
        'Raising exceptions'
      ],
      correctAnswer: 1,
      explanation: 'Hoisting moves variable and function declarations to the top of their containing scope during compilation.',
      timeLimit: 90
    },
    {
      id: 'js-m1-4',
      question: 'What is the purpose of the "this" keyword?',
      options: [
        'Refers to the current object',
        'Refers to the current function',
        'Refers to the current variable',
        'Refers to the current scope'
      ],
      correctAnswer: 0,
      explanation: '"this" refers to the object that is executing the current function.',
      timeLimit: 90
    },
    {
      id: 'js-m1-5',
      question: 'What is an arrow function?',
      options: [
        'A function with arrows',
        'A shorter syntax for writing functions',
        'A function that points to something',
        'A navigation function'
      ],
      correctAnswer: 1,
      explanation: 'Arrow functions provide a shorter syntax for writing functions and have lexical "this" binding.',
      timeLimit: 90
    },
    {
      id: 'js-m1-6',
      question: 'What is the difference between == and ===?',
      options: [
        'No difference',
        '== compares values, === compares values and types',
        '=== is faster',
        '== is deprecated'
      ],
      correctAnswer: 1,
      explanation: '== performs type coercion before comparison, === compares both value and type without coercion.',
      timeLimit: 90
    },
    {
      id: 'js-m1-7',
      question: 'What is a Promise in JavaScript?',
      options: [
        'A commitment',
        'An object representing eventual completion of an asynchronous operation',
        'A type of function',
        'A variable type'
      ],
      correctAnswer: 1,
      explanation: 'Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
      timeLimit: 90
    },
    {
      id: 'js-m1-8',
      question: 'What is the purpose of async/await?',
      options: [
        'To make code run faster',
        'To handle asynchronous operations more easily',
        'To create animations',
        'To handle errors'
      ],
      correctAnswer: 1,
      explanation: 'async/await provides a cleaner way to handle asynchronous operations compared to callbacks and promises.',
      timeLimit: 90
    },
    {
      id: 'js-m1-9',
      question: 'What is destructuring in JavaScript?',
      options: [
        'Breaking objects',
        'Extracting values from arrays or objects into variables',
        'Destroying variables',
        'Removing properties'
      ],
      correctAnswer: 1,
      explanation: 'Destructuring allows extracting values from arrays or properties from objects into distinct variables.',
      timeLimit: 90
    },
    {
      id: 'js-m1-10',
      question: 'What is the spread operator?',
      options: [
        'An operator that spreads butter',
        'An operator (...) that expands iterables',
        'An operator for multiplication',
        'An operator for division'
      ],
      correctAnswer: 1,
      explanation: 'The spread operator (...) allows an iterable to be expanded in places where multiple elements are expected.',
      timeLimit: 90
    },
    {
      id: 'js-m1-11',
      question: 'What is the difference between map() and forEach()?',
      options: [
        'No difference',
        'map() returns new array, forEach() returns undefined',
        'forEach() is faster',
        'map() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'map() creates and returns a new array, while forEach() executes a function for each element but returns undefined.',
      timeLimit: 90
    },
    {
      id: 'js-m1-12',
      question: 'What is event bubbling?',
      options: [
        'Events creating bubbles',
        'Events propagating from child to parent elements',
        'Events disappearing',
        'Events multiplying'
      ],
      correctAnswer: 1,
      explanation: 'Event bubbling is when an event starts from the target element and bubbles up to parent elements.',
      timeLimit: 90
    },
    {
      id: 'js-m1-13',
      question: 'What is the purpose of JSON.stringify()?',
      options: [
        'To parse JSON',
        'To convert JavaScript object to JSON string',
        'To validate JSON',
        'To format JSON'
      ],
      correctAnswer: 1,
      explanation: 'JSON.stringify() converts a JavaScript object or value to a JSON string.',
      timeLimit: 90
    },
    {
      id: 'js-m1-14',
      question: 'What is a callback function?',
      options: [
        'A function that calls back',
        'A function passed as argument to another function',
        'A function that returns',
        'A recursive function'
      ],
      correctAnswer: 1,
      explanation: 'A callback function is passed as an argument to another function and is executed after some operation has completed.',
      timeLimit: 90
    },
    {
      id: 'js-m1-15',
      question: 'What is the difference between slice() and splice()?',
      options: [
        'No difference',
        'slice() returns new array, splice() modifies original array',
        'splice() is faster',
        'slice() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'slice() returns a shallow copy of a portion of an array, splice() changes the original array by removing/adding elements.',
      timeLimit: 90
    },
    {
      id: 'js-m1-16',
      question: 'What is the purpose of the bind() method?',
      options: [
        'To bind variables',
        'To create a new function with a specific "this" value',
        'To bind events',
        'To bind arrays'
      ],
      correctAnswer: 1,
      explanation: 'bind() creates a new function with a specified "this" value and optional preset arguments.',
      timeLimit: 90
    },
    {
      id: 'js-m1-17',
      question: 'What is a higher-order function?',
      options: [
        'A function with high priority',
        'A function that takes or returns other functions',
        'A function with many parameters',
        'A complex function'
      ],
      correctAnswer: 1,
      explanation: 'Higher-order functions are functions that take other functions as arguments or return functions.',
      timeLimit: 90
    },
    {
      id: 'js-m1-18',
      question: 'What is the purpose of setTimeout()?',
      options: [
        'To set time',
        'To execute code after a specified delay',
        'To measure time',
        'To stop time'
      ],
      correctAnswer: 1,
      explanation: 'setTimeout() executes a function or code after a specified number of milliseconds.',
      timeLimit: 90
    },
    {
      id: 'js-m1-19',
      question: 'What is the difference between call() and apply()?',
      options: [
        'No difference',
        'call() takes arguments separately, apply() takes arguments as array',
        'apply() is faster',
        'call() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'call() takes arguments individually, while apply() takes arguments as an array.',
      timeLimit: 90
    },
    {
      id: 'js-m1-20',
      question: 'What is a template literal?',
      options: [
        'A literal template',
        'String literals with embedded expressions using backticks',
        'A design template',
        'A code template'
      ],
      correctAnswer: 1,
      explanation: 'Template literals use backticks (`) and allow embedded expressions with ${expression} syntax.',
      timeLimit: 90
    }
  ]
};

// JavaScript - Hard Set 1
export const javascriptHardSet1: QuizSet = {
  id: 'js-hard-1',
  setNumber: 1,
  title: 'JavaScript Expert Level - Set 1',
  subject: 'JavaScript',
  difficulty: 'HARD',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'js-h1-1',
      question: 'What is the event loop in JavaScript?',
      options: [
        'A loop for events',
        'Mechanism that handles asynchronous operations in single-threaded JavaScript',
        'A type of for loop',
        'An event handler'
      ],
      correctAnswer: 1,
      explanation: 'The event loop is responsible for handling asynchronous operations in JavaScript\'s single-threaded environment.',
      timeLimit: 120
    },
    {
      id: 'js-h1-2',
      question: 'What is the difference between microtasks and macrotasks?',
      options: [
        'No difference',
        'Microtasks have higher priority and execute before macrotasks',
        'Macrotasks are faster',
        'Microtasks are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Microtasks (like Promise callbacks) have higher priority and execute before macrotasks (like setTimeout).',
      timeLimit: 120
    },
    {
      id: 'js-h1-3',
      question: 'What is a WeakMap in JavaScript?',
      options: [
        'A weak version of Map',
        'A Map with weak references to keys that allows garbage collection',
        'A Map with fewer features',
        'A deprecated Map type'
      ],
      correctAnswer: 1,
      explanation: 'WeakMap holds weak references to keys, allowing them to be garbage collected when no other references exist.',
      timeLimit: 120
    },
    {
      id: 'js-h1-4',
      question: 'What is the purpose of Proxy in JavaScript?',
      options: [
        'Network proxy',
        'Intercepts and customizes operations on objects',
        'Proxy server',
        'Object wrapper'
      ],
      correctAnswer: 1,
      explanation: 'Proxy allows you to intercept and customize operations performed on objects (property lookup, assignment, etc.).',
      timeLimit: 120
    },
    {
      id: 'js-h1-5',
      question: 'What is the difference between Object.freeze() and Object.seal()?',
      options: [
        'No difference',
        'freeze() prevents all changes, seal() allows property value changes',
        'seal() is stronger than freeze()',
        'freeze() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Object.freeze() prevents all changes, Object.seal() prevents adding/removing properties but allows modifying existing ones.',
      timeLimit: 120
    },
    {
      id: 'js-h1-6',
      question: 'What is a generator function?',
      options: [
        'A function generator',
        'A function that can pause and resume execution',
        'A function that generates code',
        'A random function generator'
      ],
      correctAnswer: 1,
      explanation: 'Generator functions can pause execution with yield and resume later, returning an iterator object.',
      timeLimit: 120
    },
    {
      id: 'js-h1-7',
      question: 'What is the purpose of Symbol in JavaScript?',
      options: [
        'Mathematical symbols',
        'Unique identifiers for object properties',
        'String symbols',
        'Visual symbols'
      ],
      correctAnswer: 1,
      explanation: 'Symbols are unique identifiers that can be used as object property keys to avoid naming conflicts.',
      timeLimit: 120
    },
    {
      id: 'js-h1-8',
      question: 'What is the difference between shallow and deep cloning?',
      options: [
        'No difference',
        'Shallow copies references, deep cloning creates new objects recursively',
        'Deep cloning is faster',
        'Shallow cloning is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Shallow cloning copies only the first level, deep cloning recursively copies all nested objects.',
      timeLimit: 120
    },
    {
      id: 'js-h1-9',
      question: 'What is the purpose of WeakSet?',
      options: [
        'A weak version of Set',
        'A Set with weak references allowing garbage collection',
        'A Set with fewer features',
        'A deprecated Set type'
      ],
      correctAnswer: 1,
      explanation: 'WeakSet holds weak references to objects, allowing them to be garbage collected when no other references exist.',
      timeLimit: 120
    },
    {
      id: 'js-h1-10',
      question: 'What is the difference between for...in and for...of?',
      options: [
        'No difference',
        'for...in iterates over keys, for...of iterates over values',
        'for...of is faster',
        'for...in is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'for...in iterates over enumerable property names, for...of iterates over iterable values.',
      timeLimit: 120
    },
    {
      id: 'js-h1-11',
      question: 'What is a service worker?',
      options: [
        'A worker service',
        'A script that runs in background for offline functionality',
        'A web worker',
        'A server worker'
      ],
      correctAnswer: 1,
      explanation: 'Service workers are scripts that run in the background, enabling features like offline functionality and push notifications.',
      timeLimit: 120
    },
    {
      id: 'js-h1-12',
      question: 'What is the purpose of Object.defineProperty()?',
      options: [
        'Defines object properties',
        'Defines property with specific descriptors (writable, enumerable, configurable)',
        'Creates new properties',
        'Deletes properties'
      ],
      correctAnswer: 1,
      explanation: 'Object.defineProperty() defines a new property or modifies an existing property with specific descriptors.',
      timeLimit: 120
    },
    {
      id: 'js-h1-13',
      question: 'What is the difference between regular functions and arrow functions regarding "this"?',
      options: [
        'No difference',
        'Regular functions have dynamic "this", arrow functions have lexical "this"',
        'Arrow functions are faster',
        'Regular functions are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Regular functions have dynamic "this" based on how they\'re called, arrow functions inherit "this" from enclosing scope.',
      timeLimit: 120
    },
    {
      id: 'js-h1-14',
      question: 'What is a memory leak in JavaScript?',
      options: [
        'Memory flowing out',
        'Memory that cannot be garbage collected due to unwanted references',
        'Memory corruption',
        'Memory overflow'
      ],
      correctAnswer: 1,
      explanation: 'Memory leaks occur when memory cannot be garbage collected due to unwanted references that prevent cleanup.',
      timeLimit: 120
    },
    {
      id: 'js-h1-15',
      question: 'What is the purpose of Reflect in JavaScript?',
      options: [
        'Reflection in mirrors',
        'Provides methods for interceptable JavaScript operations',
        'Reflects objects',
        'Creates reflections'
      ],
      correctAnswer: 1,
      explanation: 'Reflect provides methods for interceptable JavaScript operations, often used with Proxy.',
      timeLimit: 120
    },
    {
      id: 'js-h1-16',
      question: 'What is the difference between synchronous and asynchronous code execution?',
      options: [
        'No difference',
        'Synchronous blocks execution, asynchronous allows concurrent operations',
        'Asynchronous is always faster',
        'Synchronous is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Synchronous code blocks execution until completion, asynchronous code allows other operations to continue.',
      timeLimit: 120
    },
    {
      id: 'js-h1-17',
      question: 'What is currying in JavaScript?',
      options: [
        'Cooking curry',
        'Transforming function with multiple arguments into sequence of functions',
        'Curving functions',
        'Function decoration'
      ],
      correctAnswer: 1,
      explanation: 'Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument.',
      timeLimit: 120
    },
    {
      id: 'js-h1-18',
      question: 'What is the purpose of the Intl object?',
      options: [
        'Internal object',
        'Provides internationalization and localization features',
        'Integer object',
        'Interface object'
      ],
      correctAnswer: 1,
      explanation: 'Intl provides access to internationalization and localization functionality like date/number formatting.',
      timeLimit: 120
    },
    {
      id: 'js-h1-19',
      question: 'What is the difference between mutable and immutable objects?',
      options: [
        'No difference',
        'Mutable objects can be changed, immutable objects cannot',
        'Immutable objects are faster',
        'Mutable objects are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Mutable objects can be modified after creation, immutable objects cannot be changed once created.',
      timeLimit: 120
    },
    {
      id: 'js-h1-20',
      question: 'What is the purpose of the AbortController?',
      options: [
        'Controls abortions',
        'Provides ability to abort asynchronous operations like fetch requests',
        'Controls program termination',
        'Controls error handling'
      ],
      correctAnswer: 1,
      explanation: 'AbortController provides the ability to abort asynchronous operations like fetch requests or event listeners.',
      timeLimit: 120
    }
  ]
};

export const javascriptEasySets: QuizSet[] = [javascriptEasySet1];
export const javascriptMediumSets: QuizSet[] = [javascriptMediumSet1];
export const javascriptHardSets: QuizSet[] = [javascriptHardSet1];
