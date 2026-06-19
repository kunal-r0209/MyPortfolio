// ─────────────────────────────────────────────
//  CONTENT.JS  ·  Sourced from resume — edit freely
// ─────────────────────────────────────────────

export const personal = {
  name: 'Kunal',
  tagline: 'Building things that work.',
  roles: [
    'Java Full Stack Developer',
    'Spring Boot Engineer',
    'React.js Developer',
    'REST API Architect',
    'AI Engineer',
  ],
  bio: `Aspiring Full Stack Developer with hands-on experience in MERN Stack, Java Full Stack, and AI-powered applications. Proficient in building responsive web applications, REST APIs, and scalable backend solutions using React.js, Node.js, Spring Boot, and FastAPI.`,
  bio2: `Currently Working — Passionate and self-motivated technology enthusiast with a foundation in software development and problem-solving. Seeking opportunities to contribute, grow professionally, and make a meaningful impact through continuous learning and innovation.`,
  email: 'kl07kunal@gmail.com',
  phone: '+91-8438749605',
  github: 'https://github.com/kunal-r0209',
  linkedin: 'https://www.linkedin.com/in/kunal-suresh0209/',
  location: 'Chennai, TamilNadu, India',
  resumeLink: '#',
}

export const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '3',  label: 'Internships' },
  { value: '5+', label: 'Certifications' },
  { value: '7.86', label: 'CGPA (B.Tech)' },
]

export const skills = {
  'Backend': [
    { name: 'Core Java (Java 8+)', level: 90 },
    { name: 'Spring Boot / MVC', level: 88 },
    { name: 'Hibernate (JPA) / JDBC', level: 85 },
    { name: 'REST API Design', level: 88 },
    { name: 'Spring Security', level: 78 },
  ],
  'Frontend': [
    { name: 'React.js (Hooks, State)', level: 82 },
    { name: 'JavaScript (ES6+)', level: 84 },
    { name: 'HTML5 / CSS3', level: 90 },
    { name: 'Redux / Context API', level: 72 },
  ],
  'Databases & DevOps': [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL / Oracle DB', level: 80 },
    { name: 'Docker', level: 74 },
    { name: 'Git & GitHub / Maven', level: 88 },
    { name: 'AWS (EC2, S3, RDS)', level: 65 },
  ],
}

export const techMarquee = [
  'Java', 'Spring Boot', 'Python', 'PostgreSQL', 'Docker',
  'LangChain', 'REST APIs', 'FastAPI', 'Maven', 'Postman',
  'Render', 'React js', 'HTML5', 'CSS3', 'JavaScript',
  'JUnit', 'Spring Security', 'JPA', 'AWS', 'MVC',
]

export const projects = [
  {
    title: 'LuxeLane',
    year: '2026',
    type: 'Full-Stack . E-commerce',
    description:
      'Full-stack e-commerce app with user authentication, product management, shopping cart, and search functionality. Developed responsive frontend components and RESTful backend APIs for efficient data handling and user interactions.',
    tech: ['Spring Boot', 'React.js', 'JPA', 'PostgreSQL', 'MongoDB', 'Express js', 'Render'],
    live: 'https://e-commerce-luxlane-shopping.onrender.com/',
    github: 'https://github.com/kunal-r0209/E-commerce-LuxLane-shopping',
    featured: true,
  },
  {
    title: 'iPhone 15 Pro Showcase UI',
    year: '2024',
    type: 'Animated 3D . landing page',
    description:
      'A mobile-responsive landing page inspired by Apple’s high-end animated UI design, built using React (TypeScript) and TailwindCSS. It features smooth, interactive animations powered by GSAP, along with 3D visual elements rendered using Three.js, and includes a fully responsive navigation system optimized for both desktop and mobile experience.',
    tech: ['React-TS', 'TailwindCSS', 'GSAP', 'Three.js', 'Docker', 'Render'],
    live: 'https://iphone-titanium.onrender.com/',
    github: 'https://github.com/kunal-r0209/iphone-titanium',
    featured: false,
  },
  {
    title: 'Student Management System',
    year: '2025',
    type: 'Full Stack · MVC CRUD App ',
    description:
      'Full-stack CRUD application using MVC architecture, Java Servlets, JSP, and PostgreSQL with a layered Controller-Service pattern for clean separation of concerns.',
    tech: ['Java', 'Servlets', 'JSP', 'PostgreSQL', 'MVC'],
    live: null,
    github: 'https://github.com/kunal-r0209/student-management-system',
    featured: false,
  },
  {
    title: 'PolicyPilot AI',
    year: '2026',
    type: 'AI-powered . insurance assistant ',
    description:
      'Built an AI-powered insurance assistant using Retrieval-Augmented Generation (RAG) for context-aware policy responses. Designed a scalable FastAPI backend with conversational memory,REST APIs,Docker support, deployment-ready architecture.',
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Groq Llama 3'],
    live: null,
    github: 'https://github.com/kunal-r0209/policypilot-ai',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Technical Associate',
    company: 'Info Way Solutions, Chennai',
    period: '2026 – Present',
    location: 'Chennai, India',
    points: [
      'Support US-based IT operations by diagnosing and resolving technical issues, maintaining consistent response times.',
      'Collaborate with cross-functional teams to troubleshoot operational problems, contributing to faster incident resolution.',
      'Part of an intensive developer training program focused on production-grade code.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'IBC Techno Consultancy Pvt Ltd, Bangalore',
    period: 'Dec 2025 – Jan 2026',
    location: 'Bengaluru, India',
    points: [
      'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN Stack).',
      'Implemented JWT authentication, REST APIs, CRUD operations, responsive UI, and file upload features.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Pursuit Future Technology, Bangalore',
    period: 'Oct 2025 – Nov 2025',
    location: 'Bengaluru, India',
    points: [
      'Built web interfaces using HTML, CSS, JavaScript, Bootstrap, React.js, Node.js.',
      'Utilized Git, GitHub, and Postman for version control, collaboration, and API testing.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering',
    school: 'Manakular Vinayagar Instiute of Techonolgy',
    period: 'Oct 2022 – May 2026',
    location: 'Pondciherry, Tamilnadu',
    gpa: '7.86 / 10',
  },
  {
    degree: 'Higher Secondary — Science Stream',
    school: 'Seventh Day Adventist',
    period: 'Jun 2020 – Jul 2022',
    location: 'Pondicherry, TamilNadu',
    gpa: '80.2%',
  },
]

export const certifications = [
  { name: 'Certified in Java Full Stack Development', issuer: 'TNSIF (Capgemini)', year: '2026' },
  { name: 'Certified in Java Full Stack Development Foundation', issuer: 'Edusphere Software Training and Development Institute', year: '2025' },
  { name: 'Completed Web Development Internship', issuer: 'FITA Academy', year: '2024' },
  { name: 'Cloud Computing', issuer: 'NPTEL / IIT', year: '2023' },
  { name: 'Internet of Things (IoT)', issuer: 'NPTEL / IIT', year: '2024' },
]
