import { QuizSet } from './enhancedQuizStructure';

// SQL - Easy Set 1
export const sqlEasySet1: QuizSet = {
  id: 'sql-easy-1',
  setNumber: 1,
  title: 'SQL Fundamentals - Set 1',
  subject: 'SQL',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'sql-e1-1',
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'System Query Language'],
      correctAnswer: 0,
      explanation: 'SQL stands for Structured Query Language, used for managing relational databases.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-2',
      question: 'Which SQL command is used to retrieve data from a database?',
      options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH'],
      correctAnswer: 1,
      explanation: 'SELECT is the SQL command used to retrieve data from database tables.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-3',
      question: 'Which SQL command is used to add new records to a table?',
      options: ['ADD', 'INSERT', 'CREATE', 'PUT'],
      correctAnswer: 1,
      explanation: 'INSERT is used to add new records to a database table.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-4',
      question: 'Which SQL command is used to modify existing records?',
      options: ['MODIFY', 'UPDATE', 'CHANGE', 'ALTER'],
      correctAnswer: 1,
      explanation: 'UPDATE is used to modify existing records in a database table.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-5',
      question: 'Which SQL command is used to remove records from a table?',
      options: ['REMOVE', 'DELETE', 'DROP', 'CLEAR'],
      correctAnswer: 1,
      explanation: 'DELETE is used to remove records from a database table.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-6',
      question: 'Which clause is used to filter records in SQL?',
      options: ['FILTER', 'WHERE', 'HAVING', 'IF'],
      correctAnswer: 1,
      explanation: 'WHERE clause is used to filter records based on specified conditions.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-7',
      question: 'Which clause is used to sort the result set?',
      options: ['SORT BY', 'ORDER BY', 'ARRANGE BY', 'GROUP BY'],
      correctAnswer: 1,
      explanation: 'ORDER BY clause is used to sort the result set in ascending or descending order.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-8',
      question: 'What does the asterisk (*) represent in a SELECT statement?',
      options: ['Multiplication', 'All columns', 'Comments', 'Wildcard'],
      correctAnswer: 1,
      explanation: 'The asterisk (*) represents all columns in a SELECT statement.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-9',
      question: 'Which SQL command is used to create a new table?',
      options: ['CREATE TABLE', 'NEW TABLE', 'MAKE TABLE', 'BUILD TABLE'],
      correctAnswer: 0,
      explanation: 'CREATE TABLE is used to create a new table in the database.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-10',
      question: 'Which SQL command is used to delete a table?',
      options: ['DELETE TABLE', 'REMOVE TABLE', 'DROP TABLE', 'CLEAR TABLE'],
      correctAnswer: 2,
      explanation: 'DROP TABLE is used to delete an entire table from the database.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-11',
      question: 'What is a primary key?',
      options: ['The first key', 'A unique identifier for each record in a table', 'A password', 'The most important key'],
      correctAnswer: 1,
      explanation: 'A primary key uniquely identifies each record in a database table.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-12',
      question: 'What is a foreign key?',
      options: ['A key from another country', 'A field that links to the primary key of another table', 'A backup key', 'An external key'],
      correctAnswer: 1,
      explanation: 'A foreign key is a field that creates a link between two tables by referencing the primary key of another table.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-13',
      question: 'Which operator is used to search for a specified pattern in a column?',
      options: ['SEARCH', 'LIKE', 'FIND', 'MATCH'],
      correctAnswer: 1,
      explanation: 'LIKE operator is used to search for a specified pattern in a column.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-14',
      question: 'Which wildcard character represents any single character in SQL?',
      options: ['*', '%', '_', '?'],
      correctAnswer: 2,
      explanation: 'The underscore (_) represents any single character in SQL pattern matching.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-15',
      question: 'Which wildcard character represents zero or more characters in SQL?',
      options: ['*', '%', '_', '?'],
      correctAnswer: 1,
      explanation: 'The percent sign (%) represents zero or more characters in SQL pattern matching.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-16',
      question: 'Which clause is used to group rows that have the same values?',
      options: ['GROUP BY', 'CLUSTER BY', 'COLLECT BY', 'GATHER BY'],
      correctAnswer: 0,
      explanation: 'GROUP BY clause is used to group rows that have the same values in specified columns.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-17',
      question: 'Which function returns the number of rows in a result set?',
      options: ['NUMBER()', 'COUNT()', 'ROWS()', 'TOTAL()'],
      correctAnswer: 1,
      explanation: 'COUNT() function returns the number of rows that match a specified condition.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-18',
      question: 'Which function returns the highest value in a column?',
      options: ['HIGHEST()', 'MAX()', 'TOP()', 'MAXIMUM()'],
      correctAnswer: 1,
      explanation: 'MAX() function returns the highest value in a specified column.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-19',
      question: 'Which function returns the lowest value in a column?',
      options: ['LOWEST()', 'MIN()', 'BOTTOM()', 'MINIMUM()'],
      correctAnswer: 1,
      explanation: 'MIN() function returns the lowest value in a specified column.',
      timeLimit: 60
    },
    {
      id: 'sql-e1-20',
      question: 'Which function calculates the average value of a numeric column?',
      options: ['AVERAGE()', 'AVG()', 'MEAN()', 'CALC()'],
      correctAnswer: 1,
      explanation: 'AVG() function calculates the average value of a numeric column.',
      timeLimit: 60
    }
  ]
};

