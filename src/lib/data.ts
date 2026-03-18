export const profile = {
  name: 'Shivendra Singh Tanwar',
  initials: '',
  title: 'Technology Lead',
  subtitle: 'Engineering leader building reliable distributed systems & open-source tools',
  location: 'Hyderabad, Telangana, India',
  email: 'sunnysinghtanwar2@gmail.com',
  phone: '+91 7568448891',
  about: [
    'Technology Lead and software engineer specialising in engineering leadership, reliable distributed systems, and scalable backend architecture.',
    'With 8+ years across fintech, geospatial, and SaaS, I’ve led teams, shaped release engineering, and shipped products used by customers across Europe and India.',
  ],
  social: {
    github: 'https://github.com/shivendrasinghtanwar',
    linkedin: 'https://www.linkedin.com/in/shivendra-singh-tanwar/',
    instagram: 'https://www.instagram.com/sunnysinghtanwar/',
  },
  skills: [
    {
      category: 'Leadership',
      items: ['Engineering Leadership', 'Team Management', 'Release Engineering', 'Architecture'],
    },
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Kotlin', 'Java', 'PHP', 'SQL'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Vert.x', 'REST APIs', 'Microservices'],
    },
    {
      category: 'Frontend & Tools',
      items: ['React', 'Next.js', 'Angular', 'Docker', 'GitHub Actions', 'PostgreSQL'],
    },
  ],
}

export const experience = [
  {
    company: 'Billte AG',
    title: 'Technology Lead',
    location: 'Zurich, Switzerland (Remote)',
    period: 'Apr 2025 – Present',
    current: true,
    description:
      'Leading technology at Billte, a Swiss B2B invoicing and billing platform. Responsible for engineering direction, team leadership, and delivering reliable product at scale.',
    bullets: [
      'Leading the engineering team and setting technical direction for the Billte platform',
      'Driving architecture decisions for scalability and reliability of billing infrastructure',
      'Previously built core REST APIs and microservices as Software Engineer (Dec 2018 – May 2022)',
    ],
  },
  {
    company: 'Thar Digital Services',
    title: 'Lead Software Engineer',
    location: 'Bikaner, India',
    period: 'Apr 2024 – Present',
    current: true,
    description:
      'Lead engineer at Thar Digital Services, driving software development and engineering best practices.',
    bullets: [
      'Leading development teams and engineering initiatives',
      'Responsible for release engineering and delivery pipelines',
    ],
  },
  {
    company: 'Paytm',
    title: 'Senior Software Engineer',
    location: 'Bengaluru, Karnataka, India',
    period: 'May 2022 – Apr 2024',
    current: false,
    description:
      "Senior engineer at one of India's largest fintech platforms, working on high-throughput payment infrastructure serving hundreds of millions of users.",
    bullets: [
      'Worked on scalable payment systems serving massive transaction volumes',
      'Contributed to platform reliability and distributed systems engineering',
    ],
  },
  {
    company: 'ALLPS',
    title: 'Software Engineer',
    location: 'Hyderabad, India',
    period: 'Dec 2018 – May 2022',
    current: false,
    description:
      'Indian subsidiary of ALLPS GmbH (Switzerland), providing technical consultation for Swiss startups. Primary client: Billte AG.',
    bullets: [
      'Built reliable REST-based APIs for distributed microservices communication',
      'Designed and developed the core billing module of the Billte application',
      'Extended core functionality to improve the user billing experience',
      'Integrated distributed microservices into a monolith for better resource efficiency',
      'Handled deployment and maintenance across multiple client projects',
    ],
  },
  {
    company: 'Skilrock Technologies',
    title: 'Software Engineer',
    location: 'Gurugram, India',
    period: 'Jun 2018 – Nov 2018',
    current: false,
    description:
      'Software products & services company specialising in technology solutions for the lottery & gaming industry.',
    bullets: [
      'Developed the client-side Retail Management System (RMS) in Angular',
      'Built role and permissions management system using Express.js (Node.js)',
    ],
  },
  {
    company: 'IIRS / ISRO · WsCube Tech',
    title: 'Intern',
    location: 'Jodhpur, Rajasthan, India',
    period: 'Jun 2017 – Aug 2017',
    current: false,
    description:
      'Two concurrent internships: PHP Developer at the Indian Institute of Remote Sensing (ISRO), and software intern at WsCube Tech.',
    bullets: [
      'ISRO/IIRS: Built a prototype Kiosk Postal Service for the Indian Government using PHP, MySQL, Bootstrap — enabling postal access to remote areas across India',
      'WsCube Tech: Contributed to web development projects during undergraduate studies',
    ],
  },
  {
    company: 'Bodacious IT Hub',
    title: 'Intern',
    location: 'Jaipur, India',
    period: 'Jun 2016 – Jul 2016',
    current: false,
    description: 'Undergraduate internship focused on core Java development.',
    bullets: [
      'Developed a fully functional rich text editor with search and formatting features using core Java',
    ],
  },
]

