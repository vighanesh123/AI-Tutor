import { QuizSet } from './enhancedQuizStructure';

// React - Easy Set 1
export const reactEasySet1: QuizSet = {
  id: 'react-easy-1',
  setNumber: 1,
  title: 'React Fundamentals - Set 1',
  subject: 'React',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'react-e1-1',
      question: 'What is React?',
      options: ['A database', 'A JavaScript library for building user interfaces', 'A web server', 'A CSS framework'],
      correctAnswer: 1,
      explanation: 'React is a JavaScript library developed by Facebook for building user interfaces.',
      timeLimit: 60
    },
    {
      id: 'react-e1-2',
      question: 'What is JSX?',
      options: ['JavaScript XML', 'Java Syntax Extension', 'JSON Extension', 'JavaScript Extension'],
      correctAnswer: 0,
      explanation: 'JSX stands for JavaScript XML and allows writing HTML-like syntax in JavaScript.',
      timeLimit: 60
    },
    {
      id: 'react-e1-3',
      question: 'How do you create a React component?',
      options: ['function Component() {}', 'class Component extends React.Component {}', 'Both A and B', 'component Component() {}'],
      correctAnswer: 2,
      explanation: 'React components can be created as functions or classes extending React.Component.',
      timeLimit: 60
    },
    {
      id: 'react-e1-4',
      question: 'What is the virtual DOM?',
      options: ['A real DOM', 'A JavaScript representation of the real DOM', 'A database', 'A server'],
      correctAnswer: 1,
      explanation: 'Virtual DOM is a JavaScript representation of the real DOM kept in memory.',
      timeLimit: 60
    },
    {
      id: 'react-e1-5',
      question: 'How do you pass data to a component?',
      options: ['Through props', 'Through state', 'Through methods', 'Through variables'],
      correctAnswer: 0,
      explanation: 'Props (properties) are used to pass data from parent to child components.',
      timeLimit: 60
    },
    {
      id: 'react-e1-6',
      question: 'What is state in React?',
      options: ['Component data that can change', 'Static data', 'CSS styles', 'HTML elements'],
      correctAnswer: 0,
      explanation: 'State is component data that can change over time and trigger re-renders.',
      timeLimit: 60
    },
    {
      id: 'react-e1-7',
      question: 'Which hook is used to manage state in functional components?',
      options: ['useEffect', 'useState', 'useContext', 'useReducer'],
      correctAnswer: 1,
      explanation: 'useState hook is used to add state to functional components.',
      timeLimit: 60
    },
    {
      id: 'react-e1-8',
      question: 'What is the correct way to update state?',
      options: ['state.value = newValue', 'setState(newValue)', 'updateState(newValue)', 'state = newValue'],
      correctAnswer: 1,
      explanation: 'State should be updated using setState function or state setter from useState.',
      timeLimit: 60
    },
    {
      id: 'react-e1-9',
      question: 'What is a React element?',
      options: ['A DOM element', 'A plain object describing what should appear on screen', 'A component', 'A function'],
      correctAnswer: 1,
      explanation: 'React elements are plain objects that describe what should appear on the screen.',
      timeLimit: 60
    },
    {
      id: 'react-e1-10',
      question: 'How do you handle events in React?',
      options: ['addEventListener', 'Event handlers as props', 'jQuery events', 'DOM events'],
      correctAnswer: 1,
      explanation: 'React uses event handlers passed as props (e.g., onClick, onChange).',
      timeLimit: 60
    },
    {
      id: 'react-e1-11',
      question: 'What is the key prop used for?',
      options: ['Styling', 'Unique identification of list items', 'Event handling', 'State management'],
      correctAnswer: 1,
      explanation: 'Key prop helps React identify which items have changed in lists.',
      timeLimit: 60
    },
    {
      id: 'react-e1-12',
      question: 'Which method is called after a component is mounted?',
      options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUnmount'],
      correctAnswer: 0,
      explanation: 'componentDidMount is called after the component is mounted to the DOM.',
      timeLimit: 60
    },
    {
      id: 'react-e1-13',
      question: 'What is the equivalent of componentDidMount in hooks?',
      options: ['useState', 'useEffect with empty dependency array', 'useContext', 'useCallback'],
      correctAnswer: 1,
      explanation: 'useEffect with empty dependency array [] runs once after component mounts.',
      timeLimit: 60
    },
    {
      id: 'react-e1-14',
      question: 'How do you conditionally render elements?',
      options: ['if statements', 'Ternary operator', 'Logical && operator', 'All of the above'],
      correctAnswer: 3,
      explanation: 'React supports conditional rendering using if statements, ternary operators, and logical operators.',
      timeLimit: 60
    },
    {
      id: 'react-e1-15',
      question: 'What is the purpose of React.Fragment?',
      options: ['To break components', 'To group elements without adding extra DOM nodes', 'To create fragments', 'To split components'],
      correctAnswer: 1,
      explanation: 'React.Fragment allows grouping elements without adding extra DOM nodes.',
      timeLimit: 60
    },
    {
      id: 'react-e1-16',
      question: 'How do you create a list in React?',
      options: ['Using map() function', 'Using for loops', 'Using forEach()', 'Using filter()'],
      correctAnswer: 0,
      explanation: 'map() function is commonly used to create lists of React elements.',
      timeLimit: 60
    },
    {
      id: 'react-e1-17',
      question: 'What is props.children?',
      options: ['Child components', 'Content between opening and closing tags', 'Component methods', 'Component state'],
      correctAnswer: 1,
      explanation: 'props.children represents the content between component opening and closing tags.',
      timeLimit: 60
    },
    {
      id: 'react-e1-18',
      question: 'Which command creates a new React app?',
      options: ['create-react-app', 'npx create-react-app', 'npm create-react-app', 'react create-app'],
      correctAnswer: 1,
      explanation: 'npx create-react-app is the command to create a new React application.',
      timeLimit: 60
    },
    {
      id: 'react-e1-19',
      question: 'What is the default port for React development server?',
      options: ['3000', '8000', '8080', '5000'],
      correctAnswer: 0,
      explanation: 'React development server runs on port 3000 by default.',
      timeLimit: 60
    },
    {
      id: 'react-e1-20',
      question: 'How do you import React?',
      options: ['import React from "react"', 'require("react")', 'include React', 'import * as React'],
      correctAnswer: 0,
      explanation: 'React is imported using: import React from "react"',
      timeLimit: 60
    }
  ]
};

