import { Quiz } from './cseQuizData';

// React - Easy
export const reactEasyQuiz: Quiz = {
  id: 'react-easy',
  title: 'React Fundamentals',
  subject: 'React',
  difficulty: 'EASY',
  totalTimeLimit: 25,
  questions: [
    {
      id: 'react-e-1',
      question: 'What is React?',
      options: ['A JavaScript library for building user interfaces', 'A database', 'A web server', 'A CSS framework'],
      correctAnswer: 0,
      explanation: 'React is a JavaScript library developed by Facebook for building user interfaces.',
      timeLimit: 60
    },
    {
      id: 'react-e-2',
      question: 'What is JSX?',
      options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'],
      correctAnswer: 0,
      explanation: 'JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript.',
      timeLimit: 60
    },
    {
      id: 'react-e-3',
      question: 'Which method is used to render a React component?',
      options: ['render()', 'display()', 'show()', 'mount()'],
      correctAnswer: 0,
      explanation: 'The render() method is used to render React components to the DOM.',
      timeLimit: 60
    },
    {
      id: 'react-e-4',
      question: 'What are props in React?',
      options: ['Properties passed to components', 'Component methods', 'State variables', 'Event handlers'],
      correctAnswer: 0,
      explanation: 'Props are properties passed from parent to child components in React.',
      timeLimit: 60
    },
    {
      id: 'react-e-5',
      question: 'What is the virtual DOM?',
      options: ['A JavaScript representation of the real DOM', 'A new HTML standard', 'A CSS framework', 'A database'],
      correctAnswer: 0,
      explanation: 'Virtual DOM is a JavaScript representation of the real DOM that React uses for efficient updates.',
      timeLimit: 60
    }
  ]
};

// Computer Networks - Medium
export const cnMediumQuiz: Quiz = {
  id: 'cn-medium',
  title: 'Computer Networks Concepts',
  subject: 'Computer Networks',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'cn-m-1',
      question: 'What is the difference between TCP and UDP?',
      options: [
        'TCP is connection-oriented, UDP is connectionless',
        'TCP is faster than UDP',
        'UDP is more reliable than TCP',
        'No difference'
      ],
      correctAnswer: 0,
      explanation: 'TCP is connection-oriented and reliable, while UDP is connectionless and faster but less reliable.',
      timeLimit: 90
    },
    {
      id: 'cn-m-2',
      question: 'What is the purpose of the OSI model?',
      options: [
        'To standardize network communication',
        'To encrypt data',
        'To compress files',
        'To manage databases'
      ],
      correctAnswer: 0,
      explanation: 'The OSI model provides a standard framework for network communication protocols.',
      timeLimit: 90
    },
    {
      id: 'cn-m-3',
      question: 'Which layer of OSI model handles routing?',
      options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
      correctAnswer: 2,
      explanation: 'The Network Layer (Layer 3) is responsible for routing packets between networks.',
      timeLimit: 90
    },
    {
      id: 'cn-m-4',
      question: 'What is a subnet mask used for?',
      options: [
        'To hide network traffic',
        'To divide IP addresses into network and host portions',
        'To encrypt data',
        'To compress packets'
      ],
      correctAnswer: 1,
      explanation: 'Subnet masks are used to divide IP addresses into network and host portions.',
      timeLimit: 90
    },
    {
      id: 'cn-m-5',
      question: 'What is the maximum size of an Ethernet frame?',
      options: ['1024 bytes', '1500 bytes', '2048 bytes', '4096 bytes'],
      correctAnswer: 1,
      explanation: 'The maximum size of an Ethernet frame is 1500 bytes (MTU - Maximum Transmission Unit).',
      timeLimit: 90
    }
  ]
};

