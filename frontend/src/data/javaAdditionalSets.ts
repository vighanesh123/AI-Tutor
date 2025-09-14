import { QuizSet } from './enhancedQuizStructure';

// Java - Easy Set 2
export const javaEasySet2: QuizSet = {
  id: 'java-easy-2',
  setNumber: 2,
  title: 'Java Fundamentals - Set 2',
  subject: 'Java',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'java-e2-1',
      question: 'What is the default value of a boolean variable in Java?',
      options: ['true', 'false', 'null', '0'],
      correctAnswer: 1,
      explanation: 'The default value of a boolean variable in Java is false.',
      timeLimit: 60
    },
    {
      id: 'java-e2-2',
      question: 'Which method is used to find the length of a string?',
      options: ['size()', 'length()', 'count()', 'len()'],
      correctAnswer: 1,
      explanation: 'The length() method returns the number of characters in a string.',
      timeLimit: 60
    },
    {
      id: 'java-e2-3',
      question: 'What is the correct way to create an array in Java?',
      options: ['int arr[] = new int[5];', 'int arr = new int[5];', 'array int arr[5];', 'int arr[5];'],
      correctAnswer: 0,
      explanation: 'Arrays in Java are created using: datatype[] arrayName = new datatype[size];',
      timeLimit: 60
    },
    {
      id: 'java-e2-4',
      question: 'Which keyword is used to inherit a class in Java?',
      options: ['inherits', 'extends', 'implements', 'super'],
      correctAnswer: 1,
      explanation: 'The extends keyword is used for class inheritance in Java.',
      timeLimit: 60
    },
    {
      id: 'java-e2-5',
      question: 'What is the wrapper class for int?',
      options: ['Int', 'Integer', 'Number', 'Wrapper'],
      correctAnswer: 1,
      explanation: 'Integer is the wrapper class for the primitive int type.',
      timeLimit: 60
    },
    {
      id: 'java-e2-6',
      question: 'Which loop is guaranteed to execute at least once?',
      options: ['for loop', 'while loop', 'do-while loop', 'enhanced for loop'],
      correctAnswer: 2,
      explanation: 'do-while loop executes the body first, then checks the condition.',
      timeLimit: 60
    },
    {
      id: 'java-e2-7',
      question: 'What is the correct syntax for a try-catch block?',
      options: ['try {} catch() {}', 'try {} catch(Exception e) {}', 'try() {} catch {}', 'catch {} try {}'],
      correctAnswer: 1,
      explanation: 'try-catch syntax: try { code } catch(ExceptionType e) { handler }',
      timeLimit: 60
    },
    {
      id: 'java-e2-8',
      question: 'Which access modifier makes a member accessible only within the same package?',
      options: ['private', 'protected', 'public', 'default (package-private)'],
      correctAnswer: 3,
      explanation: 'Default (no modifier) makes members accessible within the same package.',
      timeLimit: 60
    },
    {
      id: 'java-e2-9',
      question: 'What is the purpose of the final keyword?',
      options: ['To end the program', 'To make variables constant', 'To create final methods', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'final can make variables constant, methods non-overridable, and classes non-inheritable.',
      timeLimit: 60
    },
    {
      id: 'java-e2-10',
      question: 'Which method is called when an object is created?',
      options: ['main()', 'constructor', 'init()', 'create()'],
      correctAnswer: 1,
      explanation: 'Constructor is automatically called when an object is instantiated.',
      timeLimit: 60
    },
    {
      id: 'java-e2-11',
      question: 'What is the difference between == and equals()?',
      options: ['No difference', '== compares references, equals() compares content', 'equals() is faster', '== is deprecated'],
      correctAnswer: 1,
      explanation: '== compares object references, while equals() compares object content.',
      timeLimit: 60
    },
    {
      id: 'java-e2-12',
      question: 'Which collection allows duplicate elements?',
      options: ['Set', 'List', 'Map', 'Queue'],
      correctAnswer: 1,
      explanation: 'List interface allows duplicate elements, unlike Set.',
      timeLimit: 60
    },
    {
      id: 'java-e2-13',
      question: 'What is the correct way to handle multiple exceptions?',
      options: ['Multiple try blocks', 'Multiple catch blocks', 'Single catch with OR', 'All of the above'],
      correctAnswer: 3,
      explanation: 'Multiple exceptions can be handled using multiple catch blocks or multi-catch syntax.',
      timeLimit: 60
    },
    {
      id: 'java-e2-14',
      question: 'Which keyword is used to call parent class constructor?',
      options: ['parent()', 'super()', 'this()', 'base()'],
      correctAnswer: 1,
      explanation: 'super() is used to call the parent class constructor.',
      timeLimit: 60
    },
    {
      id: 'java-e2-15',
      question: 'What is method overloading?',
      options: ['Same method name, different parameters', 'Different method names', 'Overriding parent methods', 'Loading methods'],
      correctAnswer: 0,
      explanation: 'Method overloading means having multiple methods with the same name but different parameters.',
      timeLimit: 60
    },
    {
      id: 'java-e2-16',
      question: 'Which is NOT a primitive data type in Java?',
      options: ['int', 'String', 'boolean', 'char'],
      correctAnswer: 1,
      explanation: 'String is a class, not a primitive data type in Java.',
      timeLimit: 60
    },
    {
      id: 'java-e2-17',
      question: 'What is the purpose of the static keyword?',
      options: ['Makes variables constant', 'Belongs to class rather than instance', 'Creates static methods', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'static makes members belong to the class rather than individual instances.',
      timeLimit: 60
    },
    {
      id: 'java-e2-18',
      question: 'Which method is used to convert string to integer?',
      options: ['Integer.parseInt()', 'String.toInt()', 'convert()', 'parse()'],
      correctAnswer: 0,
      explanation: 'Integer.parseInt() converts a string to an integer.',
      timeLimit: 60
    },
    {
      id: 'java-e2-19',
      question: 'What is the correct way to create a thread?',
      options: ['Extend Thread class', 'Implement Runnable interface', 'Both A and B', 'Use thread() method'],
      correctAnswer: 2,
      explanation: 'Threads can be created by extending Thread class or implementing Runnable interface.',
      timeLimit: 60
    },
    {
      id: 'java-e2-20',
      question: 'Which exception is thrown when array index is out of bounds?',
      options: ['IndexException', 'ArrayIndexOutOfBoundsException', 'BoundsException', 'OutOfRangeException'],
      correctAnswer: 1,
      explanation: 'ArrayIndexOutOfBoundsException is thrown when accessing invalid array indices.',
      timeLimit: 60
    }
  ]
};

