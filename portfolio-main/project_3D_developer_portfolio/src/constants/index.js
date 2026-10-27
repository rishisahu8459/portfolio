import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  robo,
  ghrce,
  ghrp,
  clustor,
  note,
  open,
  next,
  forge,
  Accenture
  
  



} from "../assets";

import  "../assets/company/robo.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineering",
    icon: web,
  },
  {
    title: "Reusable UI Systems",
    icon: backend,
  },
  {
    title: "Full-Stack Prototyping",
    icon: creator,
  },
  {
    title: "Cloud & DevOps",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
    {
    title: "Software Development Analyst (Full-time) — Promoted from Associate Software Engineer",
    company_name: "Accenture, Bengaluru, India",
    icon: Accenture,
    iconBg: "#E6DEDD",
    date: "Nov 2024 – Present",
    points: [
      "Reusable Components: Built new features, POCs, and business workflows as reusable React/TypeScript component libraries, cutting design-to-dev handoff time and improving UI consistency across 10+ product modules.",
      "Performance Engineering: Led migration of 47+ components across 4 enterprise fare-management modules to a redesigned table architecture, cutting UI re-renders on cell edit from 100+ rows to 1 and reducing render time by 20x.",
      "Scalability: Re-architected table state management to support 500+ rows, improving column sort by 6x and reducing DOM updates by up to 25x per interaction while replacing a near-unusable legacy component.",
      "Web Applications: Delivered responsive interfaces with React, TypeScript, Redux, Context API, and Vite for a high-traffic app used by thousands of internal users, integrating REST APIs, Microsoft authentication (Azure AD), and client-side form validation.",
      "Testing & Releases: Achieved about 95% Jest unit test coverage; resolved 30+ production and UAT bugs with zero critical defects across 4 consecutive releases and maintained Azure CI/CD pipelines for stable deployments.",
      "UX & Stakeholder Collaboration: Worked with UX designers, product owners, backend engineers, QA, and architects in Agile sprints to turn new designs into production-ready components and workflows.",
    ],
  },
  {
    title: "Software Development Engineer (Internship)",
    company_name: "Mobicore Infotech Software And Energy Pvt. Ltd., Nagpur, India",
    icon: robo,
    iconBg: "#E6DEDD",
    date: "Dec 2023 – Jun 2024",
    points: [
      "Led front-end development of the Swayam Control Panel using React.js, Firebase, and Node.js, delivering real-time device control, scheduling, and usage analytics.",
      "Built a clean, responsive home automation experience with data-driven dashboards and effective state handling for device operations.",
      "Worked closely with product stakeholders to implement features for scheduling, monitoring, and insights across the control panel.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company_name: "Clustor Computing",
    icon: clustor,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bachelors of Technology in Computer Science and Engineering",
    company_name: "G.H Raisoni College of Engineering, Nagpur",
    icon: ghrce,
    iconBg: "#E6DEDD",
    date: "December 2021 - June 2024*",
    points: [
      "Cource Work: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Cloud Technologies, Software Engineering, Machine Learning, Artificial Intelligence, Cloud Computing, Internet of Things, Blockchain Technology, Cyber Security, Big Data Analytics, and many more.",
    ],
  },
  {
    title: "Diploma In Computer Engineering",
    company_name: "G.H Raisoni Polytechnic, Nagpur",
    icon: ghrp,
    iconBg: "#E6DEDD",
    date: "2018 - 2021",
    points: [
      "Cource Work: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Cloud Technologies, Software Engineering, Machine Learning, Artificial Intelligence, Cloud Computing, Internet of Things, Blockchain Technology, Cyber Security, Big Data Analytics, and many more.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PayKit",
    description:
      "Accessible, themeable checkout component library with a serverless payments backend on AWS: idempotent orders, server-side Razorpay verification, deduplicated signed webhooks, and a Step Functions refund workflow.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "AWS Lambda", color: "pink-text-gradient" },
      { name: "DynamoDB", color: "yellow-text-gradient" },
      { name: "Step Functions", color: "red-text-gradient" },
    ],
    image: forge,
    source_code_link: "https://github.com/rishisahu8459/paykit",
  },
  {
    name: "AI Payments Support Agent",
    description:
      "Tool-using AI support agent for payment queries and refunds with schema-validated tools, per-customer data isolation, human approval for large refunds, and a dedicated evaluation harness.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "LLM API", color: "green-text-gradient" },
      { name: "AWS", color: "yellow-text-gradient" },
      { name: "DynamoDB", color: "pink-text-gradient" },
      { name: "MCP", color: "red-text-gradient" },
    ],
    image: next,
    source_code_link: "https://github.com/rishisahu8459/ai-payments-support-agent",
  },
  {
    name: "Apparel Store + Multi-Store CMS",
    description:
      "Full-stack e-commerce platform and CMS running multiple stores from one admin dashboard, with MySQL schema design, REST routes, Stripe payments, Clerk authentication, and email notifications.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "TypeScript", color: "yellow-text-gradient" },
      { name: "Prisma", color: "pink-text-gradient" },
      { name: "MySQL", color: "red-text-gradient" },
    ],
    image: next,
    source_code_link: "https://github.com/rishisahu8459/ecommerce-admin",
  },
  {
    name: "CryptoCrowd Forge",
    description:
      "A crowdfunding platform leveraging blockchain technology, allowing users to create campaigns, set goals, manage deadlines, and send or receive donations securely and transparently.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "ether.js", color: "green-text-gradient" },
      { name: "React.js", color: "yellow-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "Solidity", color: "red-text-gradient" },
    ],
    image: forge,
    source_code_link: "https://cryptocrowdforge.netlify.app/",
  },
  {
    name: "URL Shortener and Dashboard",
    description:
      "A web application that shortens URLs and provides analytics for click tracking and engagement insights.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: open,
    source_code_link: "https://github.com/rishisahu8459/open-in-app-Application",
  },
  {
    name: "Ecommerce Web App",
    description:
      "An e-commerce web app built with Python and Django featuring category browsing, product filters, and a cart flow.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/rishisahu8459/ecommerceapp",
  },
  {
    name: "Note Taking App",
    description:
      "A note-taking app that lets users create, edit, delete, and search their notes efficiently.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: note,
    source_code_link: "https://github.com/rishisahu8459/Noteapp",
  },
];

