import { SubjectQuizzes } from './enhancedQuizStructure';
import { cProgrammingEasySets } from './cProgrammingQuizSets';
import { javaEasySets, javaMediumSets, javaHardSets } from './javaQuizSets';
import { pythonEasySets, pythonMediumSets, pythonHardSets } from './pythonQuizSets';
import { javascriptEasySets, javascriptMediumSets, javascriptHardSets } from './javascriptQuizSets';
import { cppEasySets, cppMediumSets, cppHardSets } from './cppQuizSets';
import { htmlCssEasySets, htmlCssMediumSets, htmlCssHardSets } from './htmlQuizSets';
import { reactEasySets, reactMediumSets, reactHardSets } from './reactQuizSets';
import { dsaEasySets, dsaMediumSets, dsaHardSets } from './dsaQuizSets';
import { dbmsEasySets, dbmsMediumSets, dbmsHardSets } from './dbmsQuizSets';
import { computerNetworksEasySets, computerNetworksMediumSets, computerNetworksHardSets } from './computerNetworksQuizSets';
import { operatingSystemsEasySets, operatingSystemsMediumSets, operatingSystemsHardSets } from './operatingSystemsQuizSets';
import { sqlEasySets, sqlMediumSets, sqlHardSets } from './sqlQuizSets';
import { softwareEngineeringEasySets, softwareEngineeringMediumSets, softwareEngineeringHardSets } from './softwareEngineeringQuizSets';
import { artificialIntelligenceEasySets, artificialIntelligenceMediumSets, artificialIntelligenceHardSets } from './artificialIntelligenceQuizSets';
import { machineLearningEasySets, machineLearningMediumSets, machineLearningHardSets } from './machineLearningQuizSets';
import { cybersecurityEasySets, cybersecurityMediumSets, cybersecurityHardSets } from './cybersecurityQuizSets';
import { cloudComputingEasySets, cloudComputingMediumSets, cloudComputingHardSets } from './cloudComputingQuizSets';
import { webDevelopmentEasySets, webDevelopmentMediumSets, webDevelopmentHardSets } from './webDevelopmentQuizSets';
import { mobileAppDevelopmentEasySets, mobileAppDevelopmentMediumSets, mobileAppDevelopmentHardSets } from './mobileAppDevelopmentQuizSets';
import { bigDataEasySets, bigDataMediumSets, bigDataHardSets } from './bigDataQuizSets';
import { devOpsEasySets, devOpsMediumSets, devOpsHardSets } from './devOpsQuizSets';
import { blockchainEasySets, blockchainMediumSets, blockchainHardSets } from './blockchainQuizSets';
import { iotEasySets, iotMediumSets, iotHardSets } from './iotQuizSets';
import { computerGraphicsEasySets, computerGraphicsMediumSets, computerGraphicsHardSets } from './computerGraphicsQuizSets';

