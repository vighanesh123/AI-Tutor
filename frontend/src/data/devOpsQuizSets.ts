import { QuizSet } from './enhancedQuizStructure';

// DevOps - Easy Set 1
export const devOpsEasySet1: QuizSet = {
  id: 'devops-easy-1',
  setNumber: 1,
  title: 'DevOps Fundamentals - Set 1',
  subject: 'DevOps',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'devops-e1-1',
      question: 'What is DevOps?',
      options: ['Development Operations', 'A set of practices combining software development and IT operations', 'Developer Options', 'Device Operations'],
      correctAnswer: 1,
      explanation: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten development lifecycle and provide continuous delivery.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-2',
      question: 'What is the main goal of DevOps?',
      options: ['Faster development', 'Improve collaboration and deliver software faster and more reliably', 'Better testing', 'Cost reduction'],
      correctAnswer: 1,
      explanation: 'The main goal of DevOps is to improve collaboration between development and operations teams to deliver software faster and more reliably.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-3',
      question: 'What is CI/CD?',
      options: ['Continuous Integration/Continuous Deployment', 'Code Integration/Code Deployment', 'Central Integration/Central Deployment', 'Custom Integration/Custom Deployment'],
      correctAnswer: 0,
      explanation: 'CI/CD stands for Continuous Integration and Continuous Deployment, key practices in DevOps for automating software delivery.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-4',
      question: 'What is Continuous Integration (CI)?',
      options: ['Integrating continuously', 'Automatically building and testing code changes frequently', 'Manual integration', 'Code merging'],
      correctAnswer: 1,
      explanation: 'Continuous Integration is the practice of automatically building and testing code changes frequently to detect issues early.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-5',
      question: 'What is Continuous Deployment (CD)?',
      options: ['Deploying continuously', 'Automatically deploying code changes to production after passing tests', 'Manual deployment', 'Code distribution'],
      correctAnswer: 1,
      explanation: 'Continuous Deployment automatically deploys code changes to production environments after they pass all tests and quality checks.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-6',
      question: 'What is version control?',
      options: ['Controlling versions', 'A system that tracks changes to files over time', 'Version management', 'File control'],
      correctAnswer: 1,
      explanation: 'Version control is a system that tracks changes to files over time, allowing multiple people to collaborate and maintain history.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-7',
      question: 'What is Git?',
      options: ['Getting files', 'A distributed version control system', 'A deployment tool', 'A testing framework'],
      correctAnswer: 1,
      explanation: 'Git is a distributed version control system used to track changes in source code during software development.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-8',
      question: 'What is a container?',
      options: ['A storage box', 'A lightweight, portable package that includes application and its dependencies', 'A virtual machine', 'A server'],
      correctAnswer: 1,
      explanation: 'A container is a lightweight, portable package that includes an application and all its dependencies, libraries, and configuration files.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-9',
      question: 'What is Docker?',
      options: ['A dock worker', 'A platform for developing, shipping, and running applications in containers', 'A database', 'A programming language'],
      correctAnswer: 1,
      explanation: 'Docker is a platform that enables developers to package applications into containers for easy deployment and scaling.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-10',
      question: 'What is automation in DevOps?',
      options: ['Automatic processes', 'Using tools and scripts to perform tasks without manual intervention', 'Robot operations', 'Self-running systems'],
      correctAnswer: 1,
      explanation: 'Automation in DevOps involves using tools and scripts to perform repetitive tasks without manual intervention, improving efficiency and reducing errors.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-11',
      question: 'What is infrastructure?',
      options: ['Building structure', 'The underlying hardware and software components that support applications', 'Network cables', 'Computer systems'],
      correctAnswer: 1,
      explanation: 'Infrastructure refers to the underlying hardware and software components (servers, networks, databases) that support applications.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-12',
      question: 'What is cloud computing?',
      options: ['Computing in clouds', 'Delivering computing services over the internet', 'Weather computing', 'Sky computing'],
      correctAnswer: 1,
      explanation: 'Cloud computing is the delivery of computing services (servers, storage, databases, networking) over the internet.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-13',
      question: 'What is monitoring in DevOps?',
      options: ['Watching systems', 'Continuously observing system performance and health', 'System supervision', 'Application tracking'],
      correctAnswer: 1,
      explanation: 'Monitoring involves continuously observing system performance, health, and behavior to detect issues and ensure optimal operation.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-14',
      question: 'What is a deployment?',
      options: ['Deploying troops', 'The process of installing and configuring software in a target environment', 'Software installation', 'System setup'],
      correctAnswer: 1,
      explanation: 'Deployment is the process of installing, configuring, and making software available in a target environment for users.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-15',
      question: 'What is a build?',
      options: ['Construction', 'The process of compiling source code into executable software', 'Building software', 'Code compilation'],
      correctAnswer: 1,
      explanation: 'A build is the process of compiling source code, dependencies, and assets into executable software that can be deployed.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-16',
      question: 'What is testing in DevOps?',
      options: ['Trying software', 'Verifying that software works correctly and meets requirements', 'Software examination', 'Code checking'],
      correctAnswer: 1,
      explanation: 'Testing involves verifying that software works correctly, meets requirements, and is free from defects before deployment.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-17',
      question: 'What is a pipeline in DevOps?',
      options: ['A water pipe', 'An automated sequence of steps for building, testing, and deploying software', 'A data flow', 'A process chain'],
      correctAnswer: 1,
      explanation: 'A pipeline is an automated sequence of steps that takes source code through building, testing, and deployment processes.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-18',
      question: 'What is collaboration in DevOps?',
      options: ['Working together', 'Teams working together to achieve common goals', 'Team cooperation', 'Joint effort'],
      correctAnswer: 1,
      explanation: 'Collaboration in DevOps means development and operations teams working together closely to achieve common goals and share responsibilities.',
      timeLimit: 60
    },
    {
      id: 'devops-e1-19',
      question: 'What is scalability?',
      options: ['Climbing scales', 'The ability to handle increased workload by adding resources', 'System growth', 'Performance improvement'],
      correctAnswer: 1,
      explanation: 'Scalability is the ability of a system to handle increased workload by adding resources (horizontal or vertical scaling).',
      timeLimit: 60
    },
    {
      id: 'devops-e1-20',
      question: 'What is the benefit of DevOps?',
      options: ['Better development', 'Faster delivery, improved quality, and better collaboration', 'Cost savings', 'More automation'],
      correctAnswer: 1,
      explanation: 'DevOps benefits include faster software delivery, improved quality, better collaboration between teams, and increased deployment frequency.',
      timeLimit: 60
    }
  ]
};

