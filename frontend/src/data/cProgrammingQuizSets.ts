import { QuizSet } from './enhancedQuizStructure';
import { cProgrammingAdditionalEasySets, cProgrammingMediumSets as additionalMediumSets } from './cProgrammingAdditionalSets';

// C Programming - Easy Level (10 sets, 20 questions each)
export const cProgrammingEasySet1: QuizSet = {
  id: 'c-easy-1',
  setNumber: 1,
  title: 'C Programming Basics - Set 1',
  subject: 'C Programming',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'c-e1-1',
      question: 'Which of the following is the correct syntax to declare a variable in C?',
      options: ['int x;', 'integer x;', 'var x;', 'declare x;'],
      correctAnswer: 0,
      explanation: 'In C, variables are declared using the data type followed by the variable name.',
      timeLimit: 60
    },
    {
      id: 'c-e1-2',
      question: 'What is the output of printf("%d", 5 + 3);?',
      options: ['5 + 3', '8', '53', 'Error'],
      correctAnswer: 1,
      explanation: 'The expression 5 + 3 evaluates to 8, which is printed as an integer.',
      timeLimit: 60
    },
    {
      id: 'c-e1-3',
      question: 'Which header file is required for printf() function?',
      options: ['<stdlib.h>', '<stdio.h>', '<string.h>', '<math.h>'],
      correctAnswer: 1,
      explanation: 'stdio.h (standard input/output) header file contains the declaration for printf().',
      timeLimit: 60
    },
    {
      id: 'c-e1-4',
      question: 'What is the correct way to comment a single line in C?',
      options: ['# This is a comment', '// This is a comment', '/* This is a comment', '-- This is a comment'],
      correctAnswer: 1,
      explanation: '// is used for single-line comments in C (C99 standard and later).',
      timeLimit: 60
    },
    {
      id: 'c-e1-5',
      question: 'Which of the following is NOT a valid C data type?',
      options: ['int', 'float', 'char', 'string'],
      correctAnswer: 3,
      explanation: 'string is not a primitive data type in C. Strings are represented as character arrays.',
      timeLimit: 60
    },
    {
      id: 'c-e1-6',
      question: 'What is the size of int data type in C (typically)?',
      options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'],
      correctAnswer: 2,
      explanation: 'On most modern systems, int is typically 4 bytes (32 bits).',
      timeLimit: 60
    },
    {
      id: 'c-e1-7',
      question: 'Which operator is used for address-of in C?',
      options: ['*', '&', '@', '#'],
      correctAnswer: 1,
      explanation: 'The & operator is used to get the address of a variable.',
      timeLimit: 60
    },
    {
      id: 'c-e1-8',
      question: 'What does the scanf() function do?',
      options: ['Prints output', 'Reads input from user', 'Calculates values', 'Declares variables'],
      correctAnswer: 1,
      explanation: 'scanf() is used to read formatted input from the user.',
      timeLimit: 60
    },
    {
      id: 'c-e1-9',
      question: 'Which of the following is the correct syntax for a for loop?',
      options: ['for(i=0; i<10; i++)', 'for i=0 to 10', 'for(i=0, i<10, i++)', 'loop(i=0; i<10; i++)'],
      correctAnswer: 0,
      explanation: 'The correct syntax is for(initialization; condition; increment/decrement).',
      timeLimit: 60
    },
    {
      id: 'c-e1-10',
      question: 'What is the purpose of the main() function?',
      options: ['To declare variables', 'Entry point of the program', 'To include headers', 'To define constants'],
      correctAnswer: 1,
      explanation: 'main() is the entry point where program execution begins.',
      timeLimit: 60
    },
    {
      id: 'c-e1-11',
      question: 'Which symbol is used to terminate statements in C?',
      options: ['.', ',', ';', ':'],
      correctAnswer: 2,
      explanation: 'Semicolon (;) is used to terminate statements in C.',
      timeLimit: 60
    },
    {
      id: 'c-e1-12',
      question: 'What is the correct way to declare a constant in C?',
      options: ['const int x = 5;', 'constant x = 5;', 'final int x = 5;', 'static x = 5;'],
      correctAnswer: 0,
      explanation: 'const keyword is used to declare constants in C.',
      timeLimit: 60
    },
    {
      id: 'c-e1-13',
      question: 'Which of the following is a valid variable name in C?',
      options: ['2variable', 'variable_2', 'variable-2', 'variable 2'],
      correctAnswer: 1,
      explanation: 'Variable names can contain letters, digits, and underscores, but cannot start with a digit.',
      timeLimit: 60
    },
    {
      id: 'c-e1-14',
      question: 'What does the \\n character represent?',
      options: ['New line', 'Null character', 'Tab space', 'Backslash'],
      correctAnswer: 0,
      explanation: '\\n is an escape sequence that represents a new line character.',
      timeLimit: 60
    },
    {
      id: 'c-e1-15',
      question: 'Which function is used to find the length of a string?',
      options: ['length()', 'strlen()', 'size()', 'count()'],
      correctAnswer: 1,
      explanation: 'strlen() function from string.h library returns the length of a string.',
      timeLimit: 60
    },
    {
      id: 'c-e1-16',
      question: 'What is the default return type of main() function?',
      options: ['void', 'int', 'char', 'float'],
      correctAnswer: 1,
      explanation: 'The main() function returns an int by default, indicating program exit status.',
      timeLimit: 60
    },
    {
      id: 'c-e1-17',
      question: 'Which operator has the highest precedence?',
      options: ['+', '*', '()', '='],
      correctAnswer: 2,
      explanation: 'Parentheses () have the highest precedence in C.',
      timeLimit: 60
    },
    {
      id: 'c-e1-18',
      question: 'What is the purpose of #include directive?',
      options: ['To declare variables', 'To include header files', 'To define functions', 'To create loops'],
      correctAnswer: 1,
      explanation: '#include directive is used to include header files in the program.',
      timeLimit: 60
    },
    {
      id: 'c-e1-19',
      question: 'Which of the following is a logical operator?',
      options: ['+', '&&', '=', '%'],
      correctAnswer: 1,
      explanation: '&& is a logical AND operator in C.',
      timeLimit: 60
    },
    {
      id: 'c-e1-20',
      question: 'What does the break statement do in a loop?',
      options: ['Continues to next iteration', 'Exits the loop', 'Pauses the loop', 'Restarts the loop'],
      correctAnswer: 1,
      explanation: 'break statement is used to exit/terminate a loop prematurely.',
      timeLimit: 60
    }
  ]
};

