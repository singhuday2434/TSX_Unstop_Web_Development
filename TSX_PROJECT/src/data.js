import computer from "./images/computer.png"
import bot from "./images/bot.png"
import brain from "./images/brain.png"
import lightbulb from "./images/lightbulb.png"
import wrench from "./images/wrench.png"
import portfolio from "./images/portfolio.png"
import eye from "./images/eye.png"
import plantDoc from "./images/plantDoc.png"
import wasteWise from "./images/wasteWise.jpeg"
const whatIDo = [
  {
    title: "Web Development",
    icon:computer,
    description: "Building responsive and user-friendly websites using HTML, CSS, JavaScript, and the MERN stack. Focused on performance and scalability."
  },
  {
    title: "Machine Learning",
    icon: brain,
    description: "Designing and deploying ML models using Python and TensorFlow. Specialized in image classification and model deployment."
  },
  {
    title: "Backend Development",
    icon: wrench,
    description: "Creating secure and scalable RESTful APIs using Node.js and Express. Skilled in database integration with MongoDB."
  },
  {
    title: "Problem Solving",
    icon: lightbulb,
    description:  "Strong grip on DSA and OOP to solve complex coding problems with clean, efficient logic."
  },
  {
    title: "AI Tools & Prompt Engineering",
    icon: lightbulb,
    description: "Using tools like ChatGPT for code, content, and automation with optimized prompt strategies."
  }
];



const techStack = [
  { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { title: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { title: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { title: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { title: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { title: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { title: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { title: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
  { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { title: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { title: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { title: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { title: "Railway", icon: "https://railway.app/brand/logo-light.png" },
  { title: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" }
];
const experienceData = [
  {
   b: "Full Stack Developer",
   a: "WasteWise – Smart Waste Classification System",
   c: "May 2025",
   d:
      "Helped build WasteWise during a hackathon using Node.js, Express, and TensorFlow. Developed REST APIs and integrated the ML model for waste classification. Contributed to React-based frontend for real-time interaction."
  },
  {
    b: "Frontend Developer",
    a: "Personal Portfolio Website",
    c: "May 2025 – Present",
    d:
      "Designed and developed a personal portfolio using React.js and Tailwind CSS. Implemented routing with React Router and created a responsive UI to showcase projects and skills."
  },
  {
    b: "Machine Learning Developer",
    a: "Plant Disease Detection System",
    c: "April 2025 – Present",
    d:
      "Built an image classification system using TensorFlow and Flask. Users can upload plant leaf images and receive disease predictions. Focused on model training, UI integration, and deployment."
  },
  {
    b: "Full Stack Developer",
    a: "Web Development Certification Projects – Eduskills",
    c: "Jan 2025 – Mar 2025",
    d:
      "Worked on MERN stack-based full-stack projects. Gained experience in building CRUD-based applications, handling state with Redux, and following modern web dev practices."
  },
  {
    b: "Data Analyst Intern (Virtual)",
    a: "Deloitte (Forage Job Simulation)",
    c: "2025",
    d:
      "Performed data analysis using Excel and built dashboards in Tableau. Analyzed and visualized datasets to extract business insights in a corporate simulation."
  }
];

const educationData = [
  {
    a: "Meerut Institute of Engineering and Technology",
    b: "Bachelor of Technology in Computer Science & Engineering",
    c: "2022 – Present",
    d:
      "Currently pursuing B.Tech in CSE with a CGPA of 8.5. Actively engaged in development projects, problem-solving, and exploring AI/ML through coursework and self-learning."
  },
  {
    a: "Dayawati Modi Public School, Modinagar",
    b: "Senior Secondary (PCM – CBSE)",
    c: "2021 – 2022",
    d:
      "Scored 97% with strong skills in Physics, Chemistry, and Math. Built a strong analytical and logical reasoning base for technology-driven learning."
  },
  {
    a: "Dayawati Modi Public School, Modinagar",
    b: "Secondary Education (CBSE)",
    c: "2019 – 2020",
    d:
      "Secured 88% in Class 10 board exams with consistent academic performance and a strong interest in mathematics and computer science."
  }
];
const skillsData = [
  {
    name: "Web Development",
    proficiency: 92
  },
  {
    name: "Data Structures & Algorithms",
    proficiency: 85
  },
  {
    name: "React.js ",
    proficiency: 88
  },
  {
    name: "Node.js & Express.js",
    proficiency: 90
  },
  {
    name: "MongoDB & REST APIs",
    proficiency: 87
  },
  {
    name: "Machine Learning (TensorFlow/Keras)",
    proficiency: 80
  },
  {
    name: "Python Programming",
    proficiency: 90
  },
  {
    name: "Git & GitHub",
    proficiency: 95
  },
  {
    name: "UI Design (Tailwind CSS/Figma basics)",
    proficiency: 75
  },
  
  {
    name: "AI Tools (ChatGPT, GitHub Copilot)",
    proficiency: 88
  }
];

const portfolioData=[{
  img:portfolio,
  title:"Personal Portfolio ",
  category:"Web_Development",
  linkimg:eye,
  link:`https://github.com/singhuday2434`,
  video:'#'
},{ img:plantDoc,
  title:"Plant Doctor ",
  category:"Web_Development+ML",
  linkimg:eye,
  link:`https://github.com/singhuday2434`,
video:'#'},{
     img:wasteWise,
  title:"Waste Wise",
  category:"Web_Development+ML",
  linkimg:eye,
  link:`https://github.com/singhuday2434/Garbage_classification.git`,
  video:'https://drive.google.com/file/d/1XVoMAU4FJC7j5rzqrrWS-t1NIbtYHCZp/view?usp=drive_link'
  },];

const data={whatIDo,techStack,experienceData ,educationData,skillsData ,portfolioData}
export default data;