// SQL - Medium Set 1
export const sqlMediumSet1: QuizSet = {
  id: 'sql-medium-1',
  setNumber: 1,
  title: 'Advanced SQL Operations - Set 1',
  subject: 'SQL',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'sql-m1-1',
      question: 'What is the difference between INNER JOIN and LEFT JOIN?',
      options: [
        'No difference',
        'INNER JOIN returns matching records, LEFT JOIN returns all left table records plus matches',
        'LEFT JOIN is faster',
        'INNER JOIN includes all records'
      ],
      correctAnswer: 1,
      explanation: 'INNER JOIN returns only matching records from both tables, while LEFT JOIN returns all records from the left table plus matching records from the right table.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-2',
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
      id: 'sql-m1-3',
      question: 'What is the difference between UNION and UNION ALL?',
      options: [
        'No difference',
        'UNION removes duplicates, UNION ALL includes all records',
        'UNION ALL is slower',
        'UNION includes all records'
      ],
      correctAnswer: 1,
      explanation: 'UNION removes duplicate records from the result set, while UNION ALL includes all records including duplicates.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-4',
      question: 'What is the HAVING clause used for?',
      options: [
        'To have something',
        'To filter groups created by GROUP BY',
        'To sort groups',
        'To create groups'
      ],
      correctAnswer: 1,
      explanation: 'HAVING clause is used to filter groups created by GROUP BY, similar to WHERE but for grouped data.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-5',
      question: 'What is the difference between WHERE and HAVING?',
      options: [
        'No difference',
        'WHERE filters rows before grouping, HAVING filters groups after grouping',
        'HAVING is faster',
        'WHERE is newer'
      ],
      correctAnswer: 1,
      explanation: 'WHERE filters individual rows before grouping, while HAVING filters groups after the GROUP BY operation.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-6',
      question: 'What is a correlated subquery?',
      options: [
        'A related subquery',
        'A subquery that references columns from the outer query',
        'A fast subquery',
        'A simple subquery'
      ],
      correctAnswer: 1,
      explanation: 'A correlated subquery references one or more columns from the outer query and is executed once for each row.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-7',
      question: 'What is the EXISTS operator used for?',
      options: [
        'To check if something exists',
        'To test if a subquery returns any rows',
        'To create records',
        'To delete records'
      ],
      correctAnswer: 1,
      explanation: 'EXISTS operator tests whether a subquery returns any rows, returning TRUE if it does.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-8',
      question: 'What is the difference between DELETE and TRUNCATE?',
      options: [
        'No difference',
        'DELETE removes specific rows and can be rolled back, TRUNCATE removes all rows and cannot be rolled back',
        'TRUNCATE is slower',
        'DELETE removes tables'
      ],
      correctAnswer: 1,
      explanation: 'DELETE removes specific rows and can be rolled back, while TRUNCATE removes all rows quickly and cannot be rolled back.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-9',
      question: 'What is a view in SQL?',
      options: [
        'A window',
        'A virtual table based on the result of a query',
        'A physical table',
        'A database user'
      ],
      correctAnswer: 1,
      explanation: 'A view is a virtual table that displays data from one or more tables based on a SQL query.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-10',
      question: 'What is an index in SQL?',
      options: [
        'A page number',
        'A database object that improves query performance',
        'A table column',
        'A database backup'
      ],
      correctAnswer: 1,
      explanation: 'An index is a database object that improves the speed of data retrieval operations on a table.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-11',
      question: 'What is the CASE statement used for?',
      options: [
        'To create cases',
        'To implement conditional logic in SQL queries',
        'To handle errors',
        'To create loops'
      ],
      correctAnswer: 1,
      explanation: 'CASE statement allows you to implement conditional logic in SQL queries, similar to if-else statements.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-12',
      question: 'What is the difference between RANK() and ROW_NUMBER()?',
      options: [
        'No difference',
        'RANK() can have ties with same rank, ROW_NUMBER() assigns unique sequential numbers',
        'ROW_NUMBER() is faster',
        'RANK() is newer'
      ],
      correctAnswer: 1,
      explanation: 'RANK() can assign the same rank to tied values, while ROW_NUMBER() assigns unique sequential numbers regardless of ties.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-13',
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
      id: 'sql-m1-14',
      question: 'What is a trigger?',
      options: [
        'A gun trigger',
        'A special procedure that automatically executes in response to database events',
        'A table column',
        'A query type'
      ],
      correctAnswer: 1,
      explanation: 'A trigger is a special stored procedure that automatically executes in response to specific database events.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-15',
      question: 'What is the difference between clustered and non-clustered index?',
      options: [
        'No difference',
        'Clustered index physically reorders data, non-clustered creates separate structure',
        'Non-clustered is faster',
        'Clustered is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Clustered index physically reorders table data, while non-clustered index creates a separate structure pointing to data rows.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-16',
      question: 'What is normalization?',
      options: [
        'Making data normal',
        'Organizing data to reduce redundancy and improve integrity',
        'Sorting data',
        'Backing up data'
      ],
      correctAnswer: 1,
      explanation: 'Normalization is the process of organizing data to minimize redundancy and dependency, improving data integrity.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-17',
      question: 'What is denormalization?',
      options: [
        'Making data abnormal',
        'Adding redundancy to improve query performance',
        'Removing data',
        'Corrupting data'
      ],
      correctAnswer: 1,
      explanation: 'Denormalization involves adding redundancy to normalized databases to improve query performance.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-18',
      question: 'What is a transaction in SQL?',
      options: [
        'A business deal',
        'A sequence of database operations treated as a single unit',
        'A table operation',
        'A user login'
      ],
      correctAnswer: 1,
      explanation: 'A transaction is a sequence of database operations that are treated as a single logical unit of work.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-19',
      question: 'What does ACID stand for in database transactions?',
      options: [
        'Atomicity, Consistency, Isolation, Durability',
        'Access, Control, Integration, Data',
        'Automatic, Consistent, Independent, Durable',
        'Advanced, Complete, Integrated, Database'
      ],
      correctAnswer: 0,
      explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - the four properties of database transactions.',
      timeLimit: 90
    },
    {
      id: 'sql-m1-20',
      question: 'What is the difference between COMMIT and ROLLBACK?',
      options: [
        'No difference',
        'COMMIT saves transaction changes, ROLLBACK undoes transaction changes',
        'ROLLBACK is faster',
        'COMMIT is newer'
      ],
      correctAnswer: 1,
      explanation: 'COMMIT permanently saves all changes made in the current transaction, while ROLLBACK undoes all changes made in the current transaction.',
      timeLimit: 90
    }
  ]
};

export const sqlEasySets: QuizSet[] = [sqlEasySet1];
export const sqlMediumSets: QuizSet[] = [sqlMediumSet1];
export const sqlHardSets: QuizSet[] = [];
