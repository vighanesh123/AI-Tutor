import { QuizSet } from './enhancedQuizStructure';

// IoT - Easy Set 1
export const iotEasySet1: QuizSet = {
  id: 'iot-easy-1',
  setNumber: 1,
  title: 'IoT Fundamentals - Set 1',
  subject: 'IoT',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'iot-e1-1',
      question: 'What does IoT stand for?',
      options: ['Internet of Things', 'Input Output Technology', 'Integrated Online Technology', 'Interactive Object Technology'],
      correctAnswer: 0,
      explanation: 'IoT stands for Internet of Things, referring to the network of physical devices connected to the internet.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-2',
      question: 'What is the Internet of Things?',
      options: ['Internet for things', 'A network of physical devices connected to the internet', 'Things on the internet', 'Online objects'],
      correctAnswer: 1,
      explanation: 'The Internet of Things is a network of physical devices, vehicles, appliances, and other items embedded with electronics, software, sensors, and connectivity.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-3',
      question: 'What is a sensor in IoT?',
      options: ['A feeling device', 'A device that detects and measures physical properties', 'A security device', 'A storage device'],
      correctAnswer: 1,
      explanation: 'A sensor is a device that detects and measures physical properties like temperature, humidity, light, or motion and converts them into signals.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-4',
      question: 'What is an actuator in IoT?',
      options: ['An actor device', 'A device that performs physical actions based on received signals', 'A calculation device', 'A communication device'],
      correctAnswer: 1,
      explanation: 'An actuator is a device that performs physical actions (like turning on lights or opening valves) based on signals received from controllers.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-5',
      question: 'What is a smart home?',
      options: ['An intelligent house', 'A home with IoT devices that can be controlled remotely', 'A modern house', 'An automated house'],
      correctAnswer: 1,
      explanation: 'A smart home uses IoT devices like smart thermostats, lights, and security systems that can be controlled remotely via internet connection.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-6',
      question: 'What is connectivity in IoT?',
      options: ['Being connected', 'The ability of devices to communicate with each other and the internet', 'Network access', 'Device linking'],
      correctAnswer: 1,
      explanation: 'Connectivity in IoT refers to the ability of devices to communicate with each other and the internet using various communication protocols.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-7',
      question: 'What is Wi-Fi in IoT?',
      options: ['Wireless Fidelity', 'A wireless networking technology used to connect IoT devices', 'Internet connection', 'Network protocol'],
      correctAnswer: 1,
      explanation: 'Wi-Fi is a wireless networking technology commonly used to connect IoT devices to the internet and local networks.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-8',
      question: 'What is Bluetooth in IoT?',
      options: ['Blue tooth', 'A short-range wireless communication technology for IoT devices', 'A color technology', 'A dental technology'],
      correctAnswer: 1,
      explanation: 'Bluetooth is a short-range wireless communication technology used for connecting IoT devices over short distances.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-9',
      question: 'What is a microcontroller?',
      options: ['A small controller', 'A small computer that controls IoT devices', 'A tiny remote', 'A mini processor'],
      correctAnswer: 1,
      explanation: 'A microcontroller is a small computer on a single chip that controls the operation of IoT devices by processing sensor data and controlling actuators.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-10',
      question: 'What is Arduino?',
      options: ['A person\'s name', 'An open-source electronics platform for building IoT projects', 'A programming language', 'A sensor type'],
      correctAnswer: 1,
      explanation: 'Arduino is an open-source electronics platform consisting of hardware and software that makes it easy to build IoT projects.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-11',
      question: 'What is Raspberry Pi?',
      options: ['A fruit pie', 'A small single-board computer used for IoT projects', 'A dessert', 'A mathematical constant'],
      correctAnswer: 1,
      explanation: 'Raspberry Pi is a small, affordable single-board computer that can be used to build various IoT projects and applications.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-12',
      question: 'What is data in IoT?',
      options: ['Information', 'Information collected by sensors and transmitted by IoT devices', 'Numbers', 'Facts'],
      correctAnswer: 1,
      explanation: 'Data in IoT refers to the information collected by sensors and transmitted by connected devices for analysis and decision-making.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-13',
      question: 'What is cloud computing in IoT?',
      options: ['Computing in clouds', 'Using remote servers to store and process IoT data', 'Weather computing', 'Sky computing'],
      correctAnswer: 1,
      explanation: 'Cloud computing in IoT involves using remote servers to store, process, and analyze data collected from IoT devices.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-14',
      question: 'What is a smart city?',
      options: ['An intelligent city', 'A city that uses IoT technology to improve services and quality of life', 'A modern city', 'A tech city'],
      correctAnswer: 1,
      explanation: 'A smart city uses IoT technology and data analytics to improve urban services, infrastructure, and quality of life for citizens.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-15',
      question: 'What is wearable technology?',
      options: ['Clothing technology', 'Electronic devices that can be worn on the body', 'Fashion tech', 'Body accessories'],
      correctAnswer: 1,
      explanation: 'Wearable technology consists of electronic devices that can be worn on the body, like smartwatches, fitness trackers, and smart glasses.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-16',
      question: 'What is automation in IoT?',
      options: ['Automatic processes', 'Systems performing tasks without human intervention', 'Self-operation', 'Machine control'],
      correctAnswer: 1,
      explanation: 'Automation in IoT refers to systems and devices performing tasks automatically without human intervention based on sensor data and programmed logic.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-17',
      question: 'What is remote monitoring?',
      options: ['Distant watching', 'Observing and tracking devices or systems from a remote location', 'Far observation', 'Long-distance control'],
      correctAnswer: 1,
      explanation: 'Remote monitoring allows users to observe and track the status and performance of IoT devices or systems from a remote location via internet connection.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-18',
      question: 'What is a gateway in IoT?',
      options: ['An entrance', 'A device that connects IoT devices to the internet or other networks', 'A door', 'A bridge'],
      correctAnswer: 1,
      explanation: 'An IoT gateway is a device that connects IoT devices to the internet or other networks, often providing protocol translation and data processing.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-19',
      question: 'What is interoperability in IoT?',
      options: ['Working together', 'The ability of different IoT devices to work together', 'Cooperation', 'Compatibility'],
      correctAnswer: 1,
      explanation: 'Interoperability in IoT is the ability of different devices, systems, and platforms to work together and exchange information seamlessly.',
      timeLimit: 60
    },
    {
      id: 'iot-e1-20',
      question: 'What is the main benefit of IoT?',
      options: ['Technology advancement', 'Improved efficiency and convenience through connected devices', 'More devices', 'Internet access'],
      correctAnswer: 1,
      explanation: 'The main benefit of IoT is improved efficiency, convenience, and decision-making through the connection and automation of everyday devices.',
      timeLimit: 60
    }
  ]
};