// Java - Medium Set 2
export const javaMediumSet2: QuizSet = {
  id: 'java-medium-2',
  setNumber: 2,
  title: 'Java Advanced Concepts - Set 2',
  subject: 'Java',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'java-m2-1',
      question: 'What is the difference between abstract class and interface?',
      options: [
        'No difference',
        'Abstract class can have concrete methods, interface cannot',
        'Interface can have concrete methods (Java 8+), abstract class cannot',
        'Abstract class supports multiple inheritance'
      ],
      correctAnswer: 1,
      explanation: 'Abstract classes can have both abstract and concrete methods, while interfaces (pre-Java 8) could only have abstract methods.',
      timeLimit: 90
    },
    {
      id: 'java-m2-2',
      question: 'What is the purpose of synchronized keyword?',
      options: [
        'To synchronize time',
        'To ensure thread safety',
        'To sync with database',
        'To coordinate methods'
      ],
      correctAnswer: 1,
      explanation: 'synchronized keyword ensures that only one thread can access a method or block at a time.',
      timeLimit: 90
    },
    {
      id: 'java-m2-3',
      question: 'What is a lambda expression?',
      options: [
        'A mathematical expression',
        'An anonymous function',
        'A type of loop',
        'A design pattern'
      ],
      correctAnswer: 1,
      explanation: 'Lambda expressions are anonymous functions introduced in Java 8 for functional programming.',
      timeLimit: 90
    },
    {
      id: 'java-m2-4',
      question: 'What is the difference between ArrayList and LinkedList?',
      options: [
        'No difference',
        'ArrayList uses array, LinkedList uses doubly-linked list',
        'LinkedList is faster for all operations',
        'ArrayList supports generics, LinkedList does not'
      ],
      correctAnswer: 1,
      explanation: 'ArrayList is backed by a resizable array, while LinkedList uses a doubly-linked list structure.',
      timeLimit: 90
    },
    {
      id: 'java-m2-5',
      question: 'What is method overriding?',
      options: [
        'Same as method overloading',
        'Redefining parent class method in child class',
        'Creating multiple methods',
        'Calling parent methods'
      ],
      correctAnswer: 1,
      explanation: 'Method overriding allows a subclass to provide a specific implementation of a method defined in its parent class.',
      timeLimit: 90
    },
    {
      id: 'java-m2-6',
      question: 'What is the purpose of the volatile keyword?',
      options: [
        'Makes variables constant',
        'Ensures visibility of changes across threads',
        'Prevents inheritance',
        'Creates temporary variables'
      ],
      correctAnswer: 1,
      explanation: 'volatile ensures that changes to a variable are immediately visible to all threads.',
      timeLimit: 90
    },
    {
      id: 'java-m2-7',
      question: 'What is a Stream in Java 8?',
      options: [
        'A way to read files',
        'A sequence of elements supporting functional operations',
        'A type of collection',
        'A networking concept'
      ],
      correctAnswer: 1,
      explanation: 'Streams provide a functional approach to processing collections of objects.',
      timeLimit: 90
    },
    {
      id: 'java-m2-8',
      question: 'What is the difference between Comparable and Comparator?',
      options: [
        'No difference',
        'Comparable defines natural ordering, Comparator defines custom ordering',
        'Comparator is faster',
        'Comparable is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Comparable defines natural ordering within the class, Comparator defines custom ordering externally.',
      timeLimit: 90
    },
    {
      id: 'java-m2-9',
      question: 'What is garbage collection?',
      options: [
        'Manual memory management',
        'Automatic memory management',
        'File cleanup',
        'Code optimization'
      ],
      correctAnswer: 1,
      explanation: 'Garbage collection automatically reclaims memory used by objects that are no longer reachable.',
      timeLimit: 90
    },
    {
      id: 'java-m2-10',
      question: 'What is the purpose of the transient keyword?',
      options: [
        'Makes variables temporary',
        'Excludes fields from serialization',
        'Creates transient methods',
        'Handles transactions'
      ],
      correctAnswer: 1,
      explanation: 'transient keyword prevents fields from being serialized.',
      timeLimit: 90
    },
    {
      id: 'java-m2-11',
      question: 'What is a functional interface?',
      options: [
        'An interface with multiple methods',
        'An interface with exactly one abstract method',
        'An interface for functions',
        'A deprecated interface type'
      ],
      correctAnswer: 1,
      explanation: 'A functional interface has exactly one abstract method and can be used with lambda expressions.',
      timeLimit: 90
    },
    {
      id: 'java-m2-12',
      question: 'What is the difference between HashMap and TreeMap?',
      options: [
        'No difference',
        'HashMap is unordered, TreeMap is sorted',
        'TreeMap is faster',
        'HashMap supports null keys, TreeMap does not'
      ],
      correctAnswer: 1,
      explanation: 'HashMap provides O(1) access but no ordering, TreeMap maintains sorted order with O(log n) access.',
      timeLimit: 90
    },
    {
      id: 'java-m2-13',
      question: 'What is exception chaining?',
      options: [
        'Catching multiple exceptions',
        'Linking exceptions to show cause',
        'Creating exception chains',
        'Handling exceptions in sequence'
      ],
      correctAnswer: 1,
      explanation: 'Exception chaining allows you to associate one exception with another to preserve the original cause.',
      timeLimit: 90
    },
    {
      id: 'java-m2-14',
      question: 'What is the purpose of the strictfp keyword?',
      options: [
        'Strict programming',
        'Ensures consistent floating-point calculations',
        'Strict access control',
        'Performance optimization'
      ],
      correctAnswer: 1,
      explanation: 'strictfp ensures that floating-point calculations are consistent across different platforms.',
      timeLimit: 90
    },
    {
      id: 'java-m2-15',
      question: 'What is autoboxing?',
      options: [
        'Automatic object creation',
        'Automatic conversion between primitives and wrapper classes',
        'Automatic memory management',
        'Automatic method calling'
      ],
      correctAnswer: 1,
      explanation: 'Autoboxing automatically converts primitives to wrapper classes and vice versa.',
      timeLimit: 90
    },
    {
      id: 'java-m2-16',
      question: 'What is the diamond problem?',
      options: [
        'A geometric problem',
        'Multiple inheritance ambiguity',
        'A design pattern',
        'A compilation error'
      ],
      correctAnswer: 1,
      explanation: 'The diamond problem occurs in multiple inheritance when a class inherits from two classes that have a common base class.',
      timeLimit: 90
    },
    {
      id: 'java-m2-17',
      question: 'What is the purpose of Optional class?',
      options: [
        'Optional parameters',
        'Avoiding null pointer exceptions',
        'Optional methods',
        'Performance optimization'
      ],
      correctAnswer: 1,
      explanation: 'Optional class helps avoid null pointer exceptions by providing a container for potentially null values.',
      timeLimit: 90
    },
    {
      id: 'java-m2-18',
      question: 'What is method reference?',
      options: [
        'Referencing methods',
        'Shorthand for lambda expressions',
        'Method documentation',
        'Method overloading'
      ],
      correctAnswer: 1,
      explanation: 'Method references provide a shorthand syntax for lambda expressions that call existing methods.',
      timeLimit: 90
    },
    {
      id: 'java-m2-19',
      question: 'What is the difference between fail-fast and fail-safe iterators?',
      options: [
        'No difference',
        'Fail-fast throws exception on modification, fail-safe does not',
        'Fail-safe is faster',
        'Fail-fast is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Fail-fast iterators throw ConcurrentModificationException when collection is modified during iteration.',
      timeLimit: 90
    },
    {
      id: 'java-m2-20',
      question: 'What is the purpose of the default keyword in interfaces?',
      options: [
        'Default access modifier',
        'Provides default implementation in interfaces',
        'Default constructor',
        'Default values'
      ],
      correctAnswer: 1,
      explanation: 'default keyword allows interfaces to have concrete method implementations (Java 8+).',
      timeLimit: 90
    }
  ]
};

