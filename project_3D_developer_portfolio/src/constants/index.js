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
  robo,
  ghrce,
  ghrp,
  clustor,
  note,
  open,
  next,
  forge,



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
  // {
  //   id: "Projects",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Fullstack developer",
    icon: creator,
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
    title: "Software Developer Intern",
    company_name: "MOBICORE INFOTECH SOFTWARE AND ENERGY PVT. LTD",
    icon: robo,
    iconBg: "#E6DEDD",
    date: "December 2023 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    date: "Jan 2023 - Present",
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
    name: "CryptoCrowd Forge ",
    description:
      "a crowdfunding platform leveraging blockchain technology, allowing users to Create Campaigns, set goals, deadlines, send and receive donations securely and transparently.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ether.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "red-text-gradient",
      },
    ],
    image: forge,
    source_code_link: "https://cryptocrowdforge.netlify.app/",
  },
  {
    name: "Apparel store with dashboard And CMS",
    description:
      "Developed a Dashboard and CMS using Next.js, Javascript and Mysql to manage multiple stores. ",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "red-text-gradient",
      },
    ],
    image: next,
    source_code_link: "https://github.com/rishisahu8459/ecommerce-admin",
  },
  
  {
    name: "Url Shortener and Dashboard",
    description:
      "Android application that allows users to shorten URLs and view analytics for the shortened URLs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: open,
    source_code_link: "https://github.com/rishisahu8459/open-in-app-Application",
  },
  {
    name: "Ecommerce Web App ",
    description:
      "Designed an Ecommerce web App using python and Django With Features like Add to cart ,browse with categories and filters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rishisahu8459/ecommerceapp",
  },
  {
    name: "Note Taking app",
    description:
      " A note taking app that allows users to create, edit, and delete notes. Users can also search for notes.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: note,
    source_code_link: "https://github.com/rishisahu8459/Noteapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