// SQL - Easy
export const sqlEasyQuiz: Quiz = {
  id: 'sql-easy',
  title: 'SQL Basics',
  subject: 'SQL',
  difficulty: 'EASY',
  totalTimeLimit: 25,
  questions: [
    {
      id: 'sql-e-1',
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'System Query Language'],
      correctAnswer: 0,
      explanation: 'SQL stands for Structured Query Language.',
      timeLimit: 60
    },
    {
      id: 'sql-e-2',
      question: 'Which SQL command is used to add new data to a table?',
      options: ['ADD', 'INSERT', 'CREATE', 'UPDATE'],
      correctAnswer: 1,
      explanation: 'The INSERT command is used to add new data to a table.',
      timeLimit: 60
    },
    {
      id: 'sql-e-3',
      question: 'Which clause is used to filter records in SQL?',
      options: ['FILTER', 'WHERE', 'SELECT', 'FROM'],
      correctAnswer: 1,
      explanation: 'The WHERE clause is used to filter records based on specified conditions.',
      timeLimit: 60
    },
    {
      id: 'sql-e-4',
      question: 'What is a primary key?',
      options: [
        'A key that opens the database',
        'A unique identifier for each record',
        'The first column in a table',
        'A password for the database'
      ],
      correctAnswer: 1,
      explanation: 'A primary key is a unique identifier for each record in a database table.',
      timeLimit: 60
    },
    {
      id: 'sql-e-5',
      question: 'Which SQL command is used to modify existing data?',
      options: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'],
      correctAnswer: 2,
      explanation: 'The UPDATE command is used to modify existing data in a table.',
      timeLimit: 60
    }
  ]
};

