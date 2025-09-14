import { QuizSet } from './enhancedQuizStructure';

// Blockchain - Easy Set 1
export const blockchainEasySet1: QuizSet = {
  id: 'blockchain-easy-1',
  setNumber: 1,
  title: 'Blockchain Fundamentals - Set 1',
  subject: 'Blockchain',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'blockchain-e1-1',
      question: 'What is blockchain?',
      options: ['A chain of blocks', 'A distributed ledger technology that maintains records across multiple computers', 'A building material', 'A computer chain'],
      correctAnswer: 1,
      explanation: 'Blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) linked and secured using cryptography.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-2',
      question: 'What is a block in blockchain?',
      options: ['A building block', 'A container that holds transaction data and links to previous blocks', 'A barrier', 'A cube'],
      correctAnswer: 1,
      explanation: 'A block is a container that holds a collection of transaction data and contains a cryptographic link to the previous block.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-3',
      question: 'What is decentralization in blockchain?',
      options: ['Moving to center', 'No single point of control, distributed across multiple nodes', 'Central control', 'Location independence'],
      correctAnswer: 1,
      explanation: 'Decentralization means the blockchain network has no single point of control and is distributed across multiple nodes or computers.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-4',
      question: 'What is Bitcoin?',
      options: ['A bit of coin', 'The first and most well-known cryptocurrency built on blockchain', 'A small coin', 'Digital money'],
      correctAnswer: 1,
      explanation: 'Bitcoin is the first and most well-known cryptocurrency that uses blockchain technology for peer-to-peer digital transactions.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-5',
      question: 'What is cryptocurrency?',
      options: ['Secret currency', 'Digital currency secured by cryptography', 'Hidden money', 'Encrypted cash'],
      correctAnswer: 1,
      explanation: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of central banks.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-6',
      question: 'What is a hash in blockchain?',
      options: ['Chopped food', 'A unique digital fingerprint for data', 'A symbol', 'A tag'],
      correctAnswer: 1,
      explanation: 'A hash is a unique digital fingerprint created by a mathematical algorithm that represents data in a fixed-length string.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-7',
      question: 'What is mining in blockchain?',
      options: ['Digging for blocks', 'The process of validating transactions and adding them to the blockchain', 'Extracting coins', 'Finding blocks'],
      correctAnswer: 1,
      explanation: 'Mining is the computational process of validating transactions and adding new blocks to the blockchain network.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-8',
      question: 'What is a node in blockchain?',
      options: ['A connection point', 'A computer that participates in the blockchain network', 'A network junction', 'A data point'],
      correctAnswer: 1,
      explanation: 'A node is a computer that participates in the blockchain network by maintaining a copy of the ledger and validating transactions.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-9',
      question: 'What is immutability in blockchain?',
      options: ['Cannot change', 'Once data is recorded, it cannot be easily altered or deleted', 'Permanent state', 'Fixed data'],
      correctAnswer: 1,
      explanation: 'Immutability means that once data is recorded in a blockchain, it becomes extremely difficult to alter or delete, ensuring data integrity.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-10',
      question: 'What is transparency in blockchain?',
      options: ['See-through blocks', 'All transactions are visible to network participants', 'Clear data', 'Open information'],
      correctAnswer: 1,
      explanation: 'Transparency in blockchain means all transactions are visible and verifiable by network participants, promoting trust and accountability.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-11',
      question: 'What is a wallet in blockchain?',
      options: ['Money holder', 'A digital tool for storing and managing cryptocurrency', 'Coin purse', 'Storage device'],
      correctAnswer: 1,
      explanation: 'A blockchain wallet is a digital tool that allows users to store, send, and receive cryptocurrencies securely.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-12',
      question: 'What is a transaction in blockchain?',
      options: ['A business deal', 'A transfer of value or data recorded on the blockchain', 'An exchange', 'A trade'],
      correctAnswer: 1,
      explanation: 'A transaction in blockchain is a transfer of value or data that is recorded and verified on the distributed ledger.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-13',
      question: 'What is consensus in blockchain?',
      options: ['Agreement', 'The mechanism by which network participants agree on transaction validity', 'Common opinion', 'Shared decision'],
      correctAnswer: 1,
      explanation: 'Consensus is the mechanism by which all network participants agree on the validity of transactions and the state of the blockchain.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-14',
      question: 'What is Ethereum?',
      options: ['A type of ether', 'A blockchain platform that supports smart contracts', 'A cryptocurrency', 'A mining tool'],
      correctAnswer: 1,
      explanation: 'Ethereum is a blockchain platform that enables smart contracts and decentralized applications (DApps) beyond just cryptocurrency transactions.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-15',
      question: 'What is a smart contract?',
      options: ['An intelligent agreement', 'Self-executing contracts with terms directly written into code', 'A digital contract', 'Automated agreement'],
      correctAnswer: 1,
      explanation: 'A smart contract is a self-executing contract with the terms of agreement directly written into code and automatically enforced.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-16',
      question: 'What is a public blockchain?',
      options: ['Open to public', 'A blockchain network open to anyone to participate', 'Community blockchain', 'Shared blockchain'],
      correctAnswer: 1,
      explanation: 'A public blockchain is open to anyone to participate, view transactions, and contribute to the network without restrictions.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-17',
      question: 'What is a private blockchain?',
      options: ['Personal blockchain', 'A blockchain network restricted to specific participants', 'Secret blockchain', 'Closed blockchain'],
      correctAnswer: 1,
      explanation: 'A private blockchain is restricted to specific participants and is typically controlled by an organization or group.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-18',
      question: 'What is cryptography in blockchain?',
      options: ['Secret writing', 'Mathematical techniques used to secure data and transactions', 'Code creation', 'Data encryption'],
      correctAnswer: 1,
      explanation: 'Cryptography in blockchain uses mathematical techniques to secure data, verify transactions, and maintain network integrity.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-19',
      question: 'What is a ledger?',
      options: ['A book', 'A record-keeping system that tracks all transactions', 'An account book', 'A database'],
      correctAnswer: 1,
      explanation: 'A ledger is a record-keeping system that maintains a complete history of all transactions in chronological order.',
      timeLimit: 60
    },
    {
      id: 'blockchain-e1-20',
      question: 'What is the main benefit of blockchain?',
      options: ['Fast transactions', 'Trust without intermediaries through decentralization and transparency', 'Low cost', 'Easy to use'],
      correctAnswer: 1,
      explanation: 'The main benefit of blockchain is enabling trust between parties without intermediaries through decentralization, transparency, and immutability.',
      timeLimit: 60
    }
  ]
};

