import { QuizSet } from './enhancedQuizStructure';
import { javaAdditionalEasySets, javaAdditionalMediumSets, javaHardSets as additionalHardSets } from './javaAdditionalSets';

// Java - Easy Level (Set 1 of 10)
export const javaEasySet1: QuizSet = {
  id: 'java-easy-1',
  setNumber: 1,
  title: 'Java Fundamentals - Set 1',
  subject: 'Java',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'j-e1-1',
      question: 'What is Java?',
      options: ['A programming language', 'A coffee brand', 'An operating system', 'A database'],
      correctAnswer: 0,
      explanation: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems.',
      timeLimit: 60
    },
    {
      id: 'j-e1-2',
      question: 'Which of the following is a valid Java data type?',
      options: ['int', 'float', 'double', 'All of the above'],
      correctAnswer: 3,
      explanation: 'All of these (int, float, double) are valid primitive data types in Java.',
      timeLimit: 60
    },
    {
      id: 'j-e1-3',
      question: 'What is the main method signature in Java?',
      options: [
        'public static void main(String[] args)',
        'public void main(String[] args)',
        'static void main(String[] args)',
        'public static main(String[] args)'
      ],
      correctAnswer: 0,
      explanation: 'The main method must be public, static, void, and take String[] as parameter.',
      timeLimit: 60
    },
    {
      id: 'j-e1-4',
      question: 'Which keyword is used to create a class in Java?',
      options: ['class', 'Class', 'new', 'create'],
      correctAnswer: 0,
      explanation: 'The "class" keyword is used to define a class in Java.',
      timeLimit: 60
    },
    {
      id: 'j-e1-5',
      question: 'What is JVM?',
      options: ['Java Virtual Machine', 'Java Variable Method', 'Java Version Manager', 'Java Visual Mode'],
      correctAnswer: 0,
      explanation: 'JVM stands for Java Virtual Machine, which executes Java bytecode.',
      timeLimit: 60
    },
    {
      id: 'j-e1-6',
      question: 'Which of the following is used to compile Java code?',
      options: ['java', 'javac', 'jvm', 'jre'],
      correctAnswer: 1,
      explanation: 'javac is the Java compiler used to compile .java files to .class files.',
      timeLimit: 60
    },
    {
      id: 'j-e1-7',
      question: 'What is the extension of Java source files?',
      options: ['.java', '.class', '.jar', '.jav'],
      correctAnswer: 0,
      explanation: 'Java source files have the .java extension.',
      timeLimit: 60
    },
    {
      id: 'j-e1-8',
      question: 'Which method is used to print output in Java?',
      options: ['print()', 'System.out.println()', 'printf()', 'output()'],
      correctAnswer: 1,
      explanation: 'System.out.println() is used to print output to the console in Java.',
      timeLimit: 60
    },
    {
      id: 'j-e1-9',
      question: 'What is the default value of boolean variable in Java?',
      options: ['true', 'false', '0', 'null'],
      correctAnswer: 1,
      explanation: 'The default value of boolean variables in Java is false.',
      timeLimit: 60
    },
    {
      id: 'j-e1-10',
      question: 'Which of the following is NOT a Java keyword?',
      options: ['static', 'public', 'main', 'goto'],
      correctAnswer: 2,
      explanation: 'main is not a keyword in Java, it is a method name.',
      timeLimit: 60
    },
    {
      id: 'j-e1-11',
      question: 'What is encapsulation in Java?',
      options: ['Hiding implementation details', 'Creating objects', 'Inheriting properties', 'Method overloading'],
      correctAnswer: 0,
      explanation: 'Encapsulation is the concept of hiding implementation details and exposing only necessary information.',
      timeLimit: 60
    },
    {
      id: 'j-e1-12',
      question: 'Which access modifier makes a member accessible only within the same class?',
      options: ['public', 'private', 'protected', 'default'],
      correctAnswer: 1,
      explanation: 'private access modifier restricts access to within the same class only.',
      timeLimit: 60
    },
    {
      id: 'j-e1-13',
      question: 'What is the purpose of constructor in Java?',
      options: ['To destroy objects', 'To initialize objects', 'To copy objects', 'To compare objects'],
      correctAnswer: 1,
      explanation: 'Constructors are used to initialize objects when they are created.',
      timeLimit: 60
    },
    {
      id: 'j-e1-14',
      question: 'Which loop is guaranteed to execute at least once?',
      options: ['for loop', 'while loop', 'do-while loop', 'enhanced for loop'],
      correctAnswer: 2,
      explanation: 'do-while loop checks condition after execution, so it runs at least once.',
      timeLimit: 60
    },
    {
      id: 'j-e1-15',
      question: 'What is the correct way to declare an array in Java?',
      options: ['int[] arr;', 'array int arr;', 'int arr[];', 'Both A and C'],
      correctAnswer: 3,
      explanation: 'Both int[] arr; and int arr[]; are valid ways to declare arrays in Java.',
      timeLimit: 60
    },
    {
      id: 'j-e1-16',
      question: 'Which method is called when an object is created?',
      options: ['main()', 'constructor', 'finalize()', 'init()'],
      correctAnswer: 1,
      explanation: 'Constructor is automatically called when an object is instantiated.',
      timeLimit: 60
    },
    {
      id: 'j-e1-17',
      question: 'What is the size of int in Java?',
      options: ['2 bytes', '4 bytes', '8 bytes', 'Platform dependent'],
      correctAnswer: 1,
      explanation: 'int in Java is always 4 bytes (32 bits) regardless of platform.',
      timeLimit: 60
    },
    {
      id: 'j-e1-18',
      question: 'Which keyword is used to inherit a class in Java?',
      options: ['inherits', 'extends', 'implements', 'super'],
      correctAnswer: 1,
      explanation: 'extends keyword is used for class inheritance in Java.',
      timeLimit: 60
    },
    {
      id: 'j-e1-19',
      question: 'What is the wrapper class for int?',
      options: ['Int', 'Integer', 'Number', 'Wrapper'],
      correctAnswer: 1,
      explanation: 'Integer is the wrapper class for the primitive int type.',
      timeLimit: 60
    },
    {
      id: 'j-e1-20',
      question: 'Which of the following is used to handle exceptions?',
      options: ['try-catch', 'if-else', 'switch-case', 'for-loop'],
      correctAnswer: 0,
      explanation: 'try-catch blocks are used to handle exceptions in Java.',
      timeLimit: 60
    }
  ]
};

