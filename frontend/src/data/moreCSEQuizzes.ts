import { Quiz } from './cseQuizData';

// C++ - Medium
export const cppMediumQuiz: Quiz = {
  id: 'cpp-medium',
  title: 'C++ Object-Oriented Programming',
  subject: 'C++',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'cpp-m-1',
      question: 'What is polymorphism in C++?',
      options: ['Multiple inheritance', 'Function overloading', 'Ability of objects to take multiple forms', 'Data hiding'],
      correctAnswer: 2,
      explanation: 'Polymorphism allows objects of different types to be treated as objects of a common base type.',
      timeLimit: 90
    },
    {
      id: 'cpp-m-2',
      question: 'What is the difference between public, private, and protected access specifiers?',
      options: [
        'No difference',
        'Public: accessible everywhere, Private: within class only, Protected: within class and derived classes',
        'Only syntax differences',
        'Protected is the same as private'
      ],
      correctAnswer: 1,
      explanation: 'Access specifiers control the visibility of class members: public (everywhere), private (class only), protected (class and derived classes).',
      timeLimit: 90
    },
    {
      id: 'cpp-m-3',
      question: 'What is a virtual function?',
      options: [
        'A function that doesn\'t exist',
        'A function that enables runtime polymorphism',
        'A static function',
        'A private function'
      ],
      correctAnswer: 1,
      explanation: 'Virtual functions enable runtime polymorphism by allowing derived classes to override base class methods.',
      timeLimit: 90
    },
    {
      id: 'cpp-m-4',
      question: 'What is the purpose of constructors in C++?',
      options: [
        'To destroy objects',
        'To initialize objects when they are created',
        'To copy objects',
        'To declare variables'
      ],
      correctAnswer: 1,
      explanation: 'Constructors are special member functions that initialize objects when they are created.',
      timeLimit: 90
    },
    {
      id: 'cpp-m-5',
      question: 'What is operator overloading?',
      options: [
        'Using too many operators',
        'Giving additional meanings to operators for user-defined types',
        'Creating new operators',
        'Removing operators'
      ],
      correctAnswer: 1,
      explanation: 'Operator overloading allows you to define custom behavior for operators when used with user-defined types.',
      timeLimit: 90
    }
  ]
};

// HTML - Easy
export const htmlEasyQuiz: Quiz = {
  id: 'html-easy',
  title: 'HTML Fundamentals',
  subject: 'HTML',
  difficulty: 'EASY',
  totalTimeLimit: 25,
  questions: [
    {
      id: 'html-e-1',
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 0,
      explanation: 'HTML stands for Hyper Text Markup Language, used to create web pages.',
      timeLimit: 60
    },
    {
      id: 'html-e-2',
      question: 'Which tag is used to create a hyperlink?',
      options: ['<link>', '<a>', '<href>', '<url>'],
      correctAnswer: 1,
      explanation: 'The <a> tag is used to create hyperlinks in HTML.',
      timeLimit: 60
    },
    {
      id: 'html-e-3',
      question: 'What is the correct HTML tag for the largest heading?',
      options: ['<h6>', '<h1>', '<heading>', '<head>'],
      correctAnswer: 1,
      explanation: '<h1> is the largest heading tag in HTML, with <h6> being the smallest.',
      timeLimit: 60
    },
    {
      id: 'html-e-4',
      question: 'Which tag is used to display an image?',
      options: ['<image>', '<img>', '<picture>', '<photo>'],
      correctAnswer: 1,
      explanation: 'The <img> tag is used to embed images in HTML documents.',
      timeLimit: 60
    },
    {
      id: 'html-e-5',
      question: 'What is the purpose of the <head> section?',
      options: [
        'To display the main content',
        'To contain metadata about the document',
        'To create headers',
        'To add images'
      ],
      correctAnswer: 1,
      explanation: 'The <head> section contains metadata about the HTML document, such as title, links to stylesheets, and scripts.',
      timeLimit: 60
    }
  ]
};

