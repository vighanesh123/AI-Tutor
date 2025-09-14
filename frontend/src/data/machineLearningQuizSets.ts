import { QuizSet } from './enhancedQuizStructure';

// Machine Learning - Easy Set 1
export const machineLearningEasySet1: QuizSet = {
  id: 'ml-easy-1',
  setNumber: 1,
  title: 'Machine Learning Basics - Set 1',
  subject: 'Machine Learning',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'ml-e1-1',
      question: 'What is Machine Learning?',
      options: ['Learning about machines', 'A method of data analysis that automates analytical model building', 'A programming language', 'A database system'],
      correctAnswer: 1,
      explanation: 'Machine Learning is a method of data analysis that automates analytical model building using algorithms that iteratively learn from data.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-2',
      question: 'What are the three main types of machine learning?',
      options: ['Fast, Medium, Slow', 'Supervised, Unsupervised, Reinforcement', 'Easy, Medium, Hard', 'Linear, Non-linear, Complex'],
      correctAnswer: 1,
      explanation: 'The three main types are Supervised Learning, Unsupervised Learning, and Reinforcement Learning.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-3',
      question: 'What is supervised learning?',
      options: ['Learning with a teacher', 'Learning from labeled training data', 'Learning without data', 'Learning with supervision'],
      correctAnswer: 1,
      explanation: 'Supervised learning uses labeled training data to learn a mapping function from input variables to output variables.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-4',
      question: 'What is unsupervised learning?',
      options: ['Learning without supervision', 'Learning from data without labeled examples', 'Learning alone', 'Learning without teachers'],
      correctAnswer: 1,
      explanation: 'Unsupervised learning finds hidden patterns in data without labeled examples or explicit feedback.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-5',
      question: 'What is a dataset?',
      options: ['A set of data', 'A collection of data used for training ML models', 'A database table', 'A file format'],
      correctAnswer: 1,
      explanation: 'A dataset is a collection of data, typically organized in a structured format, used for training machine learning models.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-6',
      question: 'What is a feature in machine learning?',
      options: ['A software feature', 'An individual measurable property of observed phenomena', 'A program function', 'A data type'],
      correctAnswer: 1,
      explanation: 'A feature is an individual measurable property or characteristic of a phenomenon being observed.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-7',
      question: 'What is a label in supervised learning?',
      options: ['A name tag', 'The correct answer or target variable', 'A data identifier', 'A category name'],
      correctAnswer: 1,
      explanation: 'A label is the correct answer or target variable that the model is trying to predict.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-8',
      question: 'What is training data?',
      options: ['Data for training', 'Data used to teach the machine learning algorithm', 'Exercise data', 'Practice data'],
      correctAnswer: 1,
      explanation: 'Training data is the dataset used to teach the machine learning algorithm to make predictions or decisions.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-9',
      question: 'What is test data?',
      options: ['Data for testing', 'Data used to evaluate model performance', 'Exam data', 'Sample data'],
      correctAnswer: 1,
      explanation: 'Test data is used to evaluate the performance of a trained model on unseen data.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-10',
      question: 'What is a model in machine learning?',
      options: ['A fashion model', 'A mathematical representation learned from data', 'A template', 'A design pattern'],
      correctAnswer: 1,
      explanation: 'A model is a mathematical representation of a real-world process, learned from training data.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-11',
      question: 'What is prediction?',
      options: ['Telling the future', 'The output of a machine learning model for new input', 'A guess', 'A forecast'],
      correctAnswer: 1,
      explanation: 'Prediction is the output or result produced by a machine learning model when given new input data.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-12',
      question: 'What is classification?',
      options: ['Organizing things', 'Predicting discrete categories or classes', 'Sorting data', 'Grouping items'],
      correctAnswer: 1,
      explanation: 'Classification is a type of supervised learning that predicts discrete categories or classes.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-13',
      question: 'What is regression?',
      options: ['Going backwards', 'Predicting continuous numerical values', 'A statistical method', 'Data analysis'],
      correctAnswer: 1,
      explanation: 'Regression is a type of supervised learning that predicts continuous numerical values.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-14',
      question: 'What is clustering?',
      options: ['Grouping computers', 'Grouping similar data points together', 'Creating clusters', 'Data organization'],
      correctAnswer: 1,
      explanation: 'Clustering is an unsupervised learning technique that groups similar data points together.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-15',
      question: 'What is an algorithm?',
      options: ['A mathematical formula', 'A set of rules or instructions for solving a problem', 'A program', 'A function'],
      correctAnswer: 1,
      explanation: 'An algorithm is a set of rules or instructions designed to solve a specific problem or perform a computation.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-16',
      question: 'What is accuracy in machine learning?',
      options: ['Being precise', 'The percentage of correct predictions', 'Data quality', 'Model speed'],
      correctAnswer: 1,
      explanation: 'Accuracy is the percentage of correct predictions made by the model out of all predictions.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-17',
      question: 'What is overfitting?',
      options: ['Fitting too much', 'When a model performs well on training data but poorly on new data', 'Over-training', 'Too much data'],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model learns the training data too well and fails to generalize to new, unseen data.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-18',
      question: 'What is underfitting?',
      options: ['Not fitting enough', 'When a model is too simple to capture underlying patterns', 'Under-training', 'Too little data'],
      correctAnswer: 1,
      explanation: 'Underfitting occurs when a model is too simple to capture the underlying patterns in the data.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-19',
      question: 'What is cross-validation?',
      options: ['Validating across systems', 'A technique to assess model performance using different data splits', 'Double-checking', 'Data verification'],
      correctAnswer: 1,
      explanation: 'Cross-validation is a technique to evaluate model performance by splitting data into multiple training and validation sets.',
      timeLimit: 60
    },
    {
      id: 'ml-e1-20',
      question: 'What is the difference between AI and Machine Learning?',
      options: ['No difference', 'AI is broader, ML is a subset of AI', 'ML is broader', 'They are opposite'],
      correctAnswer: 1,
      explanation: 'AI is the broader field of making machines intelligent, while ML is a specific subset of AI focused on learning from data.',
      timeLimit: 60
    }
  ]
};

