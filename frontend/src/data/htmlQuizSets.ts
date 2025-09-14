import { QuizSet } from './enhancedQuizStructure';

// HTML - Easy Set 1
export const htmlEasySet1: QuizSet = {
  id: 'html-easy-1',
  setNumber: 1,
  title: 'HTML Fundamentals - Set 1',
  subject: 'HTML & CSS',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'html-e1-1',
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 0,
      explanation: 'HTML stands for Hyper Text Markup Language, used to create web pages.',
      timeLimit: 60
    },
    {
      id: 'html-e1-2',
      question: 'Which tag is used to create a hyperlink?',
      options: ['<link>', '<a>', '<href>', '<url>'],
      correctAnswer: 1,
      explanation: 'The <a> tag is used to create hyperlinks in HTML.',
      timeLimit: 60
    },
    {
      id: 'html-e1-3',
      question: 'What is the correct HTML tag for the largest heading?',
      options: ['<h6>', '<h1>', '<heading>', '<head>'],
      correctAnswer: 1,
      explanation: '<h1> creates the largest heading, with <h6> being the smallest.',
      timeLimit: 60
    },
    {
      id: 'html-e1-4',
      question: 'Which tag is used to display an image?',
      options: ['<image>', '<img>', '<pic>', '<photo>'],
      correctAnswer: 1,
      explanation: 'The <img> tag is used to embed images in HTML documents.',
      timeLimit: 60
    },
    {
      id: 'html-e1-5',
      question: 'What is the correct HTML tag for creating a line break?',
      options: ['<break>', '<br>', '<lb>', '<newline>'],
      correctAnswer: 1,
      explanation: '<br> creates a line break in HTML content.',
      timeLimit: 60
    },
    {
      id: 'html-e1-6',
      question: 'Which attribute specifies the URL of a hyperlink?',
      options: ['src', 'href', 'link', 'url'],
      correctAnswer: 1,
      explanation: 'The href attribute specifies the URL that the link points to.',
      timeLimit: 60
    },
    {
      id: 'html-e1-7',
      question: 'What is the correct HTML tag for creating a paragraph?',
      options: ['<paragraph>', '<p>', '<para>', '<text>'],
      correctAnswer: 1,
      explanation: 'The <p> tag defines a paragraph in HTML.',
      timeLimit: 60
    },
    {
      id: 'html-e1-8',
      question: 'Which tag is used to create an unordered list?',
      options: ['<ul>', '<ol>', '<list>', '<ulist>'],
      correctAnswer: 0,
      explanation: '<ul> creates an unordered (bulleted) list.',
      timeLimit: 60
    },
    {
      id: 'html-e1-9',
      question: 'What does the <title> tag define?',
      options: ['Page heading', 'Document title in browser tab', 'Main title on page', 'Title attribute'],
      correctAnswer: 1,
      explanation: 'The <title> tag defines the document title shown in the browser tab.',
      timeLimit: 60
    },
    {
      id: 'html-e1-10',
      question: 'Which tag is used to create a table?',
      options: ['<table>', '<tab>', '<tbl>', '<grid>'],
      correctAnswer: 0,
      explanation: 'The <table> tag is used to create tables in HTML.',
      timeLimit: 60
    },
    {
      id: 'html-e1-11',
      question: 'What is the correct HTML tag for making text bold?',
      options: ['<bold>', '<b>', '<strong>', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'Both <b> and <strong> can make text bold, with <strong> having semantic meaning.',
      timeLimit: 60
    },
    {
      id: 'html-e1-12',
      question: 'Which attribute is used to specify alternative text for an image?',
      options: ['alt', 'title', 'text', 'description'],
      correctAnswer: 0,
      explanation: 'The alt attribute provides alternative text for images when they cannot be displayed.',
      timeLimit: 60
    },
    {
      id: 'html-e1-13',
      question: 'What is the correct HTML tag for creating a form?',
      options: ['<form>', '<input>', '<field>', '<formfield>'],
      correctAnswer: 0,
      explanation: 'The <form> tag is used to create HTML forms for user input.',
      timeLimit: 60
    },
    {
      id: 'html-e1-14',
      question: 'Which tag is used to create a dropdown list?',
      options: ['<dropdown>', '<select>', '<list>', '<option>'],
      correctAnswer: 1,
      explanation: 'The <select> tag creates a dropdown list, with <option> tags for choices.',
      timeLimit: 60
    },
    {
      id: 'html-e1-15',
      question: 'What is the correct HTML tag for creating italic text?',
      options: ['<italic>', '<i>', '<em>', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'Both <i> and <em> create italic text, with <em> having semantic emphasis meaning.',
      timeLimit: 60
    },
    {
      id: 'html-e1-16',
      question: 'Which tag defines the main content area of an HTML document?',
      options: ['<main>', '<content>', '<body>', '<section>'],
      correctAnswer: 2,
      explanation: 'The <body> tag contains all the visible content of an HTML document.',
      timeLimit: 60
    },
    {
      id: 'html-e1-17',
      question: 'What is the correct HTML tag for creating a text input field?',
      options: ['<input type="text">', '<textfield>', '<text>', '<field>'],
      correctAnswer: 0,
      explanation: '<input type="text"> creates a single-line text input field.',
      timeLimit: 60
    },
    {
      id: 'html-e1-18',
      question: 'Which tag is used to group table rows?',
      options: ['<tbody>', '<tgroup>', '<rows>', '<group>'],
      correctAnswer: 0,
      explanation: 'The <tbody> tag groups table body content.',
      timeLimit: 60
    },
    {
      id: 'html-e1-19',
      question: 'What does the <head> tag contain?',
      options: ['Page content', 'Metadata about the document', 'Page header', 'Main heading'],
      correctAnswer: 1,
      explanation: 'The <head> tag contains metadata about the HTML document.',
      timeLimit: 60
    },
    {
      id: 'html-e1-20',
      question: 'Which attribute is used to specify the source of an image?',
      options: ['href', 'src', 'source', 'link'],
      correctAnswer: 1,
      explanation: 'The src attribute specifies the path/URL to the image file.',
      timeLimit: 60
    }
  ]
};

