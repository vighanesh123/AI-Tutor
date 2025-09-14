import { QuizSet } from './enhancedQuizStructure';

// Python - Easy Set 2
export const pythonEasySet2: QuizSet = {
  id: 'python-easy-2',
  setNumber: 2,
  title: 'Python Fundamentals - Set 2',
  subject: 'Python',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'py-e2-1',
      question: 'What is the correct way to create a tuple?',
      options: ['tuple = [1, 2, 3]', 'tuple = (1, 2, 3)', 'tuple = {1, 2, 3}', 'tuple = <1, 2, 3>'],
      correctAnswer: 1,
      explanation: 'Tuples are created using parentheses ().',
      timeLimit: 60
    },
    {
      id: 'py-e2-2',
      question: 'Which method removes the last element from a list?',
      options: ['remove()', 'pop()', 'delete()', 'clear()'],
      correctAnswer: 1,
      explanation: 'pop() removes and returns the last element from a list.',
      timeLimit: 60
    },
    {
      id: 'py-e2-3',
      question: 'What is the output of print(2 ** 3)?',
      options: ['6', '8', '9', '5'],
      correctAnswer: 1,
      explanation: '** is the exponentiation operator: 2^3 = 8.',
      timeLimit: 60
    },
    {
      id: 'py-e2-4',
      question: 'How do you create an empty set?',
      options: ['set = []', 'set = {}', 'set = set()', 'set = ()'],
      correctAnswer: 2,
      explanation: 'Empty sets are created using set() constructor, not {} which creates an empty dictionary.',
      timeLimit: 60
    },
    {
      id: 'py-e2-5',
      question: 'What does the strip() method do?',
      options: ['Removes characters from string', 'Removes whitespace from both ends', 'Splits string', 'Converts to lowercase'],
      correctAnswer: 1,
      explanation: 'strip() removes whitespace from the beginning and end of a string.',
      timeLimit: 60
    },
    {
      id: 'py-e2-6',
      question: 'Which keyword is used to define a class?',
      options: ['class', 'def', 'object', 'create'],
      correctAnswer: 0,
      explanation: 'The class keyword is used to define classes in Python.',
      timeLimit: 60
    },
    {
      id: 'py-e2-7',
      question: 'What is the correct syntax for an if statement?',
      options: ['if x = 5:', 'if (x == 5):', 'if x == 5:', 'if x equals 5:'],
      correctAnswer: 2,
      explanation: 'Python if statements use == for comparison and end with a colon.',
      timeLimit: 60
    },
    {
      id: 'py-e2-8',
      question: 'How do you add an element to a set?',
      options: ['append()', 'add()', 'insert()', 'push()'],
      correctAnswer: 1,
      explanation: 'The add() method adds an element to a set.',
      timeLimit: 60
    },
    {
      id: 'py-e2-9',
      question: 'What is the output of print("Hello"[1])?',
      options: ['H', 'e', 'l', 'o'],
      correctAnswer: 1,
      explanation: 'String indexing starts at 0, so index 1 gives the second character "e".',
      timeLimit: 60
    },
    {
      id: 'py-e2-10',
      question: 'Which function converts a string to uppercase?',
      options: ['upper()', 'uppercase()', 'toUpper()', 'capitalize()'],
      correctAnswer: 0,
      explanation: 'The upper() method converts a string to uppercase.',
      timeLimit: 60
    },
    {
      id: 'py-e2-11',
      question: 'What is the difference between is and ==?',
      options: ['No difference', 'is checks identity, == checks equality', '== is faster', 'is is deprecated'],
      correctAnswer: 1,
      explanation: 'is checks if two variables refer to the same object, == checks if values are equal.',
      timeLimit: 60
    },
    {
      id: 'py-e2-12',
      question: 'How do you create a multi-line string?',
      options: ['Using \\n', 'Using triple quotes """', 'Using +', 'All of the above'],
      correctAnswer: 3,
      explanation: 'Multi-line strings can be created using triple quotes, \\n, or string concatenation.',
      timeLimit: 60
    },
    {
      id: 'py-e2-13',
      question: 'What does the split() method return?',
      options: ['A string', 'A list of strings', 'A tuple', 'A dictionary'],
      correctAnswer: 1,
      explanation: 'split() returns a list of strings split by the specified delimiter.',
      timeLimit: 60
    },
    {
      id: 'py-e2-14',
      question: 'Which operator is used for floor division?',
      options: ['/', '//', '%', '**'],
      correctAnswer: 1,
      explanation: 'The // operator performs floor division (returns integer result).',
      timeLimit: 60
    },
    {
      id: 'py-e2-15',
      question: 'What is the correct way to import a module?',
      options: ['include module', 'import module', 'using module', 'require module'],
      correctAnswer: 1,
      explanation: 'The import keyword is used to import modules in Python.',
      timeLimit: 60
    },
    {
      id: 'py-e2-16',
      question: 'How do you check if a key exists in a dictionary?',
      options: ['key in dict', 'dict.hasKey(key)', 'dict.contains(key)', 'key.exists(dict)'],
      correctAnswer: 0,
      explanation: 'Use "key in dict" to check if a key exists in a dictionary.',
      timeLimit: 60
    },
    {
      id: 'py-e2-17',
      question: 'What is the output of print(bool([]))?',
      options: ['True', 'False', 'None', 'Error'],
      correctAnswer: 1,
      explanation: 'Empty lists evaluate to False in boolean context.',
      timeLimit: 60
    },
    {
      id: 'py-e2-18',
      question: 'Which method joins elements of a list into a string?',
      options: ['join()', 'concat()', 'merge()', 'combine()'],
      correctAnswer: 0,
      explanation: 'The join() method joins list elements into a string with a specified separator.',
      timeLimit: 60
    },
    {
      id: 'py-e2-19',
      question: 'What is the correct way to handle file operations?',
      options: ['open() and close()', 'with open() as file:', 'file.open()', 'Both A and B'],
      correctAnswer: 3,
      explanation: 'Files can be handled using open()/close() or the with statement (recommended).',
      timeLimit: 60
    },
    {
      id: 'py-e2-20',
      question: 'What does the return statement do?',
      options: ['Ends the program', 'Returns a value from function', 'Restarts function', 'Returns to main'],
      correctAnswer: 1,
      explanation: 'return statement exits a function and optionally returns a value.',
      timeLimit: 60
    }
  ]
};

