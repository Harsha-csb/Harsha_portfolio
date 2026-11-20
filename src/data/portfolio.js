/**
 * =====================================================================
 *  PORTFOLIO CONTENT
 * =====================================================================
 *  Single source of truth for everything shown on the site.
 *
 *  NOTE: Fields marked  // TODO: replace  are still placeholders — swap
 *  them with your real details (profile links, certificates, projects).
 * =====================================================================
 */

/* ---------- Icons (react-icons) ---------- */
import {
  SiC,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiSpringboot,
  SiEclipseide,
  SiXampp,
} from 'react-icons/si'
import {
  FaJava,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaBriefcase,
  FaMicrosoft,
  FaServer,
  FaProjectDiagram,
} from 'react-icons/fa'
import {
  FiCpu,
  FiLayers,
  FiAlertTriangle,
  FiDatabase,
  FiServer,
  FiSmartphone,
  FiLink,
  FiEdit3,
  FiGrid,
  FiCode,
  FiShare2,
  FiCheckSquare,
  FiTerminal,
  FiTool,
  FiFileText,
  FiZap,
  FiMessageSquare,
  FiPieChart,
  FiUsers,
  FiRefreshCw,
  FiTarget,
  FiGlobe,
  FiMonitor,
  FiTrendingUp,
  FiGitBranch,
  FiBookOpen,
  FiUploadCloud,
} from 'react-icons/fi'
import { TbApi, TbDatabaseCog } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

/* ---------------------------------------------------------------------
 *  PROFILE
 * ------------------------------------------------------------------- */
export const profile = {
  name: 'Harshavardhan Uppaluri',
  firstName: 'Harshavardhan',
  qualification: 'B.Tech — Computer Science and Business Systems',
  graduation: '2026',
  cgpa: '7.09 / 10',
  location: 'India',
  headline: 'Computer Science Graduate | Software Development | Web Development | Technology Enthusiast',
  status: 'Open to Entry-Level Opportunities',
  tagline: 'Learn Continuously. Build Practically. Grow Professionally.',

  intro:
    'I am a Computer Science and Business Systems graduate interested in software development, web technologies, database management and practical problem-solving. I enjoy exploring different technologies, developing applications, learning new concepts and improving my technical and professional abilities.',

  aboutParagraphs: [
    'My journey began with curiosity about how software powers everyday life, and it grew into a focused B.Tech in Computer Science and Business Systems — a course that blends core computer science with business fundamentals such as management, finance and analytics.',
    'Through coursework and hands-on practice I have built a working foundation in programming, frontend development, backend concepts, database management and API integration. I have applied these skills in academic projects and internship-style exposure, translating requirements into working, usable applications.',
    'What drives me is a continuous learning mindset — I actively explore new technologies, refine my fundamentals and improve the way I write and ship code. I value clean, readable work, clear communication and the discipline of shipping practical solutions.',
  ],

  /* Rotating hero headline */
  roles: [
    'Software Developer',
    'Java Developer',
    'Web Developer',
    'Computer Science Graduate',
    'Technology Enthusiast',
    'Problem Solver',
  ],

  contact: {
    email: 'harshavardhan619561@gmail.com',
    phone: '+91-7330708003',
    location: 'India',
  },

  socials: {
    linkedin: 'https://linkedin.com/in/harshavardhan-uppaluri-071901347/',
    github: 'https://github.com/Harsha-csb',
    email: 'mailto:harshavardhan619561@gmail.com',
  },

  /* Place your PDF inside /public and keep this path.
     To update your resume, simply replace that file with a newer version —
     nothing else in the code needs to change. */
  resumeUrl: '/Harshavardhan_Uppaluri_Resume.pdf',
  resumeUpdated: 'November 2026', // TODO: update this date when you replace the PDF
}