// CSS - Easy Set 1 (combined with HTML)
export const cssEasySet1: QuizSet = {
  id: 'css-easy-1',
  setNumber: 2,
  title: 'CSS Fundamentals - Set 1',
  subject: 'HTML & CSS',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'css-e1-1',
      question: 'What does CSS stand for?',
      options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
      correctAnswer: 1,
      explanation: 'CSS stands for Cascading Style Sheets, used to style HTML elements.',
      timeLimit: 60
    },
    {
      id: 'css-e1-2',
      question: 'Which property is used to change the text color?',
      options: ['color', 'text-color', 'font-color', 'text-style'],
      correctAnswer: 0,
      explanation: 'The color property sets the text color of an element.',
      timeLimit: 60
    },
    {
      id: 'css-e1-3',
      question: 'How do you select an element with id "header"?',
      options: ['.header', '#header', 'header', '*header'],
      correctAnswer: 1,
      explanation: 'The # symbol is used to select elements by their id attribute.',
      timeLimit: 60
    },
    {
      id: 'css-e1-4',
      question: 'Which property is used to change the background color?',
      options: ['bg-color', 'background-color', 'color-background', 'background'],
      correctAnswer: 1,
      explanation: 'The background-color property sets the background color of an element.',
      timeLimit: 60
    },
    {
      id: 'css-e1-5',
      question: 'How do you select elements with class "menu"?',
      options: ['#menu', '.menu', 'menu', '*menu'],
      correctAnswer: 1,
      explanation: 'The . (dot) symbol is used to select elements by their class attribute.',
      timeLimit: 60
    },
    {
      id: 'css-e1-6',
      question: 'Which property is used to change the font size?',
      options: ['font-size', 'text-size', 'size', 'font-style'],
      correctAnswer: 0,
      explanation: 'The font-size property controls the size of text.',
      timeLimit: 60
    },
    {
      id: 'css-e1-7',
      question: 'What is the correct way to add CSS to an HTML document?',
      options: ['<style> tag', 'External CSS file', 'Inline styles', 'All of the above'],
      correctAnswer: 3,
      explanation: 'CSS can be added using <style> tags, external files, or inline styles.',
      timeLimit: 60
    },
    {
      id: 'css-e1-8',
      question: 'Which property is used to add space inside an element?',
      options: ['margin', 'padding', 'spacing', 'border'],
      correctAnswer: 1,
      explanation: 'Padding adds space inside an element, between content and border.',
      timeLimit: 60
    },
    {
      id: 'css-e1-9',
      question: 'Which property is used to add space outside an element?',
      options: ['margin', 'padding', 'spacing', 'border'],
      correctAnswer: 0,
      explanation: 'Margin adds space outside an element, beyond its border.',
      timeLimit: 60
    },
    {
      id: 'css-e1-10',
      question: 'How do you make text bold in CSS?',
      options: ['font-weight: bold', 'text-style: bold', 'font-style: bold', 'text-weight: bold'],
      correctAnswer: 0,
      explanation: 'font-weight: bold makes text bold in CSS.',
      timeLimit: 60
    },
    {
      id: 'css-e1-11',
      question: 'Which property is used to align text?',
      options: ['text-align', 'align', 'text-position', 'alignment'],
      correctAnswer: 0,
      explanation: 'text-align property controls the horizontal alignment of text.',
      timeLimit: 60
    },
    {
      id: 'css-e1-12',
      question: 'What does the display: none property do?',
      options: ['Makes element transparent', 'Hides the element completely', 'Makes element invisible', 'Removes element color'],
      correctAnswer: 1,
      explanation: 'display: none completely removes the element from the layout.',
      timeLimit: 60
    },
    {
      id: 'css-e1-13',
      question: 'Which property is used to create rounded corners?',
      options: ['corner-radius', 'border-radius', 'round-corner', 'border-round'],
      correctAnswer: 1,
      explanation: 'border-radius property creates rounded corners on elements.',
      timeLimit: 60
    },
    {
      id: 'css-e1-14',
      question: 'How do you select all elements on a page?',
      options: ['*', 'all', 'everything', 'body'],
      correctAnswer: 0,
      explanation: 'The * (asterisk) selector selects all elements on the page.',
      timeLimit: 60
    },
    {
      id: 'css-e1-15',
      question: 'Which property controls the space between lines of text?',
      options: ['line-height', 'line-spacing', 'text-spacing', 'line-gap'],
      correctAnswer: 0,
      explanation: 'line-height property controls the space between lines of text.',
      timeLimit: 60
    },
    {
      id: 'css-e1-16',
      question: 'What is the default position value for HTML elements?',
      options: ['relative', 'absolute', 'static', 'fixed'],
      correctAnswer: 2,
      explanation: 'The default position value for HTML elements is static.',
      timeLimit: 60
    },
    {
      id: 'css-e1-17',
      question: 'Which property is used to change the cursor when hovering?',
      options: ['cursor', 'hover', 'pointer', 'mouse'],
      correctAnswer: 0,
      explanation: 'The cursor property changes the mouse cursor when hovering over elements.',
      timeLimit: 60
    },
    {
      id: 'css-e1-18',
      question: 'How do you make an element invisible but keep its space?',
      options: ['display: none', 'visibility: hidden', 'opacity: 0', 'Both B and C'],
      correctAnswer: 3,
      explanation: 'Both visibility: hidden and opacity: 0 make elements invisible while preserving space.',
      timeLimit: 60
    },
    {
      id: 'css-e1-19',
      question: 'Which property is used to add a border?',
      options: ['border', 'outline', 'edge', 'frame'],
      correctAnswer: 0,
      explanation: 'The border property adds a border around elements.',
      timeLimit: 60
    },
    {
      id: 'css-e1-20',
      question: 'What does the float property do?',
      options: ['Makes element float in air', 'Positions element to left or right', 'Makes element transparent', 'Adds animation'],
      correctAnswer: 1,
      explanation: 'The float property positions elements to the left or right of their container.',
      timeLimit: 60
    }
  ]
};

export const htmlCssEasySets: QuizSet[] = [htmlEasySet1, cssEasySet1];
export const htmlCssMediumSets: QuizSet[] = [];
export const htmlCssHardSets: QuizSet[] = [];
