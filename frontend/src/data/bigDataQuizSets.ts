import { QuizSet } from './enhancedQuizStructure';

// Big Data - Easy Set 1
export const bigDataEasySet1: QuizSet = {
  id: 'bigdata-easy-1',
  setNumber: 1,
  title: 'Big Data Fundamentals - Set 1',
  subject: 'Big Data',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'bigdata-e1-1',
      question: 'What is Big Data?',
      options: ['Large databases', 'Extremely large datasets that require special tools to process', 'Important data', 'Expensive data'],
      correctAnswer: 1,
      explanation: 'Big Data refers to extremely large datasets that are too complex for traditional data processing applications.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-2',
      question: 'What are the 3 Vs of Big Data?',
      options: ['Volume, Velocity, Variety', 'Value, Version, Validation', 'Virtual, Visual, Verbal', 'Vertical, Variable, Vector'],
      correctAnswer: 0,
      explanation: 'The 3 Vs of Big Data are Volume (amount), Velocity (speed), and Variety (different types of data).',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-3',
      question: 'What does Volume refer to in Big Data?',
      options: ['Sound level', 'The amount or size of data', 'Data quality', 'Data speed'],
      correctAnswer: 1,
      explanation: 'Volume refers to the massive amount or size of data that organizations collect and need to process.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-4',
      question: 'What does Velocity refer to in Big Data?',
      options: ['Data movement', 'The speed at which data is generated and processed', 'Data accuracy', 'Data storage'],
      correctAnswer: 1,
      explanation: 'Velocity refers to the speed at which data is generated, collected, and processed in real-time or near real-time.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-5',
      question: 'What does Variety refer to in Big Data?',
      options: ['Data entertainment', 'Different types and formats of data', 'Data colors', 'Data locations'],
      correctAnswer: 1,
      explanation: 'Variety refers to the different types and formats of data, including structured, semi-structured, and unstructured data.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-6',
      question: 'What is Hadoop?',
      options: ['A big elephant', 'An open-source framework for distributed storage and processing of big data', 'A programming language', 'A database system'],
      correctAnswer: 1,
      explanation: 'Hadoop is an open-source framework that allows for distributed storage and processing of large datasets across clusters of computers.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-7',
      question: 'What is HDFS?',
      options: ['Hadoop Distributed File System', 'High Definition File System', 'Hybrid Data File System', 'Heavy Duty File System'],
      correctAnswer: 0,
      explanation: 'HDFS (Hadoop Distributed File System) is the primary storage system used by Hadoop applications.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-8',
      question: 'What is MapReduce?',
      options: ['A map application', 'A programming model for processing large datasets', 'A data reduction technique', 'A mapping tool'],
      correctAnswer: 1,
      explanation: 'MapReduce is a programming model and processing technique for distributed computing on large datasets.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-9',
      question: 'What is Apache Spark?',
      options: ['A fire starter', 'A fast, general-purpose cluster computing system', 'An electrical component', 'A web server'],
      correctAnswer: 1,
      explanation: 'Apache Spark is a fast, general-purpose cluster computing system for big data processing and analytics.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-10',
      question: 'What is data mining?',
      options: ['Mining for data', 'The process of discovering patterns in large datasets', 'Extracting databases', 'Creating data'],
      correctAnswer: 1,
      explanation: 'Data mining is the process of discovering patterns, correlations, and insights from large amounts of data.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-11',
      question: 'What is structured data?',
      options: ['Well-organized data', 'Data organized in a predefined format like tables', 'Strong data', 'Solid data'],
      correctAnswer: 1,
      explanation: 'Structured data is organized in a predefined format, typically in rows and columns like in databases or spreadsheets.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-12',
      question: 'What is unstructured data?',
      options: ['Messy data', 'Data without a predefined format or organization', 'Broken data', 'Random data'],
      correctAnswer: 1,
      explanation: 'Unstructured data lacks a predefined format or organization, such as text documents, images, videos, and social media posts.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-13',
      question: 'What is a data warehouse?',
      options: ['A storage building', 'A central repository for storing large amounts of data', 'A data factory', 'A data store'],
      correctAnswer: 1,
      explanation: 'A data warehouse is a central repository that stores large amounts of data from multiple sources for analysis and reporting.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-14',
      question: 'What is data analytics?',
      options: ['Data analysis', 'The process of examining data to draw conclusions and insights', 'Data creation', 'Data storage'],
      correctAnswer: 1,
      explanation: 'Data analytics is the process of examining datasets to draw conclusions about the information they contain.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-15',
      question: 'What is a cluster in big data?',
      options: ['A group of grapes', 'A group of connected computers working together', 'A data group', 'A file cluster'],
      correctAnswer: 1,
      explanation: 'A cluster is a group of connected computers that work together as a single system to process big data.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-16',
      question: 'What is NoSQL?',
      options: ['No Structured Query Language', 'A type of database that doesn\'t use traditional SQL', 'No SQL allowed', 'New SQL'],
      correctAnswer: 1,
      explanation: 'NoSQL databases are designed to handle large volumes of unstructured data and don\'t use traditional SQL query language.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-17',
      question: 'What is real-time processing?',
      options: ['Processing in real time', 'Processing data immediately as it arrives', 'Fast processing', 'Live processing'],
      correctAnswer: 1,
      explanation: 'Real-time processing involves analyzing and processing data immediately as it arrives, with minimal delay.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-18',
      question: 'What is batch processing?',
      options: ['Processing in batches', 'Processing large amounts of data in groups at scheduled times', 'Cooking in batches', 'Group processing'],
      correctAnswer: 1,
      explanation: 'Batch processing involves processing large amounts of data in groups or batches at scheduled intervals.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-19',
      question: 'What is data visualization?',
      options: ['Seeing data', 'Representing data in graphical or visual formats', 'Data images', 'Visual data'],
      correctAnswer: 1,
      explanation: 'Data visualization is the representation of data in graphical or visual formats to help understand patterns and insights.',
      timeLimit: 60
    },
    {
      id: 'bigdata-e1-20',
      question: 'What is the main challenge of Big Data?',
      options: ['Big size', 'Processing and analyzing massive amounts of diverse data efficiently', 'Storage cost', 'Data security'],
      correctAnswer: 1,
      explanation: 'The main challenge of Big Data is efficiently processing and analyzing massive amounts of diverse data to extract meaningful insights.',
      timeLimit: 60
    }
  ]
};

