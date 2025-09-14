import { Quiz } from './cseQuizData';

// IoT - Easy
export const iotEasyQuiz: Quiz = {
  id: 'iot-easy',
  title: 'Internet of Things Basics',
  subject: 'IoT',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'iot-e-1',
      question: 'What does IoT stand for?',
      options: ['Internet of Things', 'Input Output Technology', 'Integrated Online Tools', 'Interactive Object Technology'],
      correctAnswer: 0,
      explanation: 'IoT stands for Internet of Things - a network of interconnected devices that can communicate and exchange data.',
      timeLimit: 60
    },
    {
      id: 'iot-e-2',
      question: 'Which of the following is an example of an IoT device?',
      options: ['Smart thermostat', 'Regular calculator', 'Paper notebook', 'Mechanical clock'],
      correctAnswer: 0,
      explanation: 'A smart thermostat is an IoT device as it can connect to the internet and be controlled remotely.',
      timeLimit: 60
    },
    {
      id: 'iot-e-3',
      question: 'What is a sensor in IoT context?',
      options: ['A device that detects and measures physical properties', 'A type of battery', 'A programming language', 'A network protocol'],
      correctAnswer: 0,
      explanation: 'Sensors detect and measure physical properties like temperature, humidity, motion, etc., and convert them to digital signals.',
      timeLimit: 60
    },
    {
      id: 'iot-e-4',
      question: 'Which communication protocol is commonly used in IoT?',
      options: ['HTTP only', 'MQTT', 'FTP only', 'SMTP only'],
      correctAnswer: 1,
      explanation: 'MQTT (Message Queuing Telemetry Transport) is a lightweight protocol commonly used for IoT communication.',
      timeLimit: 60
    },
    {
      id: 'iot-e-5',
      question: 'What is the main advantage of IoT?',
      options: ['Increased complexity', 'Automation and remote monitoring', 'Higher costs', 'Reduced functionality'],
      correctAnswer: 1,
      explanation: 'IoT enables automation, remote monitoring, and control of devices, improving efficiency and convenience.',
      timeLimit: 60
    }
  ]
};

// Big Data - Medium
export const bigDataMediumQuiz: Quiz = {
  id: 'bigdata-medium',
  title: 'Big Data Analytics',
  subject: 'Big Data',
  difficulty: 'MEDIUM',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'bd-m-1',
      question: 'What are the 3 Vs of Big Data?',
      options: ['Volume, Velocity, Variety', 'Value, Version, Validation', 'Virtual, Visual, Verbal', 'Vertical, Variable, Vector'],
      correctAnswer: 0,
      explanation: 'The 3 Vs of Big Data are Volume (amount), Velocity (speed), and Variety (types of data).',
      timeLimit: 90
    },
    {
      id: 'bd-m-2',
      question: 'What is Hadoop?',
      options: ['A programming language', 'An open-source framework for distributed storage and processing', 'A database', 'A web browser'],
      correctAnswer: 1,
      explanation: 'Hadoop is an open-source framework that allows distributed storage and processing of large datasets across clusters.',
      timeLimit: 90
    },
    {
      id: 'bd-m-3',
      question: 'What is MapReduce?',
      options: ['A data visualization tool', 'A programming model for processing large datasets', 'A database query language', 'A network protocol'],
      correctAnswer: 1,
      explanation: 'MapReduce is a programming model for processing and generating large datasets in a distributed computing environment.',
      timeLimit: 90
    },
    {
      id: 'bd-m-4',
      question: 'What is the difference between structured and unstructured data?',
      options: [
        'No difference',
        'Structured has predefined format, unstructured does not',
        'Structured is larger',
        'Unstructured is faster to process'
      ],
      correctAnswer: 1,
      explanation: 'Structured data has a predefined format (like databases), while unstructured data lacks a specific format (like text, images).',
      timeLimit: 90
    },
    {
      id: 'bd-m-5',
      question: 'What is Apache Spark?',
      options: ['A web server', 'A unified analytics engine for large-scale data processing', 'A database management system', 'A programming language'],
      correctAnswer: 1,
      explanation: 'Apache Spark is a unified analytics engine for large-scale data processing with built-in modules for streaming, SQL, and machine learning.',
      timeLimit: 90
    }
  ]
};

// Compiler Design - Hard
export const compilerDesignHardQuiz: Quiz = {
  id: 'compiler-hard',
  title: 'Advanced Compiler Design',
  subject: 'Compiler Design',
  difficulty: 'HARD',
  totalTimeLimit: 45,
  questions: [
    {
      id: 'cd-h-1',
      question: 'What are the phases of a compiler?',
      options: [
        'Lexical, Syntax, Semantic, Intermediate Code Generation, Optimization, Code Generation',
        'Input, Process, Output',
        'Parse, Compile, Execute',
        'Read, Write, Execute'
      ],
      correctAnswer: 0,
      explanation: 'Compiler phases include lexical analysis, syntax analysis, semantic analysis, intermediate code generation, optimization, and code generation.',
      timeLimit: 120
    },
    {
      id: 'cd-h-2',
      question: 'What is lexical analysis?',
      options: ['Checking grammar rules', 'Converting source code into tokens', 'Optimizing code', 'Generating machine code'],
      correctAnswer: 1,
      explanation: 'Lexical analysis (scanning) converts the source code into a sequence of tokens, removing whitespace and comments.',
      timeLimit: 120
    },
    {
      id: 'cd-h-3',
      question: 'What is a parse tree?',
      options: ['A data structure', 'A tree representation of syntactic structure of source code', 'A file system', 'A network topology'],
      correctAnswer: 1,
      explanation: 'A parse tree is a tree representation that shows the syntactic structure of the source code according to grammar rules.',
      timeLimit: 120
    },
    {
      id: 'cd-h-4',
      question: 'What is the difference between LR and LL parsers?',
      options: [
        'No difference',
        'LR parses left-to-right with rightmost derivation, LL parses left-to-right with leftmost derivation',
        'LR is faster',
        'LL is more accurate'
      ],
      correctAnswer: 1,
      explanation: 'LR parsers read left-to-right and construct rightmost derivation, while LL parsers read left-to-right and construct leftmost derivation.',
      timeLimit: 120
    },
    {
      id: 'cd-h-5',
      question: 'What is code optimization?',
      options: [
        'Making code shorter',
        'Improving code efficiency without changing functionality',
        'Adding comments',
        'Formatting code'
      ],
      correctAnswer: 1,
      explanation: 'Code optimization improves the efficiency of generated code (speed, memory usage) without changing its functionality.',
      timeLimit: 120
    }
  ]
};

