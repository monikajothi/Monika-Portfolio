// ── src/data/portfolio.js ─────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const meta = {
  name: 'Monika Jothi',
  role: 'Full Stack AI Engineer',
  location: 'Salem, Tamil Nadu 🇮🇳',
  email: 'monikajothi07@gmail.com',
  // phone: '+91 97885 83223',
  github: 'https://github.com/monikajothi',
  linkedin: 'https://www.linkedin.com/in/monikarj/',
  tagline: 'Building intelligent systems at the intersection of AI · Full Stack · Data ',
  badge: '⬡ Full Stack · AI/ML · Data Science',
  status: 'Open to Opportunities',
  cgpa: '8.40',
  college: 'Kongu Engineering College',
  degree: 'B.Tech — Artificial Intelligence & Data Science',
  graduationYear: '2026',
  resumeUrl: 'https://drive.google.com/file/d/1yDTTa0Pnm4n58RKOvHx5KB3WBFQ_nPEj/view?usp=sharing', // replace with actual PDF URL
};

// Optional hero background video. Set to `null` to disable.
export const heroVideo = 'https://www.pexels.com/download/video/3141210/'; // replace with your MP4 URL

export const about = {
  paragraphs: [
    `I'm a <strong>Full Stack AI Engineer</strong> graduated in 2026 from Kongu Engineering College with a B.Tech in Artificial Intelligence and Data Science with CGPA of 8.40. My work lives at the intersection of intelligent systems and production engineering.`,
    `At PunchBiz, I shipped a <strong>production-ready billing and inventory system</strong> — a full-stack MERN application serving live clients. I also embedded ML-based demand forecasting directly into the inventory workflow, turning data into decisions.`,
    `My flagship project — a <strong>Hallucination-Aware ML Assistant</strong> — focuses on reducing hallucinations through a custom multi-signal trust scoring system. It's not just AI; it's accountable AI.`,
    `Beyond engineering, I'm a <strong>Lead Anchor</strong> for my college's Cultural & Music Club, published in IEEE and ACL Anthology, and a two-time paper presentation prizewinner. I build things that matter — technically and beyond.`,
  ],
  terminal: {
    label: 'monika@portfolio ~ %',
    lines: [
      { type: 'code', content: [{ t: 'cmd', v: 'const' }, { t: 'plain', v: ' ' }, { t: 'key', v: 'engineer' }, { t: 'plain', v: ' = {' }] },
      { type: 'indent', content: [{ t: 'key', v: 'name' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Monika Jothi",' }] },
      { type: 'indent', content: [{ t: 'key', v: 'role' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Full Stack AI Engineer",' }] },
      { type: 'indent', content: [{ t: 'key', v: 'location' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Salem, Tamil Nadu 🇮🇳",' }] },
      { type: 'indent', content: [{ t: 'key', v: 'status' }, { t: 'plain', v: ': ' }, { t: 'val', v: '"Open to Opportunities",' }] },
      { type: 'indent', content: [{ t: 'key', v: 'education' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"B.Tech AI & DS, KEC",' }] },
      { type: 'indent', content: [{ t: 'key', v: 'passions' }, { t: 'plain', v: ': [' }] },
      { type: 'indent2', content: [{ t: 'str', v: '"RAG Systems"' }, { t: 'plain', v: ', ' }, { t: 'str', v: '"LLM Engineering",' }] },
      { type: 'indent2', content: [{ t: 'str', v: '"Full Stack"' }, { t: 'plain', v: ', ' }, { t: 'str', v: '"Data Science"' }] },
      { type: 'indent', content: [{ t: 'plain', v: '],' }] },
      { type: 'indent', content: [{ t: 'key', v: 'certified' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Azure AI Engineer AZ-102"' }] },
      { type: 'code', content: [{ t: 'plain', v: '};' }] },
      { type: 'comment', content: '// currently: building the future of AI' },
    ],
  },
 
};

export const skills = [
  {
    icon: '🤖',
    title: 'AI / LLM Engineering',
    tags: [
      { label: 'RAG Pipelines', accent: true },
      { label: 'LLM Integration', accent: true },
      { label: 'Prompt Engineering' },
      { label: 'FAISS' },

      { label: 'Embeddings' },
      { label: 'Vector Search' },
      { label: 'RAGAS' },
      { label: 'Hallucination Detection' },
    ],
  },
  {
    icon: '⚡',
    title: 'Full Stack Development',
    tags: [
      { label: 'React.js', accent: true },
      { label: 'Node.js', accent: true },
      { label: 'Express.js' },
      { label: 'MongoDB' },
      { label: 'MySQL' },
      { label: 'REST APIs' },
      { label: 'FastAPI' },
      { label: 'Tailwind CSS' },
    ],
  },
  {
    icon: '🧠',
    title: 'ML & Data Science',
    tags: [
      { label: 'Python', accent: true },
      { label: 'Scikit-learn' },
      { label: 'NLP' },
      { label: 'NLTK' },
      { label: 'OCR' },
      { label: 'Demand Forecasting' },
      { label: 'Statistical Analysis' },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    tags: [
      { label: 'Microsoft Azure', accent: true },
      { label: 'Docker' },
      { label: 'Git / GitHub' },
      { label: 'Postman' },
      { label: 'Java' },
      { label: 'SQL' },
    ],
  },
  {
    icon: '📊',
    title: 'Data Visualization',
    tags: [
      { label: 'Tableau', accent: true },
      { label: 'Power BI', accent: true },
      { label: 'Figma' },
      { label: 'Data Storytelling' },
      { label: 'Dashboard Design' },
    ],
  },
  {
    icon: '🗃️',
    title: 'Databases & Search',
    tags: [
      { label: 'MongoDB', accent: true },
      { label: 'MySQL', accent: true },
      { label: 'Vector Databases' },
      { label: 'FAISS Index' },
      { label: 'Semantic Search' },
    ],
  },
];

export const experience = [
  {
    period: 'Jul 2024 – Dec 2024',
    type: 'Remote · Internship',
    role: 'Full Stack Data Scientist',
    company: 'PunchBiz',
    points: [
      'Built a production-ready billing system with React.js, Tailwind CSS, and MongoDB — enabling invoice generation, inventory tracking, and real-time business reporting for live clients.',
      'Embedded an ML-based demand forecasting model into the inventory workflow, delivering data-driven stock recommendations that reduced manual estimation effort significantly.',
      'Collaborated directly with stakeholders to translate business requirements into scalable full-stack features; supported client onboarding through live demos and documentation.',
    ],
  },
  // {
  //   period: '2022 – 2026',
  //   type: 'Erode, Tamil Nadu',
  //   role: 'B.Tech — Artificial Intelligence & Data Science',
  //   company: 'Kongu Engineering College',
  //   points: [
  //     'Published research in ACL Anthology (2024) and IEEE (2026) — covering ML-based stress identification and brain hemorrhage classification.',
  //     'Azure AI Engineer Associate certified (AZ-AI-102, 2025).',
  //   ],
  // },
];

export const projects = [
  {
    num: '// 01',
    type: 'Flagship',
    title: 'Hallucination-Aware ML Assistant',
    accentColor: 'var(--cyan)',
    desc: 'A trust-aware RAG system for domain-specific Q&A that actively minimises hallucinations through retrieval grounding and a custom multi-signal trust scoring module.',
    impact: '⚡ Trust-aware RAG system · calibrated abstention',
    stack: ['Python', 'RAG', 'LLM', 'FAISS', 'Embeddings', 'Semantic Chunking'],
    github: 'https://github.com/monikajothi/LLM-Hallucination',
    demo: null,
  },
  {
    num: '// 02',
    type: 'Full Stack + ML',
    title: 'Inventory Management System',
    accentColor: 'var(--purple)',
    desc: 'Full-stack inventory platform with admin controls, a real-time sales dashboard, and an ML demand forecasting model — predicting stock needs before they become stockouts.',
    impact: '📦 ML-driven stock predictions · reduced stockout risk',
    stack: ['MERN', 'Python', 'Scikit-learn', 'REST API', 'MongoDB'],
    github: 'https://github.com/monikajothi/Inventory_management',
    demo: 'https://inventory-management-4.onrender.com/login',
  },
  {
    num: '// 03',
    type: 'AI Web App',
    title: 'SafeBite AI — Ingredients Safety Checker',
    accentColor: 'var(--pink)',
    desc: 'An AI-powered web app that scans product labels via OCR, classifies ingredients for allergens, additives, and dietary restrictions in real time using NLP and LLM analysis.',
    impact: '🏆 2nd Prize — Idea Presentation, KEC 2024',
    stack: ['MERN', 'OCR', 'NLP', 'LLM', 'React'],
    // github: 'https://github.com/monikajothi',
    demo: 'https://food-safety-checker.vercel.app/',
  },
  {
    num: '// 04',
    type: 'Data Viz',
    title: 'Crime Analysis Dashboard',
    accentColor: 'var(--amber)',
    desc: 'An interactive Tableau dashboard analyzing 9,000+ crime records across Indian states — revealing regional trends, temporal patterns, and category-level distributions for data-driven policy insights.',
    impact: '📊 State-wise pattern analysis',
    stack: ['Tableau', 'Statistical Analysis', 'Data Visualization'],
    github: 'https://github.com/monikajothi/Crime-Analysis-Dashboard-India-2001-2012-',
    demo: null,
  },
   {
    num: '// 05',
    type: 'Full Stack',
    title: 'E-Commerce Website',
    accentColor: 'var(--purple)',
    desc: `I developed a full-featured e-commerce platform using the MERN stack — MongoDB, Express.js, React, and Node.js. The app features an eco-friendly products section to encourage sustainable choices and focuses on a seamless user experience while ensuring scalability and security.`,
    impact: 'Eco-friendly products section · Scalable, secure MERN platform',
    stack: ['MERN', 'React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/monikajothi/e-commerce-platform',
    demo: null,
  },
    {
    num: '// 06',
    type: 'Data / ML',
    title: 'Document Classifier',
    accentColor: 'var(--cyan)',
    desc: `Real-time document classification using logistic regression with TF-IDF features. PySpark handles large text datasets, Flask provides the backend API, and React delivers a responsive frontend.`,
    impact: 'Real-time classification · scalable text processing',
    stack: ['PySpark', 'Flask', 'React', 'Scikit-learn', 'TF-IDF'],
    github: 'https://github.com/monikajothi/Document_Classifier',
    demo: 'https://document-classifier-fnum.onrender.com/',
  },
  {
    num: '// 07',
    type: 'Mobile · ML',
    title: 'Plant Disease Prediction App',
    accentColor: 'var(--green)',
    desc: `Mobile app that uses a CNN-based model to identify plant diseases from leaf images. Built with Flutter for cross-platform UI and Flask for backend inference, aimed at accessible AI diagnostics for farmers.`,
    impact: 'On-device diagnosis · farmer-focused UX',
    stack: ['Flutter', 'TensorFlow', 'Flask', 'CNN'],
    github: 'https://github.com/monikajothi/plant-app',
    demo: null,
  },
   {
  num: '// 08',
  type: 'Java',
  title: 'Parking Lot System ',
  accentColor: 'var(--amber)',
  desc: 'A compact command-line Parking Lot management app demonstrating basic parking operations (park, free slot, show status) and core Java concepts like OOP, collections, and exception handling.',
  impact: 'Learning-focused example — clean, minimal, and instructive',
  stack: ['Java'],
  github: 'https://github.com/monikajothi/Parking-Lot-System-using-Java',
  demo: null,
},
];

export const certifications = [
  {
    icon: '🏅',
    iconBg: 'rgba(168,85,247,0.1)',
    iconBorder: 'rgba(168,85,247,0.2)',
    title: 'Azure AI Engineer Associate',
    sub: 'AZ-AI-102 · Microsoft Certified',
    year: '2025',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/MonikaRJ-7411/3DD62EC95A615210?sharingId=42943EF0F92B886E',
    cardBorder: '',
  },
  {
    icon: '🔬',
    iconBg: 'rgba(0,255,136,0.08)',
    iconBorder: 'rgba(0,255,136,0.2)',
    title: 'IEEE Publication',
    sub: 'Hybrid Ensemble Learning for Brain Hemorrhage Classification',
    year: '2026',
    paperUrl: 'https://ieeexplore.ieee.org/document/11436766',
    cardBorder: '',
  },
  {
    icon: '📄',
    iconBg: 'rgba(0,245,255,0.08)',
    iconBorder: 'rgba(0,245,255,0.2)',
    title: 'ACL Anthology Publication',
    sub: 'Stress Identification using ML Techniques',
    year: '2024',
    paperUrl: 'https://aclanthology.org/2024.ltedi-1.37/',
    cardBorder: 'borderLeft',
  },
  
];

export const extracurriculars = [
  {
    title: 'Lead Anchor — Cultural & Music Club',
    period: '2023–2026',
    details:
      'Led and hosted college cultural & music events — managed stage, rehearsals, and audience engagement.',
  },
  {
    title: 'Executive Member — CSI',
    period: '2023–2025',
    details:
      'Organised and supported technical workshops, presentations, and student projects.',
  },
  {
    title: 'Executive Member — Zhagaram Tamil Mandram',
    period: '2023–2024',
    details:
      'Designed event graphics (posters, certificates) and assisted event planning and coordination.',
  },
  {
    title: 'NSS Volunteer',
    period: '2023–2024',
    details:
      'Volunteer work in community outreach programs focused on education and public service.',
  },
  // {
  //   title: 'Inter-College Competition Award Winner',
  //   period: '2022-2026',
  //   details:
  //     'Secured multiple awards in inter-college idea presentations, paper presentations, and project competitions for innovative AI and technology-based solutions, demonstrating strong technical, presentation, and problem-solving abilities.',
  // },
];


export const achievements = [
  {
    icon: '🥈',
    title: '2nd Prize — Idea Presentation, Kongu Engineering College',
    desc: 'SafeBite AI — Ingredients Safety Checker',
    year: '2024',
  },
  {
    icon: '🥈',
    title: '2nd Prize — Paper Presentation, PSG College',
    desc: 'Brain Tumour Analysis using Deep Learning',
    year: '2024',
  },
  {
    icon: '🥈',
    title: '2nd Prize — Idea Presentation, PSG College',
    desc: 'Smart Sweep — AI-Powered Trash Detection System',
    year: '2024',
  },
  {
    icon: '🏆',
    title: 'School 1st Rank — SSLC Board Exams',
    desc: '96% · Sri Vidhyaa Mandir Hr Sec School',
    year: '2020',
  },
];

export const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#experience',   label: 'Exp' },
  { href: '#projects',     label: 'Projects' },
  { href: '#education',    label: 'Education' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact',      label: 'Contact' },
];

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Kongu Engineering College',
    period: '2022–2026',
    score: 'CGPA: 8.40',
    location: 'Erode, Tamil Nadu',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Mahendra Matric Hr Sec School',
    period: '2022',
    score: '93%',
    location: 'Namakkal, Tamil Nadu',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Sri Vidhyaa Mandir Hr Sec School',
    period: '2020',
    score: '96% | School First Rank',
    location: 'Salem, Tamil Nadu',
  },
];