// IoT - Medium Set 1
export const iotMediumSet1: QuizSet = {
  id: 'iot-medium-1',
  setNumber: 1,
  title: 'IoT Technologies and Protocols - Set 1',
  subject: 'IoT',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'iot-m1-1',
      question: 'What is MQTT?',
      options: [
        'Message Queue Telemetry Transport',
        'A lightweight messaging protocol for IoT devices',
        'A database protocol',
        'A web protocol'
      ],
      correctAnswer: 1,
      explanation: 'MQTT (Message Queue Telemetry Transport) is a lightweight messaging protocol designed for IoT devices with limited bandwidth and power.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-2',
      question: 'What is CoAP?',
      options: [
        'Constrained Application Protocol',
        'A web transfer protocol designed for constrained devices',
        'A security protocol',
        'A network protocol'
      ],
      correctAnswer: 1,
      explanation: 'CoAP (Constrained Application Protocol) is a web transfer protocol designed for constrained devices and networks in IoT applications.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-3',
      question: 'What is LoRaWAN?',
      options: [
        'Long Range Wide Area Network',
        'A low-power, long-range wireless communication protocol',
        'A local network',
        'A satellite network'
      ],
      correctAnswer: 1,
      explanation: 'LoRaWAN (Long Range Wide Area Network) is a low-power, long-range wireless communication protocol designed for IoT applications.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-4',
      question: 'What is Zigbee?',
      options: [
        'A type of bee',
        'A low-power, low-data-rate wireless communication standard',
        'A sensor type',
        'A programming language'
      ],
      correctAnswer: 1,
      explanation: 'Zigbee is a low-power, low-data-rate wireless communication standard commonly used for home automation and IoT applications.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-5',
      question: 'What is edge computing in IoT?',
      options: [
        'Computing at the edge',
        'Processing data closer to IoT devices rather than in the cloud',
        'Border computing',
        'Peripheral computing'
      ],
      correctAnswer: 1,
      explanation: 'Edge computing processes data closer to IoT devices rather than sending all data to the cloud, reducing latency and bandwidth usage.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-6',
      question: 'What is fog computing?',
      options: [
        'Computing in fog',
        'A distributed computing paradigm between cloud and edge devices',
        'Cloudy computing',
        'Misty computing'
      ],
      correctAnswer: 1,
      explanation: 'Fog computing is a distributed computing paradigm that extends cloud computing to the edge of the network, closer to IoT devices.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-7',
      question: 'What is device management in IoT?',
      options: [
        'Managing devices',
        'Monitoring, configuring, and maintaining IoT devices remotely',
        'Device control',
        'Hardware management'
      ],
      correctAnswer: 1,
      explanation: 'Device management involves remotely monitoring, configuring, updating, and maintaining IoT devices throughout their lifecycle.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-8',
      question: 'What is OTA in IoT?',
      options: [
        'Over The Air',
        'Wireless method of updating device firmware and software',
        'Online Technology Access',
        'Operational Technology Automation'
      ],
      correctAnswer: 1,
      explanation: 'OTA (Over The Air) is a wireless method of updating firmware and software on IoT devices without physical access.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-9',
      question: 'What is a digital twin?',
      options: [
        'A duplicate device',
        'A virtual representation of a physical IoT device or system',
        'A backup system',
        'A mirror device'
      ],
      correctAnswer: 1,
      explanation: 'A digital twin is a virtual representation of a physical IoT device or system that mirrors its behavior and characteristics in real-time.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-10',
      question: 'What is machine learning in IoT?',
      options: [
        'Teaching machines',
        'Using AI algorithms to analyze IoT data and make predictions',
        'Machine education',
        'Automated learning'
      ],
      correctAnswer: 1,
      explanation: 'Machine learning in IoT uses AI algorithms to analyze data collected from IoT devices to identify patterns and make predictions.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-11',
      question: 'What is predictive maintenance?',
      options: [
        'Predicting maintenance',
        'Using IoT data to predict when equipment needs maintenance',
        'Future maintenance',
        'Scheduled maintenance'
      ],
      correctAnswer: 1,
      explanation: 'Predictive maintenance uses IoT sensors and data analytics to predict when equipment will need maintenance before it fails.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-12',
      question: 'What is Industrial IoT (IIoT)?',
      options: [
        'Industrial Internet of Things',
        'IoT applications in industrial and manufacturing environments',
        'Industry Internet',
        'Industrial Integration'
      ],
      correctAnswer: 1,
      explanation: 'Industrial IoT (IIoT) refers to the application of IoT technology in industrial and manufacturing environments for automation and optimization.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-13',
      question: 'What is a mesh network?',
      options: [
        'A net-like network',
        'A network where devices connect to multiple other devices',
        'A fishing net network',
        'A grid network'
      ],
      correctAnswer: 1,
      explanation: 'A mesh network is a network topology where devices connect to multiple other devices, creating redundant paths for data transmission.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-14',
      question: 'What is data analytics in IoT?',
      options: [
        'Analyzing data',
        'Processing and analyzing IoT data to extract insights and patterns',
        'Data examination',
        'Information analysis'
      ],
      correctAnswer: 1,
      explanation: 'Data analytics in IoT involves processing and analyzing large amounts of data collected from IoT devices to extract meaningful insights.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-15',
      question: 'What is real-time processing in IoT?',
      options: [
        'Processing in real time',
        'Immediate processing and response to IoT data as it arrives',
        'Live processing',
        'Instant processing'
      ],
      correctAnswer: 1,
      explanation: 'Real-time processing in IoT involves immediately processing and responding to data as it arrives from IoT devices without delay.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-16',
      question: 'What is 5G in IoT?',
      options: [
        'Fifth Generation',
        'A high-speed wireless technology enabling advanced IoT applications',
        'Five Gigabytes',
        'Fast network'
      ],
      correctAnswer: 1,
      explanation: '5G is the fifth generation of wireless technology that provides high-speed, low-latency connectivity enabling advanced IoT applications.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-17',
      question: 'What is NB-IoT?',
      options: [
        'Narrowband IoT',
        'A low-power wide-area network technology for IoT devices',
        'Network-Based IoT',
        'New Broadband IoT'
      ],
      correctAnswer: 1,
      explanation: 'NB-IoT (Narrowband IoT) is a low-power wide-area network technology designed specifically for IoT devices requiring long battery life.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-18',
      question: 'What is device provisioning?',
      options: [
        'Providing devices',
        'The process of configuring and authenticating new IoT devices',
        'Device supply',
        'Equipment provision'
      ],
      correctAnswer: 1,
      explanation: 'Device provisioning is the process of configuring, authenticating, and enrolling new IoT devices into a network or system.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-19',
      question: 'What is data aggregation in IoT?',
      options: [
        'Collecting data',
        'Combining data from multiple IoT devices for analysis',
        'Data gathering',
        'Information compilation'
      ],
      correctAnswer: 1,
      explanation: 'Data aggregation involves combining and summarizing data from multiple IoT devices to provide meaningful insights and reduce data volume.',
      timeLimit: 90
    },
    {
      id: 'iot-m1-20',
      question: 'What is latency in IoT?',
      options: [
        'Being late',
        'The delay between data transmission and reception',
        'Time delay',
        'Response time'
      ],
      correctAnswer: 1,
      explanation: 'Latency in IoT refers to the delay between when data is transmitted from an IoT device and when it is received and processed.',
      timeLimit: 90
    }
  ]
};

export const iotEasySets: QuizSet[] = [iotEasySet1];
export const iotMediumSets: QuizSet[] = [iotMediumSet1];
export const iotHardSets: QuizSet[] = [];
