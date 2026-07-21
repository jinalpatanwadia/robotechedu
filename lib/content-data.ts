import { Bot, Cpu, CircuitBoard, Wifi, Zap, Layers, Code as Code2, Lightbulb, Brain, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface TechItem {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const technologies: TechItem[] = [
  { name: 'Artificial Intelligence', icon: Brain, color: 'text-violet-500' },
  { name: 'Robotics', icon: Bot, color: 'text-yellow-500' },
  { name: 'Arduino', icon: Cpu, color: 'text-teal-500' },
  { name: 'IoT', icon: Wifi, color: 'text-sky-500' },
  { name: 'Electronics', icon: Zap, color: 'text-amber-500' },
  { name: 'PCB Design', icon: Layers, color: 'text-emerald-500' },
  { name: 'Embedded Systems', icon: CircuitBoard, color: 'text-rose-500' },
  { name: 'Programming', icon: Code2, color: 'text-indigo-500' },
  { name: 'Design Thinking', icon: Lightbulb, color: 'text-orange-500' },
  { name: 'Innovation', icon: Wrench, color: 'text-cyan-500' },
];

export interface AudienceItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const audiences: AudienceItem[] = [
  {
    title: 'ATL Schools',
    icon: CircuitBoard,
    description: 'Atal Tinkering Lab schools seeking expert mentorship.',
  },
  {
    title: 'CBSE Schools',
    icon: GraduationCapIcon,
    description: 'Curriculum-aligned STEM and robotics integration.',
  },
  {
    title: 'Government Schools',
    icon: BuildingIcon,
    description: 'Affordable, accessible innovation training programs.',
  },
  {
    title: 'Private Schools',
    icon: SchoolIcon,
    description: 'Premium robotics and AI labs for future-ready students.',
  },
  {
    title: 'Engineering Colleges',
    icon: Cpu,
    description: 'Advanced projects, IoT, and embedded systems training.',
  },
  {
    title: 'Universities',
    icon: BookIcon,
    description: 'Research-level AI, ML, and robotics mentorship.',
  },
  {
    title: 'Innovation Clubs',
    icon: Lightbulb,
    description: 'Hackathon prep, prototyping, and creative problem solving.',
  },
  {
    title: 'Startup Teams',
    icon: RocketIcon,
    description: 'SSIP mentorship from idea to pitch to funding.',
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Contact Us',
    description: 'Reach out via the booking form or email to start the conversation.',
    icon: PhoneIcon,
  },
  {
    step: 2,
    title: 'Requirement Discussion',
    description: 'We discuss your goals, student count, and desired outcomes.',
    icon: MessagesIcon,
  },
  {
    step: 3,
    title: 'Workshop Planning',
    description: 'Custom curriculum design, logistics, and scheduling.',
    icon: CalendarIcon,
  },
  {
    step: 4,
    title: 'Training Execution',
    description: 'Hands-on, practical training delivered on-site or online.',
    icon: PresentationIcon,
  },
  {
    step: 5,
    title: 'Certificate & Support',
    description: 'Certificates issued, with ongoing post-workshop support.',
    icon: AwardIcon,
  },
];

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseUs: FeatureItem[] = [
  {
    title: 'Experienced Trainer',
    description: '3+ years of hands-on STEM, robotics, and AI education.',
    icon: UserIcon,
  },
  {
    title: 'Practical Learning',
    description: 'Every session includes real hardware and coding.',
    icon: Wrench,
  },
  {
    title: 'Affordable Programs',
    description: 'Premium quality training at accessible price points.',
    icon: TagIcon,
  },
  {
    title: 'Customized Workshops',
    description: 'Tailored curriculum for each school or college.',
    icon: SettingsIcon,
  },
  {
    title: 'Modern Curriculum',
    description: 'AI, IoT, and robotics aligned with industry trends.',
    icon: BookIcon,
  },
  {
    title: 'Hands-on Learning',
    description: 'Students build, code, and innovate from day one.',
    icon: HandIcon,
  },
  {
    title: 'Startup Guidance',
    description: 'Complete SSIP mentorship from idea to pitch deck.',
    icon: RocketIcon,
  },
  {
    title: 'School & College Training',
    description: 'Programs designed for every education level.',
    icon: SchoolIcon,
  },
];

export interface Counter {
  value: number;
  suffix: string;
  label: string;
}

export const counters: Counter[] = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 50, suffix: '+', label: 'Workshops' },
  { value: 20, suffix: '+', label: 'Schools & Colleges' },
];

export interface Qualification {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const qualifications: Qualification[] = [
  {
    year: 'Education',
    title: 'M.Sc. Electronics',
    subtitle: 'Postgraduate Degree',
    description: 'Advanced study in electronic systems and circuit design.',
  },
  {
    year: 'Education',
    title: 'B.Sc. Instrumentation',
    subtitle: 'Graduate Degree',
    description: 'Foundation in measurement, control, and automation systems.',
  },
  {
    year: 'Experience',
    title: '3+ Years',
    subtitle: 'STEM Education',
    description: 'Training students and institutions across robotics, electronics, and AI.',
  },
  {
    year: 'Role',
    title: 'STEM Educator',
    subtitle: 'AI & Robotics Trainer',
    description: 'Mentoring innovation clubs and guiding student startups.',
  },
];

// Local icon wrappers to avoid extra imports in components
import {
  GraduationCap as GraduationCapIcon,
  Building2 as BuildingIcon,
  School as SchoolIcon,
  BookOpen as BookIcon,
  Rocket as RocketIcon,
  Phone as PhoneIcon,
  MessagesSquare as MessagesIcon,
  CalendarCheck as CalendarIcon,
  Presentation as PresentationIcon,
  Award as AwardIcon,
  User as UserIcon,
  Tag as TagIcon,
  Settings as SettingsIcon,
  Hand as HandIcon,
} from 'lucide-react';