export const education = [
  {
    institution: 'M.B.M. Engineering College',
    degree: 'B.E. in Computer Science & Engineering',
    location: 'Jodhpur, Rajasthan',
    period: '2014 – 2018',
  },
  {
    institution: 'Shiksha High School',
    degree: 'Intermediate · C.B.S.E.',
    location: 'Bikaner, Rajasthan',
    period: '2010 – 2012',
  },
  {
    institution: 'Bikaner Boys School',
    degree: 'Matriculation · C.B.S.E.',
    location: 'Bikaner, Rajasthan',
    period: '2000 – 2010',
  },
]

export const certifications = [
  { name: 'HTML Essential Training', issuer: 'LinkedIn Learning', date: 'Apr 2021' },
  { name: 'Java', issuer: 'HackerRank', date: 'Apr 2021' },
  { name: 'Learning Java', issuer: 'LinkedIn Learning', date: 'Apr 2021' },
  { name: 'Problem Solving', issuer: 'HackerRank', date: 'Apr 2021' },
  { name: 'Spoken Tutorials', issuer: 'IIT Bombay', date: 'Sep 2015' },
]

export const projects = [
  {
    name: 'Kortex',
    description:
      'A production-ready Vert.x + Kotlin REST API boilerplate with opinionated project structure, dependency injection, and built-in auth scaffolding for fast project bootstrap.',
    tech: ['Kotlin', 'Vert.x', 'REST API', 'DI'],
    period: 'Jul 2020 – Dec 2020',
    link: null as string | null,
    github: null as string | null,
    featured: true,
  },
  {
    name: 'Hasher',
    description:
      'A client-side hash calculator supporting MD5, SHA-1, SHA-256, and more. Pure web app — no server required. Built with Angular and the Web Crypto API.',
    tech: ['Angular', 'TypeScript', 'Web Crypto API'],
    period: null as string | null,
    link: 'https://shivendrasinghtanwar.github.io/Projects/hasher/',
    github: null as string | null,
    featured: true,
  },
  {
    name: 'Noted',
    description:
      'An online rich-text notes-taking application with CKEditor integration. Create, edit, and manage formatted notes entirely in the browser with no backend.',
    tech: ['JavaScript', 'CKEditor', 'LocalStorage'],
    period: null as string | null,
    link: 'https://shivendrasinghtanwar.github.io/Projects/Noted/',
    github: null as string | null,
    featured: true,
  },
  {
    name: 'Lottery Management System',
    description:
      'A full platform for a Vietnamese lottery company to manage lottery operations, ticket tracking, retail distribution, and reporting dashboards.',
    tech: ['Angular', 'Node.js', 'Express'],
    period: 'Jun 2018 – Sep 2018',
    link: null as string | null,
    github: null as string | null,
    featured: false,
  },
  {
    name: 'Speed Post Kiosk (ISRO)',
    description:
      "Prototype kiosk service for India Post, built at ISRO's IIRS on the Bhuvan geospatial platform. Enabled parcel booking, address lookup, QR code generation, and payment flow for remote areas across India.",
    tech: ['PHP', 'MySQL', 'Bootstrap', 'HTML/CSS', 'OpenLayers'],
    period: 'Jun 2017 – Jul 2017',
    link: 'https://shivendrasinghtanwar.github.io/Projects/Bhuvan%20Speed%20Post/',
    github: null as string | null,
    featured: false,
  },
  {
    name: 'Java Text Editor',
    description:
      'A fully functional rich text editor with search and formatting features, built using core Java concepts during an undergraduate internship.',
    tech: ['Java', 'Swing'],
    period: 'Jun 2016 – Jul 2016',
    link: null as string | null,
    github: null as string | null,
    featured: false,
  },
]
