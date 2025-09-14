import { QuizSet } from './enhancedQuizStructure';

// DBMS - Easy Set 1
export const dbmsEasySet1: QuizSet = {
  id: 'dbms-easy-1',
  setNumber: 1,
  title: 'DBMS Fundamentals - Set 1',
  subject: 'Database Management Systems',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'dbms-e1-1',
      question: 'What does DBMS stand for?',
      options: ['Database Management System', 'Data Base Management Software', 'Database Manipulation System', 'Data Management System'],
      correctAnswer: 0,
      explanation: 'DBMS stands for Database Management System.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-2',
      question: 'What is a database?',
      options: ['A collection of programs', 'A collection of organized data', 'A type of software', 'A computer system'],
      correctAnswer: 1,
      explanation: 'A database is a collection of organized data that can be easily accessed and managed.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-3',
      question: 'What is a table in a database?',
      options: ['A furniture item', 'A collection of rows and columns', 'A type of query', 'A database operation'],
      correctAnswer: 1,
      explanation: 'A table is a collection of related data organized in rows and columns.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-4',
      question: 'What is a primary key?',
      options: ['The first key', 'A unique identifier for each record', 'A password', 'A table name'],
      correctAnswer: 1,
      explanation: 'A primary key uniquely identifies each record in a table.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-5',
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'System Query Language'],
      correctAnswer: 0,
      explanation: 'SQL stands for Structured Query Language.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-6',
      question: 'Which SQL command is used to retrieve data?',
      options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH'],
      correctAnswer: 1,
      explanation: 'SELECT command is used to retrieve data from database tables.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-7',
      question: 'Which SQL command is used to insert data?',
      options: ['ADD', 'INSERT', 'PUT', 'CREATE'],
      correctAnswer: 1,
      explanation: 'INSERT command is used to add new records to a table.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-8',
      question: 'What is a foreign key?',
      options: ['A key from another country', 'A field that links to primary key of another table', 'A backup key', 'A secondary key'],
      correctAnswer: 1,
      explanation: 'A foreign key is a field that creates a link between two tables by referencing the primary key of another table.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-9',
      question: 'What is normalization?',
      options: ['Making data normal', 'Organizing data to reduce redundancy', 'Sorting data', 'Backing up data'],
      correctAnswer: 1,
      explanation: 'Normalization is the process of organizing data to minimize redundancy and dependency.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-10',
      question: 'What is the first normal form (1NF)?',
      options: ['First form of database', 'Each column contains atomic values', 'Primary key exists', 'No duplicates'],
      correctAnswer: 1,
      explanation: '1NF requires that each column contains atomic (indivisible) values.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-11',
      question: 'Which SQL command is used to modify existing data?',
      options: ['MODIFY', 'UPDATE', 'CHANGE', 'ALTER'],
      correctAnswer: 1,
      explanation: 'UPDATE command is used to modify existing records in a table.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-12',
      question: 'Which SQL command is used to remove data?',
      options: ['REMOVE', 'DELETE', 'DROP', 'CLEAR'],
      correctAnswer: 1,
      explanation: 'DELETE command is used to remove records from a table.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-13',
      question: 'What is a schema?',
      options: ['A plan', 'The structure of a database', 'A type of query', 'A database user'],
      correctAnswer: 1,
      explanation: 'A schema defines the structure of a database including tables, fields, and relationships.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-14',
      question: 'What is an index?',
      options: ['A page number', 'A data structure that improves query performance', 'A table column', 'A database backup'],
      correctAnswer: 1,
      explanation: 'An index is a data structure that improves the speed of data retrieval operations.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-15',
      question: 'What is a view?',
      options: ['A window', 'A virtual table based on query results', 'A database user', 'A table column'],
      correctAnswer: 1,
      explanation: 'A view is a virtual table that displays data from one or more tables based on a query.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-16',
      question: 'What does ACID stand for in database transactions?',
      options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Integration, Data', 'Automatic, Consistent, Independent, Durable', 'Advanced, Complete, Integrated, Database'],
      correctAnswer: 0,
      explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - properties of database transactions.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-17',
      question: 'What is a transaction?',
      options: ['A business deal', 'A sequence of database operations treated as a single unit', 'A table operation', 'A user login'],
      correctAnswer: 1,
      explanation: 'A transaction is a sequence of database operations that are treated as a single logical unit.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-18',
      question: 'What is the purpose of the WHERE clause?',
      options: ['To specify location', 'To filter records based on conditions', 'To sort data', 'To group data'],
      correctAnswer: 1,
      explanation: 'WHERE clause is used to filter records that meet specific conditions.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-19',
      question: 'What is the purpose of the ORDER BY clause?',
      options: ['To order food', 'To sort query results', 'To filter data', 'To group data'],
      correctAnswer: 1,
      explanation: 'ORDER BY clause is used to sort the result set in ascending or descending order.',
      timeLimit: 60
    },
    {
      id: 'dbms-e1-20',
      question: 'What is the difference between DELETE and DROP?',
      options: ['No difference', 'DELETE removes records, DROP removes entire table structure', 'DROP is faster', 'DELETE is permanent'],
      correctAnswer: 1,
      explanation: 'DELETE removes records from a table while keeping the structure, DROP removes the entire table including structure.',
      timeLimit: 60
    }
  ]
};