// CSS - Medium
export const cssMediumQuiz: Quiz = {
  id: 'css-medium',
  title: 'CSS Styling and Layout',
  subject: 'CSS',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'css-m-1',
      question: 'What is the CSS Box Model?',
      options: [
        'A way to create boxes',
        'Content, padding, border, and margin',
        'A layout technique',
        'A color scheme'
      ],
      correctAnswer: 1,
      explanation: 'The CSS Box Model consists of content, padding, border, and margin areas around an element.',
      timeLimit: 90
    },
    {
      id: 'css-m-2',
      question: 'What is the difference between margin and padding?',
      options: [
        'No difference',
        'Margin is outside the border, padding is inside',
        'Padding is outside the border, margin is inside',
        'They are the same property'
      ],
      correctAnswer: 1,
      explanation: 'Margin creates space outside the element\'s border, while padding creates space inside the border.',
      timeLimit: 90
    },
    {
      id: 'css-m-3',
      question: 'What is Flexbox used for?',
      options: [
        'Creating flexible layouts',
        'Adding animations',
        'Changing colors',
        'Loading fonts'
      ],
      correctAnswer: 0,
      explanation: 'Flexbox is a CSS layout method for creating flexible and responsive layouts.',
      timeLimit: 90
    },
    {
      id: 'css-m-4',
      question: 'What does the z-index property control?',
      options: [
        'Font size',
        'Stacking order of elements',
        'Element width',
        'Color intensity'
      ],
      correctAnswer: 1,
      explanation: 'The z-index property controls the stacking order of positioned elements.',
      timeLimit: 90
    },
    {
      id: 'css-m-5',
      question: 'What is a CSS selector?',
      options: [
        'A way to select colors',
        'A pattern used to select elements to style',
        'A font family',
        'A layout method'
      ],
      correctAnswer: 1,
      explanation: 'CSS selectors are patterns used to select and style HTML elements.',
      timeLimit: 90
    }
  ]
};

// Spring Boot - Hard
export const springBootHardQuiz: Quiz = {
  id: 'springboot-hard',
  title: 'Advanced Spring Boot',
  subject: 'Spring Boot',
  difficulty: 'HARD',
  totalTimeLimit: 45,
  questions: [
    {
      id: 'sb-h-1',
      question: 'What is dependency injection in Spring Boot?',
      options: [
        'A way to inject bugs',
        'A design pattern where objects receive dependencies from external sources',
        'A database technique',
        'A security feature'
      ],
      correctAnswer: 1,
      explanation: 'Dependency injection is a design pattern where objects receive their dependencies from external sources rather than creating them internally.',
      timeLimit: 120
    },
    {
      id: 'sb-h-2',
      question: 'What is the difference between @Component, @Service, and @Repository?',
      options: [
        'No difference, just naming conventions',
        'Different functionality for each',
        'Semantic differences for different layers',
        'Only @Component works'
      ],
      correctAnswer: 2,
      explanation: '@Component is generic, @Service is for business logic layer, @Repository is for data access layer - mainly semantic differences.',
      timeLimit: 120
    },
    {
      id: 'sb-h-3',
      question: 'What is Spring Boot Auto Configuration?',
      options: [
        'Manual configuration',
        'Automatic configuration based on classpath dependencies',
        'A debugging tool',
        'A testing framework'
      ],
      correctAnswer: 1,
      explanation: 'Auto Configuration automatically configures Spring application based on the dependencies present in the classpath.',
      timeLimit: 120
    },
    {
      id: 'sb-h-4',
      question: 'What is the purpose of @Transactional annotation?',
      options: [
        'To create transactions in database operations',
        'To handle HTTP requests',
        'To validate data',
        'To cache results'
      ],
      correctAnswer: 0,
      explanation: '@Transactional ensures that database operations are executed within a transaction boundary.',
      timeLimit: 120
    },
    {
      id: 'sb-h-5',
      question: 'What is Spring Boot Actuator?',
      options: [
        'A database driver',
        'Production-ready features for monitoring and managing applications',
        'A web framework',
        'A testing tool'
      ],
      correctAnswer: 1,
      explanation: 'Spring Boot Actuator provides production-ready features like health checks, metrics, and monitoring endpoints.',
      timeLimit: 120
    }
  ]
};

