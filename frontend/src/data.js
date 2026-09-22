import LPR from './LPR.jpeg'
import SSP from './SSP.jpeg'
import Nochat from './Nochat.jpeg'
import Nowhere from './Nowhere.jpeg'
import UniAssist from './UniAssist.svg'

export const portfolioData = {
  personalInfo: {
    name: "Syed Ibrahim Ali",
    title: "AI Engineer & Full-Stack Developer",
    tagline: "Building business solutions with agentic AI & automation",
    email: "syedibrahimali1111@gmail.com",
    phone: "(+92) 322-339-6443",
    whatsapp: "https://wa.me/923223396443",
    location: "Karachi, Pakistan",
    linkedin: "https://www.linkedin.com/in/syed-ibrahim-ali-sia/",
    github: "https://github.com/ibrahim123-sia",
    resume: "/Syed_Ibrahim_Ali_Resume.pdf",
    // Short hero bio
    bio: "I build complete business solutions — the AI layer that automates decisions and workflows, and the full-stack architecture, backends, and interfaces that make it run in production.",
    // Roles shown in the hero "Currently" card
    currently: [
      { title: "AI Engineer", company: "Yes Automotive · Remote (US)" },
      { title: "Full-Stack Developer", company: "Co-Ventech · Karachi" },
    ],
    // Longer form for the About section (kept tight — 2 short paragraphs)
    about: [
      "I'm an AI Engineer and Full-Stack Developer who builds complete business solutions — the AI layer that automates decisions and workflows, and the architecture, backends, and interfaces beneath it that make everything run in production.",
      "My core interest is agentic AI in production: systems where AI uses tools, context, and structured workflows to complete real business tasks reliably. I work with RAG, LLM APIs, and MCP on top of a full-stack foundation in React, Next.js, Node.js, Python, and FastAPI.",
    ],
  },

  // Headline metrics reused across the hero and sections
  stats: [
    { value: "5+", label: "Projects Shipped" },
    { value: "3", label: "Professional Roles" },
    { value: "3.86", label: "CGPA / 4.00" },
    { value: "20+", label: "Technologies" },
  ],

  // Skills grouped by domain (chips, not arbitrary percentages)
  skillGroups: [
    {
      title: "AI & Machine Learning",
      key: "ai_ml",
      skills: [
        "Agentic AI",
        "RAG Architectures",
        "LLM APIs",
        "Model Context Protocol (MCP)",
        "AI Automation",
        "Machine Learning",
        "Python",
      ],
    },
    {
      title: "Frontend",
      key: "frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "Tailwind CSS",
        "HTML5 & CSS3",
      ],
    },
    {
      title: "Backend",
      key: "backend",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "JWT Auth & RBAC",
      ],
    },
    {
      title: "Databases",
      key: "database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "MSSQL"],
    },
    {
      title: "Tools & Practices",
      key: "tools",
      skills: [
        "Git & GitHub",
        "Postman",
        "Unit Testing",
        "SonarQube",
        "Agile / SDLC",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "UniAssist — AI University Assistance Platform",
      description: "A full-stack RAG platform that lets students query academic documents with accurate context retrieval across 100+ document types at sub-second response times. Secure backend with JWT auth and role-based access control; LLMs integrated via FastAPI for intelligent query responses.",
      image: UniAssist,
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "RAG", "LLMs", "JWT"],
      github: "https://github.com/ibrahim123-sia/UniAssist",
      category: "ai_ml"
    },
    {
      id: 2,
      title: "AI Learning Path Recommender",
      description: "An AI system that generates personalized 4–6 week learning roadmaps — curating videos, articles, and tutorials from user goals, skill level, and availability. Groq-powered generation adapts the roadmap in real time as inputs change.",
      image: LPR,
      technologies: ["React", "Node.js", "Express.js", "Groq AI"],
      github: "https://github.com/ibrahim123-sia/Learning-Path-Recommender",
      liveDemo: "https://learning-path-recommender-2gdj.vercel.app",
      category: "ai_ml"
    },
    {
      id: 3,
      title: "AI Study-Session Planner",
      description: "Turns academic goals into actionable weekly study schedules. Specify an exam or project, topics, and daily availability, and it builds a balanced, day-by-day plan.",
      image: SSP,
      technologies: ["React", "Node.js", "Express.js", "Groq AI"],
      github: "https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant",
      liveDemo: "https://study-session-planner-assistant-gyn.vercel.app",
      category: "ai_ml"
    },
    {
      id: 4,
      title: "Nochat — AI Assistant & Image Generator",
      description: "A versatile AI assistant that goes beyond text: seamless conversations plus image generation from simple prompts, with secure authentication and persistent chat history.",
      image: Nochat,
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "JWT", "Groq"],
      github: "https://github.com/ibrahim123-sia/NoChat",
      liveDemo: "https://no-chat-y2my.vercel.app",
      category: "ai_ml"
    },
    {
      id: 5,
      title: "Nowhere — Full-Stack E-Commerce Platform",
      description: "An end-to-end e-commerce solution with JWT authentication, inventory management, shopping cart, and an admin dashboard covering the full order lifecycle. Real-time inventory updates and a secure checkout flow keep data consistent across concurrent transactions.",
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
      title: "Agentic AI Systems",
      icon: "agent",
      description: "AI that uses tools, context, and structured workflows to complete real business tasks reliably — integrated into the platforms you already run on.",
      features: ["Tool-using AI Agents", "MCP Integrations", "Workflow Orchestration", "Human-in-the-loop Design"]
    },
    {
      id: 2,
      title: "RAG & LLM Solutions",
      icon: "rag",
      description: "Retrieval-augmented generation systems and LLM-powered assistants that reason over your own data with accurate, grounded answers.",
      features: ["Document Q&A / RAG", "Chatbots & Assistants", "FastAPI LLM Backends", "Context Retrieval"]
    },
    {
      id: 3,
      title: "AI Business Automation",
      icon: "automation",
      description: "Automate decisions, data pipelines, and repetitive operations so teams spend time on the work that actually needs a human.",
      features: ["Workflow Automation", "Process Optimization", "Data Pipeline Automation", "Intelligent Reporting"]
    },
    {
      id: 4,
      title: "Full-Stack & SaaS Development",
      icon: "fullstack",
      description: "Production-grade web apps and SaaS products built with the MERN stack, Next.js, and clean, maintainable architecture.",
      features: ["Custom Web & SaaS Apps", "Responsive UI/UX", "State Management", "Performance Optimization"]
    },
    {
      id: 5,
      title: "Backend & API Development",
      icon: "backend",
      description: "Robust server-side systems and APIs with Node.js, Express, and FastAPI — secure, well-tested, and ready to scale.",
      features: ["REST API Development", "Authentication & RBAC", "Server Architecture", "Unit Testing"]
    },
    {
      id: 6,
      title: "Cloud & Database Solutions",
      icon: "cloud",
      description: "Data modeling and cloud-ready deployments across SQL and NoSQL — from schema design to reliable, observable production systems.",
      features: ["Database Design", "MongoDB / PostgreSQL", "Cloud Deployment", "Data Integrity"]
    }
  ],

  experience: [
    {
      id: 1,
      title: "AI Engineer",
      company: "Yes Automotive — Houston, TX",
      type: "Remote · US-based client",
      period: "Dec 2025 - Present",
      description: "Building and maintaining a production product suite for a US-based automotive services company — the AI layer that automates decisions and workflows plus the full-stack systems beneath it. Develop RESTful APIs with Node.js and Express, integrate LLM-powered features, and optimize React interfaces for reliability across service locations. Collaborate asynchronously across US time zones with code reviews, Git workflows, and agile sprints.",
    },
    {
      id: 2,
      title: "Full-Stack Developer Intern",
      company: "Co-Ventech",
      type: "On-site · Karachi, Pakistan",
      period: "Aug 2026 - Present",
      description: "Working within the development team on full-stack features — frontend and backend — building pixel-accurate interfaces from Figma designs while following the team's workflow and code standards.",
    },
    {
      id: 3,
      title: "MERN Stack Developer Intern",
      company: "10Pearls Pakistan",
      type: "Remote",
      period: "May 2026 - Jul 2026",
      description: "Selected through a competitive process for an intensive MERN program focused on Node.js and React. Delivered hands-on full-stack projects in a professional engineering environment, reinforcing code quality and iterative delivery. Awarded a certificate of completion.",
    },
  ],

  education: [
    {
      id: 1,
      degree: "BS Computer Science",
      institution: "Muhammad Ali Jinnah University",
      year: "Feb 2023 - Feb 2027",
      cgpa: "3.86 / 4.00",
      award: "Chancellor's Award for Academic Excellence: Fall 2023 & Spring 2024",
      coursework: "DSA, Database Systems, OOP, Artificial Intelligence, Big Data, Software Engineering"
    },
  ]
};