// Computer Graphics - Medium
export const computerGraphicsMediumQuiz: Quiz = {
  id: 'graphics-medium',
  title: 'Computer Graphics Fundamentals',
  subject: 'Computer Graphics',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'cg-m-1',
      question: 'What is rasterization?',
      options: ['Converting vector graphics to pixels', 'Creating 3D models', 'Applying textures', 'Calculating lighting'],
      correctAnswer: 0,
      explanation: 'Rasterization is the process of converting vector graphics (geometric shapes) into a raster image (pixels).',
      timeLimit: 90
    },
    {
      id: 'cg-m-2',
      question: 'What is the purpose of a graphics pipeline?',
      options: ['To store images', 'To process geometric data and render images', 'To compress files', 'To edit photos'],
      correctAnswer: 1,
      explanation: 'The graphics pipeline is a sequence of steps that processes geometric data and renders it into images on the screen.',
      timeLimit: 90
    },
    {
      id: 'cg-m-3',
      question: 'What is ray tracing?',
      options: ['A debugging technique', 'A rendering technique that simulates light behavior', 'A data structure', 'A compression algorithm'],
      correctAnswer: 1,
      explanation: 'Ray tracing is a rendering technique that simulates the behavior of light to create realistic images with reflections and shadows.',
      timeLimit: 90
    },
    {
      id: 'cg-m-4',
      question: 'What is texture mapping?',
      options: ['Creating maps', 'Applying 2D images to 3D surfaces', 'Measuring distances', 'Calculating coordinates'],
      correctAnswer: 1,
      explanation: 'Texture mapping is the technique of applying 2D images (textures) to 3D surfaces to add detail and realism.',
      timeLimit: 90
    },
    {
      id: 'cg-m-5',
      question: 'What is anti-aliasing?',
      options: ['Adding aliases', 'A technique to reduce jagged edges in images', 'Increasing resolution', 'Changing colors'],
      correctAnswer: 1,
      explanation: 'Anti-aliasing is a technique used to reduce jagged edges (aliasing) in digital images by smoothing transitions.',
      timeLimit: 90
    }
  ]
};

// Web Development - Easy
export const webDevEasyQuiz: Quiz = {
  id: 'webdev-easy',
  title: 'Web Development Basics',
  subject: 'Web Development',
  difficulty: 'EASY',
  totalTimeLimit: 25,
  questions: [
    {
      id: 'wd-e-1',
      question: 'What are the three main technologies for front-end web development?',
      options: ['HTML, CSS, JavaScript', 'Java, Python, C++', 'SQL, PHP, Ruby', 'XML, JSON, YAML'],
      correctAnswer: 0,
      explanation: 'HTML (structure), CSS (styling), and JavaScript (interactivity) are the three core front-end technologies.',
      timeLimit: 60
    },
    {
      id: 'wd-e-2',
      question: 'What is the difference between front-end and back-end development?',
      options: [
        'No difference',
        'Front-end is client-side (user interface), back-end is server-side (logic and data)',
        'Front-end is harder',
        'Back-end is only databases'
      ],
      correctAnswer: 1,
      explanation: 'Front-end handles the user interface and user experience, while back-end handles server logic, databases, and APIs.',
      timeLimit: 60
    },
    {
      id: 'wd-e-3',
      question: 'What is responsive web design?',
      options: ['Fast loading websites', 'Websites that adapt to different screen sizes', 'Interactive websites', 'Secure websites'],
      correctAnswer: 1,
      explanation: 'Responsive web design ensures websites adapt and display properly on different devices and screen sizes.',
      timeLimit: 60
    },
    {
      id: 'wd-e-4',
      question: 'What is an API?',
      options: ['A programming language', 'Application Programming Interface for communication between software', 'A database', 'A web browser'],
      correctAnswer: 1,
      explanation: 'API (Application Programming Interface) allows different software applications to communicate and exchange data.',
      timeLimit: 60
    },
    {
      id: 'wd-e-5',
      question: 'What is the DOM?',
      options: ['Document Object Model - programming interface for HTML documents', 'A database', 'A web server', 'A programming language'],
      correctAnswer: 0,
      explanation: 'DOM (Document Object Model) is a programming interface that represents HTML documents as a tree structure for manipulation.',
      timeLimit: 60
    }
  ]
};

export const finalCSEQuizzes: Quiz[] = [
  iotEasyQuiz,
  bigDataMediumQuiz,
  compilerDesignHardQuiz,
  computerGraphicsMediumQuiz,
  webDevEasyQuiz
];