// Java - Hard Set 1
export const javaHardSet1: QuizSet = {
  id: 'java-hard-1',
  setNumber: 1,
  title: 'Java Expert Level - Set 1',
  subject: 'Java',
  difficulty: 'HARD',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'java-h1-1',
      question: 'What is the difference between ClassNotFoundException and NoClassDefFoundError?',
      options: [
        'No difference',
        'ClassNotFoundException is checked, NoClassDefFoundError is runtime error',
        'NoClassDefFoundError is checked exception',
        'Both are the same type of exception'
      ],
      correctAnswer: 1,
      explanation: 'ClassNotFoundException is a checked exception thrown by ClassLoader, NoClassDefFoundError is thrown by JVM when class was available at compile time but not at runtime.',
      timeLimit: 120
    },
    {
      id: 'java-h1-2',
      question: 'What happens when you call System.gc()?',
      options: [
        'Forces garbage collection immediately',
        'Suggests garbage collection to JVM',
        'Stops garbage collection',
        'Clears all memory'
      ],
      correctAnswer: 1,
      explanation: 'System.gc() only suggests garbage collection to the JVM; it does not guarantee immediate execution.',
      timeLimit: 120
    },
    {
      id: 'java-h1-3',
      question: 'What is the difference between deep copy and shallow copy?',
      options: [
        'No difference',
        'Deep copy copies references, shallow copy copies objects',
        'Shallow copy copies references, deep copy creates new objects',
        'Deep copy is faster'
      ],
      correctAnswer: 2,
      explanation: 'Shallow copy copies object references, while deep copy creates new objects for all referenced objects.',
      timeLimit: 120
    },
    {
      id: 'java-h1-4',
      question: 'What is the purpose of WeakReference?',
      options: [
        'Creates weak objects',
        'Allows garbage collection of referenced objects',
        'Improves performance',
        'Handles weak typing'
      ],
      correctAnswer: 1,
      explanation: 'WeakReference allows the garbage collector to reclaim the referenced object when memory is needed.',
      timeLimit: 120
    },
    {
      id: 'java-h1-5',
      question: 'What is the difference between ConcurrentHashMap and Hashtable?',
      options: [
        'No difference',
        'ConcurrentHashMap uses segment-based locking, Hashtable synchronizes entire map',
        'Hashtable is faster',
        'ConcurrentHashMap is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'ConcurrentHashMap uses segment-based locking for better concurrency, while Hashtable synchronizes the entire map.',
      timeLimit: 120
    },
    {
      id: 'java-h1-6',
      question: 'What is the happens-before relationship?',
      options: [
        'Execution order',
        'Memory visibility guarantee in concurrent programming',
        'Method calling order',
        'Class loading order'
      ],
      correctAnswer: 1,
      explanation: 'Happens-before relationship ensures memory visibility and ordering constraints in concurrent programs.',
      timeLimit: 120
    },
    {
      id: 'java-h1-7',
      question: 'What is the difference between CountDownLatch and CyclicBarrier?',
      options: [
        'No difference',
        'CountDownLatch is one-time use, CyclicBarrier is reusable',
        'CyclicBarrier is faster',
        'CountDownLatch is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'CountDownLatch can only be used once, while CyclicBarrier can be reset and reused.',
      timeLimit: 120
    },
    {
      id: 'java-h1-8',
      question: 'What is method area in JVM?',
      options: [
        'Area for method calls',
        'Memory area storing class-level information',
        'Stack for methods',
        'Heap for methods'
      ],
      correctAnswer: 1,
      explanation: 'Method area stores class-level information like class metadata, constant pool, and static variables.',
      timeLimit: 120
    },
    {
      id: 'java-h1-9',
      question: 'What is the difference between fork/join and executor framework?',
      options: [
        'No difference',
        'Fork/join is for divide-and-conquer tasks, executor is general-purpose',
        'Executor is faster',
        'Fork/join is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Fork/join framework is optimized for divide-and-conquer algorithms, while executor framework is for general concurrent tasks.',
      timeLimit: 120
    },
    {
      id: 'java-h1-10',
      question: 'What is escape analysis?',
      options: [
        'Analyzing escape sequences',
        'JVM optimization to determine object scope',
        'Security analysis',
        'Performance profiling'
      ],
      correctAnswer: 1,
      explanation: 'Escape analysis determines whether objects can be allocated on stack instead of heap for optimization.',
      timeLimit: 120
    },
    {
      id: 'java-h1-11',
      question: 'What is the difference between Phaser and CountDownLatch?',
      options: [
        'No difference',
        'Phaser supports multiple phases, CountDownLatch is single-phase',
        'CountDownLatch is more flexible',
        'Phaser is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Phaser supports multiple phases of execution and dynamic registration, while CountDownLatch is for single-phase synchronization.',
      timeLimit: 120
    },
    {
      id: 'java-h1-12',
      question: 'What is TLAB in JVM?',
      options: [
        'Thread Local Access Block',
        'Thread Local Allocation Buffer',
        'Thread Level Application Buffer',
        'Thread Lock Allocation Block'
      ],
      correctAnswer: 1,
      explanation: 'TLAB (Thread Local Allocation Buffer) is a region in heap where each thread can allocate objects without synchronization.',
      timeLimit: 120
    },
    {
      id: 'java-h1-13',
      question: 'What is the difference between G1 and CMS garbage collectors?',
      options: [
        'No difference',
        'G1 is low-latency with predictable pause times, CMS has unpredictable pauses',
        'CMS is newer',
        'G1 is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'G1GC provides more predictable pause times and better handling of large heaps compared to CMS.',
      timeLimit: 120
    },
    {
      id: 'java-h1-14',
      question: 'What is JIT compilation?',
      options: [
        'Just In Time compilation of bytecode to native code',
        'Java Interface Translation',
        'Java Integration Testing',
        'Java Instruction Translation'
      ],
      correctAnswer: 0,
      explanation: 'JIT compiler converts frequently executed bytecode to optimized native machine code at runtime.',
      timeLimit: 120
    },
    {
      id: 'java-h1-15',
      question: 'What is the difference between String.intern() and regular String?',
      options: [
        'No difference',
        'intern() stores string in string pool, regular string may not',
        'intern() is faster',
        'intern() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'String.intern() ensures the string is stored in the string pool and returns the canonical representation.',
      timeLimit: 120
    },
    {
      id: 'java-h1-16',
      question: 'What is double-checked locking?',
      options: [
        'Checking locks twice',
        'Optimization pattern for lazy initialization in multithreading',
        'Two-level locking mechanism',
        'Database locking strategy'
      ],
      correctAnswer: 1,
      explanation: 'Double-checked locking is a pattern to reduce synchronization overhead in lazy initialization.',
      timeLimit: 120
    },
    {
      id: 'java-h1-17',
      question: 'What is the difference between CompletableFuture and Future?',
      options: [
        'No difference',
        'CompletableFuture supports composition and chaining, Future does not',
        'Future is more advanced',
        'CompletableFuture is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'CompletableFuture provides a rich API for composing, combining, and handling asynchronous computations.',
      timeLimit: 120
    },
    {
      id: 'java-h1-18',
      question: 'What is memory barrier?',
      options: [
        'Physical memory protection',
        'Synchronization primitive ensuring memory ordering',
        'Memory allocation limit',
        'Garbage collection boundary'
      ],
      correctAnswer: 1,
      explanation: 'Memory barriers ensure proper ordering of memory operations in concurrent programming.',
      timeLimit: 120
    },
    {
      id: 'java-h1-19',
      question: 'What is the difference between ReentrantLock and synchronized?',
      options: [
        'No difference',
        'ReentrantLock offers more flexibility and features than synchronized',
        'synchronized is more advanced',
        'ReentrantLock is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'ReentrantLock provides features like fairness, timeout, and interruptible locking that synchronized does not offer.',
      timeLimit: 120
    },
    {
      id: 'java-h1-20',
      question: 'What is off-heap storage?',
      options: [
        'Storage outside main memory',
        'Memory allocation outside JVM heap',
        'Disk-based storage',
        'Network storage'
      ],
      correctAnswer: 1,
      explanation: 'Off-heap storage refers to memory allocation outside the JVM heap, often used for large datasets to avoid GC pressure.',
      timeLimit: 120
    }
  ]
};

export const javaAdditionalEasySets: QuizSet[] = [javaEasySet2];
export const javaAdditionalMediumSets: QuizSet[] = [javaMediumSet2];
export const javaHardSets: QuizSet[] = [javaHardSet1];
