import { QuizSet } from './enhancedQuizStructure';

// Software Engineering - Easy Set 1
export const softwareEngineeringEasySet1: QuizSet = {
  id: 'se-easy-1',
  setNumber: 1,
  title: 'Software Engineering Fundamentals - Set 1',
  subject: 'Software Engineering',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'se-e1-1',
      question: 'What is software engineering?',
      options: ['Building software', 'A systematic approach to software development', 'Programming', 'Testing software'],
      correctAnswer: 1,
      explanation: 'Software engineering is a systematic, disciplined approach to the development, operation, and maintenance of software.',
      timeLimit: 60
    },
    {
      id: 'se-e1-2',
      question: 'What is the Software Development Life Cycle (SDLC)?',
      options: ['Software lifespan', 'A process for developing software systematically', 'Software testing', 'Code compilation'],
      correctAnswer: 1,
      explanation: 'SDLC is a process that defines the stages involved in the development of software from initial concept to deployment and maintenance.',
      timeLimit: 60
    },
    {
      id: 'se-e1-3',
      question: 'Which is NOT a phase of SDLC?',
      options: ['Requirements Analysis', 'Design', 'Implementation', 'Marketing'],
      correctAnswer: 3,
      explanation: 'Marketing is not a phase of SDLC. The main phases are Requirements, Design, Implementation, Testing, Deployment, and Maintenance.',
      timeLimit: 60
    },
    {
      id: 'se-e1-4',
      question: 'What is the Waterfall model?',
      options: ['A water management system', 'A sequential software development model', 'A testing method', 'A programming language'],
      correctAnswer: 1,
      explanation: 'The Waterfall model is a sequential software development process where progress flows downward through phases.',
      timeLimit: 60
    },
    {
      id: 'se-e1-5',
      question: 'What is Agile methodology?',
      options: ['Fast programming', 'An iterative and incremental approach to software development', 'A testing framework', 'A database system'],
      correctAnswer: 1,
      explanation: 'Agile is an iterative and incremental approach that emphasizes flexibility, collaboration, and customer satisfaction.',
      timeLimit: 60
    },
    {
      id: 'se-e1-6',
      question: 'What is a requirement in software engineering?',
      options: ['A rule', 'A specification of what the software should do', 'A bug', 'A feature'],
      correctAnswer: 1,
      explanation: 'A requirement is a specification that describes what the software system should do or how it should behave.',
      timeLimit: 60
    },
    {
      id: 'se-e1-7',
      question: 'What is software testing?',
      options: ['Running software', 'The process of evaluating software to find defects', 'Installing software', 'Writing code'],
      correctAnswer: 1,
      explanation: 'Software testing is the process of evaluating and verifying that software works as expected and meets requirements.',
      timeLimit: 60
    },
    {
      id: 'se-e1-8',
      question: 'What is a bug in software?',
      options: ['An insect', 'An error or defect in software', 'A feature', 'A requirement'],
      correctAnswer: 1,
      explanation: 'A bug is an error, flaw, or defect in software that causes it to behave unexpectedly or incorrectly.',
      timeLimit: 60
    },
    {
      id: 'se-e1-9',
      question: 'What is version control?',
      options: ['Controlling versions', 'A system for tracking changes to files over time', 'Software testing', 'Code compilation'],
      correctAnswer: 1,
      explanation: 'Version control is a system that tracks changes to files over time, allowing multiple people to collaborate and maintain history.',
      timeLimit: 60
    },
    {
      id: 'se-e1-10',
      question: 'What is Git?',
      options: ['A programming language', 'A distributed version control system', 'A database', 'A web browser'],
      correctAnswer: 1,
      explanation: 'Git is a distributed version control system used for tracking changes in source code during software development.',
      timeLimit: 60
    },
    {
      id: 'se-e1-11',
      question: 'What is debugging?',
      options: ['Removing insects', 'The process of finding and fixing bugs in software', 'Testing software', 'Writing documentation'],
      correctAnswer: 1,
      explanation: 'Debugging is the process of finding, analyzing, and fixing bugs or defects in software.',
      timeLimit: 60
    },
    {
      id: 'se-e1-12',
      question: 'What is code review?',
      options: ['Reading code', 'Systematic examination of code by peers to find defects', 'Writing code', 'Testing code'],
      correctAnswer: 1,
      explanation: 'Code review is the systematic examination of source code by peers to find bugs and improve code quality.',
      timeLimit: 60
    },
    {
      id: 'se-e1-13',
      question: 'What is documentation in software engineering?',
      options: ['Legal documents', 'Written material that describes software functionality and usage', 'Code comments', 'User manuals'],
      correctAnswer: 1,
      explanation: 'Documentation includes all written material that describes how software works, how to use it, and how to maintain it.',
      timeLimit: 60
    },
    {
      id: 'se-e1-14',
      question: 'What is software maintenance?',
      options: ['Cleaning software', 'Modifying software after delivery to fix issues and add features', 'Installing software', 'Backing up software'],
      correctAnswer: 1,
      explanation: 'Software maintenance involves modifying software after delivery to correct faults, improve performance, or add new features.',
      timeLimit: 60
    },
    {
      id: 'se-e1-15',
      question: 'What is a software architect?',
      options: ['Building designer', 'A person who designs the overall structure of software systems', 'A programmer', 'A tester'],
      correctAnswer: 1,
      explanation: 'A software architect designs the overall structure and makes high-level design choices for software systems.',
      timeLimit: 60
    },
    {
      id: 'se-e1-16',
      question: 'What is a use case?',
      options: ['A case for use', 'A description of how users interact with a system', 'A test case', 'A code example'],
      correctAnswer: 1,
      explanation: 'A use case describes a specific way that users interact with a system to achieve a particular goal.',
      timeLimit: 60
    },
    {
      id: 'se-e1-17',
      question: 'What is a user story?',
      options: ['A story about users', 'A short description of a feature from user perspective', 'User documentation', 'User feedback'],
      correctAnswer: 1,
      explanation: 'A user story is a short, simple description of a feature told from the perspective of the person who desires the capability.',
      timeLimit: 60
    },
    {
      id: 'se-e1-18',
      question: 'What is refactoring?',
      options: ['Factory work', 'Restructuring code without changing its functionality', 'Adding features', 'Testing code'],
      correctAnswer: 1,
      explanation: 'Refactoring is the process of restructuring existing code without changing its external behavior to improve readability and maintainability.',
      timeLimit: 60
    },
    {
      id: 'se-e1-19',
      question: 'What is technical debt?',
      options: ['Money owed', 'The cost of additional work caused by choosing quick solutions', 'Programming errors', 'Software licenses'],
      correctAnswer: 1,
      explanation: 'Technical debt represents the implied cost of additional rework caused by choosing an easy solution now instead of a better approach.',
      timeLimit: 60
    },
    {
      id: 'se-e1-20',
      question: 'What is a sprint in Agile?',
      options: ['Running fast', 'A short, time-boxed period for completing work', 'A testing phase', 'A meeting'],
      correctAnswer: 1,
      explanation: 'A sprint is a short, time-boxed period (usually 1-4 weeks) during which a development team works to complete a set amount of work.',
      timeLimit: 60
    }
  ]
};