// DBMS - Medium Set 1
export const dbmsMediumSet1: QuizSet = {
  id: 'dbms-medium-1',
  setNumber: 1,
  title: 'DBMS Advanced Concepts - Set 1',
  subject: 'Database Management Systems',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'dbms-m1-1',
      question: 'What is the second normal form (2NF)?',
      options: [
        'Second form of database',
        'Must be in 1NF and all non-key attributes fully depend on primary key',
        'Has two primary keys',
        'Has two tables'
      ],
      correctAnswer: 1,
      explanation: '2NF requires 1NF plus all non-key attributes must be fully functionally dependent on the primary key.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-2',
      question: 'What is the third normal form (3NF)?',
      options: [
        'Third form of database',
        'Must be in 2NF and no transitive dependencies',
        'Has three primary keys',
        'Has three tables'
      ],
      correctAnswer: 1,
      explanation: '3NF requires 2NF plus no transitive dependencies (non-key attributes should not depend on other non-key attributes).',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-3',
      question: 'What is a composite key?',
      options: [
        'A key made of composite materials',
        'A primary key consisting of multiple columns',
        'A backup key',
        'A foreign key'
      ],
      correctAnswer: 1,
      explanation: 'A composite key is a primary key that consists of two or more columns to uniquely identify records.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-4',
      question: 'What is a join in SQL?',
      options: [
        'Joining tables together',
        'Combining rows from multiple tables based on related columns',
        'Adding new columns',
        'Merging databases'
      ],
      correctAnswer: 1,
      explanation: 'A join combines rows from two or more tables based on a related column between them.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-5',
      question: 'What is the difference between INNER JOIN and LEFT JOIN?',
      options: [
        'No difference',
        'INNER JOIN returns matching records, LEFT JOIN returns all left table records',
        'LEFT JOIN is faster',
        'INNER JOIN includes all records'
      ],
      correctAnswer: 1,
      explanation: 'INNER JOIN returns only matching records, LEFT JOIN returns all records from left table plus matching records from right table.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-6',
      question: 'What is a subquery?',
      options: [
        'A small query',
        'A query nested inside another query',
        'A backup query',
        'A simple query'
      ],
      correctAnswer: 1,
      explanation: 'A subquery is a query nested inside another SQL query, used to provide data for the main query.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-7',
      question: 'What is the purpose of GROUP BY clause?',
      options: [
        'To group people',
        'To group rows with same values and perform aggregate functions',
        'To sort data',
        'To filter data'
      ],
      correctAnswer: 1,
      explanation: 'GROUP BY groups rows that have the same values and is often used with aggregate functions.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-8',
      question: 'What is the HAVING clause used for?',
      options: [
        'To have something',
        'To filter groups created by GROUP BY',
        'To sort groups',
        'To create groups'
      ],
      correctAnswer: 1,
      explanation: 'HAVING clause filters groups created by GROUP BY, similar to WHERE but for grouped data.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-9',
      question: 'What is a stored procedure?',
      options: [
        'A stored file',
        'A precompiled collection of SQL statements',
        'A backup procedure',
        'A table procedure'
      ],
      correctAnswer: 1,
      explanation: 'A stored procedure is a precompiled collection of SQL statements that can be executed as a unit.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-10',
      question: 'What is a trigger?',
      options: [
        'A gun trigger',
        'A special procedure that automatically executes in response to events',
        'A table column',
        'A query type'
      ],
      correctAnswer: 1,
      explanation: 'A trigger is a special stored procedure that automatically executes in response to database events.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-11',
      question: 'What is the difference between clustered and non-clustered index?',
      options: [
        'No difference',
        'Clustered physically reorders data, non-clustered creates separate structure',
        'Non-clustered is faster',
        'Clustered is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Clustered index physically reorders table data, non-clustered index creates a separate structure pointing to data.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-12',
      question: 'What is database concurrency?',
      options: [
        'Database competition',
        'Multiple users accessing database simultaneously',
        'Database speed',
        'Database backup'
      ],
      correctAnswer: 1,
      explanation: 'Database concurrency refers to multiple users or processes accessing and modifying the database simultaneously.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-13',
      question: 'What is a deadlock?',
      options: [
        'A locked door',
        'Two or more transactions waiting for each other indefinitely',
        'A security feature',
        'A table lock'
      ],
      correctAnswer: 1,
      explanation: 'A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular wait.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-14',
      question: 'What is database replication?',
      options: [
        'Database copying',
        'Maintaining multiple copies of database across different locations',
        'Database backup',
        'Database migration'
      ],
      correctAnswer: 1,
      explanation: 'Database replication involves maintaining multiple copies of a database across different servers or locations.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-15',
      question: 'What is the purpose of database partitioning?',
      options: [
        'To divide office space',
        'To divide large tables into smaller, manageable pieces',
        'To separate users',
        'To create backups'
      ],
      correctAnswer: 1,
      explanation: 'Database partitioning divides large tables into smaller, more manageable pieces to improve performance.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-16',
      question: 'What is referential integrity?',
      options: [
        'Reference checking',
        'Ensuring foreign key values match primary key values in referenced table',
        'Data validation',
        'Table relationships'
      ],
      correctAnswer: 1,
      explanation: 'Referential integrity ensures that foreign key values always refer to existing primary key values in the referenced table.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-17',
      question: 'What is the difference between UNION and UNION ALL?',
      options: [
        'No difference',
        'UNION removes duplicates, UNION ALL includes all records',
        'UNION ALL is faster',
        'UNION includes all records'
      ],
      correctAnswer: 1,
      explanation: 'UNION removes duplicate records from the result set, while UNION ALL includes all records including duplicates.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-18',
      question: 'What is a cursor in database?',
      options: [
        'Mouse pointer',
        'Database object for row-by-row processing of query results',
        'Table pointer',
        'Query result'
      ],
      correctAnswer: 1,
      explanation: 'A cursor is a database object that allows row-by-row processing of query results.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-19',
      question: 'What is the purpose of database backup?',
      options: [
        'To go backwards',
        'To create copies of data for recovery purposes',
        'To free up space',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Database backup creates copies of data that can be used to restore the database in case of failure or data loss.',
      timeLimit: 90
    },
    {
      id: 'dbms-m1-20',
      question: 'What is the difference between logical and physical database design?',
      options: [
        'No difference',
        'Logical focuses on data relationships, physical focuses on storage implementation',
        'Physical is more important',
        'Logical is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Logical design focuses on data relationships and business rules, physical design focuses on how data is stored and accessed.',
      timeLimit: 90
    }
  ]
};

export const dbmsEasySets: QuizSet[] = [dbmsEasySet1];
export const dbmsMediumSets: QuizSet[] = [dbmsMediumSet1];
export const dbmsHardSets: QuizSet[] = [];