// Software Engineering - Medium
export const softwareEngineeringMediumQuiz: Quiz = {
  id: 'se-medium',
  title: 'Software Engineering Principles',
  subject: 'Software Engineering',
  difficulty: 'MEDIUM',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'se-m-1',
      question: 'What is the Software Development Life Cycle (SDLC)?',
      options: [
        'A programming language',
        'A systematic process for developing software',
        'A testing tool',
        'A database design method'
      ],
      correctAnswer: 1,
      explanation: 'SDLC is a systematic process that defines the stages involved in software development from planning to maintenance.',
      timeLimit: 90
    },
    {
      id: 'se-m-2',
      question: 'What is Agile methodology?',
      options: [
        'A programming language',
        'An iterative approach to software development',
        'A database design pattern',
        'A testing framework'
      ],
      correctAnswer: 1,
      explanation: 'Agile is an iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback.',
      timeLimit: 90
    },
    {
      id: 'se-m-3',
      question: 'What is the difference between verification and validation?',
      options: [
        'No difference',
        'Verification: building right, Validation: building the right product',
        'Validation is faster',
        'Verification is more important'
      ],
      correctAnswer: 1,
      explanation: 'Verification ensures we\'re building the product right, while validation ensures we\'re building the right product.',
      timeLimit: 90
    },
    {
      id: 'se-m-4',
      question: 'What is code refactoring?',
      options: [
        'Writing new code',
        'Improving code structure without changing functionality',
        'Deleting old code',
        'Adding new features'
      ],
      correctAnswer: 1,
      explanation: 'Refactoring is the process of improving code structure and readability without changing its external behavior.',
      timeLimit: 90
    },
    {
      id: 'se-m-5',
      question: 'What is version control?',
      options: [
        'Controlling software versions',
        'A system for tracking changes in files over time',
        'A testing method',
        'A deployment strategy'
      ],
      correctAnswer: 1,
      explanation: 'Version control systems track changes to files over time, allowing multiple developers to collaborate and maintain history.',
      timeLimit: 90
    }
  ]
};

// Artificial Intelligence - Hard
export const aiHardQuiz: Quiz = {
  id: 'ai-hard',
  title: 'Advanced Artificial Intelligence',
  subject: 'Artificial Intelligence',
  difficulty: 'HARD',
  totalTimeLimit: 50,
  questions: [
    {
      id: 'ai-h-1',
      question: 'What is the difference between supervised and unsupervised learning?',
      options: [
        'Supervised uses labeled data, unsupervised uses unlabeled data',
        'No difference',
        'Supervised is faster',
        'Unsupervised is more accurate'
      ],
      correctAnswer: 0,
      explanation: 'Supervised learning uses labeled training data, while unsupervised learning finds patterns in unlabeled data.',
      timeLimit: 120
    },
    {
      id: 'ai-h-2',
      question: 'What is a neural network?',
      options: [
        'A computer network',
        'A computational model inspired by biological neural networks',
        'A database structure',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Neural networks are computational models inspired by biological neural networks, used for machine learning tasks.',
      timeLimit: 120
    },
    {
      id: 'ai-h-3',
      question: 'What is backpropagation?',
      options: [
        'A data preprocessing technique',
        'An algorithm for training neural networks by propagating errors backward',
        'A feature selection method',
        'A clustering algorithm'
      ],
      correctAnswer: 1,
      explanation: 'Backpropagation is an algorithm that trains neural networks by calculating gradients and propagating errors backward through the network.',
      timeLimit: 120
    },
    {
      id: 'ai-h-4',
      question: 'What is the purpose of activation functions in neural networks?',
      options: [
        'To activate the computer',
        'To introduce non-linearity and enable learning complex patterns',
        'To speed up computation',
        'To reduce memory usage'
      ],
      correctAnswer: 1,
      explanation: 'Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns and relationships.',
      timeLimit: 120
    },
    {
      id: 'ai-h-5',
      question: 'What is overfitting in machine learning?',
      options: [
        'Using too much data',
        'When a model performs well on training data but poorly on new data',
        'When training takes too long',
        'When the model is too simple'
      ],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model learns the training data too well, including noise, leading to poor generalization on new data.',
      timeLimit: 120
    }
  ]
};

export const moreCSEQuizzes: Quiz[] = [
  cppMediumQuiz,
  htmlEasyQuiz,
  cssMediumQuiz,
  springBootHardQuiz,
  softwareEngineeringMediumQuiz,
  aiHardQuiz
];
