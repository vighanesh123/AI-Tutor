import { QuizSet } from './enhancedQuizStructure';

// C++ - Easy Set 1
export const cppEasySet1: QuizSet = {
  id: 'cpp-easy-1',
  setNumber: 1,
  title: 'C++ Fundamentals - Set 1',
  subject: 'C++',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'cpp-e1-1',
      question: 'What is C++?',
      options: ['A database', 'An object-oriented programming language', 'An operating system', 'A web browser'],
      correctAnswer: 1,
      explanation: 'C++ is an object-oriented programming language that extends C with classes and objects.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-2',
      question: 'Which header file is required for input/output operations?',
      options: ['<stdio.h>', '<iostream>', '<conio.h>', '<fstream>'],
      correctAnswer: 1,
      explanation: '<iostream> header file is required for input/output operations using cin and cout.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-3',
      question: 'What is the correct syntax to output "Hello World" in C++?',
      options: ['cout << "Hello World";', 'print("Hello World");', 'printf("Hello World");', 'echo "Hello World";'],
      correctAnswer: 0,
      explanation: 'cout << "Hello World"; is the correct syntax for output in C++.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-4',
      question: 'Which keyword is used to define a class in C++?',
      options: ['class', 'struct', 'object', 'define'],
      correctAnswer: 0,
      explanation: 'The class keyword is used to define a class in C++.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-5',
      question: 'What is the correct way to declare a variable in C++?',
      options: ['int x;', 'variable int x;', 'declare x as int;', 'x: int;'],
      correctAnswer: 0,
      explanation: 'Variables in C++ are declared using: datatype variablename;',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-6',
      question: 'Which operator is used for input in C++?',
      options: ['>>', '<<', '->', '::'],
      correctAnswer: 0,
      explanation: 'The >> operator is used with cin for input operations.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-7',
      question: 'What is the purpose of the main() function?',
      options: ['To define classes', 'Entry point of the program', 'To include headers', 'To declare variables'],
      correctAnswer: 1,
      explanation: 'main() function is the entry point where program execution begins.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-8',
      question: 'Which access specifier makes members accessible only within the class?',
      options: ['public', 'private', 'protected', 'internal'],
      correctAnswer: 1,
      explanation: 'private access specifier restricts access to within the class only.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-9',
      question: 'What is the correct way to create an object of class MyClass?',
      options: ['MyClass obj;', 'object MyClass obj;', 'new MyClass obj;', 'create MyClass obj;'],
      correctAnswer: 0,
      explanation: 'Objects are created using: ClassName objectName;',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-10',
      question: 'Which symbol is used for single-line comments?',
      options: ['#', '//', '/*', '--'],
      correctAnswer: 1,
      explanation: '// is used for single-line comments in C++.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-11',
      question: 'What is inheritance in C++?',
      options: ['Getting money', 'A class acquiring properties from another class', 'Creating new variables', 'Deleting objects'],
      correctAnswer: 1,
      explanation: 'Inheritance allows a class to acquire properties and methods from another class.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-12',
      question: 'Which keyword is used for inheritance?',
      options: ['inherits', 'extends', ':', 'derives'],
      correctAnswer: 2,
      explanation: 'The colon (:) is used to specify inheritance in C++.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-13',
      question: 'What is a constructor?',
      options: ['A destructor', 'A special method called when object is created', 'A building worker', 'A data type'],
      correctAnswer: 1,
      explanation: 'Constructor is a special method automatically called when an object is created.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-14',
      question: 'What is the scope resolution operator?',
      options: ['::', '->', '.', '&'],
      correctAnswer: 0,
      explanation: ':: is the scope resolution operator used to access global variables or class members.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-15',
      question: 'Which loop is best when you know the number of iterations?',
      options: ['while', 'do-while', 'for', 'goto'],
      correctAnswer: 2,
      explanation: 'for loop is best when the number of iterations is known beforehand.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-16',
      question: 'What is function overloading?',
      options: ['Loading functions', 'Multiple functions with same name but different parameters', 'Overriding functions', 'Deleting functions'],
      correctAnswer: 1,
      explanation: 'Function overloading allows multiple functions with the same name but different parameters.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-17',
      question: 'Which header file is needed for string operations?',
      options: ['<string>', '<cstring>', '<str>', '<text>'],
      correctAnswer: 0,
      explanation: '<string> header file is needed for C++ string class operations.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-18',
      question: 'What is the difference between struct and class?',
      options: ['No difference', 'struct members are public by default, class members are private', 'struct is faster', 'class is deprecated'],
      correctAnswer: 1,
      explanation: 'In struct, members are public by default; in class, members are private by default.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-19',
      question: 'Which operator is used to access object members?',
      options: ['.', '->', '::', '&'],
      correctAnswer: 0,
      explanation: 'The dot (.) operator is used to access members of an object.',
      timeLimit: 60
    },
    {
      id: 'cpp-e1-20',
      question: 'What is the purpose of the destructor?',
      options: ['To create objects', 'To clean up resources when object is destroyed', 'To copy objects', 'To compare objects'],
      correctAnswer: 1,
      explanation: 'Destructor is called automatically when an object is destroyed to clean up resources.',
      timeLimit: 60
    }
  ]
};