// Java - Medium Level (Set 1 of 10)
export const javaMediumSet1: QuizSet = {
  id: 'java-medium-1',
  setNumber: 1,
  title: 'Java OOP Concepts - Set 1',
  subject: 'Java',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'j-m1-1',
      question: 'What is method overloading in Java?',
      options: [
        'Methods with same name but different parameters',
        'Methods with different names',
        'Methods in different classes',
        'Methods with same parameters'
      ],
      correctAnswer: 0,
      explanation: 'Method overloading allows multiple methods with the same name but different parameter lists.',
      timeLimit: 90
    },
    {
      id: 'j-m1-2',
      question: 'What is the difference between == and equals() method?',
      options: [
        '== compares references, equals() compares content',
        '== compares content, equals() compares references',
        'No difference',
        'equals() is faster'
      ],
      correctAnswer: 0,
      explanation: '== compares object references while equals() method compares the actual content.',
      timeLimit: 90
    },
    {
      id: 'j-m1-3',
      question: 'What is polymorphism in Java?',
      options: [
        'Multiple inheritance',
        'Ability of objects to take multiple forms',
        'Method overloading only',
        'Class inheritance'
      ],
      correctAnswer: 1,
      explanation: 'Polymorphism allows objects of different types to be treated as objects of a common base type.',
      timeLimit: 90
    },
    {
      id: 'j-m1-4',
      question: 'Which keyword prevents method overriding?',
      options: ['static', 'final', 'abstract', 'private'],
      correctAnswer: 1,
      explanation: 'final keyword prevents a method from being overridden in subclasses.',
      timeLimit: 90
    },
    {
      id: 'j-m1-5',
      question: 'What is an abstract class?',
      options: [
        'A class that cannot be instantiated',
        'A class with only abstract methods',
        'A class without constructor',
        'A final class'
      ],
      correctAnswer: 0,
      explanation: 'Abstract classes cannot be instantiated and may contain abstract methods.',
      timeLimit: 90
    },
    {
      id: 'j-m1-6',
      question: 'What is the difference between interface and abstract class?',
      options: [
        'Interface can have concrete methods, abstract class cannot',
        'Abstract class can have concrete methods, interface cannot (before Java 8)',
        'No difference',
        'Interface is faster'
      ],
      correctAnswer: 1,
      explanation: 'Abstract classes can have concrete methods, while interfaces (before Java 8) could only have abstract methods.',
      timeLimit: 90
    },
    {
      id: 'j-m1-7',
      question: 'What is method overriding?',
      options: [
        'Same method name with different parameters',
        'Redefining parent class method in child class',
        'Creating new methods',
        'Deleting methods'
      ],
      correctAnswer: 1,
      explanation: 'Method overriding allows a subclass to provide a specific implementation of a method defined in its parent class.',
      timeLimit: 90
    },
    {
      id: 'j-m1-8',
      question: 'What is the super keyword used for?',
      options: [
        'To call parent class constructor or methods',
        'To create objects',
        'To declare variables',
        'To handle exceptions'
      ],
      correctAnswer: 0,
      explanation: 'super keyword is used to access parent class constructors, methods, and variables.',
      timeLimit: 90
    },
    {
      id: 'j-m1-9',
      question: 'What is a static method?',
      options: [
        'Method that belongs to class, not instance',
        'Method that cannot be called',
        'Method with no parameters',
        'Method that returns nothing'
      ],
      correctAnswer: 0,
      explanation: 'Static methods belong to the class rather than any instance and can be called without creating objects.',
      timeLimit: 90
    },
    {
      id: 'j-m1-10',
      question: 'What is the this keyword?',
      options: [
        'Reference to current object',
        'Reference to parent object',
        'Reference to static variables',
        'Reference to methods'
      ],
      correctAnswer: 0,
      explanation: 'this keyword refers to the current object instance within a method or constructor.',
      timeLimit: 90
    },
    {
      id: 'j-m1-11',
      question: 'What is a package in Java?',
      options: [
        'A collection of classes and interfaces',
        'A single class file',
        'A method',
        'A variable'
      ],
      correctAnswer: 0,
      explanation: 'Packages are namespaces that organize related classes and interfaces.',
      timeLimit: 90
    },
    {
      id: 'j-m1-12',
      question: 'What is the instanceof operator?',
      options: [
        'Creates new instances',
        'Checks if object is instance of specific class',
        'Compares two objects',
        'Deletes objects'
      ],
      correctAnswer: 1,
      explanation: 'instanceof operator tests whether an object is an instance of a specific class or interface.',
      timeLimit: 90
    },
    {
      id: 'j-m1-13',
      question: 'What is garbage collection?',
      options: [
        'Manual memory management',
        'Automatic memory management',
        'File deletion',
        'Code optimization'
      ],
      correctAnswer: 1,
      explanation: 'Garbage collection automatically reclaims memory used by objects that are no longer reachable.',
      timeLimit: 90
    },
    {
      id: 'j-m1-14',
      question: 'What is the finalize() method?',
      options: [
        'Called before garbage collection',
        'Called after object creation',
        'Used for initialization',
        'Used for method overloading'
      ],
      correctAnswer: 0,
      explanation: 'finalize() method is called by garbage collector before an object is destroyed.',
      timeLimit: 90
    },
    {
      id: 'j-m1-15',
      question: 'What is exception handling?',
      options: [
        'Preventing errors',
        'Managing runtime errors gracefully',
        'Debugging code',
        'Code optimization'
      ],
      correctAnswer: 1,
      explanation: 'Exception handling allows programs to manage and recover from runtime errors gracefully.',
      timeLimit: 90
    },
    {
      id: 'j-m1-16',
      question: 'What is the difference between checked and unchecked exceptions?',
      options: [
        'Checked must be handled, unchecked are optional',
        'Unchecked must be handled, checked are optional',
        'No difference',
        'Checked are faster'
      ],
      correctAnswer: 0,
      explanation: 'Checked exceptions must be handled or declared, while unchecked exceptions are optional to handle.',
      timeLimit: 90
    },
    {
      id: 'j-m1-17',
      question: 'What is a thread in Java?',
      options: [
        'A lightweight process',
        'A class',
        'A method',
        'A variable'
      ],
      correctAnswer: 0,
      explanation: 'A thread is a lightweight subprocess that allows concurrent execution within a program.',
      timeLimit: 90
    },
    {
      id: 'j-m1-18',
      question: 'What is synchronization?',
      options: [
        'Running methods simultaneously',
        'Controlling access to shared resources',
        'Creating threads',
        'Destroying objects'
      ],
      correctAnswer: 1,
      explanation: 'Synchronization controls access to shared resources in multithreaded environments.',
      timeLimit: 90
    },
    {
      id: 'j-m1-19',
      question: 'What is a collection in Java?',
      options: [
        'A framework for storing and manipulating groups of objects',
        'A single object',
        'A method',
        'A class'
      ],
      correctAnswer: 0,
      explanation: 'Collections framework provides interfaces and classes for storing and manipulating groups of objects.',
      timeLimit: 90
    },
    {
      id: 'j-m1-20',
      question: 'What is the difference between ArrayList and LinkedList?',
      options: [
        'ArrayList uses arrays, LinkedList uses nodes',
        'LinkedList uses arrays, ArrayList uses nodes',
        'No difference',
        'ArrayList is always faster'
      ],
      correctAnswer: 0,
      explanation: 'ArrayList uses dynamic arrays while LinkedList uses doubly-linked list structure.',
      timeLimit: 90
    }
  ]
};

export const javaEasySets: QuizSet[] = [javaEasySet1, ...javaAdditionalEasySets];
export const javaMediumSets: QuizSet[] = [javaMediumSet1, ...javaAdditionalMediumSets];
export const javaHardSets: QuizSet[] = [...additionalHardSets]; // Will be populated later
