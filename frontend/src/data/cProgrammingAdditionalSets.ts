import { QuizSet } from './enhancedQuizStructure';

// C Programming - Easy Set 3
export const cProgrammingEasySet3: QuizSet = {
  id: 'c-easy-3',
  setNumber: 3,
  title: 'C Programming Basics - Set 3',
  subject: 'C Programming',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'c-e3-1',
      question: 'What is the correct way to declare a constant in C?',
      options: ['const int x = 5;', 'constant x = 5;', 'final int x = 5;', 'static x = 5;'],
      correctAnswer: 0,
      explanation: 'const keyword is used to declare constants in C.',
      timeLimit: 60
    },
    {
      id: 'c-e3-2',
      question: 'Which function is used to allocate memory dynamically?',
      options: ['alloc()', 'malloc()', 'memory()', 'new()'],
      correctAnswer: 1,
      explanation: 'malloc() function is used for dynamic memory allocation in C.',
      timeLimit: 60
    },
    {
      id: 'c-e3-3',
      question: 'What does the & operator do?',
      options: ['Logical AND', 'Bitwise AND', 'Address of operator', 'Reference operator'],
      correctAnswer: 2,
      explanation: 'The & operator returns the address of a variable.',
      timeLimit: 60
    },
    {
      id: 'c-e3-4',
      question: 'Which header file contains mathematical functions?',
      options: ['<stdio.h>', '<math.h>', '<stdlib.h>', '<string.h>'],
      correctAnswer: 1,
      explanation: 'math.h header file contains mathematical functions like sqrt(), pow(), etc.',
      timeLimit: 60
    },
    {
      id: 'c-e3-5',
      question: 'What is the output of printf("%d", sizeof(int));?',
      options: ['2', '4', '8', 'Depends on system'],
      correctAnswer: 3,
      explanation: 'sizeof(int) depends on the system architecture, typically 4 bytes on modern systems.',
      timeLimit: 60
    },
    {
      id: 'c-e3-6',
      question: 'Which loop is best when you know the number of iterations?',
      options: ['while loop', 'do-while loop', 'for loop', 'goto loop'],
      correctAnswer: 2,
      explanation: 'for loop is best when the number of iterations is known beforehand.',
      timeLimit: 60
    },
    {
      id: 'c-e3-7',
      question: 'What does the * operator do with pointers?',
      options: ['Multiplication', 'Dereference operator', 'Address operator', 'Comparison'],
      correctAnswer: 1,
      explanation: 'The * operator dereferences a pointer to access the value it points to.',
      timeLimit: 60
    },
    {
      id: 'c-e3-8',
      question: 'Which is the correct way to include a user-defined header file?',
      options: ['#include <myheader.h>', '#include "myheader.h"', '#include [myheader.h]', '#include (myheader.h)'],
      correctAnswer: 1,
      explanation: 'User-defined header files are included using double quotes.',
      timeLimit: 60
    },
    {
      id: 'c-e3-9',
      question: 'What is the purpose of the void keyword?',
      options: ['To create variables', 'To indicate no return value or parameters', 'To delete memory', 'To declare arrays'],
      correctAnswer: 1,
      explanation: 'void indicates that a function returns no value or takes no parameters.',
      timeLimit: 60
    },
    {
      id: 'c-e3-10',
      question: 'Which function is used to read a character from input?',
      options: ['getchar()', 'readchar()', 'inputchar()', 'scanchar()'],
      correctAnswer: 0,
      explanation: 'getchar() function reads a single character from standard input.',
      timeLimit: 60
    },
    {
      id: 'c-e3-11',
      question: 'What is the difference between ++i and i++?',
      options: ['No difference', '++i increments before use, i++ increments after use', 'i++ is faster', '++i is deprecated'],
      correctAnswer: 1,
      explanation: '++i (pre-increment) increments before using the value, i++ (post-increment) increments after.',
      timeLimit: 60
    },
    {
      id: 'c-e3-12',
      question: 'Which storage class has the longest lifetime?',
      options: ['auto', 'register', 'static', 'extern'],
      correctAnswer: 2,
      explanation: 'static variables retain their value throughout the program execution.',
      timeLimit: 60
    },
    {
      id: 'c-e3-13',
      question: 'What does the preprocessor directive #define do?',
      options: ['Defines functions', 'Creates macros', 'Includes files', 'Declares variables'],
      correctAnswer: 1,
      explanation: '#define creates macros that are replaced by the preprocessor.',
      timeLimit: 60
    },
    {
      id: 'c-e3-14',
      question: 'Which operator has higher precedence?',
      options: ['+', '*', '=', '&&'],
      correctAnswer: 1,
      explanation: 'Multiplication (*) has higher precedence than addition (+).',
      timeLimit: 60
    },
    {
      id: 'c-e3-15',
      question: 'What is the purpose of the extern keyword?',
      options: ['External functions', 'Declares variables defined elsewhere', 'External libraries', 'Exit program'],
      correctAnswer: 1,
      explanation: 'extern declares variables that are defined in other files or later in the same file.',
      timeLimit: 60
    },
    {
      id: 'c-e3-16',
      question: 'Which function converts a string to a floating-point number?',
      options: ['atof()', 'strtof()', 'atoi()', 'Both A and B'],
      correctAnswer: 3,
      explanation: 'Both atof() and strtof() can convert strings to floating-point numbers.',
      timeLimit: 60
    },
    {
      id: 'c-e3-17',
      question: 'What is the maximum value that can be stored in an unsigned char?',
      options: ['127', '255', '256', '128'],
      correctAnswer: 1,
      explanation: 'unsigned char can store values from 0 to 255 (2^8 - 1).',
      timeLimit: 60
    },
    {
      id: 'c-e3-18',
      question: 'Which function is used to close a file?',
      options: ['close()', 'fclose()', 'closefile()', 'end()'],
      correctAnswer: 1,
      explanation: 'fclose() function is used to close a file opened with fopen().',
      timeLimit: 60
    },
    {
      id: 'c-e3-19',
      question: 'What does the continue statement do in a loop?',
      options: ['Exits the loop', 'Skips to the next iteration', 'Pauses the loop', 'Restarts the loop'],
      correctAnswer: 1,
      explanation: 'continue statement skips the remaining code in the current iteration and moves to the next.',
      timeLimit: 60
    },
    {
      id: 'c-e3-20',
      question: 'Which is the correct syntax for a multi-dimensional array?',
      options: ['int arr[3][4];', 'int arr[3,4];', 'int arr(3)(4);', 'int arr<3><4>;'],
      correctAnswer: 0,
      explanation: 'Multi-dimensional arrays use multiple square brackets: int arr[rows][columns];',
      timeLimit: 60
    }
  ]
};