// Certifications — ordered by importance. `featured: true` items show by
// default; the rest appear behind a "Show more" button.
const certifications = [
  {
    title: "Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "Apr 2025 – Apr 2027",
    level: "Professional",
    skills: ["Cloud Architecture", "GCP", "+7"],
    color: "#4285F4",
    featured: true,
  },
  {
    title: "DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "Aug 2025 – Aug 2026",
    level: "Expert",
    skills: ["Azure DevOps", "Microsoft Azure", "+2"],
    color: "#00A4EF",
    featured: true,
  },
  {
    title: "Professional Cloud Security Engineer",
    issuer: "Google Cloud",
    date: "May 2025 – May 2028",
    level: "Professional",
    skills: ["IAM", "Cloud Security", "+7"],
    color: "#34A853",
    featured: true,
  },
  {
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Aug 2025 – Aug 2026",
    level: "Associate",
    skills: ["Microsoft Azure", "Azure DevOps"],
    color: "#00A4EF",
    featured: true,
  },
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Apr 2025 – Apr 2028",
    level: "Associate",
    skills: ["GCP", "Kubernetes", "+2"],
    color: "#4285F4",
  },
  {
    title: "AZ-400: Designing & Implementing DevOps Solutions",
    issuer: "Microsoft",
    date: "Jun 2025",
    level: "Specialty",
    skills: ["CI/CD", "GitHub Actions", "+1"],
    color: "#00A4EF",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2023",
    level: "Foundational",
    skills: [],
    color: "#FF9900",
  },
  {
    title: "OWASP Top 10: Securing Web Application",
    issuer: "Skillsoft",
    date: "Jul 2025",
    level: "Course",
    skills: ["Web Security"],
    color: "#EC1C24",
  },
  {
    title: "CCSP 2019: Application Development & Security",
    issuer: "Skillsoft",
    date: "2025",
    level: "Course",
    skills: ["AppSec"],
    color: "#EC1C24",
  },
  {
    title: "Essential Google Cloud Infrastructure: Foundation",
    issuer: "Google Cloud Skills Boost",
    date: "Dec 2022",
    level: "Foundational",
    skills: [],
    color: "#4285F4",
  },
  {
    title: "Android App Development",
    issuer: "Internshala",
    date: "Aug 2020",
    level: "Course",
    skills: ["Kotlin", "Problem Solving"],
    color: "#3DDC84",
  },
  {
    title: "MTA: Security Fundamentals",
    issuer: "Microsoft",
    date: "Feb 2020",
    level: "Foundational",
    skills: [],
    color: "#00A4EF",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certifications,
};
