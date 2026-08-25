import { ServiceItem, FeatureItem, StepItem, ReviewItem } from '../types';

export const PARTNERS = [
  { name: 'PERF⚡ROCKS', icon: 'zap' },
  { name: 'NCR', icon: 'activity' },
  { name: 'monday.com', icon: 'layout-grid' },
  { name: 'supabase', icon: 'database' },
  { name: 'ZULIP', icon: 'message-square' },
  { name: 'woopra', icon: 'bar-chart-3' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential',
    number: '01',
    title: 'RESIDENTIAL ELECTRICAL SERVICES',
    items: [
      'Wiring & Rewiring',
      'Lighting Installation & Repair',
      'Switchboards & Sockets',
      'Fan Installation & Repair',
      'Appliance Setup & Connection',
    ],
    iconType: 'residential',
    popular: true,
  },
  {
    id: 'panel-safety',
    number: '02',
    title: 'SAFETY, PROTECTION & PANEL SERVICES',
    items: [
      'Circuit Breakers & Fuses',
      'Distribution Board (DB) Upgrades',
      'Earthing & Grounding',
      'Surge Protection',
    ],
    iconType: 'panel',
  },
  {
    id: 'backup-power',
    number: '03',
    title: 'BACKUP POWER & ENERGY SOLUTIONS',
    items: [
      'Inverter & Battery Setup',
      'Generator Hookups',
      'EV Charger Installation',
      'Solar Panel Wiring',
    ],
    iconType: 'backup',
  },
  {
    id: 'smart-home',
    number: '04',
    title: 'SMART HOME & LOW-VOLTAGE SERVICES',
    items: [
      'Smart Home Automation',
      'Security Systems',
      'Networking & Communication',
    ],
    iconType: 'smart',
  },
  {
    id: 'maintenance',
    number: '05',
    title: 'MAINTENANCE & TROUBLESHOOTING (REPAIR SERVICES)',
    items: [
      'Fault Finding & Diagnostics',
      'Load Assessment & Power Audits',
      'Preventive Inspections',
      'Emergency Repair Services',
    ],
    iconType: 'maintenance',
    popular: true,
  },
  ];

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    id: 'exp',
    icon: 'user-check',
    title: 'EXPERIENCED PROFESSIONALS',
    description: 'Skilled and certified electricians with years of hands-on experience.',
  },
  {
    id: 'fast',
    icon: 'timer',
    title: 'FAST RESPONSE',
    description: 'We value your time and respond quickly to every service request and emergency.',
  },
  {
    id: 'safety',
    icon: 'shield-check',
    title: 'SAFETY FIRST',
    description: 'All work is performed with strict attention to safety standards and best practices.',
  },
  {
    id: 'pricing',
    icon: 'tag',
    title: 'TRANSPARENT PRICING',
    description: 'Honest, upfront pricing with no hidden charges. What we quote is what you pay.',
  },
  {
    id: 'quality',
    icon: 'award',
    title: 'QUALITY WORKMANSHIP',
    description: 'We take pride in delivering neat, reliable and long-lasting electrical solutions.',
  },
  {
    id: 'satisfaction',
    icon: 'users',
    title: 'CUSTOMER SATISFACTION',
    description: 'Your satisfaction is our priority and we go the extra mile to exceed expectations.',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'CHOOSE A SERVICE',
    description: 'Select the electrical service you need from our wide range of solutions.',
    icon: 'clipboard-list',
  },
  {
    number: '02',
    title: 'PICK DATE & TIME',
    description: 'Choose a convenient date and time that works best for you.',
    icon: 'calendar',
  },
  {
    number: '03',
    title: 'SHARE YOUR DETAILS',
    description: 'Fill in your details and describe the work you need.',
    icon: 'file-text',
  },
  {
    number: '04',
    title: 'CONFIRM & PAY',
    description: 'Pay a small confirmation token to reserve your service slot.',
    icon: 'credit-card',
  },
  {
    number: '05',
    title: 'WE GET TO WORK',
    description: 'Our electrician arrives on time and gets the job done safely and professionally.',
    icon: 'hard-hat',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Homeowner',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    content: 'Excellent service! He was on time, fixed the wiring issue quickly and made sure everything was perfect. Very professional work.',
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'Homeowner',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    content: 'Very reliable and polite. Installed all the lights and fans perfectly. The work quality is outstanding and pricing is also fair.',
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Office Manager',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    content: 'We hired him for our office electrical setup. Very neat work, good cable management and everything was completed on time.',
  },
  {
    id: '4',
    name: 'Neha Kapoor',
    role: 'Homeowner',
    location: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    content: 'Had an emergency at night and he came within 30 minutes! Solved the issue quickly. Truly a dependable electrician.',
  },
  {
    id: '5',
    name: 'Vikram Sengupta',
    role: 'Property Developer',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    content: 'ChauhánElectrix managed full commercial panel installation and surge protection for our tech hub. Zero downtime, top-tier safety standards!',
  },
  {
    id: '6',
    name: 'Ananya Deshmukh',
    role: 'Villa Owner',
    location: 'Goa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80',
    rating: 5,
    content: 'Smart home lighting setup and solar inverter integration done with incredible attention to detail. Highly recommend ChauhánElectrix.',
  },
];

export const TECHNICIANS_DATA = [
  {
    id: 'tech-1',
    name: 'Rajesh Kumar',
    title: 'Lead Master Electrician',
    experience: '12+ Years Exp',
    rating: 4.9,
    jobsCompleted: '1,420+',
    specialty: 'High Voltage & Industrial Panels',
    badge: 'Certified Master Electrician',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: 'tech-2',
    name: 'Suresh Patel',
    title: 'Emergency Diagnostics Specialist',
    experience: '9+ Years Exp',
    rating: 4.95,
    jobsCompleted: '980+',
    specialty: 'Short Circuit & Breaker Tripping',
    badge: 'Rapid Response Unit',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: 'tech-3',
    name: 'Manoj Singh',
    title: 'Smart Automation & Solar Tech',
    experience: '8+ Years Exp',
    rating: 4.88,
    jobsCompleted: '740+',
    specialty: 'EV Chargers, Solar & IoT',
    badge: 'Green Energy Certified',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=700&q=80',
  }
];

export const FAQ_DATA = [
  {
    q: 'How fast can an emergency electrician arrive at my location?',
    a: 'Our on-call rapid response units typically arrive within 30 to 45 minutes for emergency short-circuits, sparking breakers, or complete outages.',
  },
  {
    q: 'Are your electricians licensed and background-verified?',
    a: 'Yes, 100% of our electricians hold verified electrical licenses, pass rigorous multi-level background checks, and are insured for total peace of mind.',
  },
  {
    q: 'Do you provide transparent quotes before starting work?',
    a: 'Absolutely. We provide clear, itemized quotes before picking up a single tool with no hidden costs or surprise surcharges.',
  },
  {
    q: 'Do you provide warranties on repairs and installations?',
    a: 'We offer a standard 90-day service warranty on all repair works and up to 1-year guarantee on new panel and wiring installations.',
  },
];