// C++ - Medium Set 1
export const cppMediumSet1: QuizSet = {
  id: 'cpp-medium-1',
  setNumber: 1,
  title: 'C++ Advanced Concepts - Set 1',
  subject: 'C++',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'cpp-m1-1',
      question: 'What is polymorphism in C++?',
      options: [
        'Multiple forms',
        'Ability of objects to take multiple forms',
        'Creating multiple objects',
        'Multiple inheritance'
      ],
      correctAnswer: 1,
      explanation: 'Polymorphism allows objects of different types to be treated as objects of a common base type.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-2',
      question: 'What is the difference between virtual and pure virtual functions?',
      options: [
        'No difference',
        'Virtual functions have implementation, pure virtual functions do not',
        'Pure virtual is faster',
        'Virtual is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Virtual functions can have implementation, pure virtual functions (= 0) must be implemented by derived classes.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-3',
      question: 'What is operator overloading?',
      options: [
        'Loading operators',
        'Giving additional meanings to operators for user-defined types',
        'Overriding operators',
        'Creating new operators'
      ],
      correctAnswer: 1,
      explanation: 'Operator overloading allows defining custom behavior for operators when used with user-defined types.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-4',
      question: 'What is the difference between new and malloc?',
      options: [
        'No difference',
        'new calls constructor, malloc does not',
        'malloc is faster',
        'new is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'new allocates memory and calls constructor, malloc only allocates memory.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-5',
      question: 'What is a copy constructor?',
      options: [
        'A constructor that copies files',
        'A constructor that creates object from another object of same class',
        'A constructor that copies variables',
        'A constructor that duplicates classes'
      ],
      correctAnswer: 1,
      explanation: 'Copy constructor creates a new object as a copy of an existing object of the same class.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-6',
      question: 'What is the purpose of the this pointer?',
      options: [
        'Points to current object',
        'Points to next object',
        'Points to parent object',
        'Points to static members'
      ],
      correctAnswer: 0,
      explanation: 'this pointer points to the current object instance within a member function.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-7',
      question: 'What is multiple inheritance?',
      options: [
        'Inheriting multiple times',
        'A class inheriting from multiple base classes',
        'Multiple classes inheriting from one class',
        'Inheriting multiple variables'
      ],
      correctAnswer: 1,
      explanation: 'Multiple inheritance allows a class to inherit from more than one base class.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-8',
      question: 'What is the diamond problem?',
      options: [
        'A geometric problem',
        'Ambiguity in multiple inheritance when classes share common base',
        'A design pattern',
        'A compilation error'
      ],
      correctAnswer: 1,
      explanation: 'Diamond problem occurs when a class inherits from two classes that share a common base class.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-9',
      question: 'What is a friend function?',
      options: [
        'A friendly function',
        'A function that can access private members of a class',
        'A function with friends',
        'A social function'
      ],
      correctAnswer: 1,
      explanation: 'Friend functions can access private and protected members of a class.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-10',
      question: 'What is the difference between pass by value and pass by reference?',
      options: [
        'No difference',
        'Pass by value copies data, pass by reference passes address',
        'Pass by reference is slower',
        'Pass by value is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Pass by value creates a copy, pass by reference passes the actual variable address.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-11',
      question: 'What is a template in C++?',
      options: [
        'A design template',
        'A way to write generic code that works with different data types',
        'A code template',
        'A class template'
      ],
      correctAnswer: 1,
      explanation: 'Templates allow writing generic code that can work with different data types.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-12',
      question: 'What is the Standard Template Library (STL)?',
      options: [
        'A standard library',
        'A collection of template classes and functions',
        'A template standard',
        'A library template'
      ],
      correctAnswer: 1,
      explanation: 'STL provides a collection of template classes and functions for common data structures and algorithms.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-13',
      question: 'What is the difference between vector and array?',
      options: [
        'No difference',
        'vector is dynamic, array is static',
        'array is faster',
        'vector is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'vector can resize dynamically, while arrays have fixed size.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-14',
      question: 'What is exception handling?',
      options: [
        'Handling exceptions',
        'A mechanism to handle runtime errors gracefully',
        'Exceptional code',
        'Error prevention'
      ],
      correctAnswer: 1,
      explanation: 'Exception handling provides a way to handle runtime errors without crashing the program.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-15',
      question: 'What is the purpose of try-catch blocks?',
      options: [
        'To try code',
        'To handle exceptions that may occur in code',
        'To catch variables',
        'To try catching errors'
      ],
      correctAnswer: 1,
      explanation: 'try-catch blocks allow handling exceptions that may be thrown during code execution.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-16',
      question: 'What is a namespace?',
      options: [
        'A space for names',
        'A way to group related code and avoid naming conflicts',
        'A name space',
        'A variable space'
      ],
      correctAnswer: 1,
      explanation: 'Namespaces group related code together and help avoid naming conflicts.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-17',
      question: 'What is the difference between delete and delete[]?',
      options: [
        'No difference',
        'delete for single object, delete[] for arrays',
        'delete[] is faster',
        'delete is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'delete is used for single objects, delete[] is used for arrays allocated with new[].',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-18',
      question: 'What is a static member?',
      options: [
        'A stationary member',
        'A member that belongs to class rather than instance',
        'A member that cannot move',
        'A constant member'
      ],
      correctAnswer: 1,
      explanation: 'Static members belong to the class itself rather than to any specific instance.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-19',
      question: 'What is the difference between const and constexpr?',
      options: [
        'No difference',
        'const for runtime constants, constexpr for compile-time constants',
        'constexpr is faster',
        'const is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'const can be evaluated at runtime, constexpr must be evaluated at compile time.',
      timeLimit: 90
    },
    {
      id: 'cpp-m1-20',
      question: 'What is RAII?',
      options: [
        'A programming technique',
        'Resource Acquisition Is Initialization',
        'A design pattern',
        'An acronym'
      ],
      correctAnswer: 1,
      explanation: 'RAII (Resource Acquisition Is Initialization) ties resource management to object lifetime.',
      timeLimit: 90
    }
  ]
};

// C++ - Hard Set 1
export const cppHardSet1: QuizSet = {
  id: 'cpp-hard-1',
  setNumber: 1,
  title: 'C++ Expert Level - Set 1',
  subject: 'C++',
  difficulty: 'HARD',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'cpp-h1-1',
      question: 'What is template specialization?',
      options: [
        'Special templates',
        'Providing specific implementation for particular template parameters',
        'Template optimization',
        'Template inheritance'
      ],
      correctAnswer: 1,
      explanation: 'Template specialization allows providing specific implementations for particular template parameter types.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-2',
      question: 'What is the difference between explicit and implicit template instantiation?',
      options: [
        'No difference',
        'Explicit is manually triggered, implicit is automatic',
        'Implicit is faster',
        'Explicit is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Explicit instantiation is manually requested, implicit instantiation happens automatically when template is used.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-3',
      question: 'What is SFINAE?',
      options: [
        'A design pattern',
        'Substitution Failure Is Not An Error',
        'A template technique',
        'An optimization'
      ],
      correctAnswer: 1,
      explanation: 'SFINAE allows template overload resolution to continue when substitution fails rather than causing compilation error.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-4',
      question: 'What is the purpose of std::move?',
      options: [
        'Moves objects physically',
        'Casts to rvalue reference for move semantics',
        'Moves memory',
        'Moves files'
      ],
      correctAnswer: 1,
      explanation: 'std::move casts its argument to an rvalue reference to enable move semantics.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-5',
      question: 'What is perfect forwarding?',
      options: [
        'Perfect mail forwarding',
        'Preserving value category when forwarding function arguments',
        'Perfect function calls',
        'Optimal forwarding'
      ],
      correctAnswer: 1,
      explanation: 'Perfect forwarding preserves the value category (lvalue/rvalue) of arguments when forwarding to other functions.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-6',
      question: 'What is the difference between lvalue and rvalue?',
      options: [
        'Left and right values',
        'lvalue has identity and cannot be moved, rvalue can be moved',
        'lvalue is faster',
        'No difference'
      ],
      correctAnswer: 1,
      explanation: 'lvalues have identity and persist beyond expression, rvalues are temporary and can be moved from.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-7',
      question: 'What is a lambda expression?',
      options: [
        'Greek letter expression',
        'Anonymous function object',
        'Mathematical expression',
        'Variable expression'
      ],
      correctAnswer: 1,
      explanation: 'Lambda expressions create anonymous function objects that can capture variables from surrounding scope.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-8',
      question: 'What is the difference between capture by value and capture by reference in lambdas?',
      options: [
        'No difference',
        'By value copies variables, by reference captures references',
        'By reference is faster',
        'By value is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Capture by value [=] copies variables, capture by reference [&] captures references to variables.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-9',
      question: 'What is std::unique_ptr?',
      options: [
        'A unique pointer',
        'Smart pointer with exclusive ownership',
        'A pointer to unique objects',
        'A special pointer type'
      ],
      correctAnswer: 1,
      explanation: 'std::unique_ptr is a smart pointer that maintains exclusive ownership of a dynamically allocated object.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-10',
      question: 'What is the difference between std::shared_ptr and std::unique_ptr?',
      options: [
        'No difference',
        'shared_ptr allows shared ownership, unique_ptr has exclusive ownership',
        'unique_ptr is faster',
        'shared_ptr is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'shared_ptr allows multiple pointers to share ownership, unique_ptr maintains exclusive ownership.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-11',
      question: 'What is std::weak_ptr used for?',
      options: [
        'Weak pointers',
        'Breaking circular references in shared_ptr',
        'Weak object references',
        'Temporary pointers'
      ],
      correctAnswer: 1,
      explanation: 'std::weak_ptr provides non-owning reference to shared_ptr managed objects, breaking circular references.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-12',
      question: 'What is the Rule of Three/Five?',
      options: [
        'Mathematical rule',
        'If you define destructor, copy constructor, or copy assignment, define all three/five',
        'Coding standard',
        'Template rule'
      ],
      correctAnswer: 1,
      explanation: 'Rule of Three/Five states that if you define destructor, copy constructor, or copy assignment, you should define all of them.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-13',
      question: 'What is move semantics?',
      options: [
        'Moving objects',
        'Transferring resources from temporary objects instead of copying',
        'Object movement',
        'Semantic movement'
      ],
      correctAnswer: 1,
      explanation: 'Move semantics allows transferring resources from temporary objects instead of expensive copying.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-14',
      question: 'What is the difference between std::forward and std::move?',
      options: [
        'No difference',
        'forward preserves value category, move always casts to rvalue',
        'move is faster',
        'forward is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'std::forward preserves the value category of its argument, std::move always casts to rvalue reference.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-15',
      question: 'What is ADL (Argument Dependent Lookup)?',
      options: [
        'Argument lookup',
        'Looking up functions in namespaces of their arguments',
        'Dependent lookup',
        'Automatic lookup'
      ],
      correctAnswer: 1,
      explanation: 'ADL (Koenig lookup) searches for functions in the namespaces of their arguments.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-16',
      question: 'What is the difference between struct and class in terms of inheritance?',
      options: [
        'No difference in inheritance',
        'struct has public inheritance by default, class has private',
        'class inheritance is faster',
        'struct cannot inherit'
      ],
      correctAnswer: 1,
      explanation: 'struct uses public inheritance by default, class uses private inheritance by default.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-17',
      question: 'What is template metaprogramming?',
      options: [
        'Programming templates',
        'Using templates to perform computations at compile time',
        'Meta programming',
        'Template optimization'
      ],
      correctAnswer: 1,
      explanation: 'Template metaprogramming uses templates to perform computations and generate code at compile time.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-18',
      question: 'What is the purpose of decltype?',
      options: [
        'Declares types',
        'Deduces the type of an expression',
        'Declares variables',
        'Type declaration'
      ],
      correctAnswer: 1,
      explanation: 'decltype deduces and returns the type of an expression without evaluating it.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-19',
      question: 'What is the difference between auto and decltype?',
      options: [
        'No difference',
        'auto deduces type from initializer, decltype deduces from expression',
        'decltype is faster',
        'auto is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'auto deduces type from initializer value, decltype deduces type from any expression.',
      timeLimit: 120
    },
    {
      id: 'cpp-h1-20',
      question: 'What is constexpr and when should it be used?',
      options: [
        'Constant expression',
        'For values/functions that can be evaluated at compile time',
        'Expression constant',
        'Compile-time constant'
      ],
      correctAnswer: 1,
      explanation: 'constexpr indicates that a value or function can potentially be evaluated at compile time.',
      timeLimit: 120
    }
  ]
};

export const cppEasySets: QuizSet[] = [cppEasySet1];
export const cppMediumSets: QuizSet[] = [cppMediumSet1];
export const cppHardSets: QuizSet[] = [cppHardSet1];
