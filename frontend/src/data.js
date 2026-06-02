import LPR from './LPR.jpeg'
import SSP from './SSP.jpeg'
import Nochat from './Nochat.jpeg'
import Nowhere from './Nowhere.jpeg'
import UniAssist from './UniAssist.svg'

export const portfolioData = {
  personalInfo: {
    name: "Syed Ibrahim Ali",
    title: "MERN Stack Developer | AI & Automation Engineer | Building Intelligent Systems with RAG & LLMs",
    email: "syedibrahimali1111@gmail.com",
    phone: "+92 3122287869",
    whatsapp: "https://wa.me/923122287869",
    location: "Karachi, Pakistan",
    linkedin: "https://www.linkedin.com/in/syed-ibrahim-ali-sia/",
    github: "https://github.com/ibrahim123-sia",
    resume: "/Syed_Ibrahim_Ali_Resume.pdf",
    bio: "Final-year Computer Science student with 6+ months of remote full-stack experience at a US-based company. I specialize in integrating AI into business to automate tasks using the MERN stack, FastAPI, and LLM-powered architectures."
  },

  skills: [
    { name: "React", category: "frontend", level: 85 },
    { name: "JavaScript", category: "frontend", level: 85 },
    { name: "Tailwind CSS", category: "frontend", level: 85 },
    { name: "Node.js", category: "backend", level: 90 },
    { name: "Express.js", category: "backend", level: 90 },
    { name: "FastAPI", category: "backend", level: 75 },
    { name: "MongoDB", category: "database", level: 85 },
    { name: "SQL / MSSQL", category: "database", level: 70 },
    { name: "RAG & LLMs", category: "ai_ml", level: 75 },
    { name: "Python", category: "ai_ml", level: 70 },
    { name: "TensorFlow", category: "ai_ml", level: 55 },
    { name: "scikit-learn", category: "ai_ml", level: 60 },
    { name: "Git", category: "tools", level: 80 },
  ],

  projects: [
    {
      id: 1,
      title: "UniAssist — AI-Powered University Assistant",
      description: "Full-stack RAG platform that lets students query academic documents with accurate context retrieval and sub-second responses. Features a smart chatbot, voice input, Roman Urdu support, JWT auth with role-based access, and LLMs integrated via FastAPI.",
      image: UniAssist,
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "RAG", "LLMs", "JWT"],
      github: "https://github.com/ibrahim123-sia/UniAssist",
      category: "ai_ml"
    },
    {
      id: 2,
      title: "AI-Powered Learning-Path-Recommender",
      description: "Generates personalized 4–6 week learning roadmaps with week-by-week plans and curated resources (videos, articles, tutorials), adapting in real time to the user's goals, skill level, and availability.",
      image: LPR,
      technologies: ["React", "Node.js", "Express.js", "Groq AI"],
      github: "https://github.com/ibrahim123-sia/Learning-Path-Recommender",
      liveDemo: "https://learning-path-recommender-2gdj.vercel.app",
      category: "ai_ml"
    },
    {
      id: 3,
      title: "AI-Powered Study-Session-Planner-Assistant",
      description: "Transforms academic goals into actionable weekly study schedules. Specify your exam or project, topics, and daily availability, and it builds a balanced, day-by-day plan.",
      image: SSP,
      technologies: ["React", "Node.js", "Express.js", "Groq AI"],
      github: "https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant",
      liveDemo: "https://study-session-planner-assistant-gyn.vercel.app",
      category: "ai_ml"
    },
    {
      id: 4,
      title: "Nochat — AI Assistant & Image Generator",
      description: "A versatile AI assistant that goes beyond text. Engage in seamless conversations and generate stunning images from simple prompts, with secure authentication and chat history.",
      image: Nochat,
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "JWT", "Groq"],
      github: "https://github.com/ibrahim123-sia/NoChat",
      liveDemo: "https://no-chat-y2my.vercel.app",
      category: "ai_ml"
    },
    {
      id: 5,
      title: "Nowhere — Full-Stack E-Commerce Platform",
      description: "An end-to-end e-commerce solution with JWT authentication, inventory management, shopping cart, a secure checkout flow, and an admin dashboard supporting the full order lifecycle.",
      image: Nowhere,
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "JWT"],
      github: "https://github.com/ibrahim123-sia/Nowhere",
      liveDemo: "https://nowhere-7ouy-1r41sse88-ibrahims-projects-a1ce14e2.vercel.app",
      category: "fullstack"
    },
  ],

 services: [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Build scalable web applications using MERN stack with modern architecture and best practices",
    icon: "",
    features: ["Custom Web Applications", "RESTful APIs", "Database Design", "Performance Optimization"]
  },
  {
    id: 2,
    title: "AI/ML Integration",
    description: "Integrate machine learning models and LLMs into web applications for intelligent features",
    icon: "",
    features: ["Model Deployment", "API Integration", "Real-time Predictions", "Computer Vision"]
  },
  {
    id: 3,
    title: "RAG & LLM Solutions",
    description: "Build retrieval-augmented generation systems and LLM-powered assistants over your own data",
    icon: "",
    features: ["Document Q&A / RAG", "Chatbots & Assistants", "FastAPI LLM Backends", "Context Retrieval"]
  },
  {
    id: 4,
    title: "AI Business Automation",
    description: "Streamline business processes and operations with intelligent automation solutions",
    icon: "",
    features: ["Workflow Automation", "Process Optimization", "Data Pipeline Automation", "Intelligent Reporting"]
  },
  {
    id: 5,
    title: "Backend Development",
    description: "Develop robust server-side applications and APIs with Node.js, Express, and FastAPI",
    icon: "",
    features: ["API Development", "Authentication & RBAC", "Server Architecture", "Database Management"]
  },
  {
    id: 6,
    title: "Frontend Development",
    description: "Create responsive and interactive user interfaces with modern frameworks",
    icon: "",
    features: ["React Applications", "Responsive Design", "State Management", "UI/UX Implementation"]
  }
],

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Yes Automotive — Houston, TX (Remote)",
      period: "Dec 2025 - Present",
      description: "Build and maintain full-stack web applications supporting business operations across multiple service locations for a US-based automotive services company. Develop RESTful APIs with Node.js and Express.js, optimize React.js interfaces for faster load times and cross-browser reliability, and collaborate asynchronously across US time zones with code reviews, Git workflows, and agile sprints."
    },
    {
      id: 2,
      title: "MERN Stack Developer Intern",
      company: "10Pearls — Pakistan",
      period: "Apr 2026 - June 2026",
      description: "Selected through a competitive process for an intensive MERN stack program focused on Node.js and React.js. Delivered hands-on full-stack projects while collaborating with a distributed team, reinforcing professional code quality and iterative delivery practices."
    },
  ],

  education: [
    {
      id: 1,
      degree: "BS Computer Science",
      institution: "Muhammad Ali Jinnah University, Islamabad",
      year: "Feb 2023 - Feb 2027",
      cgpa: "3.86 / 4.00",
      award: "Chancellor's Award for Academic Excellence (Fall 2023 & Spring 2024)",
      coursework: "DSA, Database Systems, OOP, Artificial Intelligence, Big Data, Software Engineering"
    },
  ]
};