// Software Engineering - Medium Set 1
export const softwareEngineeringMediumSet1: QuizSet = {
  id: 'se-medium-1',
  setNumber: 1,
  title: 'Software Design & Architecture - Set 1',
  subject: 'Software Engineering',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'se-m1-1',
      question: 'What is the difference between functional and non-functional requirements?',
      options: [
        'No difference',
        'Functional define what system does, non-functional define how well it does it',
        'Non-functional are more important',
        'Functional are easier to implement'
      ],
      correctAnswer: 1,
      explanation: 'Functional requirements define what the system should do, while non-functional requirements define quality attributes like performance, security, and usability.',
      timeLimit: 90
    },
    {
      id: 'se-m1-2',
      question: 'What is the Model-View-Controller (MVC) pattern?',
      options: [
        'A testing pattern',
        'An architectural pattern that separates application into three components',
        'A database pattern',
        'A security pattern'
      ],
      correctAnswer: 1,
      explanation: 'MVC is an architectural pattern that separates an application into Model (data), View (presentation), and Controller (logic) components.',
      timeLimit: 90
    },
    {
      id: 'se-m1-3',
      question: 'What is the Singleton design pattern?',
      options: [
        'A pattern for single users',
        'A pattern that ensures a class has only one instance',
        'A database pattern',
        'A testing pattern'
      ],
      correctAnswer: 1,
      explanation: 'Singleton pattern ensures that a class has only one instance and provides global access to that instance.',
      timeLimit: 90
    },
    {
      id: 'se-m1-4',
      question: 'What is the Observer design pattern?',
      options: [
        'A pattern for watching',
        'A pattern where objects notify dependents of state changes',
        'A security pattern',
        'A database pattern'
      ],
      correctAnswer: 1,
      explanation: 'Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all dependents are notified.',
      timeLimit: 90
    },
    {
      id: 'se-m1-5',
      question: 'What is coupling in software design?',
      options: [
        'Connecting components',
        'The degree of interdependence between software modules',
        'A design pattern',
        'A testing technique'
      ],
      correctAnswer: 1,
      explanation: 'Coupling refers to the degree of interdependence between software modules. Low coupling is generally preferred.',
      timeLimit: 90
    },
    {
      id: 'se-m1-6',
      question: 'What is cohesion in software design?',
      options: [
        'Sticking together',
        'The degree to which elements within a module work together',
        'A design pattern',
        'A testing method'
      ],
      correctAnswer: 1,
      explanation: 'Cohesion refers to how closely related and focused the responsibilities of a single module are. High cohesion is preferred.',
      timeLimit: 90
    },
    {
      id: 'se-m1-7',
      question: 'What is the difference between unit testing and integration testing?',
      options: [
        'No difference',
        'Unit testing tests individual components, integration testing tests component interactions',
        'Integration testing is faster',
        'Unit testing is more comprehensive'
      ],
      correctAnswer: 1,
      explanation: 'Unit testing tests individual components in isolation, while integration testing tests the interactions between integrated components.',
      timeLimit: 90
    },
    {
      id: 'se-m1-8',
      question: 'What is Test-Driven Development (TDD)?',
      options: [
        'Testing after development',
        'Writing tests before writing code',
        'Automated testing',
        'Manual testing'
      ],
      correctAnswer: 1,
      explanation: 'TDD is a development approach where tests are written before the actual code, following a red-green-refactor cycle.',
      timeLimit: 90
    },
    {
      id: 'se-m1-9',
      question: 'What is Continuous Integration (CI)?',
      options: [
        'Continuous programming',
        'Frequently integrating code changes into a shared repository',
        'Continuous testing',
        'Continuous deployment'
      ],
      correctAnswer: 1,
      explanation: 'CI is a practice where developers frequently integrate their code changes into a shared repository, with automated builds and tests.',
      timeLimit: 90
    },
    {
      id: 'se-m1-10',
      question: 'What is Continuous Deployment (CD)?',
      options: [
        'Continuous development',
        'Automatically deploying code changes to production',
        'Continuous integration',
        'Continuous testing'
      ],
      correctAnswer: 1,
      explanation: 'CD is a practice where code changes are automatically deployed to production after passing automated tests.',
      timeLimit: 90
    },
    {
      id: 'se-m1-11',
      question: 'What is the difference between black box and white box testing?',
      options: [
        'Color difference',
        'Black box tests functionality without knowing internal structure, white box tests with knowledge of internal structure',
        'White box is newer',
        'Black box is faster'
      ],
      correctAnswer: 1,
      explanation: 'Black box testing focuses on functionality without knowing internal code structure, while white box testing examines internal code paths.',
      timeLimit: 90
    },
    {
      id: 'se-m1-12',
      question: 'What is the Factory design pattern?',
      options: [
        'A manufacturing pattern',
        'A pattern for creating objects without specifying exact classes',
        'A database pattern',
        'A testing pattern'
      ],
      correctAnswer: 1,
      explanation: 'Factory pattern provides an interface for creating objects without specifying their exact classes, promoting loose coupling.',
      timeLimit: 90
    },
    {
      id: 'se-m1-13',
      question: 'What is the Strategy design pattern?',
      options: [
        'A planning pattern',
        'A pattern that defines a family of algorithms and makes them interchangeable',
        'A database pattern',
        'A security pattern'
      ],
      correctAnswer: 1,
      explanation: 'Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.',
      timeLimit: 90
    },
    {
      id: 'se-m1-14',
      question: 'What is code smell?',
      options: [
        'Bad odor from code',
        'Code that works but indicates deeper problems in design',
        'Commented code',
        'Legacy code'
      ],
      correctAnswer: 1,
      explanation: 'Code smell refers to code that technically works but indicates deeper problems in design or implementation that should be addressed.',
      timeLimit: 90
    },
    {
      id: 'se-m1-15',
      question: 'What is the DRY principle?',
      options: [
        'Dont Repeat Yourself',
        'Dont Repeat Yourself - avoid code duplication',
        'Dry Run Your code',
        'Debug, Review, Yield'
      ],
      correctAnswer: 1,
      explanation: 'DRY (Dont Repeat Yourself) principle states that every piece of knowledge should have a single, unambiguous representation in a system.',
      timeLimit: 90
    },
    {
      id: 'se-m1-16',
      question: 'What is the SOLID principle?',
      options: [
        'Strong code',
        'Five design principles for object-oriented programming',
        'A testing framework',
        'A database design principle'
      ],
      correctAnswer: 1,
      explanation: 'SOLID is an acronym for five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
      timeLimit: 90
    },
    {
      id: 'se-m1-17',
      question: 'What is technical review?',
      options: [
        'Reviewing technology',
        'A systematic examination of software artifacts to identify defects',
        'Performance testing',
        'User feedback'
      ],
      correctAnswer: 1,
      explanation: 'Technical review is a systematic examination of software artifacts by peers to identify defects and ensure quality standards.',
      timeLimit: 90
    },
    {
      id: 'se-m1-18',
      question: 'What is the difference between verification and validation?',
      options: [
        'No difference',
        'Verification checks if product is built right, validation checks if right product is built',
        'Validation is faster',
        'Verification is more important'
      ],
      correctAnswer: 1,
      explanation: 'Verification ensures the product is built according to specifications, while validation ensures the right product is built for user needs.',
      timeLimit: 90
    },
    {
      id: 'se-m1-19',
      question: 'What is risk management in software projects?',
      options: [
        'Managing financial risks',
        'Identifying, analyzing, and mitigating potential project risks',
        'Security management',
        'Quality management'
      ],
      correctAnswer: 1,
      explanation: 'Risk management involves identifying, analyzing, and developing strategies to mitigate potential risks that could impact project success.',
      timeLimit: 90
    },
    {
      id: 'se-m1-20',
      question: 'What is the difference between alpha and beta testing?',
      options: [
        'Greek letters',
        'Alpha is internal testing, beta is external testing with select users',
        'Beta is faster',
        'Alpha is more comprehensive'
      ],
      correctAnswer: 1,
      explanation: 'Alpha testing is performed internally by the organization, while beta testing is performed by external users in a real environment.',
      timeLimit: 90
    }
  ]
};

export const softwareEngineeringEasySets: QuizSet[] = [softwareEngineeringEasySet1];
export const softwareEngineeringMediumSets: QuizSet[] = [softwareEngineeringMediumSet1];
export const softwareEngineeringHardSets: QuizSet[] = [];
