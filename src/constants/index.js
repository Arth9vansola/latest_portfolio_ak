
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  carmarketplacesite,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  design360,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  kodacylogo,
  pythonDataScienceCert,
  codedxHtmlCert,
  codedxCssCert,
  codedxJsCert,
  seleniumCert,
  oracleAiCert,
  googleCvCert,
  landingPage,
} from '../assets'


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
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GitHub",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "Arduino",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
  },
  {
    name: "Google Workspace",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  },
  {
    name: "Microsoft Office",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
  },
  {
    name: "Jupyter Notebook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Google Colab",
    icon: "https://colab.research.google.com/img/colab_favicon_256px.png",
  },
  {
    name: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Selenium",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "MERN Developer",
    company_name: "360 Design", 
    icon: design360,
    iconBg: "#383E56",
    date: "May 2025 - June 2025",
    points: [
      "Dived into full-stack web development using React.js, Node.js, Express.js, and MongoDB, building dynamic and responsive web apps from scratch.",
      "Gained real-world experience in designing, developing, and deploying modern web solutions while sharpening my frontend-to-backend integration skills.",
      "Created functional documentation and ensured clear user flow - enhancing user experience and system clarity.",
    ],
  },
  {
    title: "Virtual Robotics Internship",
    company_name: "Kodacy", 
    icon: kodacylogo,
    iconBg: "#383E56",
    date: "Oct 2024",
    points: [
      "Worked closely on real-world robotics challenges—integrating sensors, actuators, and building automation workflows from the ground up.",
      "Sharpened design and control skills through simulations and hands-on problem-solving, while collaborating with peers to tackle complex engineering tasks.",
      "Solved real-world automation challenges involving sensors and actuators, contributing to problem analysis and workflow design.",
    ],
  },
];



const projects = [
  {
    name: "Car Marketplace AI",
    description:
      "motionGo is a full-stack car marketplace that enables users to browse, manage, and book cars with ease through a modern, AI-powered interface.Built with Next.js 15, it offers secure authentication, admin dashboards, and a seamless user experience across all devices.",
    tags: [],
    image: carmarketplacesite,
    source_code_link: "https://github.com/Arth9vansola/carMarketPlace_ai",
    deployed_link: "https://car-market-place-ai-ten.vercel.app/",
  },
    {
    name: "Zinter - Real-Time Collaborative Coding Platform",
    description:
      "A full-stack web application for conducting live coding interviews with integrated video calls, real-time chat, and collaborative code execution.",
    tags: [],
    image: landingPage,
    source_code_link: "https://github.com/Arth9vansola/zinter",
    deployed_link: "https://zinter.onrender.com/",
  },
];

const certifications = [
  {
    name: "Python For Data Science",
    issuer: "IIT Madras",
    date: "2024",
    description: [
      "An Elite-certified professional in Python for Data Science.",
      "Successfully completed the NPTEL course offered by IIT Madras.",
      "Focused on leveraging data skills to build insightful, effective solutions.",
    ],
    image: pythonDataScienceCert,
    credential_url: "#",
  },
  {
    name: "HTML",
    issuer: "Codedex",
    date: "2024",
    description: [
      "Confirms successful completion of \"The Origins I: HTML\" by Arth Vansola, establishing core skills in structuring web-based solutions.",
      " Awarded by Codédex on December 10, 2024, verifying proficiency in web development fundamentals"
    ],
    image: codedxHtmlCert,
    credential_url: "#",
  },
  {
    name: "CSS",
    issuer: "Codedex",
    date: "2024",
    description: [
      "Certifies Arth Vansola's completion of \"The Origins II: CSS,\" demonstrating the ability to design and style effective user interfaces.",
      "CSS is leveraged to transform raw data and structured content into visually compelling and insightful dashboards, reports, and applications."
    ],
    image: codedxCssCert,
    credential_url: "#",
  },
   {
    name: "JavaScript",
    issuer: "Codedex",
    date: "2024",
    description: [
      "Verifies Arth Vansola's successful completion of \"The Origins III: JavaScript,\" showcasing skills in building interactive, client-side solutions.",
      "JavaScript is utilized to enhance user experiences by enabling real-time updates and interactive features."
    ],
    image: codedxJsCert,
    credential_url: "#",
  },
   {
    name: "Selenium with Python",
    issuer: "Udemy",
    date: "2025",
    description: [
      "Selenium is a powerful tool for automating web-based processes, including data extraction and quality assurance for data-driven applications. Proficiency in Selenium enables the development of robust, automated workflows to ensure data accuracy and build more reliable solutions.",
    ],
    image: seleniumCert,
    credential_url: "#",
  },
   {
    name: "Oracle AI",
    issuer: "Oracle",
    date: "2025",
    description: [
      "This certification demonstrates a practical understanding of core AI and machine learning principles within the Oracle Cloud ecosystem. These skills are essential for designing, developing, and deploying scalable, data-driven applications and intelligent solutions.",
    ],
    image: oracleAiCert,
    credential_url: "#",
  },
   {
    name: "Google Computer Vision",
    issuer: "Google Cloud",
    date: "2025",
    description: [
      "This skill set involves using machine learning frameworks like TensorFlow to train models that can interpret and analyze visual data. It is directly applied to build effective solutions for image classification, object detection, and automated visual analysis.",
    ],
    image: googleCvCert,
    credential_url: "#",
  },
];

export { services, technologies, experiences, projects, certifications };