// Machine Learning - Hard
export const mlHardQuiz: Quiz = {
  id: 'ml-hard',
  title: 'Advanced Machine Learning',
  subject: 'Machine Learning',
  difficulty: 'HARD',
  totalTimeLimit: 50,
  questions: [
    {
      id: 'ml-h-1',
      question: 'What is the bias-variance tradeoff?',
      options: [
        'A tradeoff between model complexity and training time',
        'A tradeoff between underfitting and overfitting',
        'A tradeoff between accuracy and speed',
        'A tradeoff between supervised and unsupervised learning'
      ],
      correctAnswer: 1,
      explanation: 'The bias-variance tradeoff refers to the balance between underfitting (high bias) and overfitting (high variance).',
      timeLimit: 120
    },
    {
      id: 'ml-h-2',
      question: 'What is the purpose of regularization in machine learning?',
      options: [
        'To increase model complexity',
        'To prevent overfitting',
        'To speed up training',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Regularization techniques are used to prevent overfitting by adding penalty terms to the loss function.',
      timeLimit: 120
    },
    {
      id: 'ml-h-3',
      question: 'What is the difference between L1 and L2 regularization?',
      options: [
        'L1 uses absolute values, L2 uses squared values',
        'L1 is faster than L2',
        'L2 is more accurate than L1',
        'No significant difference'
      ],
      correctAnswer: 0,
      explanation: 'L1 regularization uses absolute values of parameters, while L2 uses squared values. L1 can lead to sparse models.',
      timeLimit: 120
    },
    {
      id: 'ml-h-4',
      question: 'What is gradient descent?',
      options: [
        'A data preprocessing technique',
        'An optimization algorithm to minimize loss functions',
        'A feature selection method',
        'A model evaluation metric'
      ],
      correctAnswer: 1,
      explanation: 'Gradient descent is an optimization algorithm used to minimize loss functions by iteratively moving towards the minimum.',
      timeLimit: 120
    },
    {
      id: 'ml-h-5',
      question: 'What is cross-validation used for?',
      options: [
        'Data cleaning',
        'Model evaluation and selection',
        'Feature engineering',
        'Data visualization'
      ],
      correctAnswer: 1,
      explanation: 'Cross-validation is used to evaluate model performance and select the best model by testing on multiple data splits.',
      timeLimit: 120
    }
  ]
};

// Cybersecurity - Medium
export const cybersecurityMediumQuiz: Quiz = {
  id: 'cybersec-medium',
  title: 'Cybersecurity Fundamentals',
  subject: 'Cybersecurity',
  difficulty: 'MEDIUM',
  totalTimeLimit: 40,
  questions: [
    {
      id: 'cs-m-1',
      question: 'What is the CIA triad in cybersecurity?',
      options: [
        'Central Intelligence Agency',
        'Confidentiality, Integrity, Availability',
        'Computer Information Access',
        'Cyber Intelligence Analysis'
      ],
      correctAnswer: 1,
      explanation: 'The CIA triad represents the three main principles of information security: Confidentiality, Integrity, and Availability.',
      timeLimit: 90
    },
    {
      id: 'cs-m-2',
      question: 'What is a firewall?',
      options: [
        'A physical barrier',
        'A network security device that monitors traffic',
        'An antivirus software',
        'A backup system'
      ],
      correctAnswer: 1,
      explanation: 'A firewall is a network security device that monitors and controls incoming and outgoing network traffic.',
      timeLimit: 90
    },
    {
      id: 'cs-m-3',
      question: 'What is phishing?',
      options: [
        'A type of malware',
        'A social engineering attack to steal sensitive information',
        'A network protocol',
        'A data encryption method'
      ],
      correctAnswer: 1,
      explanation: 'Phishing is a social engineering attack where attackers impersonate legitimate entities to steal sensitive information.',
      timeLimit: 90
    },
    {
      id: 'cs-m-4',
      question: 'What is two-factor authentication (2FA)?',
      options: [
        'Using two passwords',
        'An additional security layer requiring two forms of identification',
        'Having two user accounts',
        'Using two different browsers'
      ],
      correctAnswer: 1,
      explanation: '2FA adds an extra security layer by requiring two different forms of identification to access an account.',
      timeLimit: 90
    },
    {
      id: 'cs-m-5',
      question: 'What is encryption?',
      options: [
        'Deleting data permanently',
        'Converting data into a coded format to prevent unauthorized access',
        'Compressing files',
        'Backing up data'
      ],
      correctAnswer: 1,
      explanation: 'Encryption is the process of converting data into a coded format that can only be read with the correct decryption key.',
      timeLimit: 90
    }
  ]
};

// Cloud Computing - Easy
export const cloudEasyQuiz: Quiz = {
  id: 'cloud-easy',
  title: 'Cloud Computing Basics',
  subject: 'Cloud Computing',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'cloud-e-1',
      question: 'What is cloud computing?',
      options: [
        'Computing in the sky',
        'Delivery of computing services over the internet',
        'A type of weather prediction',
        'Local computer storage'
      ],
      correctAnswer: 1,
      explanation: 'Cloud computing is the delivery of computing services over the internet, including storage, processing, and software.',
      timeLimit: 60
    },
    {
      id: 'cloud-e-2',
      question: 'What are the main cloud service models?',
      options: ['IaaS, PaaS, SaaS', 'AWS, Azure, GCP', 'Public, Private, Hybrid', 'CPU, RAM, Storage'],
      correctAnswer: 0,
      explanation: 'The three main cloud service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
      timeLimit: 60
    },
    {
      id: 'cloud-e-3',
      question: 'What is SaaS?',
      options: [
        'Software as a Service',
        'Storage as a Service',
        'Security as a Service',
        'System as a Service'
      ],
      correctAnswer: 0,
      explanation: 'SaaS (Software as a Service) delivers software applications over the internet on a subscription basis.',
      timeLimit: 60
    },
    {
      id: 'cloud-e-4',
      question: 'Which of the following is a benefit of cloud computing?',
      options: ['Higher costs', 'Limited scalability', 'Cost efficiency and scalability', 'Reduced security'],
      correctAnswer: 2,
      explanation: 'Cloud computing offers benefits like cost efficiency, scalability, flexibility, and reduced infrastructure management.',
      timeLimit: 60
    },
    {
      id: 'cloud-e-5',
      question: 'What is a public cloud?',
      options: [
        'A cloud owned by the government',
        'A cloud service available to the general public',
        'A free cloud service',
        'A cloud with no security'
      ],
      correctAnswer: 1,
      explanation: 'A public cloud is a cloud computing service available to the general public and owned by a cloud service provider.',
      timeLimit: 60
    }
  ]
};

export const additionalQuizzes: Quiz[] = [
  reactEasyQuiz,
  cnMediumQuiz,
  sqlEasyQuiz,
  mlHardQuiz,
  cybersecurityMediumQuiz,
  cloudEasyQuiz
];
