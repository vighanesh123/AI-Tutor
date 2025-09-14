import { QuizSet } from './enhancedQuizStructure';

// Computer Networks - Easy Set 1
export const computerNetworksEasySet1: QuizSet = {
  id: 'networks-easy-1',
  setNumber: 1,
  title: 'Computer Networks Basics - Set 1',
  subject: 'Computer Networks',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'networks-e1-1',
      question: 'What does LAN stand for?',
      options: ['Large Area Network', 'Local Area Network', 'Long Area Network', 'Limited Area Network'],
      correctAnswer: 1,
      explanation: 'LAN stands for Local Area Network, which connects devices in a limited geographical area.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-2',
      question: 'What does WAN stand for?',
      options: ['Wide Area Network', 'World Area Network', 'Wireless Area Network', 'Web Area Network'],
      correctAnswer: 0,
      explanation: 'WAN stands for Wide Area Network, which covers a large geographical area.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-3',
      question: 'What is the Internet?',
      options: ['A single network', 'A network of networks', 'A computer', 'A software'],
      correctAnswer: 1,
      explanation: 'The Internet is a global network of interconnected networks.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-4',
      question: 'What does IP stand for?',
      options: ['Internet Protocol', 'Internal Protocol', 'Information Protocol', 'Integrated Protocol'],
      correctAnswer: 0,
      explanation: 'IP stands for Internet Protocol, which defines how data is sent over networks.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-5',
      question: 'What is an IP address?',
      options: ['A physical address', 'A unique identifier for devices on a network', 'A website name', 'A password'],
      correctAnswer: 1,
      explanation: 'An IP address is a unique numerical identifier assigned to each device on a network.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-6',
      question: 'What does HTTP stand for?',
      options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'Home Text Transfer Protocol', 'Host Text Transfer Protocol'],
      correctAnswer: 0,
      explanation: 'HTTP stands for HyperText Transfer Protocol, used for web communication.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-7',
      question: 'What is a router?',
      options: ['A storage device', 'A device that forwards data between networks', 'A display device', 'A input device'],
      correctAnswer: 1,
      explanation: 'A router is a networking device that forwards data packets between computer networks.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-8',
      question: 'What is a switch?',
      options: ['A power button', 'A device that connects devices within a network', 'A cable', 'A software'],
      correctAnswer: 1,
      explanation: 'A switch is a networking device that connects devices within the same network.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-9',
      question: 'What does DNS stand for?',
      options: ['Domain Name System', 'Data Network System', 'Digital Name Service', 'Direct Network Service'],
      correctAnswer: 0,
      explanation: 'DNS stands for Domain Name System, which translates domain names to IP addresses.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-10',
      question: 'What is bandwidth?',
      options: ['Width of a band', 'The amount of data that can be transmitted over a network', 'Network speed', 'Cable thickness'],
      correctAnswer: 1,
      explanation: 'Bandwidth refers to the maximum amount of data that can be transmitted over a network connection.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-11',
      question: 'What is a protocol?',
      options: ['A type of cable', 'A set of rules for communication', 'A network device', 'A software application'],
      correctAnswer: 1,
      explanation: 'A protocol is a set of rules that define how devices communicate over a network.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-12',
      question: 'What does TCP stand for?',
      options: ['Transfer Control Protocol', 'Transmission Control Protocol', 'Transport Control Protocol', 'Terminal Control Protocol'],
      correctAnswer: 1,
      explanation: 'TCP stands for Transmission Control Protocol, which ensures reliable data transmission.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-13',
      question: 'What does UDP stand for?',
      options: ['User Datagram Protocol', 'Universal Data Protocol', 'Unified Datagram Protocol', 'Updated Data Protocol'],
      correctAnswer: 0,
      explanation: 'UDP stands for User Datagram Protocol, a connectionless transport protocol.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-14',
      question: 'What is a firewall?',
      options: ['A physical wall', 'A security system that monitors network traffic', 'A type of cable', 'A network protocol'],
      correctAnswer: 1,
      explanation: 'A firewall is a security system that monitors and controls incoming and outgoing network traffic.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-15',
      question: 'What is Ethernet?',
      options: ['A type of internet', 'A wired networking technology', 'A wireless protocol', 'A web browser'],
      correctAnswer: 1,
      explanation: 'Ethernet is a wired networking technology commonly used in LANs.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-16',
      question: 'What does WiFi stand for?',
      options: ['Wireless Fidelity', 'Wide Frequency', 'Wireless Frequency', 'Web Fidelity'],
      correctAnswer: 0,
      explanation: 'WiFi stands for Wireless Fidelity, a wireless networking technology.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-17',
      question: 'What is a MAC address?',
      options: ['A computer brand', 'A unique hardware identifier', 'A software address', 'A network protocol'],
      correctAnswer: 1,
      explanation: 'MAC (Media Access Control) address is a unique identifier assigned to network interfaces.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-18',
      question: 'What is a hub?',
      options: ['A central location', 'A basic networking device that connects multiple devices', 'A software', 'A cable type'],
      correctAnswer: 1,
      explanation: 'A hub is a basic networking device that connects multiple devices in a network segment.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-19',
      question: 'What is packet switching?',
      options: ['Switching packets', 'A method of data transmission where data is broken into packets', 'A network device', 'A cable type'],
      correctAnswer: 1,
      explanation: 'Packet switching is a method where data is broken into packets and transmitted independently.',
      timeLimit: 60
    },
    {
      id: 'networks-e1-20',
      question: 'What is the OSI model?',
      options: ['A computer model', 'A 7-layer network communication model', 'A network device', 'A protocol'],
      correctAnswer: 1,
      explanation: 'The OSI model is a 7-layer conceptual framework that describes network communication.',
      timeLimit: 60
    }
  ]
};

