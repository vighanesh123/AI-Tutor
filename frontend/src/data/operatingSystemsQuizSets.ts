import { QuizSet } from './enhancedQuizStructure';

// Operating Systems - Easy Set 1
export const operatingSystemsEasySet1: QuizSet = {
  id: 'os-easy-1',
  setNumber: 1,
  title: 'Operating Systems Fundamentals - Set 1',
  subject: 'Operating Systems',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'os-e1-1',
      question: 'What is an operating system?',
      options: ['A hardware component', 'System software that manages computer resources', 'An application program', 'A programming language'],
      correctAnswer: 1,
      explanation: 'An operating system is system software that manages computer hardware and software resources.',
      timeLimit: 60
    },
    {
      id: 'os-e1-2',
      question: 'Which of the following is NOT an operating system?',
      options: ['Windows', 'Linux', 'macOS', 'Microsoft Word'],
      correctAnswer: 3,
      explanation: 'Microsoft Word is an application software, not an operating system.',
      timeLimit: 60
    },
    {
      id: 'os-e1-3',
      question: 'What is a process?',
      options: ['A hardware component', 'A program in execution', 'A file on disk', 'A network connection'],
      correctAnswer: 1,
      explanation: 'A process is a program that is currently being executed by the operating system.',
      timeLimit: 60
    },
    {
      id: 'os-e1-4',
      question: 'What is multitasking?',
      options: ['Running one program at a time', 'Running multiple programs simultaneously', 'Installing software', 'Backing up data'],
      correctAnswer: 1,
      explanation: 'Multitasking allows an operating system to run multiple programs simultaneously.',
      timeLimit: 60
    },
    {
      id: 'os-e1-5',
      question: 'What is memory management?',
      options: ['Managing files', 'Managing system memory allocation and deallocation', 'Managing network connections', 'Managing user accounts'],
      correctAnswer: 1,
      explanation: 'Memory management involves allocating and deallocating memory space for programs and processes.',
      timeLimit: 60
    },
    {
      id: 'os-e1-6',
      question: 'What is a file system?',
      options: ['A method of organizing and storing files', 'A type of memory', 'A network protocol', 'A programming language'],
      correctAnswer: 0,
      explanation: 'A file system is a method used by operating systems to organize and store files on storage devices.',
      timeLimit: 60
    },
    {
      id: 'os-e1-7',
      question: 'What is the kernel?',
      options: ['A type of file', 'The core component of an operating system', 'A user interface', 'An application program'],
      correctAnswer: 1,
      explanation: 'The kernel is the core component of an operating system that manages system resources.',
      timeLimit: 60
    },
    {
      id: 'os-e1-8',
      question: 'What is a device driver?',
      options: ['A person who drives devices', 'Software that allows OS to communicate with hardware', 'A type of memory', 'A file format'],
      correctAnswer: 1,
      explanation: 'A device driver is software that allows the operating system to communicate with specific hardware devices.',
      timeLimit: 60
    },
    {
      id: 'os-e1-9',
      question: 'What is virtual memory?',
      options: ['Fake memory', 'A technique that uses disk space as additional RAM', 'A type of cache', 'Network storage'],
      correctAnswer: 1,
      explanation: 'Virtual memory is a technique that uses disk space to extend the apparent amount of RAM available.',
      timeLimit: 60
    },
    {
      id: 'os-e1-10',
      question: 'What is a thread?',
      options: ['A type of cable', 'A lightweight process within a program', 'A file extension', 'A network protocol'],
      correctAnswer: 1,
      explanation: 'A thread is a lightweight unit of execution within a process that can run concurrently.',
      timeLimit: 60
    },
    {
      id: 'os-e1-11',
      question: 'What is scheduling in operating systems?',
      options: ['Planning meetings', 'Determining which process runs when', 'Installing software', 'Managing files'],
      correctAnswer: 1,
      explanation: 'Scheduling is the process of determining which processes get CPU time and in what order.',
      timeLimit: 60
    },
    {
      id: 'os-e1-12',
      question: 'What is a deadlock?',
      options: ['A locked door', 'A situation where processes wait for each other indefinitely', 'A security feature', 'A file permission'],
      correctAnswer: 1,
      explanation: 'A deadlock occurs when two or more processes are blocked forever, waiting for each other.',
      timeLimit: 60
    },
    {
      id: 'os-e1-13',
      question: 'What is the purpose of an interrupt?',
      options: ['To stop the computer', 'To signal the CPU about events requiring attention', 'To delete files', 'To connect to internet'],
      correctAnswer: 1,
      explanation: 'An interrupt is a signal that tells the CPU to stop current execution and handle a specific event.',
      timeLimit: 60
    },
    {
      id: 'os-e1-14',
      question: 'What is a system call?',
      options: ['A phone call to tech support', 'An interface between user programs and OS services', 'A network connection', 'A file operation'],
      correctAnswer: 1,
      explanation: 'A system call is an interface that allows user programs to request services from the operating system.',
      timeLimit: 60
    },
    {
      id: 'os-e1-15',
      question: 'What is the difference between user mode and kernel mode?',
      options: [
        'No difference',
        'User mode has restricted access, kernel mode has full access to system resources',
        'Kernel mode is slower',
        'User mode is newer'
      ],
      correctAnswer: 1,
      explanation: 'User mode restricts access to system resources, while kernel mode allows full access to all system resources.',
      timeLimit: 60
    },
    {
      id: 'os-e1-16',
      question: 'What is a buffer?',
      options: ['A person who buffs', 'A temporary storage area for data', 'A type of memory', 'A network device'],
      correctAnswer: 1,
      explanation: 'A buffer is a temporary storage area used to hold data while it is being transferred between devices.',
      timeLimit: 60
    },
    {
      id: 'os-e1-17',
      question: 'What is spooling?',
      options: ['Winding thread', 'Simultaneous Peripheral Operations On-Line', 'A type of memory', 'A file format'],
      correctAnswer: 1,
      explanation: 'Spooling (Simultaneous Peripheral Operations On-Line) manages input/output operations by queuing them.',
      timeLimit: 60
    },
    {
      id: 'os-e1-18',
      question: 'What is a semaphore?',
      options: ['A traffic signal', 'A synchronization primitive for process coordination', 'A type of memory', 'A file system'],
      correctAnswer: 1,
      explanation: 'A semaphore is a synchronization tool used to coordinate access to shared resources among processes.',
      timeLimit: 60
    },
    {
      id: 'os-e1-19',
      question: 'What is thrashing?',
      options: ['Physical damage', 'Excessive paging activity that degrades performance', 'A type of virus', 'Network congestion'],
      correctAnswer: 1,
      explanation: 'Thrashing occurs when a system spends more time paging than executing processes, severely degrading performance.',
      timeLimit: 60
    },
    {
      id: 'os-e1-20',
      question: 'What is the boot process?',
      options: ['Putting on boots', 'The process of starting up a computer system', 'Installing software', 'Connecting to network'],
      correctAnswer: 1,
      explanation: 'The boot process is the sequence of operations that starts up a computer system and loads the operating system.',
      timeLimit: 60
    }
  ]
};