// DevOps - Medium Set 1
export const devOpsMediumSet1: QuizSet = {
  id: 'devops-medium-1',
  setNumber: 1,
  title: 'DevOps Tools and Practices - Set 1',
  subject: 'DevOps',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'devops-m1-1',
      question: 'What is Jenkins?',
      options: [
        'A person\'s name',
        'An open-source automation server for CI/CD pipelines',
        'A programming language',
        'A database system'
      ],
      correctAnswer: 1,
      explanation: 'Jenkins is an open-source automation server that helps automate building, testing, and deploying software through CI/CD pipelines.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-2',
      question: 'What is Kubernetes?',
      options: [
        'A Greek word',
        'An orchestration platform for managing containerized applications',
        'A programming language',
        'A database'
      ],
      correctAnswer: 1,
      explanation: 'Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-3',
      question: 'What is Infrastructure as Code (IaC)?',
      options: [
        'Code for infrastructure',
        'Managing infrastructure through machine-readable definition files',
        'Programming infrastructure',
        'Coding hardware'
      ],
      correctAnswer: 1,
      explanation: 'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files rather than manual processes.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-4',
      question: 'What is Terraform?',
      options: [
        'Earth formation',
        'An Infrastructure as Code tool for building and managing infrastructure',
        'A testing framework',
        'A monitoring tool'
      ],
      correctAnswer: 1,
      explanation: 'Terraform is an Infrastructure as Code tool that allows you to define and provision infrastructure using declarative configuration files.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-5',
      question: 'What is Ansible?',
      options: [
        'An answer machine',
        'An automation tool for configuration management and application deployment',
        'A programming language',
        'A database'
      ],
      correctAnswer: 1,
      explanation: 'Ansible is an open-source automation tool used for configuration management, application deployment, and task automation.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-6',
      question: 'What is the difference between horizontal and vertical scaling?',
      options: [
        'Direction of scaling',
        'Horizontal adds more machines, vertical adds more power to existing machines',
        'Horizontal is better',
        'No difference'
      ],
      correctAnswer: 1,
      explanation: 'Horizontal scaling adds more machines to the resource pool, while vertical scaling adds more power (CPU, RAM) to existing machines.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-7',
      question: 'What is a microservice?',
      options: [
        'A small service',
        'An architectural approach where applications are built as small, independent services',
        'A tiny application',
        'A service component'
      ],
      correctAnswer: 1,
      explanation: 'Microservices is an architectural approach where applications are built as a collection of small, independent services that communicate over APIs.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-8',
      question: 'What is GitLab CI/CD?',
      options: [
        'A Git laboratory',
        'A built-in CI/CD platform integrated with GitLab',
        'A version control system',
        'A code editor'
      ],
      correctAnswer: 1,
      explanation: 'GitLab CI/CD is a built-in continuous integration and deployment platform that\'s integrated with GitLab\'s version control system.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-9',
      question: 'What is blue-green deployment?',
      options: [
        'Colorful deployment',
        'A deployment strategy using two identical production environments',
        'A testing method',
        'A monitoring technique'
      ],
      correctAnswer: 1,
      explanation: 'Blue-green deployment is a strategy that uses two identical production environments, switching traffic between them to minimize downtime.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-10',
      question: 'What is canary deployment?',
      options: [
        'Bird deployment',
        'Gradually rolling out changes to a small subset of users first',
        'Yellow deployment',
        'Fast deployment'
      ],
      correctAnswer: 1,
      explanation: 'Canary deployment gradually rolls out changes to a small subset of users first to test in production before full deployment.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-11',
      question: 'What is Prometheus?',
      options: [
        'A Greek god',
        'An open-source monitoring and alerting toolkit',
        'A deployment tool',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability of systems.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-12',
      question: 'What is Grafana?',
      options: [
        'A fruit',
        'An open-source analytics and monitoring solution',
        'A database',
        'A web server'
      ],
      correctAnswer: 1,
      explanation: 'Grafana is an open-source analytics and monitoring solution that provides dashboards and visualizations for metrics data.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-13',
      question: 'What is a load balancer?',
      options: [
        'A weight balancer',
        'A system that distributes incoming requests across multiple servers',
        'A performance tool',
        'A monitoring device'
      ],
      correctAnswer: 1,
      explanation: 'A load balancer distributes incoming network requests across multiple servers to ensure no single server is overwhelmed.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-14',
      question: 'What is Docker Compose?',
      options: [
        'Docker music',
        'A tool for defining and running multi-container Docker applications',
        'A container registry',
        'A deployment tool'
      ],
      correctAnswer: 1,
      explanation: 'Docker Compose is a tool for defining and running multi-container Docker applications using YAML configuration files.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-15',
      question: 'What is a container registry?',
      options: [
        'Container storage',
        'A repository for storing and distributing container images',
        'A container list',
        'A container database'
      ],
      correctAnswer: 1,
      explanation: 'A container registry is a repository for storing, managing, and distributing container images that can be pulled for deployment.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-16',
      question: 'What is AWS in DevOps?',
      options: [
        'Amazon Web Services',
        'A cloud platform providing various DevOps tools and services',
        'A deployment tool',
        'A monitoring system'
      ],
      correctAnswer: 1,
      explanation: 'AWS (Amazon Web Services) is a cloud platform that provides various tools and services commonly used in DevOps practices.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-17',
      question: 'What is configuration management?',
      options: [
        'Managing configurations',
        'Maintaining consistency of system configurations across environments',
        'Setting up systems',
        'System administration'
      ],
      correctAnswer: 1,
      explanation: 'Configuration management involves maintaining consistency of system configurations, settings, and software across different environments.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-18',
      question: 'What is a webhook?',
      options: [
        'A web hook',
        'An HTTP callback that triggers actions when specific events occur',
        'A fishing tool',
        'A web component'
      ],
      correctAnswer: 1,
      explanation: 'A webhook is an HTTP callback that automatically triggers actions or notifications when specific events occur in a system.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-19',
      question: 'What is rollback in deployment?',
      options: [
        'Rolling back',
        'Reverting to a previous version when issues are detected',
        'Backward movement',
        'Undoing changes'
      ],
      correctAnswer: 1,
      explanation: 'Rollback is the process of reverting to a previous version of software when issues or problems are detected in the current deployment.',
      timeLimit: 90
    },
    {
      id: 'devops-m1-20',
      question: 'What is the purpose of staging environment?',
      options: [
        'Performance staging',
        'Testing applications in production-like environment before release',
        'Temporary storage',
        'Development testing'
      ],
      correctAnswer: 1,
      explanation: 'A staging environment is used to test applications in a production-like environment before releasing to actual production.',
      timeLimit: 90
    }
  ]
};

export const devOpsEasySets: QuizSet[] = [devOpsEasySet1];
export const devOpsMediumSets: QuizSet[] = [devOpsMediumSet1];
export const devOpsHardSets: QuizSet[] = [];