// Machine Learning - Medium Set 1
export const machineLearningMediumSet1: QuizSet = {
  id: 'ml-medium-1',
  setNumber: 1,
  title: 'ML Algorithms & Evaluation - Set 1',
  subject: 'Machine Learning',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'ml-m1-1',
      question: 'What is the bias-variance tradeoff?',
      options: [
        'A trading strategy',
        'The tradeoff between model simplicity and complexity affecting generalization',
        'A statistical concept',
        'A data preprocessing technique'
      ],
      correctAnswer: 1,
      explanation: 'The bias-variance tradeoff describes the relationship between model complexity, underfitting (high bias), and overfitting (high variance).',
      timeLimit: 90
    },
    {
      id: 'ml-m1-2',
      question: 'What is gradient descent?',
      options: [
        'Descending a hill',
        'An optimization algorithm to minimize cost functions',
        'A search algorithm',
        'A data preprocessing step'
      ],
      correctAnswer: 1,
      explanation: 'Gradient descent is an iterative optimization algorithm used to minimize cost functions by moving in the direction of steepest descent.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-3',
      question: 'What is regularization?',
      options: [
        'Making things regular',
        'Techniques to prevent overfitting by adding penalty terms',
        'Data normalization',
        'Feature selection'
      ],
      correctAnswer: 1,
      explanation: 'Regularization techniques prevent overfitting by adding penalty terms to the cost function to discourage complex models.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-4',
      question: 'What is the difference between L1 and L2 regularization?',
      options: [
        'No difference',
        'L1 uses absolute values, L2 uses squared values for penalties',
        'L2 is newer',
        'L1 is for classification only'
      ],
      correctAnswer: 1,
      explanation: 'L1 regularization (Lasso) uses absolute values of parameters, while L2 regularization (Ridge) uses squared values.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-5',
      question: 'What is feature engineering?',
      options: [
        'Engineering features',
        'The process of selecting and transforming features for better model performance',
        'Building software features',
        'Hardware engineering'
      ],
      correctAnswer: 1,
      explanation: 'Feature engineering involves selecting, modifying, or creating features from raw data to improve model performance.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-6',
      question: 'What is dimensionality reduction?',
      options: [
        'Reducing dimensions',
        'Techniques to reduce the number of features while preserving information',
        'Data compression',
        'Feature deletion'
      ],
      correctAnswer: 1,
      explanation: 'Dimensionality reduction techniques reduce the number of features while preserving as much relevant information as possible.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-7',
      question: 'What is Principal Component Analysis (PCA)?',
      options: [
        'A principal analysis',
        'A dimensionality reduction technique that finds principal components',
        'A classification algorithm',
        'A clustering method'
      ],
      correctAnswer: 1,
      explanation: 'PCA is a dimensionality reduction technique that transforms data to lower dimensions by finding principal components.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-8',
      question: 'What is ensemble learning?',
      options: [
        'Learning in groups',
        'Combining multiple models to improve performance',
        'Parallel learning',
        'Collaborative learning'
      ],
      correctAnswer: 1,
      explanation: 'Ensemble learning combines predictions from multiple models to create a stronger predictor than individual models.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-9',
      question: 'What is bagging in ensemble learning?',
      options: [
        'Putting models in bags',
        'Training multiple models on different subsets of data',
        'A packaging technique',
        'Data storage method'
      ],
      correctAnswer: 1,
      explanation: 'Bagging (Bootstrap Aggregating) trains multiple models on different bootstrap samples of the training data.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-10',
      question: 'What is boosting in ensemble learning?',
      options: [
        'Increasing model power',
        'Sequentially training models where each corrects previous errors',
        'Speeding up training',
        'Improving data quality'
      ],
      correctAnswer: 1,
      explanation: 'Boosting sequentially trains models where each new model focuses on correcting errors made by previous models.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-11',
      question: 'What is a Random Forest?',
      options: [
        'A forest with random trees',
        'An ensemble method using multiple decision trees',
        'A search algorithm',
        'A data structure'
      ],
      correctAnswer: 1,
      explanation: 'Random Forest is an ensemble method that combines multiple decision trees using bagging and random feature selection.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-12',
      question: 'What is k-fold cross-validation?',
      options: [
        'Folding data k times',
        'Splitting data into k folds for training and validation',
        'A clustering technique',
        'A feature selection method'
      ],
      correctAnswer: 1,
      explanation: 'K-fold cross-validation splits data into k folds, using k-1 for training and 1 for validation, repeated k times.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-13',
      question: 'What is the confusion matrix?',
      options: [
        'A confusing matrix',
        'A table showing true vs predicted classifications',
        'A mathematical matrix',
        'A data transformation'
      ],
      correctAnswer: 1,
      explanation: 'A confusion matrix is a table that shows the performance of a classification model by comparing true vs predicted labels.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-14',
      question: 'What is precision in classification?',
      options: [
        'Being precise',
        'The ratio of true positives to total predicted positives',
        'Model accuracy',
        'Data quality measure'
      ],
      correctAnswer: 1,
      explanation: 'Precision is the ratio of true positive predictions to the total number of positive predictions made.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-15',
      question: 'What is recall in classification?',
      options: [
        'Remembering results',
        'The ratio of true positives to total actual positives',
        'Model memory',
        'Data retrieval rate'
      ],
      correctAnswer: 1,
      explanation: 'Recall is the ratio of true positive predictions to the total number of actual positive instances.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-16',
      question: 'What is the F1-score?',
      options: [
        'A racing score',
        'The harmonic mean of precision and recall',
        'A performance metric',
        'A statistical measure'
      ],
      correctAnswer: 1,
      explanation: 'F1-score is the harmonic mean of precision and recall, providing a balanced measure of both metrics.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-17',
      question: 'What is the ROC curve?',
      options: [
        'A rock curve',
        'A plot of true positive rate vs false positive rate',
        'A data visualization',
        'A performance graph'
      ],
      correctAnswer: 1,
      explanation: 'ROC (Receiver Operating Characteristic) curve plots true positive rate against false positive rate at various thresholds.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-18',
      question: 'What is AUC in machine learning?',
      options: [
        'Area Under Curve',
        'Area Under the ROC Curve - a measure of classification performance',
        'Automatic Update Control',
        'Advanced User Control'
      ],
      correctAnswer: 1,
      explanation: 'AUC (Area Under the ROC Curve) measures the entire two-dimensional area under the ROC curve, indicating classification performance.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-19',
      question: 'What is hyperparameter tuning?',
      options: [
        'Tuning hyperparameters',
        'Optimizing model configuration parameters to improve performance',
        'Parameter adjustment',
        'Model calibration'
      ],
      correctAnswer: 1,
      explanation: 'Hyperparameter tuning involves optimizing the configuration parameters of ML algorithms to achieve better performance.',
      timeLimit: 90
    },
    {
      id: 'ml-m1-20',
      question: 'What is grid search?',
      options: [
        'Searching in a grid',
        'A method to find optimal hyperparameters by testing all combinations',
        'A search algorithm',
        'A data exploration technique'
      ],
      correctAnswer: 1,
      explanation: 'Grid search systematically tests all possible combinations of hyperparameter values to find the optimal configuration.',
      timeLimit: 90
    }
  ]
};

export const machineLearningEasySets: QuizSet[] = [machineLearningEasySet1];
export const machineLearningMediumSets: QuizSet[] = [machineLearningMediumSet1];
export const machineLearningHardSets: QuizSet[] = [];