// Operating Systems - Medium Set 1
export const operatingSystemsMediumSet1: QuizSet = {
  id: 'os-medium-1',
  setNumber: 1,
  title: 'Process Management & Synchronization - Set 1',
  subject: 'Operating Systems',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'os-m1-1',
      question: 'What are the different states of a process?',
      options: [
        'Running, Waiting',
        'New, Ready, Running, Waiting, Terminated',
        'Active, Inactive',
        'Start, Stop'
      ],
      correctAnswer: 1,
      explanation: 'Process states include New, Ready, Running, Waiting (Blocked), and Terminated.',
      timeLimit: 90
    },
    {
      id: 'os-m1-2',
      question: 'What is the difference between preemptive and non-preemptive scheduling?',
      options: [
        'No difference',
        'Preemptive can interrupt running processes, non-preemptive cannot',
        'Non-preemptive is faster',
        'Preemptive is older'
      ],
      correctAnswer: 1,
      explanation: 'Preemptive scheduling can interrupt and switch processes, while non-preemptive scheduling waits for processes to complete or block.',
      timeLimit: 90
    },
    {
      id: 'os-m1-3',
      question: 'What is the Round Robin scheduling algorithm?',
      options: [
        'First Come First Serve',
        'Each process gets a fixed time slice in circular order',
        'Shortest job first',
        'Priority-based scheduling'
      ],
      correctAnswer: 1,
      explanation: 'Round Robin gives each process a fixed time quantum in a circular queue fashion.',
      timeLimit: 90
    },
    {
      id: 'os-m1-4',
      question: 'What is the critical section problem?',
      options: [
        'A hardware problem',
        'Ensuring mutual exclusion when processes access shared resources',
        'A network issue',
        'A file system error'
      ],
      correctAnswer: 1,
      explanation: 'The critical section problem involves ensuring that only one process can access shared resources at a time.',
      timeLimit: 90
    },
    {
      id: 'os-m1-5',
      question: 'What is a mutex?',
      options: [
        'A type of memory',
        'A mutual exclusion object for synchronization',
        'A file format',
        'A network protocol'
      ],
      correctAnswer: 1,
      explanation: 'A mutex (mutual exclusion) is a synchronization primitive that ensures only one thread can access a resource at a time.',
      timeLimit: 90
    },
    {
      id: 'os-m1-6',
      question: 'What is the producer-consumer problem?',
      options: [
        'An economic problem',
        'A synchronization problem involving shared buffer between producer and consumer processes',
        'A network issue',
        'A file system problem'
      ],
      correctAnswer: 1,
      explanation: 'The producer-consumer problem involves synchronizing access to a shared buffer between processes that produce and consume data.',
      timeLimit: 90
    },
    {
      id: 'os-m1-7',
      question: 'What is the dining philosophers problem?',
      options: [
        'A restaurant problem',
        'A classic synchronization problem illustrating deadlock and resource sharing',
        'A network protocol',
        'A file system issue'
      ],
      correctAnswer: 1,
      explanation: 'The dining philosophers problem illustrates synchronization issues and potential deadlocks in concurrent systems.',
      timeLimit: 90
    },
    {
      id: 'os-m1-8',
      question: 'What is paging?',
      options: [
        'Reading pages',
        'A memory management technique that divides memory into fixed-size pages',
        'A file operation',
        'A network protocol'
      ],
      correctAnswer: 1,
      explanation: 'Paging is a memory management technique that divides physical memory into fixed-size blocks called pages.',
      timeLimit: 90
    },
    {
      id: 'os-m1-9',
      question: 'What is segmentation?',
      options: [
        'Dividing files',
        'A memory management technique that divides memory into variable-size segments',
        'A network operation',
        'A file system feature'
      ],
      correctAnswer: 1,
      explanation: 'Segmentation divides memory into variable-size segments based on logical divisions of a program.',
      timeLimit: 90
    },
    {
      id: 'os-m1-10',
      question: 'What is a page fault?',
      options: [
        'A book error',
        'An interrupt that occurs when a requested page is not in memory',
        'A network error',
        'A file system error'
      ],
      correctAnswer: 1,
      explanation: 'A page fault occurs when a program tries to access a page that is not currently in physical memory.',
      timeLimit: 90
    },
    {
      id: 'os-m1-11',
      question: 'What is the difference between internal and external fragmentation?',
      options: [
        'No difference',
        'Internal fragmentation wastes space within allocated blocks, external fragmentation creates unusable gaps between blocks',
        'External fragmentation is worse',
        'Internal fragmentation is newer'
      ],
      correctAnswer: 1,
      explanation: 'Internal fragmentation wastes space within allocated memory blocks, while external fragmentation creates unusable gaps between allocated blocks.',
      timeLimit: 90
    },
    {
      id: 'os-m1-12',
      question: 'What is the working set model?',
      options: [
        'A work schedule',
        'A model that defines the set of pages a process is actively using',
        'A network model',
        'A file system model'
      ],
      correctAnswer: 1,
      explanation: 'The working set model defines the set of pages that a process has referenced in the recent past.',
      timeLimit: 90
    },
    {
      id: 'os-m1-13',
      question: 'What is the difference between logical and physical addresses?',
      options: [
        'No difference',
        'Logical addresses are generated by CPU, physical addresses are actual memory locations',
        'Physical addresses are faster',
        'Logical addresses are newer'
      ],
      correctAnswer: 1,
      explanation: 'Logical addresses are generated by the CPU and translated to physical addresses by the memory management unit.',
      timeLimit: 90
    },
    {
      id: 'os-m1-14',
      question: 'What is demand paging?',
      options: [
        'Requesting pages',
        'Loading pages into memory only when they are needed',
        'A network protocol',
        'A file system feature'
      ],
      correctAnswer: 1,
      explanation: 'Demand paging loads pages into memory only when they are accessed, reducing memory usage.',
      timeLimit: 90
    },
    {
      id: 'os-m1-15',
      question: 'What is the LRU page replacement algorithm?',
      options: [
        'Last Recently Used',
        'Least Recently Used - replaces the page that has not been used for the longest time',
        'Latest Resource Update',
        'Limited Resource Usage'
      ],
      correctAnswer: 1,
      explanation: 'LRU (Least Recently Used) replaces the page that has not been accessed for the longest period of time.',
      timeLimit: 90
    },
    {
      id: 'os-m1-16',
      question: 'What is the FIFO page replacement algorithm?',
      options: [
        'Fast In Fast Out',
        'First In First Out - replaces the oldest page in memory',
        'Final In Final Out',
        'First Input First Output'
      ],
      correctAnswer: 1,
      explanation: 'FIFO (First In First Out) replaces the page that has been in memory the longest.',
      timeLimit: 90
    },
    {
      id: 'os-m1-17',
      question: 'What is a race condition?',
      options: [
        'A car race',
        'A situation where the outcome depends on the timing of events',
        'A network condition',
        'A file system state'
      ],
      correctAnswer: 1,
      explanation: 'A race condition occurs when the behavior of a system depends on the relative timing of events.',
      timeLimit: 90
    },
    {
      id: 'os-m1-18',
      question: 'What is starvation in operating systems?',
      options: [
        'Lack of food',
        'A situation where a process is perpetually denied necessary resources',
        'Low memory condition',
        'Network congestion'
      ],
      correctAnswer: 1,
      explanation: 'Starvation occurs when a process is indefinitely delayed because other processes are continuously given preference.',
      timeLimit: 90
    },
    {
      id: 'os-m1-19',
      question: 'What is the aging technique?',
      options: [
        'Making systems older',
        'Gradually increasing the priority of waiting processes',
        'Reducing system performance',
        'Updating software'
      ],
      correctAnswer: 1,
      explanation: 'Aging is a technique that gradually increases the priority of processes that have been waiting for a long time.',
      timeLimit: 90
    },
    {
      id: 'os-m1-20',
      question: 'What is context switching?',
      options: [
        'Changing contexts',
        'Saving and restoring the state when switching between processes',
        'Changing user interfaces',
        'Switching networks'
      ],
      correctAnswer: 1,
      explanation: 'Context switching involves saving the current process state and restoring the state of the next process to be executed.',
      timeLimit: 90
    }
  ]
};

export const operatingSystemsEasySets: QuizSet[] = [operatingSystemsEasySet1];
export const operatingSystemsMediumSets: QuizSet[] = [operatingSystemsMediumSet1];
export const operatingSystemsHardSets: QuizSet[] = [];
