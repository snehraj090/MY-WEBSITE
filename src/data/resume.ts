import type { ResumeData } from '../types';

export const defaultResumeData: ResumeData = {
  name: 'Raja Vishwakarma',
  title: 'Full Stack Developer (MERN & Java) | CS Student',
  summary:
    'Motivated third-year Computer Science student with hands-on experience in building production-ready full-stack web applications. Strong technical foundation in Data Structures, DBMS, OOP, REST API development, React, Node.js, Java, and modern database systems. Seeking internship opportunities to contribute to real-world software development projects.',
  careerGoals:
    'Seeking internship and placement opportunities where I can contribute to real-world software development projects through practical full-stack experience and collaborative teamwork.',
  interests: ['Full Stack Web Development', 'Java Application Development', 'Web Application Architecture', 'Database Design', 'Performance Optimization'],
  softSkills: ['Graphic Designing', 'Time Management', 'Decision Making', 'Teamwork', 'Collaboration', 'Adaptability', 'Leadership Quality'],
  photoUrl: '/profile.jpg',
  stats: [
    { label: 'Full Stack Projects', value: '2+', icon: 'code' },
    { label: 'Certifications', value: '6', icon: 'award' },
    { label: 'Current Year', value: '3rd Year', icon: 'book' },
    { label: 'Full-Stack Tech', value: 'React + Node + Java', icon: 'server' },
  ],
  skills: {
    languages: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    frontend: ['React.js', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Linux', 'VS Code', 'MySQL Workbench', 'Eclipse'],
    coreSubjects: ['Data Structures', 'DBMS', 'Computer Networks', 'Operating Systems', 'OOP'],
    advancedJava: ['Java Swing GUI', 'JDBC', 'OOP Design Patterns', 'Exception Handling', 'Collections Framework', 'Multithreading'],
  },
  projects: [
    {
      title: 'Content Management System (MERN Stack)',
      description:
        'Developed a full-stack CMS platform with secure user authentication and CRUD operations, including RESTful APIs for users, posts, and categories, backed by MongoDB and Mongoose.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      github: 'https://github.com/snehraj090',
      demo: '#',
    },
    {
      title: 'Student Management System (Java, MySQL)',
      description:
        'Built a GUI-based desktop application using Java Swing with CRUD functionality, search features, input validation, and a structured MySQL database schema.',
      stack: ['Java', 'MySQL', 'JDBC', 'Swing'],
      github: 'https://github.com/snehraj090',
      demo: '#',
    },
  ],
  education: [
    {
      degree: 'B.Tech - Computer Science & Information Technology',
      institution: 'Dronacharya College of Engineering, Gurgaon, India',
      year: '2023 - 2027',
      details: 'Third-year Computer Science student focusing on MERN stack development, database systems, and software engineering.',
    },
    {
      degree: 'High School (Science)',
      institution: 'SBS Intermediate College, Jharkhand Academic Council, Ranchi',
      year: '2023',
      details: 'Completed high school in Science with 85.8% and strong academic performance in core computer science concepts.',
    },
  ],
  certifications: [
    { title: 'Data Structures and Algorithms', issuer: 'Infosys', year: '2024' },
    { title: 'Java for Beginners', issuer: 'Onwingspan', year: '2026' },
    { title: 'SolidWorks - Beginners', issuer: 'Onwingspan', year: '2026' },
    { title: 'Cisco Networking Basics', issuer: 'Cisco', year: '2024' },
    { title: 'Infosys Springboard Certification', issuer: 'Infosys', year: '2024' },
    { title: 'IBM SkillBuild: Generative AI in Software Development', issuer: 'IBM', year: '2024' },
  ],
  contact: {
    email: 'rajak96097@gmail.com',
    phone: '+91-9693469224',
    location: 'Gurgaon, India',
    social: {
      github: 'https://github.com/snehraj090',
      linkedin: 'https://linkedin.com/in/raja-vishwakarma-335497340',
      twitter: '',
      website: '',
    },
  },
  resumeUrl: '/resume.pdf',
};