/* ---------------------------------------------------------------------
 *  NAVIGATION
 * ------------------------------------------------------------------- */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'beyond', label: 'Beyond Tech' },
  { id: 'interests', label: 'Interests' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

/* ---------------------------------------------------------------------
 *  ABOUT — highlight cards
 * ------------------------------------------------------------------- */
export const highlights = [
  {
    icon: FaCode,
    title: 'Software Development',
    text: 'Object-oriented programming, data structures and clean coding practices applied to build functional, reliable applications.',
  },
  {
    icon: FaLaptopCode,
    title: 'Web Development',
    text: 'Responsive interfaces with HTML, CSS, JavaScript and modern frameworks, plus REST API integration on the frontend.',
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    text: 'Relational modelling, SQL queries, normalisation and connecting applications to structured data stores.',
  },
  {
    icon: FaChartLine,
    title: 'Business & Technology',
    text: 'A Computer Science and Business Systems blend — bridging technical implementation with business and analytics thinking.',
  },
]

/* ---------------------------------------------------------------------
 *  EDUCATION
 * ------------------------------------------------------------------- */
export const education = [
  {
    degree: 'B.Tech — Computer Science and Business Systems',
    institute: 'G. Pulla Reddy Engineering College',
    board: 'Affiliated to JNTUA',
    period: '2022 — 2026',
    score: 'CGPA 7.09 / 10',
    current: true,
    highlights: [
      'Programming & Data Structures',
      'DBMS & Web Technologies',
      'Software Engineering',
      'Business & Management',
    ],
    detail:
      'Core and applied coursework across programming, data structures, DBMS, operating systems, computer networks, software engineering and web technologies — alongside management, finance and business analytics.',
  },
  {
    degree: 'Intermediate — MPC',
    institute: 'Sri Chaitanya Junior College',
    board: 'Board of Intermediate Education',
    period: '2020 — 2022',
    score: 'Percentage 77.7%',
    current: false,
    highlights: ['Mathematics', 'Physics', 'Chemistry'],
    detail:
      'Mathematics, Physics and Chemistry stream that built the analytical and quantitative foundation for engineering study.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institute: 'Vijetha High School',
    board: 'Board of Secondary Education',
    period: '2020',
    score: 'GPA 10.0 / 10',
    current: false,
    highlights: ['Mathematics', 'Science', 'Computer Fundamentals'],
    detail:
      'Completed secondary education with a perfect 10.0 GPA, building the base in mathematics, science and computer fundamentals.',
  },
]

/* ---------------------------------------------------------------------
 *  EXAMINATION RESULTS
 * ------------------------------------------------------------------- */
export const examResults = [
  { label: 'B.Tech CGPA', value: '7.09', sub: 'out of 10' },
  { label: 'Intermediate (MPC)', value: '77.7%', sub: 'Sri Chaitanya' },
  { label: 'SSC GPA', value: '10.0', sub: 'out of 10' },
  { label: 'Graduating', value: '2026', sub: 'batch' },
]

/* ---------------------------------------------------------------------
 *  TECHNICAL SKILLS
 *  level: 'hands-on'  → practised through projects / internship work
 *         'foundational' → learned concepts and coursework-level exposure
 *  (No percentages are used — the level reflects depth of exposure.)
 * ------------------------------------------------------------------- */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: FaCode,
    blurb: 'Languages I use to write and structure programs.',
    skills: [
      { name: 'Java', icon: FaJava, desc: 'Core language for application development', level: 'hands-on' },
      { name: 'C', icon: SiC, desc: 'Procedural programming and fundamentals', level: 'hands-on' },
      { name: 'Python', icon: SiPython, desc: 'Scripting and problem solving', level: 'foundational' },
      { name: 'JavaScript', icon: SiJavascript, desc: 'Interactive web behaviour and DOM', level: 'hands-on' },
    ],
  },
  {
    id: 'java',
    title: 'Java Development',
    icon: FaJava,
    blurb: 'The Java ecosystem I work within most.',
    skills: [
      { name: 'Core Java', icon: FaJava, desc: 'Syntax, classes and standard library', level: 'hands-on' },
      { name: 'Object-Oriented Programming', icon: FiCpu, desc: 'Encapsulation, inheritance, polymorphism', level: 'hands-on' },
      { name: 'Collections Framework', icon: FiLayers, desc: 'Lists, sets, maps and iteration', level: 'hands-on' },
      { name: 'Exception Handling', icon: FiAlertTriangle, desc: 'try-catch, custom exceptions', level: 'hands-on' },
      { name: 'JDBC', icon: FiDatabase, desc: 'Java-to-database connectivity', level: 'hands-on' },
      { name: 'Servlets', icon: FiServer, desc: 'Server-side request handling', level: 'foundational' },
      { name: 'Spring Boot', icon: SiSpringboot, desc: 'REST services and layered apps', level: 'foundational' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FaLaptopCode,
    blurb: 'Building responsive, accessible interfaces.',
    skills: [
      { name: 'HTML5', icon: SiHtml5, desc: 'Semantic page structure', level: 'hands-on' },
      { name: 'CSS3', icon: SiCss, desc: 'Layout, flexbox, grid and styling', level: 'hands-on' },
      { name: 'JavaScript', icon: SiJavascript, desc: 'Dynamic behaviour and events', level: 'hands-on' },
      { name: 'React.js', icon: SiReact, desc: 'Component-based user interfaces', level: 'hands-on' },
      { name: 'Responsive Web Design', icon: FiSmartphone, desc: 'Mobile-first, fluid layouts', level: 'hands-on' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FaServer,
    blurb: 'Server-side logic, APIs and data flow.',
    skills: [
      { name: 'Java Backend Development', icon: FaJava, desc: 'Business logic and services', level: 'hands-on' },
      { name: 'Spring Boot', icon: SiSpringboot, desc: 'Bootstrapping REST applications', level: 'foundational' },
      { name: 'REST API Concepts', icon: TbApi, desc: 'Endpoints, methods and JSON', level: 'foundational' },
      { name: 'PHP', icon: SiPhp, desc: 'Server-side scripting basics', level: 'foundational' },
      { name: 'Node.js', icon: SiNodedotjs, desc: 'JavaScript runtime fundamentals', level: 'foundational' },
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: FaDatabase,
    blurb: 'Designing, querying and connecting data.',
    skills: [
      { name: 'MySQL', icon: SiMysql, desc: 'Relational database engine', level: 'hands-on' },
      { name: 'SQL', icon: FaDatabase, desc: 'Queries, joins and aggregation', level: 'hands-on' },
      { name: 'JDBC Connectivity', icon: FiLink, desc: 'Connecting Java apps to databases', level: 'hands-on' },
      { name: 'CRUD Operations', icon: FiEdit3, desc: 'Create, read, update, delete flows', level: 'hands-on' },
      { name: 'Relational Database Concepts', icon: FiGrid, desc: 'Tables, keys and normalisation', level: 'hands-on' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: FiTool,
    blurb: 'The environment I develop and ship in.',
    skills: [
      { name: 'Eclipse IDE', icon: SiEclipseide, desc: 'Java development environment', level: 'hands-on' },
      { name: 'Visual Studio Code', icon: VscVscode, desc: 'Primary code editor', level: 'hands-on' },
      { name: 'Git', icon: SiGit, desc: 'Version control and branching', level: 'hands-on' },
      { name: 'GitHub', icon: SiGithub, desc: 'Repositories and collaboration', level: 'hands-on' },
      { name: 'Postman', icon: SiPostman, desc: 'API testing and inspection', level: 'hands-on' },
      { name: 'XAMPP', icon: SiXampp, desc: 'Local Apache / MySQL server stack', level: 'hands-on' },
      { name: 'MySQL Workbench', icon: TbDatabaseCog, desc: 'Database design and administration', level: 'hands-on' },
    ],
  },
  {
    id: 'additional',
    title: 'Additional Knowledge',
    icon: FiCode,
    blurb: 'Supporting skills that make delivery smoother.',
    skills: [
      { name: 'Software Development Fundamentals', icon: FiCode, desc: 'SDLC and clean coding basics', level: 'hands-on' },
      { name: 'API Integration', icon: FiShare2, desc: 'Consuming and connecting services', level: 'foundational' },
      { name: 'Software Testing Fundamentals', icon: FiCheckSquare, desc: 'Test cases and verification', level: 'foundational' },
      { name: 'Debugging', icon: FiTerminal, desc: 'Tracing and fixing code issues', level: 'hands-on' },
      { name: 'Troubleshooting', icon: FiTool, desc: 'Diagnosing runtime problems', level: 'hands-on' },
      { name: 'Technical Documentation', icon: FiFileText, desc: 'Clear written project records', level: 'hands-on' },
      { name: 'Microsoft Office', icon: FaMicrosoft, desc: 'Docs, sheets and presentations', level: 'hands-on' },
      { name: 'Problem Solving', icon: FiZap, desc: 'Breaking problems into steps', level: 'hands-on' },
    ],
  },
]

/* ---------------------------------------------------------------------
 *  VERSION CONTROL & DEPLOYMENT
 * ------------------------------------------------------------------- */
export const versionControlSkills = [
  {
    icon: FiGitBranch,
    title: 'Git & GitHub',
    text: 'Use Git fundamentals and GitHub repositories to manage project source code and updates.',
  },
  {
    icon: FiLayers,
    title: 'Repository Management',
    text: 'Create and maintain repositories, organize project files, and share public source links.',
  },
  {
    icon: FiBookOpen,
    title: 'Documentation & README.md',
    text: 'Document projects with README files so setup, purpose, and usage are clear to others.',
  },
  {
    icon: FiUploadCloud,
    title: 'Frontend Hosting & Deployment',
    text: 'Publish frontend projects with GitHub Pages and share a live site when deployment is available.',
  },
]

export const deploymentWorkflow = [
  'Develop',
  'Manage with Git',
  'Push to GitHub',
  'Deploy',
  'Publish',
  'Share Live Project',
]

export const githubProfile = {
  username: 'Harsha-csb',
  profileUrl: 'https://github.com/Harsha-csb',
  repositoriesUrl: 'https://github.com/Harsha-csb?tab=repositories',
  repositoriesApi: 'https://api.github.com/users/Harsha-csb/repos?sort=updated&per_page=100',
}

export const githubFallbackRepositories = [
  {
    id: 'E-local',
    name: 'E-local',
    full_name: 'Harsha-csb/E-local',
    html_url: 'https://github.com/Harsha-csb/E-local',
    description: 'E-LOCAL — Explore Your City Like a Local.',
    language: 'PHP',
    stargazers_count: 0,
  },
  {
    id: 'JDBC_connection',
    name: 'JDBC_connection',
    full_name: 'Harsha-csb/JDBC_connection',
    html_url: 'https://github.com/Harsha-csb/JDBC_connection',
    description: 'Java repository for JDBC connectivity code.',
    language: 'Java',
    stargazers_count: 0,
  },
  {
    id: 'Teddy2-main',
    name: 'Teddy2-main',
    full_name: 'Harsha-csb/Teddy2-main',
    html_url: 'https://github.com/Harsha-csb/Teddy2-main',
    description: 'No description has been added to this repository.',
    language: 'HTML',
    stargazers_count: 0,
  },
  {
    id: 'personal',
    name: 'personal',
    full_name: 'Harsha-csb/personal',
    html_url: 'https://github.com/Harsha-csb/personal',
    description: 'No description has been added to this repository.',
    language: 'Java',
    stargazers_count: 0,
  },
  {
    id: 'ecommerce',
    name: 'ecommerce',
    full_name: 'Harsha-csb/ecommerce',
    html_url: 'https://github.com/Harsha-csb/ecommerce',
    description: 'E-commerce storefront project.',
    language: 'PHP',
    stargazers_count: 0,
  },
  {
    id: 'Teddy2',
    name: 'Teddy2',
    full_name: 'Harsha-csb/Teddy2',
    html_url: 'https://github.com/Harsha-csb/Teddy2',
    description: 'Portfolio website repository with a verified accessible GitHub Pages site.',
    language: 'HTML',
    stargazers_count: 0,
  },
  {
    id: 'ecommerce1',
    name: 'ecommerce1',
    full_name: 'Harsha-csb/ecommerce1',
    html_url: 'https://github.com/Harsha-csb/ecommerce1',
    description: 'No description has been added to this repository.',
    language: null,
    stargazers_count: 0,
  },
  {
    id: 'project',
    name: 'project',
    full_name: 'Harsha-csb/project',
    html_url: 'https://github.com/Harsha-csb/project',
    description: 'No description has been added to this repository.',
    language: null,
    stargazers_count: 0,
  },
]

/* ---------------------------------------------------------------------
 *  EXPERIENCE
 * ------------------------------------------------------------------- */
export const experience = [
  {
    role: 'Java Full Stack Developer Intern',
    company: 'Hexart.in',
    type: 'Internship',
    period: 'December 2025 — April 2026',
    status: 'Current',
    points: [
      'Worked across the full stack, contributing to both frontend interfaces and backend service logic.',
      'Built responsive frontend screens and connected them to backend endpoints for end-to-end data flow.',
      'Implemented database connectivity and CRUD operations to store, retrieve and update application data.',
      'Used Git version control and followed a structured development, review and testing workflow.',
      'Debugged issues across layers and documented changes for the team.',
    ],
    stack: ['Java', 'Spring Boot', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'REST API', 'Git'],
    /* TODO: add your certificate link/PDF to enable the certificate preview */
    certificate: { label: 'Internship Certificate', url: '' },
  },
  {
    role: 'Java Development Intern',
    company: 'Six Phrase',
    type: 'Internship',
    period: 'May 2025 — June 2025',
    status: 'Completed',
    points: [
      'Strengthened Core Java fundamentals through hands-on programming tasks and mini applications.',
      'Applied Object-Oriented Programming principles to structure reusable, maintainable code.',
      'Used the Collections Framework and exception handling to build reliable program logic.',
      'Practised logic building and problem solving, improving algorithmic thinking and debugging skills.',
    ],
    stack: ['Java', 'OOP', 'Collections Framework', 'Exception Handling'],
    /* TODO: add your certificate link/PDF to enable the certificate preview */
    certificate: { label: 'Internship Certificate', url: '' },
  },
]

/* ---------------------------------------------------------------------
 *  CAREER GOALS
 * ------------------------------------------------------------------- */
export const careerGoals = [
  {
    phase: 'Short Term',
    title: 'Start as a Software / Java Developer',
    text: 'Join a product or service team as an entry-level developer, contribute to real codebases and grow under experienced engineers.',
  },
  {
    phase: 'Mid Term',
    title: 'Deepen Full-Stack Expertise',
    text: 'Strengthen backend, database and cloud skills to own features end-to-end and ship production-quality software.',
  },
  {
    phase: 'Long Term',
    title: 'Engineer with a Business Edge',
    text: 'Combine strong engineering with business understanding to build technology that delivers measurable value.',
  },
]

/* ---------------------------------------------------------------------
 *  PROJECTS
 *  category   : 'java' | 'web' | 'database' | 'other'      → drives filters
 *  statusTone : 'done' | 'live' | 'concept' | 'progress'   → drives the badge
 *  repo / demo can stay empty until available.
 * ------------------------------------------------------------------- */
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'java', label: 'Java Development' },
  { id: 'web', label: 'Web Development' },
  { id: 'database', label: 'Database Applications' },
  { id: 'other', label: 'Other Projects' },
]

export const projects = [
  {
    id: 'e-local',
    title: 'E-LOCAL — Explore Your City Like a Local',
    category: 'web',
    contributor: 'personal', // TODO: confirm if academic or personal
    tagline: 'Local discovery web application',
    status: 'Completed',
    statusTone: 'done',
    overview:
      'A web application that helps people explore a city like a local — discovering places, authentic food destinations, hidden attractions, events and community recommendations.',
    problem:
      'Popular travel apps tend to favour well-known commercial spots, which makes it hard to find genuine local places, authentic food and community-recommended experiences.',
    objectives: [
      'Help users discover local places, food destinations and events',
      'Surface community recommendations and reviews',
      'Provide location-based information for each place',
      'Serve content from a structured, database-backed source',
    ],
    features: [
      'Discover places',
      'Explore food',
      'Find events',
      'Read reviews',
      'Local recommendations',
      'Location-based information',
      'Database-backed content',
    ],
    stack: ['PHP', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
    contribution:
      'Worked on the frontend interface and connected it to backend REST endpoints, and contributed to the database-backed content flow for places, food and events.',
    repo: 'https://github.com/Harsha-csb/E-local',
    demo: '', // TODO: add live demo link
    accent: 'blue',
  },
  {
    id: 'supermarket',
    title: 'Supermarket Management System',
    category: 'database',
    tagline: 'Java + JDBC + MySQL CRUD system',
    status: 'Completed',
    statusTone: 'done',
    overview:
      'A Java application for managing supermarket products and inventory — handling product records, stock data and database operations.',
    problem:
      'Tracking products and stock manually in retail is error-prone and hard to query; a structured database-backed system keeps records consistent and searchable.',
    objectives: [
      'Manage product records and stock data',
      'Handle structured data reliably',
      'Perform CRUD operations against MySQL',
      'Practise JDBC connectivity from Java',
    ],
    features: ['Product management', 'Data handling', 'Database connectivity', 'CRUD operations'],
    stack: ['Java', 'JDBC', 'MySQL'],
    contribution:
      'Built the Java application logic and the JDBC layer to connect to MySQL, performing create, read, update and delete operations on product data.',
    repo: '',
    demo: '', // TODO: add live demo link
    accent: 'cyan',
  },
  {
    id: 'hospital',
    title: 'Hospital Patient Management System',
    category: 'java',
    tagline: 'Java console application',
    status: 'Completed',
    statusTone: 'done',
    overview:
      'A Java console application for managing patient records, appointment scheduling and billing.',
    problem:
      'Managing patient records, appointments and billing by hand is slow and error-prone; a structured console system keeps interactions organised.',
    objectives: [
      'Store and manage patient records',
      'Schedule and track appointments',
      'Handle billing information',
      'Apply OOP and the Collections Framework',
    ],
    features: ['Patient records', 'Appointment scheduling', 'Billing management'],
    stack: ['Java', 'OOP', 'Collections Framework', 'HashMap'],
    contribution:
      'Implemented patient record storage and lookups using HashMap and the Collections Framework, and structured the application with object-oriented design.',
    repo: '', // TODO: add repository link
    demo: '', // TODO: add live demo link
    accent: 'violet',
  },
  {
    id: 'exam-portal',
    title: 'Online Exam Registration Portal',
    category: 'web',
    tagline: 'Application concept',
    status: 'Concept',
    statusTone: 'concept',
    overview:
      'An application concept for managing online examination registration — covering candidate registration, exam details and record management.',
    problem:
      'Coordinating examination registrations manually is inefficient and hard to track; a portal concept centralises registration and candidate data.',
    objectives: [
      'Conceptualise a clear registration flow',
      'Model candidate and examination data',
      'Define validation for submitted registrations',
    ],
    features: [
      'Registration workflow (planned)',
      'Candidate & exam records (planned)',
      'Form validation (planned)',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    note: 'This is an application concept — the listed functionality is planned, not yet implemented.',
    contribution:
      'Defined the concept, data model and planned registration workflow for the portal.',
    repo: '', // TODO: add repository link
    demo: '', // TODO: add live demo link
    accent: 'violet',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Website',
    category: 'web',
    tagline: 'PHP + MySQL storefront',
    status: 'Completed',
    statusTone: 'done',
    overview:
      'A web development project featuring a product-oriented interface and shopping-related functionality.',
    problem:
      'Small sellers need a simple way to present products online; a lightweight web storefront provides that without a heavy platform.',
    objectives: [
      'Present products in a clean, browsable interface',
      'Add shopping-related interactions',
      'Practise the PHP + XAMPP delivery stack',
    ],
    features: ['Product-oriented interface', 'Shopping-related functionality'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP'],
    contribution:
      'Built the storefront interface with HTML, CSS and JavaScript, and used PHP with XAMPP to serve the pages server-side.',
    repo: 'https://github.com/Harsha-csb/ecommerce',
    demo: '', // TODO: add live demo link
    accent: 'blue',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'other',
    tagline: 'Frontend expense tracking app',
    status: 'Completed',
    statusTone: 'done',
    overview: 'A frontend application designed to organise and monitor expenses.',
    problem:
      'Everyday spending is easy to lose track of; a simple tracker makes expenses visible, categorised and easier to manage.',
    objectives: ['Record and organise expenses', 'Categorise spending', 'Provide a clear overview'],
    features: ['Add and organise expenses', 'Expense categories', 'Spending overview'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    contribution:
      'Developed the interface and client-side logic for adding, categorising and reviewing expenses.',
    repo: '', // TODO: add repository link
    demo: '', // TODO: add live demo link
    accent: 'cyan',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    category: 'other',
    tagline: 'This site — React + Framer Motion',
    status: 'In Development',
    statusTone: 'progress',
    overview:
      'A premium, fully responsive portfolio built with React and Framer Motion, featuring dark/light themes, glassmorphism UI and animated sections.',
    problem:
      'Presenting a fresher profile professionally needs a clear, modern and recruiter-friendly place to see everything at a glance.',
    objectives: [
      'Present profile, skills and projects clearly',
      'Ensure full responsiveness across devices',
      'Support dark and light themes',
    ],
    features: [
      'Theme switcher',
      'Smooth-scroll navigation',
      'Animated sections',
      'Fully responsive layout',
    ],
    stack: ['React', 'Framer Motion', 'CSS3', 'Vite'],
    contribution:
      'Designed and built the entire site — layout, theming, animations and responsive behaviour.',
    repo: '',
    demo: '', // TODO: add live URL
    accent: 'blue',
  },
]

/* ---------------------------------------------------------------------
 *  CERTIFICATIONS
 *  category: 'internship' | 'training' | 'course'   → drives the filters
 *
 *  Only verified credentials are listed. Entries flagged `placeholder: true`
 *  are intentionally blank slots — fill in title / issuer / date / links
 *  from your actual certificates. Never invent credentials.
 *  `image` and `pdf` accept a URL or a path inside /public.
 * ------------------------------------------------------------------- */
export const certCategories = [
  { id: 'all', label: 'All' },
  { id: 'internship', label: 'Internships' },
  { id: 'training', label: 'Training' },
  { id: 'course', label: 'Courses' },
]

export const certifications = [
  {
    id: 'hexart-internship',
    title: 'Java Full Stack Developer — Internship Certificate',
    issuer: 'Hexart.in',
    date: 'December 2025 — April 2026',
    category: 'internship',
    skills: ['Java', 'Spring Boot', 'Full Stack Development', 'MySQL', 'REST API'],
    image: '', // TODO: add certificate image URL
    pdf: '', // TODO: add certificate PDF URL
    verify: '', // TODO: add verification link
  },
  {
    id: 'sixphrase-internship',
    title: 'Java Development — Internship Certificate',
    issuer: 'Six Phrase',
    date: 'May 2025 — June 2025',
    category: 'internship',
    skills: ['Java', 'OOP', 'Collections Framework', 'Exception Handling'],
    image: '', // TODO: add certificate image URL
    pdf: '', // TODO: add certificate PDF URL
    verify: '', // TODO: add verification link
  },
  {
    id: 'training-placeholder',
    title: 'Technical Training Certificate',
    issuer: '', // TODO: add issuing organization
    date: '', // TODO: add completion date
    category: 'training',
    skills: [], // TODO: add skills acquired
    image: '', // TODO: add certificate image URL
    pdf: '', // TODO: add certificate PDF URL
    verify: '', // TODO: add verification link
    placeholder: true,
  },
  {
    id: 'course-placeholder-1',
    title: 'Programming Course Certificate',
    issuer: '', // TODO: add issuing organization
    date: '', // TODO: add completion date
    category: 'course',
    skills: [], // TODO: add skills acquired
    image: '', // TODO: add certificate image URL
    pdf: '', // TODO: add certificate PDF URL
    verify: '', // TODO: add verification link
    placeholder: true,
  },
  {
    id: 'course-placeholder-2',
    title: 'Development Certification',
    issuer: '', // TODO: add issuing organization
    date: '', // TODO: add completion date
    category: 'course',
    skills: [], // TODO: add skills acquired
    image: '', // TODO: add certificate image URL
    pdf: '', // TODO: add certificate PDF URL
    verify: '', // TODO: add verification link
    placeholder: true,
  },
]

/* ---------------------------------------------------------------------
 *  ACHIEVEMENTS  (timeline — newest first)
 *  type: 'academic' | 'internship' | 'project' | 'certificate' | 'result'
 *  → mapped to an icon + colour in the Achievements component.
 * ------------------------------------------------------------------- */
export const achievements = [
  {
    year: '2026',
    type: 'academic',
    title: 'Graduating — B.Tech, Computer Science and Business Systems',
    text: 'Completing a B.Tech in Computer Science and Business Systems at G. Pulla Reddy Engineering College with a CGPA of 7.09 / 10.',
  },
  {
    year: 'Dec 2025 — Apr 2026',
    type: 'internship',
    title: 'Java Full Stack Developer Intern — Hexart.in',
    text: 'Working across frontend, backend and database layers within a professional development workflow.',
  },
  {
    year: 'May — Jun 2025',
    type: 'internship',
    title: 'Java Development Intern — Six Phrase',
    text: 'Strengthened Core Java, OOP, the Collections Framework and problem solving through hands-on tasks.',
  },
  {
    year: '2025',
    type: 'certificate',
    title: 'Six Phrase Internship Certificate',
    text: 'Received an internship certificate from Six Phrase on completion of the Java Development internship.',
  },
  {
    year: '2022 — 2026',
    type: 'project',
    title: 'Academic & Personal Projects',
    text: 'Built projects across web, Java and database domains — including E-LOCAL, a supermarket management system, a hospital patient management system, an e-commerce site and an expense tracker.',
  },
  {
    year: '2022',
    type: 'academic',
    title: 'Intermediate — MPC (77.7%)',
    text: 'Completed Intermediate in the MPC stream at Sri Chaitanya Junior College with 77.7%.',
  },
  {
    year: '2020',
    type: 'academic',
    title: 'SSC — GPA 10.0 / 10',
    text: 'Completed secondary education at Vijetha High School with a perfect 10.0 GPA.',
  },
]

/* ---------------------------------------------------------------------
 *  TCS iON NQT — examination scores
 *  These are published assessment results, shown as performance data.
 *  They are NOT awards or job selections.
 * ------------------------------------------------------------------- */
export const nqtResults = {
  provider: 'TCS iON National Qualifier Test (NQT)',
  language: 'C',
  note: 'Published assessment scores. These are examination results, not awards or job selections.',
  total: { label: 'Total Cognitive Score', score: 1155.1, outOf: 1800, percent: 64.17 },
  groups: [
    {
      title: 'Cognitive Section Scores',
      items: [
        { label: 'Numerical Ability', score: 477.84, outOf: 600 },
        { label: 'Verbal Ability', score: 317.98, outOf: 600 },
        { label: 'Reasoning Ability', score: 359.28, outOf: 600 },
      ],
    },
    {
      title: 'Advanced & Programming Scores',
      items: [
        { label: 'Advanced Quantitative and Reasoning', score: 422.2, outOf: 600 },
        { label: 'Programming Assessment', score: 443.34, outOf: 600 },
      ],
    },
  ],
}

/* ---------------------------------------------------------------------
 *  BEYOND TECHNICAL KNOWLEDGE
 * ------------------------------------------------------------------- */
export const beyondTechnical = {
  intro:
    'Computer Science and Business Systems is deliberately broader than a pure programming degree. Alongside engineering subjects, it covers business, management and analytics — so I bring an understanding of how technology fits into real organisations, not just how to write code.',
  capabilities: [
    {
      icon: FaChartLine,
      title: 'Business Fundamentals',
      text: 'Exposure to finance, marketing and organisational concepts that shape how products are planned and delivered.',
    },
    {
      icon: FaBriefcase,
      title: 'Management Concepts',
      text: 'Principles of management, project coordination and processes that keep teams and deliverables on track.',
    },
    {
      icon: FiMessageSquare,
      title: 'Communication',
      text: 'Presenting ideas clearly, documenting work and explaining technical decisions to both technical and non-technical people.',
    },
    {
      icon: FiPieChart,
      title: 'Analytical Thinking',
      text: 'Interpreting data, breaking down problems and reasoning about trade-offs before choosing an approach.',
    },
    {
      icon: FiUsers,
      title: 'Teamwork',
      text: 'Collaborating on group projects, sharing work through Git and supporting teammates to reach a common goal.',
    },
    {
      icon: FiRefreshCw,
      title: 'Adaptability',
      text: 'Comfortable picking up new tools, languages and domains quickly as a project or role requires.',
    },
    {
      icon: FiTarget,
      title: 'Problem Solving',
      text: 'Approaching unfamiliar problems methodically — from understanding the requirement to a working solution.',
    },
  ],
  interests: [
    {
      icon: FiCpu,
      title: 'Artificial Intelligence',
      text: 'Curious about how AI and machine learning are reshaping the software we build and use.',
    },
    {
      icon: FiZap,
      title: 'Technology Innovations',
      text: 'Following emerging tools, platforms and trends shaping the next generation of software.',
    },
    {
      icon: FiCode,
      title: 'Software Development',
      text: 'Continuously building and refining applications to strengthen practical engineering skills.',
    },
    {
      icon: FaProjectDiagram,
      title: 'Business–Technology Integration',
      text: 'Interested in how technical solutions translate into measurable business outcomes.',
    },
  ],
}

/* ---------------------------------------------------------------------
 *  PERSONAL INTERESTS — "Curiosity Beyond Technology"
 * ------------------------------------------------------------------- */
export const personalInterests = {
  intro:
    'Beyond code, I stay curious about the wider world — following how technology, business and current affairs shape one another, and where software can make a real difference.',
  items: [
    {
      icon: FiTrendingUp,
      title: 'Following Technology Developments',
      text: 'Keeping up with how tools, platforms and developer ecosystems evolve over time.',
    },
    {
      icon: FiCpu,
      title: 'Exploring Artificial Intelligence',
      text: 'Curious about how AI and machine learning are reshaping the software we build and use.',
    },
    {
      icon: FiZap,
      title: 'Learning Emerging Technologies',
      text: 'Picking up new languages, frameworks and concepts as the industry moves forward.',
    },
    {
      icon: FiGlobe,
      title: 'Geopolitics & World Affairs',
      text: 'Following global events and how they influence technology, trade and the economy.',
    },
    {
      icon: FiMonitor,
      title: 'Watching Technology Launches',
      text: 'Tuning into product launches and keynotes to see where the industry is heading.',
    },
    {
      icon: FiCode,
      title: 'Innovative Software Solutions',
      text: 'Exploring well-crafted products and studying what makes great software useful and lasting.',
    },
  ],
}

/* ---------------------------------------------------------------------
 *  STATS
 * ------------------------------------------------------------------- */
export const stats = [
  { value: '7.09', label: 'CGPA' },
  { value: '2026', label: 'Graduating' },
  { value: '2', label: 'Internships' },
  { value: '20+', label: 'Technologies' },
]
