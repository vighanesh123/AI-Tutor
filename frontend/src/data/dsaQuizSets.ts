import { QuizSet } from './enhancedQuizStructure';

// Data Structures & Algorithms - Easy Set 1
export const dsaEasySet1: QuizSet = {
  id: 'dsa-easy-1',
  setNumber: 1,
  title: 'DSA Fundamentals - Set 1',
  subject: 'Data Structures & Algorithms',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'dsa-e1-1',
      question: 'What is an array?',
      options: ['A collection of elements stored at contiguous memory locations', 'A linked structure', 'A tree structure', 'A graph structure'],
      correctAnswer: 0,
      explanation: 'An array is a collection of elements stored at contiguous memory locations.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-2',
      question: 'What is the time complexity of accessing an element in an array?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correctAnswer: 2,
      explanation: 'Array access is O(1) constant time using index.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-3',
      question: 'What is a linked list?',
      options: ['An array', 'A linear data structure where elements are stored in nodes', 'A tree', 'A hash table'],
      correctAnswer: 1,
      explanation: 'A linked list is a linear data structure where elements are stored in nodes connected by pointers.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-4',
      question: 'What is a stack?',
      options: ['FIFO data structure', 'LIFO data structure', 'Random access structure', 'Sorted structure'],
      correctAnswer: 1,
      explanation: 'A stack is a LIFO (Last In, First Out) data structure.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-5',
      question: 'What is a queue?',
      options: ['LIFO data structure', 'FIFO data structure', 'Random access structure', 'Sorted structure'],
      correctAnswer: 1,
      explanation: 'A queue is a FIFO (First In, First Out) data structure.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-6',
      question: 'Which operation is performed at the top of a stack?',
      options: ['Push and Pop', 'Enqueue and Dequeue', 'Insert and Delete', 'Add and Remove'],
      correctAnswer: 0,
      explanation: 'Push (insert) and Pop (remove) operations are performed at the top of a stack.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-7',
      question: 'What is the time complexity of push operation in a stack?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correctAnswer: 2,
      explanation: 'Push operation in a stack is O(1) constant time.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-8',
      question: 'What is a binary tree?',
      options: ['A tree with exactly 2 nodes', 'A tree where each node has at most 2 children', 'A tree with 2 levels', 'A sorted tree'],
      correctAnswer: 1,
      explanation: 'A binary tree is a tree data structure where each node has at most two children.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-9',
      question: 'What is linear search?',
      options: ['Searching in a line', 'Sequential search through elements', 'Binary search', 'Hash search'],
      correctAnswer: 1,
      explanation: 'Linear search sequentially checks each element until the target is found.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-10',
      question: 'What is the time complexity of linear search?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 2,
      explanation: 'Linear search has O(n) time complexity in the worst case.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-11',
      question: 'What is binary search?',
      options: ['Searching for binary numbers', 'Divide and conquer search algorithm', 'Linear search', 'Random search'],
      correctAnswer: 1,
      explanation: 'Binary search is a divide-and-conquer algorithm that works on sorted arrays.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-12',
      question: 'What is the prerequisite for binary search?',
      options: ['Array must be sorted', 'Array must be unsorted', 'Array must be small', 'Array must be large'],
      correctAnswer: 0,
      explanation: 'Binary search requires the array to be sorted.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-13',
      question: 'What is bubble sort?',
      options: ['A searching algorithm', 'A sorting algorithm that repeatedly swaps adjacent elements', 'A tree algorithm', 'A graph algorithm'],
      correctAnswer: 1,
      explanation: 'Bubble sort repeatedly compares and swaps adjacent elements if they are in wrong order.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-14',
      question: 'What is the time complexity of bubble sort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 2,
      explanation: 'Bubble sort has O(n²) time complexity in the worst case.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-15',
      question: 'What is a hash table?',
      options: ['A table with hash values', 'A data structure that maps keys to values using hash function', 'A sorted table', 'A binary table'],
      correctAnswer: 1,
      explanation: 'A hash table uses a hash function to map keys to array indices for fast access.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-16',
      question: 'What is the average time complexity of hash table operations?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correctAnswer: 2,
      explanation: 'Hash table operations have O(1) average time complexity.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-17',
      question: 'What is a graph?',
      options: ['A chart', 'A collection of vertices connected by edges', 'A tree structure', 'A linear structure'],
      correctAnswer: 1,
      explanation: 'A graph is a collection of vertices (nodes) connected by edges.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-18',
      question: 'What is the difference between a tree and a graph?',
      options: ['No difference', 'Tree is acyclic, graph can have cycles', 'Tree is cyclic', 'Graph is always sorted'],
      correctAnswer: 1,
      explanation: 'Trees are acyclic connected graphs, while graphs can contain cycles.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-19',
      question: 'What is recursion?',
      options: ['A loop', 'A function calling itself', 'An iteration', 'A data structure'],
      correctAnswer: 1,
      explanation: 'Recursion is when a function calls itself to solve a smaller instance of the same problem.',
      timeLimit: 60
    },
    {
      id: 'dsa-e1-20',
      question: 'What is Big O notation?',
      options: ['A big circle', 'Mathematical notation to describe algorithm complexity', 'A data structure', 'A programming language'],
      correctAnswer: 1,
      explanation: 'Big O notation describes the upper bound of algorithm time or space complexity.',
      timeLimit: 60
    }
  ]
};

