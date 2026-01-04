import LPR from './LPR.jpeg'
import SSP from './SSP.jpeg'
import Nochat from './Nochat.jpeg'
import Nowhere from './Nowhere.jpeg'

export const portfolioData = {
  personalInfo: {
    name: "Syed Ibrahim Ali",
    title: "MERN Stack Developer & Aspiring AI/ML Engineer",
    email: "syedibrahimali1111@gmail.com",
    phone: "+92 3122287869",
    whatsapp: "https://wa.me/923122287869",
    location: "Pakistan",
    linkedin: "https://www.linkedin.com/in/syed-ibrahim-ali-sia/",
    github: "https://github.com/ibrahim123-sia",
    bio: "Bridging Web Interfaces with Intelligent Systems and Computer Vision. Passionate about creating innovative solutions that combine web development with artificial intelligence."
  },

  skills: [
    { name: "React", category: "frontend", level: 80 },
    { name: "Node.js", category: "backend", level: 90 },
    { name: "Express.js", category: "backend", level: 90 },
    { name: "MongoDB", category: "database", level: 85 },
    { name: "Python", category: "ai_ml", level: 70 },
    { name: "TensorFlow", category: "ai_ml", level: 55 },
    { name: "scikit-learn", category: "ai_ml", level: 60 },
    { name: "JavaScript", category: "frontend", level: 85 },
    { name: "Tailwind CSS", category: "frontend", level: 85 },
    { name: "Git", category: "tools", level: 80 },
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Learning-Path-Recommender",
      description: "Leaning Path Recommender crafts personalized, 4–6 week learning roadmaps. week-by-week plan with curated resources (videos, articles, tutorials).",
      image: LPR,
      technologies: ["React", "Node.js", "Express.js", "Groq (Recommendation)",],
      github: "https://github.com/ibrahim123-sia/Learning-Path-Recommender",
      liveDemo: "https://learning-path-recommender-2gdj.vercel.app",
      category: "ai_ml"
    },
    {
      id: 2,
      title: "AI-Powered Study-Session-Planner-Assistant",
      description: "Transform academic goals into actionable weekly study schedules. Specify your exam or project, topics, and daily availability.",
      image: SSP,
      technologies: ["React", "Node.js", "Express.js", "Groq (Recommendation)"],
      github: "https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant",
      liveDemo: "https://study-session-planner-assistant-gyn.vercel.app",
      category: "ai_ml"
    },
    {
      id: 3,
      title: "Nochat AI Assistant & Image Generator",
      description: "A versatile AI assistant that goes beyond text. Engage in seamless conversations and generate stunning images from simple prompts.",
      image: Nochat,
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "JWT", "GROQ"],
      github: "https://github.com/ibrahim123-sia/NoChat",
      liveDemo: "https://no-chat-y2my.vercel.app",
      category: "ai_ml"
    },
    {
      id: 4,
      title: "Nowhere E-Commerce Web Application",
      description: "Nowhere is a full-stack E-Commerce web application. It provides a complete online shopping experience",
      image: Nowhere,
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "JWT",],
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
    description: "Integrate machine learning models into web applications for intelligent features",
    icon: "",
    features: ["Model Deployment", "API Integration", "Real-time Predictions", "Computer Vision"]
  },
  {
    id: 3,
    title: "AI Business Automation",
    description: "Streamline business processes and operations with intelligent automation solutions",
    icon: "",
    features: ["Workflow Automation", "Process Optimization", "Data Pipeline Automation", "Intelligent Reporting"]
  },
  {
    id: 4,
    title: "Frontend Development",
    description: "Create responsive and interactive user interfaces with modern frameworks",
    icon: "",
    features: ["React Applications", "Responsive Design", "State Management", "UI/UX Implementation"]
  },
  {
    id: 5,
    title: "Backend Development",
    description: "Develop robust server-side applications and APIs with Node.js and Express",
    icon: "",
    features: ["API Development", "Authentication Systems", "Server Architecture", "Database Management"]
  },
  {
    id: 6,
    title: "Business Intelligence Solutions",
    description: "Transform raw data into actionable insights with AI-powered analytics",
    icon: "",
    features: ["Data Visualization", "Predictive Analytics", "Dashboard Development", "Performance Metrics"]
  }
],

  experience: [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Freelance Web Developer /  Self-Employed ",
      period: "2024 - Present",
      description: "Developed full-stack applications, implemented REST APIs, and integrated AI models"
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Muhammad Ali Jinnah University",
      year: "2023 - 2027"
    },
   
  ]
};