// Big Data - Medium Set 1
export const bigDataMediumSet1: QuizSet = {
  id: 'bigdata-medium-1',
  setNumber: 1,
  title: 'Big Data Technologies - Set 1',
  subject: 'Big Data',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'bigdata-m1-1',
      question: 'What is the difference between Hadoop and Spark?',
      options: [
        'No difference',
        'Hadoop uses disk storage, Spark uses in-memory processing for faster performance',
        'Spark is older',
        'Hadoop is faster'
      ],
      correctAnswer: 1,
      explanation: 'Hadoop primarily uses disk-based storage and processing, while Spark uses in-memory processing which makes it significantly faster for iterative algorithms.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-2',
      question: 'What is Apache Kafka?',
      options: [
        'A coffee brand',
        'A distributed streaming platform for real-time data feeds',
        'A database system',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Apache Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-3',
      question: 'What is ETL in big data?',
      options: [
        'Extract, Transform, Load - process of moving data from sources to warehouse',
        'Evaluate, Test, Launch',
        'Execute, Transfer, Link',
        'Examine, Track, Log'
      ],
      correctAnswer: 0,
      explanation: 'ETL (Extract, Transform, Load) is the process of extracting data from sources, transforming it into a suitable format, and loading it into a data warehouse.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-4',
      question: 'What is Apache Hive?',
      options: [
        'A bee colony',
        'A data warehouse software that facilitates SQL-like queries on Hadoop',
        'A storage system',
        'A programming framework'
      ],
      correctAnswer: 1,
      explanation: 'Apache Hive is a data warehouse software that provides SQL-like interface to query and manage large datasets stored in Hadoop.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-5',
      question: 'What is Apache HBase?',
      options: [
        'A military base',
        'A distributed, scalable NoSQL database built on top of Hadoop',
        'A web server',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Apache HBase is a distributed, scalable NoSQL database that runs on top of Hadoop Distributed File System (HDFS).',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-6',
      question: 'What is data partitioning?',
      options: [
        'Dividing data',
        'Splitting large datasets into smaller, manageable pieces',
        'Data separation',
        'Data organization'
      ],
      correctAnswer: 1,
      explanation: 'Data partitioning involves splitting large datasets into smaller, more manageable pieces that can be processed in parallel.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-7',
      question: 'What is data replication in distributed systems?',
      options: [
        'Copying data',
        'Storing multiple copies of data across different nodes for reliability',
        'Data duplication',
        'Data backup'
      ],
      correctAnswer: 1,
      explanation: 'Data replication involves storing multiple copies of data across different nodes in a distributed system to ensure reliability and availability.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-8',
      question: 'What is Apache Storm?',
      options: [
        'A weather system',
        'A real-time computation system for processing streaming data',
        'A storage system',
        'A database'
      ],
      correctAnswer: 1,
      explanation: 'Apache Storm is a real-time computation system that processes streaming data with guaranteed processing of every message.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-9',
      question: 'What is data lake?',
      options: [
        'A lake with data',
        'A storage repository that holds raw data in its native format',
        'A data pool',
        'A data ocean'
      ],
      correctAnswer: 1,
      explanation: 'A data lake is a storage repository that can store vast amounts of raw data in its native format until it\'s needed for analysis.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-10',
      question: 'What is the difference between data lake and data warehouse?',
      options: [
        'No difference',
        'Data lake stores raw data, data warehouse stores processed structured data',
        'Data warehouse is newer',
        'Data lake is smaller'
      ],
      correctAnswer: 1,
      explanation: 'Data lakes store raw, unprocessed data in various formats, while data warehouses store processed, structured data optimized for analysis.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-11',
      question: 'What is Apache Cassandra?',
      options: [
        'A person\'s name',
        'A distributed NoSQL database designed for handling large amounts of data',
        'A programming language',
        'A web framework'
      ],
      correctAnswer: 1,
      explanation: 'Apache Cassandra is a distributed NoSQL database designed to handle large amounts of data across many commodity servers.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-12',
      question: 'What is MongoDB?',
      options: [
        'A database from Mongolia',
        'A document-oriented NoSQL database',
        'A programming language',
        'A web server'
      ],
      correctAnswer: 1,
      explanation: 'MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-13',
      question: 'What is Apache Flume?',
      options: [
        'A water channel',
        'A service for collecting and moving large amounts of log data',
        'A processing engine',
        'A storage system'
      ],
      correctAnswer: 1,
      explanation: 'Apache Flume is a distributed service for efficiently collecting, aggregating, and moving large amounts of log data.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-14',
      question: 'What is data ingestion?',
      options: [
        'Eating data',
        'The process of importing data from various sources into a storage system',
        'Data creation',
        'Data processing'
      ],
      correctAnswer: 1,
      explanation: 'Data ingestion is the process of importing, transferring, loading, and processing data from various sources into a storage system.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-15',
      question: 'What is Apache Sqoop?',
      options: [
        'A scooping tool',
        'A tool for transferring data between Hadoop and relational databases',
        'A processing engine',
        'A storage system'
      ],
      correctAnswer: 1,
      explanation: 'Apache Sqoop is a tool designed for efficiently transferring bulk data between Apache Hadoop and structured datastores such as relational databases.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-16',
      question: 'What is data serialization?',
      options: [
        'Making data serial',
        'Converting data objects into a format for storage or transmission',
        'Data numbering',
        'Data ordering'
      ],
      correctAnswer: 1,
      explanation: 'Data serialization is the process of converting data objects into a format that can be stored or transmitted and later reconstructed.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-17',
      question: 'What is Apache Avro?',
      options: [
        'A car model',
        'A data serialization framework',
        'A database',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Apache Avro is a data serialization framework that provides rich data structures and a compact, fast, binary data format.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-18',
      question: 'What is data governance?',
      options: [
        'Data government',
        'Policies and procedures for managing data quality, security, and compliance',
        'Data control',
        'Data management'
      ],
      correctAnswer: 1,
      explanation: 'Data governance encompasses the policies, procedures, and standards for managing data quality, security, privacy, and compliance.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-19',
      question: 'What is Apache Zookeeper?',
      options: [
        'A zoo management system',
        'A coordination service for distributed applications',
        'A data processing engine',
        'A storage system'
      ],
      correctAnswer: 1,
      explanation: 'Apache Zookeeper is a centralized coordination service for distributed applications, providing configuration management and synchronization.',
      timeLimit: 90
    },
    {
      id: 'bigdata-m1-20',
      question: 'What is data lineage?',
      options: [
        'Data family tree',
        'Tracking the flow and transformation of data from source to destination',
        'Data history',
        'Data relationships'
      ],
      correctAnswer: 1,
      explanation: 'Data lineage tracks the flow and transformation of data throughout its lifecycle, from source systems to final destinations.',
      timeLimit: 90
    }
  ]
};

export const bigDataEasySets: QuizSet[] = [bigDataEasySet1];
export const bigDataMediumSets: QuizSet[] = [bigDataMediumSet1];
export const bigDataHardSets: QuizSet[] = [];