export const cProgrammingEasySet2: QuizSet = {
  id: 'c-easy-2',
  setNumber: 2,
  title: 'C Programming Basics - Set 2',
  subject: 'C Programming',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'c-e2-1',
      question: 'What is the correct syntax to declare an array in C?',
      options: ['int arr[10];', 'array int arr[10];', 'int arr[];', 'declare arr[10];'],
      correctAnswer: 0,
      explanation: 'Arrays are declared as datatype arrayname[size] in C.',
      timeLimit: 60
    },
    {
      id: 'c-e2-2',
      question: 'Which of the following is used to allocate memory dynamically?',
      options: ['alloc()', 'malloc()', 'memory()', 'new()'],
      correctAnswer: 1,
      explanation: 'malloc() function is used for dynamic memory allocation in C.',
      timeLimit: 60
    },
    {
      id: 'c-e2-3',
      question: 'What is a pointer in C?',
      options: ['A data type', 'A variable that stores address', 'A function', 'A constant'],
      correctAnswer: 1,
      explanation: 'A pointer is a variable that stores the memory address of another variable.',
      timeLimit: 60
    },
    {
      id: 'c-e2-4',
      question: 'Which header file is needed for malloc()?',
      options: ['<stdio.h>', '<stdlib.h>', '<string.h>', '<math.h>'],
      correctAnswer: 1,
      explanation: 'stdlib.h header file contains malloc() function declaration.',
      timeLimit: 60
    },
    {
      id: 'c-e2-5',
      question: 'What does the continue statement do?',
      options: ['Exits the loop', 'Skips current iteration', 'Pauses execution', 'Restarts program'],
      correctAnswer: 1,
      explanation: 'continue statement skips the rest of the current iteration and moves to the next.',
      timeLimit: 60
    },
    {
      id: 'c-e2-6',
      question: 'Which function is used to copy strings?',
      options: ['copy()', 'strcpy()', 'stringcopy()', 'cpystr()'],
      correctAnswer: 1,
      explanation: 'strcpy() function is used to copy one string to another.',
      timeLimit: 60
    },
    {
      id: 'c-e2-7',
      question: 'What is the output of printf("%c", 65);?',
      options: ['65', 'A', 'Error', 'a'],
      correctAnswer: 1,
      explanation: 'ASCII value 65 corresponds to character A.',
      timeLimit: 60
    },
    {
      id: 'c-e2-8',
      question: 'Which of the following is a conditional statement?',
      options: ['for', 'while', 'if', 'do'],
      correctAnswer: 2,
      explanation: 'if is a conditional statement used for decision making.',
      timeLimit: 60
    },
    {
      id: 'c-e2-9',
      question: 'What is the purpose of return statement?',
      options: ['To exit function', 'To return a value', 'Both A and B', 'To declare variables'],
      correctAnswer: 2,
      explanation: 'return statement exits a function and optionally returns a value.',
      timeLimit: 60
    },
    {
      id: 'c-e2-10',
      question: 'Which operator is used for modulus operation?',
      options: ['%', '/', '*', '&'],
      correctAnswer: 0,
      explanation: '% operator gives the remainder of division operation.',
      timeLimit: 60
    },
    {
      id: 'c-e2-11',
      question: 'What is the size of char data type?',
      options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'],
      correctAnswer: 0,
      explanation: 'char data type is always 1 byte in C.',
      timeLimit: 60
    },
    {
      id: 'c-e2-12',
      question: 'Which loop executes at least once?',
      options: ['for loop', 'while loop', 'do-while loop', 'All loops'],
      correctAnswer: 2,
      explanation: 'do-while loop checks condition after execution, so it runs at least once.',
      timeLimit: 60
    },
    {
      id: 'c-e2-13',
      question: 'What does \\t represent?',
      options: ['Tab space', 'New line', 'Null character', 'Backslash'],
      correctAnswer: 0,
      explanation: '\\t is an escape sequence for tab character.',
      timeLimit: 60
    },
    {
      id: 'c-e2-14',
      question: 'Which function is used to compare strings?',
      options: ['compare()', 'strcmp()', 'strcompare()', 'equal()'],
      correctAnswer: 1,
      explanation: 'strcmp() function compares two strings lexicographically.',
      timeLimit: 60
    },
    {
      id: 'c-e2-15',
      question: 'What is the correct way to declare a function?',
      options: ['function name()', 'return_type function_name()', 'def function_name()', 'func name()'],
      correctAnswer: 1,
      explanation: 'Functions are declared as return_type function_name(parameters).',
      timeLimit: 60
    },
    {
      id: 'c-e2-16',
      question: 'Which of the following is an arithmetic operator?',
      options: ['&&', '||', '+', '=='],
      correctAnswer: 2,
      explanation: '+ is an arithmetic operator used for addition.',
      timeLimit: 60
    },
    {
      id: 'c-e2-17',
      question: 'What does free() function do?',
      options: ['Allocates memory', 'Deallocates memory', 'Copies memory', 'Clears screen'],
      correctAnswer: 1,
      explanation: 'free() function deallocates previously allocated memory.',
      timeLimit: 60
    },
    {
      id: 'c-e2-18',
      question: 'Which is the correct syntax for switch statement?',
      options: ['switch(variable)', 'switch variable', 'case(variable)', 'select(variable)'],
      correctAnswer: 0,
      explanation: 'switch statement syntax is switch(expression) followed by case labels.',
      timeLimit: 60
    },
    {
      id: 'c-e2-19',
      question: 'What is the purpose of default case in switch?',
      options: ['First case to execute', 'Last case to execute', 'Executes when no case matches', 'Optional case'],
      correctAnswer: 2,
      explanation: 'default case executes when none of the other cases match.',
      timeLimit: 60
    },
    {
      id: 'c-e2-20',
      question: 'Which function converts string to integer?',
      options: ['strtoint()', 'atoi()', 'toint()', 'convert()'],
      correctAnswer: 1,
      explanation: 'atoi() function converts string to integer.',
      timeLimit: 60
    }
  ]
};

export const cProgrammingEasySets: QuizSet[] = [cProgrammingEasySet1, cProgrammingEasySet2, ...cProgrammingAdditionalEasySets];
export const cProgrammingMediumSets: QuizSet[] = [...additionalMediumSets];
export const cProgrammingHardSets: QuizSet[] = [];