// Data Structures & Algorithms - Medium Set 1
export const dsaMediumSet1: QuizSet = {
  id: 'dsa-medium-1',
  setNumber: 1,
  title: 'DSA Advanced Concepts - Set 1',
  subject: 'Data Structures & Algorithms',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'dsa-m1-1',
      question: 'What is the time complexity of merge sort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 1,
      explanation: 'Merge sort has O(n log n) time complexity in all cases.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-2',
      question: 'What is the space complexity of merge sort?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 2,
      explanation: 'Merge sort requires O(n) additional space for merging.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-3',
      question: 'What is quick sort?',
      options: [
        'A slow sorting algorithm',
        'A divide-and-conquer sorting algorithm using pivot',
        'A linear sorting algorithm',
        'A stable sorting algorithm'
      ],
      correctAnswer: 1,
      explanation: 'Quick sort is a divide-and-conquer algorithm that partitions array around a pivot.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-4',
      question: 'What is the worst-case time complexity of quick sort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 2,
      explanation: 'Quick sort has O(n²) worst-case time complexity when pivot is always the smallest or largest.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-5',
      question: 'What is a balanced binary search tree?',
      options: [
        'A tree with equal left and right subtrees',
        'A tree where height difference between subtrees is at most 1',
        'A tree with balanced values',
        'A tree with even number of nodes'
      ],
      correctAnswer: 1,
      explanation: 'A balanced BST maintains height difference of at most 1 between left and right subtrees.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-6',
      question: 'What is an AVL tree?',
      options: [
        'A binary tree',
        'A self-balancing binary search tree',
        'A graph structure',
        'A hash table'
      ],
      correctAnswer: 1,
      explanation: 'AVL tree is a self-balancing binary search tree where heights of subtrees differ by at most 1.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-7',
      question: 'What is a heap?',
      options: [
        'A pile of data',
        'A complete binary tree with heap property',
        'A linear structure',
        'A graph structure'
      ],
      correctAnswer: 1,
      explanation: 'A heap is a complete binary tree where parent nodes satisfy heap property (min or max).',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-8',
      question: 'What is the time complexity of heap sort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 1,
      explanation: 'Heap sort has O(n log n) time complexity in all cases.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-9',
      question: 'What is dynamic programming?',
      options: [
        'Programming that changes',
        'Optimization technique using overlapping subproblems',
        'Object-oriented programming',
        'Functional programming'
      ],
      correctAnswer: 1,
      explanation: 'Dynamic programming solves problems by breaking them into overlapping subproblems and storing results.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-10',
      question: 'What is memoization?',
      options: [
        'Memory management',
        'Storing results of expensive function calls',
        'Memory allocation',
        'Memory deallocation'
      ],
      correctAnswer: 1,
      explanation: 'Memoization stores results of expensive function calls to avoid redundant calculations.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-11',
      question: 'What is the difference between BFS and DFS?',
      options: [
        'No difference',
        'BFS explores level by level, DFS explores depth first',
        'BFS is faster',
        'DFS uses more memory'
      ],
      correctAnswer: 1,
      explanation: 'BFS explores nodes level by level, DFS explores as far as possible along each branch.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-12',
      question: 'What data structure does BFS typically use?',
      options: ['Stack', 'Queue', 'Array', 'Linked List'],
      correctAnswer: 1,
      explanation: 'BFS typically uses a queue to maintain the order of nodes to visit.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-13',
      question: 'What data structure does DFS typically use?',
      options: ['Queue', 'Stack', 'Array', 'Hash Table'],
      correctAnswer: 1,
      explanation: 'DFS typically uses a stack (or recursion which uses call stack).',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-14',
      question: 'What is a trie?',
      options: [
        'A tree with three nodes',
        'A tree data structure for storing strings',
        'A binary tree',
        'A graph structure'
      ],
      correctAnswer: 1,
      explanation: 'A trie is a tree data structure used for storing and searching strings efficiently.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-15',
      question: 'What is the time complexity of inserting in a trie?',
      options: ['O(1)', 'O(log n)', 'O(m) where m is string length', 'O(n)'],
      correctAnswer: 2,
      explanation: 'Trie insertion takes O(m) time where m is the length of the string.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-16',
      question: 'What is a disjoint set (Union-Find)?',
      options: [
        'A set with no elements',
        'Data structure for tracking disjoint sets with union and find operations',
        'A binary tree',
        'A hash table'
      ],
      correctAnswer: 1,
      explanation: 'Disjoint set data structure tracks elements partitioned into disjoint sets with union and find operations.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-17',
      question: 'What is the purpose of path compression in Union-Find?',
      options: [
        'Compress file paths',
        'Optimize find operation by flattening tree structure',
        'Reduce memory usage',
        'Speed up union operation'
      ],
      correctAnswer: 1,
      explanation: 'Path compression flattens the tree structure during find operation to improve future queries.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-18',
      question: 'What is topological sorting?',
      options: [
        'Sorting by topology',
        'Linear ordering of vertices in directed acyclic graph',
        'Sorting algorithms',
        'Graph coloring'
      ],
      correctAnswer: 1,
      explanation: 'Topological sorting produces linear ordering of vertices in a DAG such that for every edge u→v, u comes before v.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-19',
      question: 'What is the time complexity of Dijkstra\'s algorithm?',
      options: ['O(V)', 'O(E)', 'O(V + E)', 'O((V + E) log V)'],
      correctAnswer: 3,
      explanation: 'Dijkstra\'s algorithm has O((V + E) log V) time complexity using a priority queue.',
      timeLimit: 90
    },
    {
      id: 'dsa-m1-20',
      question: 'What is the difference between Dijkstra\'s and Bellman-Ford algorithms?',
      options: [
        'No difference',
        'Dijkstra works with non-negative weights, Bellman-Ford handles negative weights',
        'Bellman-Ford is faster',
        'Dijkstra handles negative weights'
      ],
      correctAnswer: 1,
      explanation: 'Dijkstra requires non-negative edge weights, while Bellman-Ford can handle negative weights and detect negative cycles.',
      timeLimit: 90
    }
  ]
};

export const dsaEasySets: QuizSet[] = [dsaEasySet1];
export const dsaMediumSets: QuizSet[] = [dsaMediumSet1];
export const dsaHardSets: QuizSet[] = [];