// C Programming - Medium Set 1
export const cProgrammingMediumSet1: QuizSet = {
  id: 'c-medium-1',
  setNumber: 1,
  title: 'C Programming Intermediate - Set 1',
  subject: 'C Programming',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'c-m1-1',
      question: 'What is the difference between malloc() and calloc()?',
      options: [
        'No difference',
        'malloc() initializes to zero, calloc() does not',
        'calloc() initializes to zero, malloc() does not',
        'calloc() is faster'
      ],
      correctAnswer: 2,
      explanation: 'calloc() initializes allocated memory to zero, while malloc() does not initialize the memory.',
      timeLimit: 90
    },
    {
      id: 'c-m1-2',
      question: 'What is a dangling pointer?',
      options: [
        'A pointer that points to a valid memory location',
        'A pointer that points to freed or invalid memory',
        'A pointer that is never used',
        'A pointer to a function'
      ],
      correctAnswer: 1,
      explanation: 'A dangling pointer points to memory that has been freed or is no longer valid.',
      timeLimit: 90
    },
    {
      id: 'c-m1-3',
      question: 'What is the purpose of the volatile keyword?',
      options: [
        'Makes variables constant',
        'Prevents compiler optimization',
        'Allocates memory dynamically',
        'Creates global variables'
      ],
      correctAnswer: 1,
      explanation: 'volatile tells the compiler not to optimize the variable as it may be changed externally.',
      timeLimit: 90
    },
    {
      id: 'c-m1-4',
      question: 'What is the difference between pass by value and pass by reference?',
      options: [
        'No difference in C',
        'Pass by value copies the value, pass by reference passes the address',
        'Pass by reference is faster',
        'Pass by value uses pointers'
      ],
      correctAnswer: 1,
      explanation: 'Pass by value copies the actual value, while pass by reference passes the memory address.',
      timeLimit: 90
    },
    {
      id: 'c-m1-5',
      question: 'What is a memory leak?',
      options: [
        'When memory is corrupted',
        'When allocated memory is not freed',
        'When memory is accessed illegally',
        'When memory is initialized'
      ],
      correctAnswer: 1,
      explanation: 'Memory leak occurs when dynamically allocated memory is not freed, causing memory waste.',
      timeLimit: 90
    },
    {
      id: 'c-m1-6',
      question: 'What is the difference between struct and union?',
      options: [
        'No difference',
        'struct members share memory, union members have separate memory',
        'union members share memory, struct members have separate memory',
        'struct is faster than union'
      ],
      correctAnswer: 2,
      explanation: 'In union, all members share the same memory location, while struct members have separate memory.',
      timeLimit: 90
    },
    {
      id: 'c-m1-7',
      question: 'What is recursion?',
      options: [
        'A loop that never ends',
        'A function calling itself',
        'A way to allocate memory',
        'A type of array'
      ],
      correctAnswer: 1,
      explanation: 'Recursion is when a function calls itself to solve a problem by breaking it into smaller subproblems.',
      timeLimit: 90
    },
    {
      id: 'c-m1-8',
      question: 'What is the purpose of the static keyword for functions?',
      options: [
        'Makes function faster',
        'Limits function scope to the current file',
        'Makes function recursive',
        'Allocates static memory'
      ],
      correctAnswer: 1,
      explanation: 'static keyword limits the function scope to the current source file (internal linkage).',
      timeLimit: 90
    },
    {
      id: 'c-m1-9',
      question: 'What is a function pointer?',
      options: [
        'A pointer to a variable',
        'A pointer that stores the address of a function',
        'A function that returns a pointer',
        'A pointer inside a function'
      ],
      correctAnswer: 1,
      explanation: 'Function pointer is a variable that stores the address of a function.',
      timeLimit: 90
    },
    {
      id: 'c-m1-10',
      question: 'What is the difference between #include <> and #include ""?',
      options: [
        'No difference',
        '<> for system headers, "" for user headers',
        '"" for system headers, <> for user headers',
        '<> is faster'
      ],
      correctAnswer: 1,
      explanation: 'Angle brackets <> are used for system headers, double quotes "" for user-defined headers.',
      timeLimit: 90
    },
    {
      id: 'c-m1-11',
      question: 'What is the purpose of typedef?',
      options: [
        'Defines new data types',
        'Creates aliases for existing data types',
        'Declares variables',
        'Defines functions'
      ],
      correctAnswer: 1,
      explanation: 'typedef creates aliases (alternative names) for existing data types.',
      timeLimit: 90
    },
    {
      id: 'c-m1-12',
      question: 'What is the difference between ++ptr and ptr++?',
      options: [
        'No difference',
        '++ptr increments address first, ptr++ increments after use',
        'ptr++ is faster',
        '++ptr is deprecated'
      ],
      correctAnswer: 1,
      explanation: '++ptr increments the pointer address before use, ptr++ increments after use.',
      timeLimit: 90
    },
    {
      id: 'c-m1-13',
      question: 'What is pointer arithmetic?',
      options: [
        'Mathematical operations on pointer values',
        'Operations that change pointer addresses based on data type size',
        'Comparing pointers',
        'Allocating memory for pointers'
      ],
      correctAnswer: 1,
      explanation: 'Pointer arithmetic involves operations that change pointer addresses based on the size of the data type.',
      timeLimit: 90
    },
    {
      id: 'c-m1-14',
      question: 'What is the purpose of const with pointers?',
      options: [
        'Makes pointer faster',
        'Prevents modification of pointer or pointed value',
        'Allocates constant memory',
        'Creates global pointers'
      ],
      correctAnswer: 1,
      explanation: 'const with pointers can prevent modification of the pointer itself or the value it points to.',
      timeLimit: 90
    },
    {
      id: 'c-m1-15',
      question: 'What is a segmentation fault?',
      options: [
        'A compilation error',
        'Accessing memory that the program is not allowed to access',
        'A logical error',
        'A syntax error'
      ],
      correctAnswer: 1,
      explanation: 'Segmentation fault occurs when a program tries to access memory it is not allowed to access.',
      timeLimit: 90
    },
    {
      id: 'c-m1-16',
      question: 'What is the difference between array and pointer?',
      options: [
        'No difference',
        'Array name is a constant pointer, pointer is a variable',
        'Pointers are faster',
        'Arrays use more memory'
      ],
      correctAnswer: 1,
      explanation: 'Array name is a constant pointer to the first element, while a pointer variable can be reassigned.',
      timeLimit: 90
    },
    {
      id: 'c-m1-17',
      question: 'What is the purpose of realloc()?',
      options: [
        'Allocates new memory',
        'Resizes previously allocated memory',
        'Frees memory',
        'Initializes memory'
      ],
      correctAnswer: 1,
      explanation: 'realloc() resizes a previously allocated memory block to a new size.',
      timeLimit: 90
    },
    {
      id: 'c-m1-18',
      question: 'What is a null pointer?',
      options: [
        'A pointer with garbage value',
        'A pointer that points to memory address 0',
        'A pointer to a function',
        'An uninitialized pointer'
      ],
      correctAnswer: 1,
      explanation: 'A null pointer is a pointer that points to memory address 0, indicating it points to nothing.',
      timeLimit: 90
    },
    {
      id: 'c-m1-19',
      question: 'What is the difference between local and global variables?',
      options: [
        'No difference',
        'Local variables have function scope, global variables have program scope',
        'Global variables are faster',
        'Local variables use more memory'
      ],
      correctAnswer: 1,
      explanation: 'Local variables are accessible only within their function, global variables are accessible throughout the program.',
      timeLimit: 90
    },
    {
      id: 'c-m1-20',
      question: 'What is the purpose of the register keyword?',
      options: [
        'Registers functions',
        'Suggests storing variable in CPU register for faster access',
        'Creates global variables',
        'Allocates memory'
      ],
      correctAnswer: 1,
      explanation: 'register keyword suggests to the compiler to store the variable in CPU register for faster access.',
      timeLimit: 90
    }
  ]
};

export const cProgrammingAdditionalEasySets: QuizSet[] = [cProgrammingEasySet3];
export const cProgrammingMediumSets: QuizSet[] = [cProgrammingMediumSet1];