// Complete subject quiz collections
export const allSubjectQuizzes: SubjectQuizzes[] = [
  {
    subject: 'C Programming',
    icon: '💻',
    description: 'Master C programming fundamentals, pointers, and memory management',
    easy: cProgrammingEasySets,
    medium: [], // Will be populated
    hard: []   // Will be populated
  },
  {
    subject: 'Java',
    icon: '☕',
    description: 'Learn Java OOP concepts, collections, and enterprise development',
    easy: javaEasySets,
    medium: javaMediumSets,
    hard: javaHardSets
  },
  {
    subject: 'Python',
    icon: '🐍',
    description: 'Explore Python syntax, data structures, and advanced concepts',
    easy: pythonEasySets,
    medium: pythonMediumSets,
    hard: pythonHardSets
  },
  {
    subject: 'JavaScript',
    icon: '🟨',
    description: 'Master JavaScript fundamentals, DOM manipulation, and modern ES6+',
    easy: javascriptEasySets,
    medium: javascriptMediumSets,
    hard: javascriptHardSets
  },
  {
    subject: 'Data Structures & Algorithms',
    icon: '🔗',
    description: 'Learn arrays, linked lists, trees, graphs, and algorithm analysis',
    easy: dsaEasySets,
    medium: dsaMediumSets,
    hard: dsaHardSets
  },
  {
    subject: 'Database Management Systems',
    icon: '🗄️',
    description: 'Understand database design, normalization, and query optimization',
    easy: dbmsEasySets,
    medium: dbmsMediumSets,
    hard: dbmsHardSets
  },
  {
    subject: 'Computer Networks',
    icon: '🌐',
    description: 'Study network protocols, OSI model, and network security',
    easy: computerNetworksEasySets,
    medium: computerNetworksMediumSets,
    hard: computerNetworksHardSets
  },
  {
    subject: 'Operating Systems',
    icon: '⚙️',
    description: 'Learn process management, memory management, and file systems',
    easy: operatingSystemsEasySets,
    medium: operatingSystemsMediumSets,
    hard: operatingSystemsHardSets
  },
  {
    subject: 'Software Engineering',
    icon: '🏗️',
    description: 'Understand SDLC, design patterns, and software architecture',
    easy: softwareEngineeringEasySets,
    medium: softwareEngineeringMediumSets,
    hard: softwareEngineeringHardSets
  },
  {
    subject: 'Machine Learning',
    icon: '🤖',
    description: 'Explore ML algorithms, neural networks, and data science',
    easy: machineLearningEasySets,
    medium: machineLearningMediumSets,
    hard: machineLearningHardSets
  },
  {
    subject: 'Cybersecurity',
    icon: '🔒',
    description: 'Learn security principles, threats, and defense mechanisms',
    easy: cybersecurityEasySets,
    medium: cybersecurityMediumSets,
    hard: cybersecurityHardSets
  },
  {
    subject: 'Cloud Computing',
    icon: '☁️',
    description: 'Understand cloud services, deployment, and architecture',
    easy: cloudComputingEasySets,
    medium: cloudComputingMediumSets,
    hard: cloudComputingHardSets
  },
  {
    subject: 'Web Development',
    icon: '🌐',
    description: 'Master frontend, backend, and full-stack web development',
    easy: webDevelopmentEasySets,
    medium: webDevelopmentMediumSets,
    hard: webDevelopmentHardSets
  },
  {
    subject: 'React',
    icon: '⚛️',
    description: 'Build modern UIs with components, hooks, and state management',
    easy: reactEasySets,
    medium: reactMediumSets,
    hard: reactHardSets
  },
  {
    subject: 'Mobile App Development',
    icon: '📱',
    description: 'Create mobile applications for Android and iOS platforms',
    easy: mobileAppDevelopmentEasySets,
    medium: mobileAppDevelopmentMediumSets,
    hard: mobileAppDevelopmentHardSets
  },
  {
    subject: 'Artificial Intelligence',
    icon: '🧠',
    description: 'Study AI concepts, algorithms, and applications',
    easy: artificialIntelligenceEasySets,
    medium: artificialIntelligenceMediumSets,
    hard: artificialIntelligenceHardSets
  },
  {
    subject: 'Big Data',
    icon: '📊',
    description: 'Handle large datasets with Hadoop, Spark, and analytics tools',
    easy: bigDataEasySets,
    medium: bigDataMediumSets,
    hard: bigDataHardSets
  },
  {
    subject: 'HTML & CSS',
    icon: '🎨',
    description: 'Master web markup, styling, responsive design, and modern CSS features',
    easy: htmlCssEasySets,
    medium: htmlCssMediumSets,
    hard: htmlCssHardSets
  },
  {
    subject: 'SQL',
    icon: '🔍',
    description: 'Master database queries, joins, and advanced SQL operations',
    easy: sqlEasySets,
    medium: sqlMediumSets,
    hard: sqlHardSets
  },
  {
    subject: 'DevOps',
    icon: '🔄',
    description: 'Learn CI/CD, containerization, and infrastructure automation',
    easy: devOpsEasySets,
    medium: devOpsMediumSets,
    hard: devOpsHardSets
  },
  {
    subject: 'C++',
    icon: '⚡',
    description: 'Learn C++ OOP concepts, STL, and advanced programming techniques',
    easy: cppEasySets,
    medium: cppMediumSets,
    hard: cppHardSets
  },
  {
    subject: 'Blockchain',
    icon: '⛓️',
    description: 'Understand distributed ledgers, smart contracts, and cryptocurrencies',
    easy: blockchainEasySets,
    medium: blockchainMediumSets,
    hard: blockchainHardSets
  },
  {
    subject: 'IoT',
    icon: '🌐',
    description: 'Connect devices and build smart systems with sensors and networks',
    easy: iotEasySets,
    medium: iotMediumSets,
    hard: iotHardSets
  },
  {
    subject: 'Computer Graphics',
    icon: '🎨',
    description: 'Create 2D/3D graphics, animations, and visual effects',
    easy: computerGraphicsEasySets,
    medium: computerGraphicsMediumSets,
    hard: computerGraphicsHardSets
  }
];

// Utility functions
export const getSubjectQuizzes = (subjectName: string): SubjectQuizzes | undefined => {
  return allSubjectQuizzes.find(subject => subject.subject === subjectName);
};

export const getAvailableSubjects = (): string[] => {
  return allSubjectQuizzes.map(subject => subject.subject);
};

export const getQuizCountForSubject = (subjectName: string): { easy: number, medium: number, hard: number } => {
  const subject = getSubjectQuizzes(subjectName);
  if (!subject) return { easy: 0, medium: 0, hard: 0 };
  
  return {
    easy: subject.easy.length,
    medium: subject.medium.length,
    hard: subject.hard.length
  };
};