// React - Medium Set 1
export const reactMediumSet1: QuizSet = {
  id: 'react-medium-1',
  setNumber: 1,
  title: 'React Advanced Concepts - Set 1',
  subject: 'React',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'react-m1-1',
      question: 'What is the Context API used for?',
      options: [
        'Component styling',
        'Passing data through component tree without props drilling',
        'State management',
        'Event handling'
      ],
      correctAnswer: 1,
      explanation: 'Context API allows passing data through the component tree without manually passing props at every level.',
      timeLimit: 90
    },
    {
      id: 'react-m1-2',
      question: 'What is the difference between controlled and uncontrolled components?',
      options: [
        'No difference',
        'Controlled components have React-managed state, uncontrolled use DOM state',
        'Uncontrolled are faster',
        'Controlled are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Controlled components have their state managed by React, uncontrolled components rely on DOM state.',
      timeLimit: 90
    },
    {
      id: 'react-m1-3',
      question: 'What is useEffect used for?',
      options: [
        'Creating effects',
        'Performing side effects in functional components',
        'Styling components',
        'Managing state'
      ],
      correctAnswer: 1,
      explanation: 'useEffect hook is used for performing side effects like API calls, subscriptions, or DOM manipulation.',
      timeLimit: 90
    },
    {
      id: 'react-m1-4',
      question: 'What is the dependency array in useEffect?',
      options: [
        'Array of dependencies',
        'Controls when effect runs based on value changes',
        'Array of effects',
        'Component dependencies'
      ],
      correctAnswer: 1,
      explanation: 'Dependency array controls when useEffect runs by comparing previous and current values.',
      timeLimit: 90
    },
    {
      id: 'react-m1-5',
      question: 'What is useCallback used for?',
      options: [
        'Calling functions',
        'Memoizing functions to prevent unnecessary re-renders',
        'Creating callbacks',
        'Handling events'
      ],
      correctAnswer: 1,
      explanation: 'useCallback memoizes functions to prevent unnecessary re-renders of child components.',
      timeLimit: 90
    },
    {
      id: 'react-m1-6',
      question: 'What is useMemo used for?',
      options: [
        'Memory management',
        'Memoizing expensive calculations',
        'Creating memos',
        'Storing data'
      ],
      correctAnswer: 1,
      explanation: 'useMemo memoizes expensive calculations to avoid recalculating on every render.',
      timeLimit: 90
    },
    {
      id: 'react-m1-7',
      question: 'What is prop drilling?',
      options: [
        'Drilling holes in props',
        'Passing props through multiple component levels',
        'Creating props',
        'Removing props'
      ],
      correctAnswer: 1,
      explanation: 'Prop drilling is passing props through multiple component levels to reach deeply nested components.',
      timeLimit: 90
    },
    {
      id: 'react-m1-8',
      question: 'What is the purpose of useReducer?',
      options: [
        'Reducing components',
        'Managing complex state logic',
        'Reducing renders',
        'Optimizing performance'
      ],
      correctAnswer: 1,
      explanation: 'useReducer is used for managing complex state logic, similar to Redux reducers.',
      timeLimit: 90
    },
    {
      id: 'react-m1-9',
      question: 'What is React.memo?',
      options: [
        'Memory function',
        'Higher-order component for memoizing components',
        'Memo hook',
        'Memory management'
      ],
      correctAnswer: 1,
      explanation: 'React.memo is a higher-order component that memoizes components to prevent unnecessary re-renders.',
      timeLimit: 90
    },
    {
      id: 'react-m1-10',
      question: 'What is the difference between useEffect and useLayoutEffect?',
      options: [
        'No difference',
        'useLayoutEffect runs synchronously after DOM mutations',
        'useEffect is faster',
        'useLayoutEffect is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useLayoutEffect runs synchronously after all DOM mutations but before browser paint.',
      timeLimit: 90
    },
    {
      id: 'react-m1-11',
      question: 'What is a custom hook?',
      options: [
        'A hook with custom styling',
        'A JavaScript function that uses other hooks',
        'A built-in hook',
        'A component hook'
      ],
      correctAnswer: 1,
      explanation: 'Custom hooks are JavaScript functions that use other hooks and allow sharing stateful logic.',
      timeLimit: 90
    },
    {
      id: 'react-m1-12',
      question: 'What is the purpose of useRef?',
      options: [
        'Creating references',
        'Accessing DOM elements and persisting values',
        'Referencing components',
        'Managing refs'
      ],
      correctAnswer: 1,
      explanation: 'useRef provides a way to access DOM elements directly and persist values across renders.',
      timeLimit: 90
    },
    {
      id: 'react-m1-13',
      question: 'What is React Router used for?',
      options: [
        'Routing network requests',
        'Client-side routing in single-page applications',
        'Server routing',
        'Component routing'
      ],
      correctAnswer: 1,
      explanation: 'React Router enables client-side routing for single-page applications.',
      timeLimit: 90
    },
    {
      id: 'react-m1-14',
      question: 'What is the difference between useState and useReducer?',
      options: [
        'No difference',
        'useState for simple state, useReducer for complex state logic',
        'useReducer is faster',
        'useState is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useState is for simple state, useReducer is better for complex state logic with multiple sub-values.',
      timeLimit: 90
    },
    {
      id: 'react-m1-15',
      question: 'What is code splitting in React?',
      options: [
        'Splitting code files',
        'Loading code chunks on demand to improve performance',
        'Dividing components',
        'Separating logic'
      ],
      correctAnswer: 1,
      explanation: 'Code splitting allows loading JavaScript chunks on demand to improve application performance.',
      timeLimit: 90
    },
    {
      id: 'react-m1-16',
      question: 'What is lazy loading in React?',
      options: [
        'Slow loading',
        'Loading components only when needed',
        'Delayed loading',
        'Background loading'
      ],
      correctAnswer: 1,
      explanation: 'Lazy loading defers component loading until they are actually needed.',
      timeLimit: 90
    },
    {
      id: 'react-m1-17',
      question: 'What is the purpose of React.Suspense?',
      options: [
        'Suspending components',
        'Handling loading states for lazy components',
        'Creating suspense',
        'Pausing execution'
      ],
      correctAnswer: 1,
      explanation: 'React.Suspense provides a way to handle loading states while waiting for lazy components.',
      timeLimit: 90
    },
    {
      id: 'react-m1-18',
      question: 'What is the difference between class and functional components?',
      options: [
        'No difference',
        'Class components use classes, functional components use functions',
        'Functional components are faster',
        'Class components are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Class components are ES6 classes, functional components are JavaScript functions with hooks.',
      timeLimit: 90
    },
    {
      id: 'react-m1-19',
      question: 'What is the purpose of error boundaries?',
      options: [
        'Setting boundaries',
        'Catching JavaScript errors in component tree',
        'Error handling',
        'Boundary components'
      ],
      correctAnswer: 1,
      explanation: 'Error boundaries catch JavaScript errors anywhere in the component tree and display fallback UI.',
      timeLimit: 90
    },
    {
      id: 'react-m1-20',
      question: 'What is the difference between componentDidUpdate and useEffect?',
      options: [
        'No difference',
        'componentDidUpdate is for class components, useEffect for functional',
        'useEffect is faster',
        'componentDidUpdate is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'componentDidUpdate is a lifecycle method for class components, useEffect is the hook equivalent.',
      timeLimit: 90
    }
  ]
};

export const reactEasySets: QuizSet[] = [reactEasySet1];
export const reactMediumSets: QuizSet[] = [reactMediumSet1];
export const reactHardSets: QuizSet[] = [];
