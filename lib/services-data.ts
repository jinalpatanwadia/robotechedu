export interface Service {
  id: string;
  title: string;
  icon: string;
  duration?: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: 'atl-expert-lecture',
    title: 'ATL Expert Lecture',
    icon: 'GraduationCap',
    duration: '1–3 Hours',
    price: '₹1500',
    features: [
      'ATL Awareness',
      'Innovation',
      'Design Thinking',
      'Hands-on Activities',
    ],
  },
  {
    id: 'robotics-workshop',
    title: 'Robotics Workshop',
    icon: 'Bot',
    price: '₹1500',
    features: [
      'Arduino',
      'Sensors',
      'Programming',
      'Robot Building',
      'IoT Basics',
    ],
    highlight: true,
  },
  {
    id: 'innovation-club-training',
    title: 'Innovation Club Training',
    icon: 'Lightbulb',
    price: '₹1500',
    features: [
      'Innovation Activities',
      'Prototype Development',
      'Creative Thinking',
      'Problem Solving',
      'Hackathons',
    ],
  },
  {
    id: 'ai-robotics-lab-training',
    title: 'AI Robotics Lab Training',
    icon: 'Cpu',
    price: '₹1500',
    features: [
      'Artificial Intelligence',
      'Machine Learning Basics',
      'Arduino',
      'ESP32',
      'Electronics',
      'IoT',
      'Robotics',
    ],
    highlight: true,
  },
  {
    id: 'project-development',
    title: 'Project Development',
    icon: 'Wrench',
    price: 'According to Project',
    features: [
      'School Projects',
      'College Projects',
      'Robotics',
      'IoT',
      'PCB',
      'Electronics',
      'Documentation',
    ],
  },
  {
    id: 'student-startup-mentorship',
    title: 'Student Startup Mentorship (SSIP)',
    icon: 'Rocket',
    price: '₹1000',
    priceNote: 'per Team',
    features: [
      'Idea Selection',
      'Prototype',
      'Pitch Deck',
      'Business Model',
      'Presentation',
      'Funding Guidance',
      'Documentation',
      'Complete SSIP Mentorship',
    ],
  },
];

export const serviceOptions = services.map((s) => ({
  value: s.title,
  label: s.title,
}));