// Python - Medium Set 2
export const pythonMediumSet2: QuizSet = {
  id: 'python-medium-2',
  setNumber: 2,
  title: 'Python Advanced Concepts - Set 2',
  subject: 'Python',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'py-m2-1',
      question: 'What is the difference between deepcopy and copy?',
      options: [
        'No difference',
        'copy creates shallow copy, deepcopy creates deep copy',
        'deepcopy is faster',
        'copy is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'copy() creates a shallow copy (copies references), deepcopy() creates a deep copy (copies objects recursively).',
      timeLimit: 90
    },
    {
      id: 'py-m2-2',
      question: 'What is a closure in Python?',
      options: [
        'A way to close files',
        'A function that captures variables from its enclosing scope',
        'A type of loop',
        'A class method'
      ],
      correctAnswer: 1,
      explanation: 'A closure is a function that captures and retains access to variables from its enclosing scope.',
      timeLimit: 90
    },
    {
      id: 'py-m2-3',
      question: 'What is the purpose of __init__.py?',
      options: [
        'Initializes variables',
        'Makes a directory a Python package',
        'Initializes classes',
        'Starts the program'
      ],
      correctAnswer: 1,
      explanation: '__init__.py makes a directory a Python package and can contain package initialization code.',
      timeLimit: 90
    },
    {
      id: 'py-m2-4',
      question: 'What is the difference between @staticmethod and @classmethod?',
      options: [
        'No difference',
        '@staticmethod has no access to class/instance, @classmethod has access to class',
        '@classmethod is faster',
        '@staticmethod is deprecated'
      ],
      correctAnswer: 1,
      explanation: '@staticmethod has no access to self or cls, @classmethod receives cls as first parameter.',
      timeLimit: 90
    },
    {
      id: 'py-m2-5',
      question: 'What is monkey patching?',
      options: [
        'Patching software bugs',
        'Dynamically modifying classes or modules at runtime',
        'A debugging technique',
        'A testing method'
      ],
      correctAnswer: 1,
      explanation: 'Monkey patching is dynamically modifying classes or modules at runtime.',
      timeLimit: 90
    },
    {
      id: 'py-m2-6',
      question: 'What is the Global Interpreter Lock (GIL)?',
      options: [
        'A global variable lock',
        'A mutex that prevents multiple threads from executing Python code simultaneously',
        'A file locking mechanism',
        'A database lock'
      ],
      correctAnswer: 1,
      explanation: 'GIL is a mutex that allows only one thread to execute Python bytecode at a time.',
      timeLimit: 90
    },
    {
      id: 'py-m2-7',
      question: 'What is the difference between __str__ and __repr__?',
      options: [
        'No difference',
        '__str__ for user-friendly output, __repr__ for developer-friendly output',
        '__repr__ is faster',
        '__str__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__str__ provides user-friendly string representation, __repr__ provides unambiguous representation for developers.',
      timeLimit: 90
    },
    {
      id: 'py-m2-8',
      question: 'What is a context manager?',
      options: [
        'A memory manager',
        'An object that defines runtime context for executing code blocks',
        'A file manager',
        'A thread manager'
      ],
      correctAnswer: 1,
      explanation: 'Context managers define runtime context for code execution, typically used with "with" statements.',
      timeLimit: 90
    },
    {
      id: 'py-m2-9',
      question: 'What is the purpose of *args and **kwargs together?',
      options: [
        'No purpose',
        'Accept any number of positional and keyword arguments',
        'Create arguments',
        'Delete arguments'
      ],
      correctAnswer: 1,
      explanation: '*args accepts variable positional arguments, **kwargs accepts variable keyword arguments.',
      timeLimit: 90
    },
    {
      id: 'py-m2-10',
      question: 'What is metaclass in Python?',
      options: [
        'A parent class',
        'A class whose instances are classes',
        'A class method',
        'A class variable'
      ],
      correctAnswer: 1,
      explanation: 'A metaclass is a class whose instances are classes themselves.',
      timeLimit: 90
    },
    {
      id: 'py-m2-11',
      question: 'What is the difference between property and attribute?',
      options: [
        'No difference',
        'Property uses getter/setter methods, attribute is direct access',
        'Attribute is faster',
        'Property is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Properties use getter/setter methods for controlled access, attributes are direct variable access.',
      timeLimit: 90
    },
    {
      id: 'py-m2-12',
      question: 'What is duck typing?',
      options: [
        'A type of duck',
        'If it walks like a duck and quacks like a duck, it is a duck',
        'Strong typing',
        'Type checking'
      ],
      correctAnswer: 1,
      explanation: 'Duck typing focuses on object behavior rather than explicit type checking.',
      timeLimit: 90
    },
    {
      id: 'py-m2-13',
      question: 'What is the purpose of __slots__?',
      options: [
        'Creates slots in classes',
        'Restricts attributes and saves memory',
        'Defines methods',
        'Creates inheritance'
      ],
      correctAnswer: 1,
      explanation: '__slots__ restricts the attributes that can be added to instances and saves memory.',
      timeLimit: 90
    },
    {
      id: 'py-m2-14',
      question: 'What is the difference between map() and list comprehension?',
      options: [
        'No difference',
        'map() returns iterator, list comprehension returns list',
        'List comprehension is slower',
        'map() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'map() returns an iterator (lazy evaluation), list comprehension returns a list immediately.',
      timeLimit: 90
    },
    {
      id: 'py-m2-15',
      question: 'What is the purpose of __call__ method?',
      options: [
        'Calls other methods',
        'Makes objects callable like functions',
        'Calls constructors',
        'Calls parent methods'
      ],
      correctAnswer: 1,
      explanation: '__call__ method allows objects to be called like functions.',
      timeLimit: 90
    },
    {
      id: 'py-m2-16',
      question: 'What is the difference between is and == for strings?',
      options: [
        'No difference',
        'is checks identity, == checks value; string interning affects behavior',
        '== is faster',
        'is is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'is checks object identity, == checks value equality. String interning can make small strings share identity.',
      timeLimit: 90
    },
    {
      id: 'py-m2-17',
      question: 'What is the purpose of functools.wraps?',
      options: [
        'Wraps functions',
        'Preserves original function metadata in decorators',
        'Creates function wrappers',
        'Wraps exceptions'
      ],
      correctAnswer: 1,
      explanation: 'functools.wraps preserves the original function\'s metadata when creating decorators.',
      timeLimit: 90
    },
    {
      id: 'py-m2-18',
      question: 'What is the difference between __new__ and __init__?',
      options: [
        'No difference',
        '__new__ creates instance, __init__ initializes it',
        '__init__ is faster',
        '__new__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__new__ creates and returns a new instance, __init__ initializes the created instance.',
      timeLimit: 90
    },
    {
      id: 'py-m2-19',
      question: 'What is the purpose of collections.defaultdict?',
      options: [
        'Default dictionary',
        'Dictionary that provides default values for missing keys',
        'Dictionary with default methods',
        'Dictionary collection'
      ],
      correctAnswer: 1,
      explanation: 'defaultdict automatically creates missing keys with a default value when accessed.',
      timeLimit: 90
    },
    {
      id: 'py-m2-20',
      question: 'What is the difference between threading and multiprocessing?',
      options: [
        'No difference',
        'Threading shares memory, multiprocessing uses separate processes',
        'Multiprocessing is always faster',
        'Threading is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Threading uses shared memory within a process, multiprocessing uses separate processes with isolated memory.',
      timeLimit: 90
    }
  ]
};

// Python - Hard Set 1
export const pythonHardSet1: QuizSet = {
  id: 'python-hard-1',
  setNumber: 1,
  title: 'Python Expert Level - Set 1',
  subject: 'Python',
  difficulty: 'HARD',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'py-h1-1',
      question: 'What is the difference between __getattr__ and __getattribute__?',
      options: [
        'No difference',
        '__getattr__ called when attribute not found, __getattribute__ called for all attribute access',
        '__getattribute__ is faster',
        '__getattr__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__getattribute__ is called for every attribute access, __getattr__ only when attribute is not found through normal lookup.',
      timeLimit: 120
    },
    {
      id: 'py-h1-2',
      question: 'What is the descriptor protocol?',
      options: [
        'A communication protocol',
        'Objects that define __get__, __set__, or __delete__ methods',
        'A file description system',
        'A network protocol'
      ],
      correctAnswer: 1,
      explanation: 'Descriptor protocol allows objects to customize attribute access by implementing __get__, __set__, and/or __delete__.',
      timeLimit: 120
    },
    {
      id: 'py-h1-3',
      question: 'What is the Method Resolution Order (MRO)?',
      options: [
        'Method calling order',
        'Algorithm determining order of method lookup in inheritance hierarchy',
        'Method execution order',
        'Method definition order'
      ],
      correctAnswer: 1,
      explanation: 'MRO determines the order in which base classes are searched when looking for a method in inheritance.',
      timeLimit: 120
    },
    {
      id: 'py-h1-4',
      question: 'What is the difference between __enter__ and __exit__ in context managers?',
      options: [
        'No difference',
        '__enter__ sets up context, __exit__ cleans up and handles exceptions',
        '__exit__ is faster',
        '__enter__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__enter__ is called when entering the context, __exit__ is called when leaving and can handle exceptions.',
      timeLimit: 120
    },
    {
      id: 'py-h1-5',
      question: 'What is the purpose of __slots__ and what are its limitations?',
      options: [
        'No limitations',
        'Saves memory but prevents dynamic attribute addition and weakref support',
        'Only saves memory',
        'Only prevents attribute addition'
      ],
      correctAnswer: 1,
      explanation: '__slots__ saves memory by using a fixed-size array but prevents dynamic attributes and requires explicit weakref support.',
      timeLimit: 120
    },
    {
      id: 'py-h1-6',
      question: 'What is the difference between bound and unbound methods?',
      options: [
        'No difference',
        'Bound methods have instance reference, unbound methods do not',
        'Unbound methods are faster',
        'Bound methods are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Bound methods automatically pass the instance as the first argument, unbound methods require explicit instance passing.',
      timeLimit: 120
    },
    {
      id: 'py-h1-7',
      question: 'What is the purpose of __weakref__ slot?',
      options: [
        'Creates weak references',
        'Allows objects to be referenced by weak references',
        'Manages memory weakly',
        'Creates weak objects'
      ],
      correctAnswer: 1,
      explanation: '__weakref__ slot allows objects to be targets of weak references without preventing garbage collection.',
      timeLimit: 120
    },
    {
      id: 'py-h1-8',
      question: 'What is the difference between __import__ and importlib.import_module?',
      options: [
        'No difference',
        '__import__ is low-level, importlib.import_module is high-level and recommended',
        'importlib is faster',
        '__import__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__import__ is the low-level import mechanism, importlib.import_module provides a cleaner high-level interface.',
      timeLimit: 120
    },
    {
      id: 'py-h1-9',
      question: 'What is the purpose of sys._getframe()?',
      options: [
        'Gets frame rate',
        'Accesses current execution frame for debugging/introspection',
        'Gets video frames',
        'Gets window frames'
      ],
      correctAnswer: 1,
      explanation: 'sys._getframe() provides access to the current execution frame, useful for debugging and introspection.',
      timeLimit: 120
    },
    {
      id: 'py-h1-10',
      question: 'What is the difference between __dict__ and vars()?',
      options: [
        'No difference',
        '__dict__ is attribute, vars() is function that returns __dict__',
        'vars() is faster',
        '__dict__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__dict__ is the actual dictionary storing object attributes, vars() is a function that returns __dict__.',
      timeLimit: 120
    },
    {
      id: 'py-h1-11',
      question: 'What is the purpose of __all__ in modules?',
      options: [
        'Imports all modules',
        'Defines what gets imported with "from module import *"',
        'Lists all functions',
        'Exports all variables'
      ],
      correctAnswer: 1,
      explanation: '__all__ defines the public API of a module and controls what gets imported with "from module import *".',
      timeLimit: 120
    },
    {
      id: 'py-h1-12',
      question: 'What is the difference between types.MethodType and regular methods?',
      options: [
        'No difference',
        'MethodType creates bound methods dynamically',
        'MethodType is faster',
        'Regular methods are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'types.MethodType allows creating bound methods dynamically by binding functions to instances.',
      timeLimit: 120
    },
    {
      id: 'py-h1-13',
      question: 'What is the purpose of __prepare__ in metaclasses?',
      options: [
        'Prepares classes',
        'Returns namespace dict for class creation',
        'Prepares methods',
        'Prepares inheritance'
      ],
      correctAnswer: 1,
      explanation: '__prepare__ returns the namespace dictionary used during class creation, allowing custom namespace types.',
      timeLimit: 120
    },
    {
      id: 'py-h1-14',
      question: 'What is the difference between __reduce__ and __reduce_ex__?',
      options: [
        'No difference',
        '__reduce_ex__ supports protocol versions, __reduce__ does not',
        '__reduce__ is faster',
        '__reduce_ex__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__reduce_ex__ accepts a protocol version parameter for backward compatibility, __reduce__ does not.',
      timeLimit: 120
    },
    {
      id: 'py-h1-15',
      question: 'What is the purpose of __missing__ in dict subclasses?',
      options: [
        'Handles missing files',
        'Called when key is not found in dictionary',
        'Handles missing methods',
        'Handles missing imports'
      ],
      correctAnswer: 1,
      explanation: '__missing__ is called by dict.__getitem__ when a key is not found, allowing custom behavior.',
      timeLimit: 120
    },
    {
      id: 'py-h1-16',
      question: 'What is the difference between __class__ and type()?',
      options: [
        'No difference',
        '__class__ can be reassigned, type() always returns actual type',
        'type() is faster',
        '__class__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__class__ attribute can be modified, while type() always returns the actual type of the object.',
      timeLimit: 120
    },
    {
      id: 'py-h1-17',
      question: 'What is the purpose of __set_name__ in descriptors?',
      options: [
        'Sets descriptor name',
        'Called when descriptor is assigned to class attribute',
        'Sets variable names',
        'Sets method names'
      ],
      correctAnswer: 1,
      explanation: '__set_name__ is called when a descriptor is assigned to a class attribute, receiving the class and attribute name.',
      timeLimit: 120
    },
    {
      id: 'py-h1-18',
      question: 'What is the difference between __bytes__ and __str__?',
      options: [
        'No difference',
        '__bytes__ returns bytes representation, __str__ returns string representation',
        '__str__ is faster',
        '__bytes__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__bytes__ returns a bytes object representation, while __str__ returns a string representation.',
      timeLimit: 120
    },
    {
      id: 'py-h1-19',
      question: 'What is the purpose of __index__ method?',
      options: [
        'Creates indexes',
        'Converts object to integer for use as sequence index',
        'Indexes databases',
        'Indexes files'
      ],
      correctAnswer: 1,
      explanation: '__index__ converts an object to an integer suitable for use as a sequence index or slice.',
      timeLimit: 120
    },
    {
      id: 'py-h1-20',
      question: 'What is the difference between __format__ and __str__?',
      options: [
        'No difference',
        '__format__ handles format specifications, __str__ provides basic string representation',
        '__str__ is more flexible',
        '__format__ is deprecated'
      ],
      correctAnswer: 1,
      explanation: '__format__ handles format specifications (like in f-strings), while __str__ provides basic string representation.',
      timeLimit: 120
    }
  ]
};

export const pythonAdditionalEasySets: QuizSet[] = [pythonEasySet2];
export const pythonAdditionalMediumSets: QuizSet[] = [pythonMediumSet2];
export const pythonHardSets: QuizSet[] = [pythonHardSet1];