// Blockchain - Medium Set 1
export const blockchainMediumSet1: QuizSet = {
  id: 'blockchain-medium-1',
  setNumber: 1,
  title: 'Blockchain Technology - Set 1',
  subject: 'Blockchain',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'blockchain-m1-1',
      question: 'What is Proof of Work (PoW)?',
      options: [
        'Proving you work',
        'A consensus mechanism requiring computational work to validate transactions',
        'Work verification',
        'Employment proof'
      ],
      correctAnswer: 1,
      explanation: 'Proof of Work is a consensus mechanism where miners compete to solve computational puzzles to validate transactions and create new blocks.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-2',
      question: 'What is Proof of Stake (PoS)?',
      options: [
        'Proving ownership',
        'A consensus mechanism where validators are chosen based on their stake in the network',
        'Stake verification',
        'Investment proof'
      ],
      correctAnswer: 1,
      explanation: 'Proof of Stake is a consensus mechanism where validators are chosen to create new blocks based on their stake (ownership) in the network.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-3',
      question: 'What is a Merkle tree?',
      options: [
        'A type of tree',
        'A binary tree structure used to efficiently verify data integrity',
        'A family tree',
        'A decision tree'
      ],
      correctAnswer: 1,
      explanation: 'A Merkle tree is a binary tree structure that allows efficient and secure verification of large data structures by using cryptographic hashes.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-4',
      question: 'What is a fork in blockchain?',
      options: [
        'A dining utensil',
        'A change in blockchain protocol creating a new version',
        'A branch',
        'A split'
      ],
      correctAnswer: 1,
      explanation: 'A fork is a change in the blockchain protocol that creates a new version, which can be either backward-compatible (soft fork) or not (hard fork).',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-5',
      question: 'What is a hard fork?',
      options: [
        'A difficult fork',
        'A permanent divergence from the original blockchain creating incompatible versions',
        'A strong split',
        'A major change'
      ],
      correctAnswer: 1,
      explanation: 'A hard fork is a permanent divergence from the original blockchain that creates incompatible versions, requiring all nodes to upgrade.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-6',
      question: 'What is a soft fork?',
      options: [
        'A gentle fork',
        'A backward-compatible upgrade to the blockchain protocol',
        'A minor change',
        'A temporary split'
      ],
      correctAnswer: 1,
      explanation: 'A soft fork is a backward-compatible upgrade to the blockchain protocol that tightens or adds new rules without breaking compatibility.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-7',
      question: 'What is gas in Ethereum?',
      options: [
        'Fuel for cars',
        'The fee required to execute transactions and smart contracts',
        'A type of energy',
        'Network fuel'
      ],
      correctAnswer: 1,
      explanation: 'Gas in Ethereum is the fee required to execute transactions and smart contracts, measured in computational steps.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-8',
      question: 'What is a DApp?',
      options: [
        'A mobile app',
        'A decentralized application running on blockchain',
        'A desktop application',
        'A web app'
      ],
      correctAnswer: 1,
      explanation: 'A DApp (Decentralized Application) is an application that runs on a blockchain network rather than centralized servers.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-9',
      question: 'What is an ICO?',
      options: [
        'Ice company',
        'Initial Coin Offering - a fundraising method using cryptocurrency tokens',
        'International company',
        'Investment company'
      ],
      correctAnswer: 1,
      explanation: 'ICO (Initial Coin Offering) is a fundraising method where new cryptocurrency projects sell tokens to investors to raise capital.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-10',
      question: 'What is tokenization?',
      options: [
        'Creating tokens',
        'Converting real-world assets into digital tokens on blockchain',
        'Token generation',
        'Digital representation'
      ],
      correctAnswer: 1,
      explanation: 'Tokenization is the process of converting real-world assets or rights into digital tokens that can be stored and traded on blockchain.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-11',
      question: 'What is a 51% attack?',
      options: [
        'Majority attack',
        'When a single entity controls more than 50% of network mining power',
        'Half attack',
        'Percentage attack'
      ],
      correctAnswer: 1,
      explanation: 'A 51% attack occurs when a single entity controls more than 50% of the network\'s mining power, potentially allowing them to manipulate transactions.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-12',
      question: 'What is double spending?',
      options: [
        'Spending twice',
        'Using the same cryptocurrency token in multiple transactions',
        'Duplicate payment',
        'Multiple spending'
      ],
      correctAnswer: 1,
      explanation: 'Double spending is the risk of using the same cryptocurrency token in multiple transactions, which blockchain prevents through consensus mechanisms.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-13',
      question: 'What is a nonce in blockchain?',
      options: [
        'A random number',
        'A number used once in cryptographic communication',
        'A unique identifier',
        'A counter'
      ],
      correctAnswer: 1,
      explanation: 'A nonce (number used once) is a random number used in cryptographic communication to ensure each hash is unique and prevent replay attacks.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-14',
      question: 'What is sharding in blockchain?',
      options: [
        'Breaking into pieces',
        'Dividing the blockchain into smaller, parallel chains to improve scalability',
        'Data fragmentation',
        'Network splitting'
      ],
      correctAnswer: 1,
      explanation: 'Sharding is a scaling technique that divides the blockchain into smaller, parallel chains (shards) to process transactions more efficiently.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-15',
      question: 'What is a sidechain?',
      options: [
        'A chain on the side',
        'A separate blockchain connected to the main blockchain',
        'A secondary chain',
        'An auxiliary chain'
      ],
      correctAnswer: 1,
      explanation: 'A sidechain is a separate blockchain that is connected to the main blockchain, allowing assets to be transferred between them.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-16',
      question: 'What is Lightning Network?',
      options: [
        'Fast network',
        'A layer-2 scaling solution for Bitcoin enabling faster transactions',
        'Electric network',
        'Quick payment system'
      ],
      correctAnswer: 1,
      explanation: 'Lightning Network is a layer-2 scaling solution for Bitcoin that enables faster and cheaper transactions through off-chain payment channels.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-17',
      question: 'What is an oracle in blockchain?',
      options: [
        'A fortune teller',
        'A service that provides external data to smart contracts',
        'A prediction system',
        'A data source'
      ],
      correctAnswer: 1,
      explanation: 'An oracle is a service that provides external, real-world data to smart contracts, enabling them to interact with off-chain information.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-18',
      question: 'What is DeFi?',
      options: [
        'Define Finance',
        'Decentralized Finance - financial services built on blockchain',
        'Digital Finance',
        'Distributed Finance'
      ],
      correctAnswer: 1,
      explanation: 'DeFi (Decentralized Finance) refers to financial services and applications built on blockchain technology without traditional intermediaries.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-19',
      question: 'What is an NFT?',
      options: [
        'New File Type',
        'Non-Fungible Token - unique digital assets on blockchain',
        'Network File Transfer',
        'Next Future Technology'
      ],
      correctAnswer: 1,
      explanation: 'NFT (Non-Fungible Token) represents unique digital assets on blockchain that cannot be replicated or exchanged on a one-to-one basis.',
      timeLimit: 90
    },
    {
      id: 'blockchain-m1-20',
      question: 'What is interoperability in blockchain?',
      options: [
        'Working together',
        'The ability of different blockchain networks to communicate and share data',
        'Cross-platform compatibility',
        'Network connection'
      ],
      correctAnswer: 1,
      explanation: 'Interoperability is the ability of different blockchain networks to communicate, share data, and work together seamlessly.',
      timeLimit: 90
    }
  ]
};

export const blockchainEasySets: QuizSet[] = [blockchainEasySet1];
export const blockchainMediumSets: QuizSet[] = [blockchainMediumSet1];
export const blockchainHardSets: QuizSet[] = [];