// Computer Networks - Medium Set 1
export const computerNetworksMediumSet1: QuizSet = {
  id: 'networks-medium-1',
  setNumber: 1,
  title: 'Network Protocols & Architecture - Set 1',
  subject: 'Computer Networks',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'networks-m1-1',
      question: 'How many layers are in the OSI model?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 2,
      explanation: 'The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-2',
      question: 'Which layer of the OSI model handles routing?',
      options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
      correctAnswer: 1,
      explanation: 'The Network Layer (Layer 3) is responsible for routing packets between different networks.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-3',
      question: 'What is the difference between TCP and UDP?',
      options: [
        'No difference',
        'TCP is reliable and connection-oriented, UDP is unreliable and connectionless',
        'UDP is faster than TCP',
        'TCP is newer than UDP'
      ],
      correctAnswer: 1,
      explanation: 'TCP provides reliable, connection-oriented communication while UDP is faster but unreliable and connectionless.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-4',
      question: 'What is the default port number for HTTP?',
      options: ['21', '23', '80', '443'],
      correctAnswer: 2,
      explanation: 'HTTP uses port 80 by default for web communication.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-5',
      question: 'What is the default port number for HTTPS?',
      options: ['80', '443', '21', '25'],
      correctAnswer: 1,
      explanation: 'HTTPS uses port 443 by default for secure web communication.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-6',
      question: 'What is subnetting?',
      options: [
        'Creating subnetworks',
        'Dividing a network into smaller logical networks',
        'Connecting networks',
        'Network security'
      ],
      correctAnswer: 1,
      explanation: 'Subnetting is the practice of dividing a network into smaller, more manageable subnetworks.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-7',
      question: 'What is a subnet mask?',
      options: [
        'A network security feature',
        'A value that determines which part of IP address is network and host',
        'A type of router',
        'A network protocol'
      ],
      correctAnswer: 1,
      explanation: 'A subnet mask determines which portion of an IP address represents the network and which represents the host.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-8',
      question: 'What is DHCP?',
      options: [
        'Dynamic Host Configuration Protocol',
        'Direct Host Communication Protocol',
        'Distributed Host Control Protocol',
        'Digital Host Configuration Protocol'
      ],
      correctAnswer: 0,
      explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-9',
      question: 'What is NAT?',
      options: [
        'Network Access Technology',
        'Network Address Translation',
        'Network Authentication Token',
        'Network Application Transfer'
      ],
      correctAnswer: 1,
      explanation: 'NAT (Network Address Translation) allows multiple devices to share a single public IP address.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-10',
      question: 'What is the purpose of ARP?',
      options: [
        'Address Resolution Protocol - maps IP addresses to MAC addresses',
        'Application Request Protocol',
        'Automatic Routing Protocol',
        'Access Request Protocol'
      ],
      correctAnswer: 0,
      explanation: 'ARP (Address Resolution Protocol) maps IP addresses to MAC addresses in local networks.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-11',
      question: 'What is a VLAN?',
      options: [
        'Virtual Local Area Network',
        'Very Large Area Network',
        'Variable Length Area Network',
        'Verified Local Area Network'
      ],
      correctAnswer: 0,
      explanation: 'VLAN (Virtual Local Area Network) logically segments a physical network into multiple broadcast domains.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-12',
      question: 'What is the difference between a hub and a switch?',
      options: [
        'No difference',
        'Hub operates at Physical layer, Switch operates at Data Link layer',
        'Switch is older technology',
        'Hub is faster'
      ],
      correctAnswer: 1,
      explanation: 'Hubs operate at the Physical layer and create collision domains, while switches operate at Data Link layer and create separate collision domains for each port.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-13',
      question: 'What is collision domain?',
      options: [
        'A network security zone',
        'A network segment where collisions can occur',
        'A type of network topology',
        'A routing protocol'
      ],
      correctAnswer: 1,
      explanation: 'A collision domain is a network segment where data collisions can occur when multiple devices transmit simultaneously.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-14',
      question: 'What is broadcast domain?',
      options: [
        'A domain for broadcasting',
        'A network segment where broadcast frames are propagated',
        'A type of network protocol',
        'A security feature'
      ],
      correctAnswer: 1,
      explanation: 'A broadcast domain is a network segment where broadcast frames sent by any device reach all other devices.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-15',
      question: 'What is the maximum length of an Ethernet cable (Cat5e)?',
      options: ['50 meters', '100 meters', '150 meters', '200 meters'],
      correctAnswer: 1,
      explanation: 'The maximum length for Cat5e Ethernet cable is 100 meters (328 feet) for reliable data transmission.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-16',
      question: 'What is the difference between half-duplex and full-duplex?',
      options: [
        'No difference',
        'Half-duplex allows communication in one direction at a time, full-duplex allows simultaneous bidirectional communication',
        'Full-duplex is slower',
        'Half-duplex is newer'
      ],
      correctAnswer: 1,
      explanation: 'Half-duplex allows communication in only one direction at a time, while full-duplex allows simultaneous bidirectional communication.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-17',
      question: 'What is CSMA/CD?',
      options: [
        'Carrier Sense Multiple Access with Collision Detection',
        'Computer System Multiple Access Control Device',
        'Central System Management Access Control',
        'Communication System Multiple Access Control'
      ],
      correctAnswer: 0,
      explanation: 'CSMA/CD is a network access method used in Ethernet to detect and handle collisions.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-18',
      question: 'What is the purpose of spanning tree protocol?',
      options: [
        'To create network trees',
        'To prevent loops in switched networks',
        'To improve network speed',
        'To provide network security'
      ],
      correctAnswer: 1,
      explanation: 'Spanning Tree Protocol (STP) prevents loops in switched networks by blocking redundant paths.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-19',
      question: 'What is Quality of Service (QoS)?',
      options: [
        'Network quality measurement',
        'Techniques to manage network traffic and ensure performance',
        'Network security protocol',
        'Network monitoring tool'
      ],
      correctAnswer: 1,
      explanation: 'QoS refers to techniques used to manage network traffic and ensure adequate performance for critical applications.',
      timeLimit: 90
    },
    {
      id: 'networks-m1-20',
      question: 'What is the difference between static and dynamic routing?',
      options: [
        'No difference',
        'Static routes are manually configured, dynamic routes are automatically learned',
        'Dynamic routing is slower',
        'Static routing is newer'
      ],
      correctAnswer: 1,
      explanation: 'Static routes are manually configured by administrators, while dynamic routes are automatically learned and updated by routing protocols.',
      timeLimit: 90
    }
  ]
};

export const computerNetworksEasySets: QuizSet[] = [computerNetworksEasySet1];
export const computerNetworksMediumSets: QuizSet[] = [computerNetworksMediumSet1];
export const computerNetworksHardSets: QuizSet[] = [];
