// Project case-study screenshots — every image under src/assets/projects/<key>/<file>.webp
// is loaded eagerly and looked up by (folder key, file name) via img().
const projectImages = import.meta.glob('./assets/projects/**/*.webp', {
  eager: true,
  import: 'default',
})
const img = (key, file) => projectImages[`./assets/projects/${key}/${file}`]

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
    youtube: "https://www.youtube.com/@CodeWithSIA-i",
    upwork: "https://www.upwork.com/freelancers/~0166fe76f5f8b9d0b3",
    portfolio8x: "https://www.8x.careers/p/syed-ibrahim-ali",
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
    { value: "14", label: "Projects Built" },
    { value: "3", label: "Professional Roles" },
    { value: "7", label: "AI Projects" },
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
      title: "AtriumDesk — Multi-Tenant AI Student Portal (SaaS)",
      description: "A multi-tenant AI student-portal SaaS — a separate database per university — launched for Muhammad Ali Jinnah University (MAJU). A RAG chatbot over each school's own website (with voice), AI job & scholarship matching, an end-to-end support desk, and full admin, analytics and super-admin tooling.",
      image: img("atriumdesk", "screenshot-1-ai-chatbot.webp"),
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "ChromaDB", "RAG", "LLMs", "Multi-tenant SaaS"],
      github: "https://github.com/ibrahim123-sia/AtriumDesk",
      category: "ai_ml",
      detail: {
        role: "Full-stack + AI engineer — sole developer",
        stack: "React · Redux · Node/Express · FastAPI · MongoDB (database-per-tenant) · ChromaDB · Groq/Gemini LLMs",
        overview:
          "Universities run student help across scattered channels — email threads, notice boards, and staff answering the same questions all day. AtriumDesk replaces that with one AI-powered portal. I designed it multi-tenant (a separate database per university) so any institution can be onboarded, and launched the first tenant for MAJU. Students get instant, grounded answers from an AI assistant that reads the university's own website, plus AI-matched jobs and scholarships and a tracked support desk — while staff and admins get dashboards, analytics and full audit control.",
        highlights: [
          "One AI assistant answers admissions, fees and campus questions using Retrieval-Augmented Generation over each university's own content — with voice input and a safety filter.",
          "AI job & scholarship matching with skill-gap analysis and LLM \"why you fit\" explanations, so students act on the right opportunities.",
          "Support issues tracked end-to-end and routed to the right department, with live status and email + in-app notifications.",
          "True multi-tenant SaaS: database-per-tenant isolation, a super-admin panel, and per-tenant LLM usage & billing — onboard any university, not just MAJU.",
          "Admin analytics, a one-screen live system-health check, and a complete audit trail for accountability.",
        ],
        gallery: [
          { src: img("atriumdesk", "screenshot-1-ai-chatbot.webp"), title: "AI Chatbot — RAG + voice", caption: "Students ask real questions like admission requirements; the assistant answers instantly from MAJU's own website with source-grounded detail, follow-up suggestion chips, and voice input." },
          { src: img("atriumdesk", "screenshot-2-rag-knowledge-base.webp"), title: "RAG Knowledge Base", caption: "Admins keep answers accurate by self-service scraping the university site or uploading PDF/DOCX/TXT — 4.8k+ chunks embedded into a per-tenant vector database." },
          { src: img("atriumdesk", "screenshot-3-ai-job-matching.webp"), title: "AI Job Matching & Skill-Gap", caption: "A student uploads a CV and gets embedding-matched job listings, each with an LLM explanation of why they fit and which skills to close." },
          { src: img("atriumdesk", "screenshot-4-ai-scholarship-matching.webp"), title: "AI Scholarship Matching", caption: "CGPA- and eligibility-aware matching surfaces only the scholarships a student actually qualifies for, with cached match reasoning for speed." },
          { src: img("atriumdesk", "screenshot-5-system-health.webp"), title: "Live System Health", caption: "One screen pings MongoDB, the ChromaDB vector store and the active LLM provider, so the team can confirm every service is up before a demo or exam rush." },
          { src: img("atriumdesk", "screenshot-6-admin-dashboard.webp"), title: "Admin Dashboard & Analytics", caption: "Portal KPIs at a glance — students, staff, issues and chats — with a 7-day issue trend and recent signups." },
          { src: img("atriumdesk", "screenshot-7-issue-analytics.webp"), title: "Cross-Department Analytics", caption: "Leadership sees top issue categories, per-department load, average resolution time and satisfaction — enough to find and fix bottlenecks." },
          { src: img("atriumdesk", "screenshot-8-audit-logs.webp"), title: "Audit & Activity Logs", caption: "Every admin action, login attempt and chat is logged with status codes, giving full accountability across the platform." },
        ],
      },
    },
    {
      id: 2,
      title: "Assortment Dashboard — Market Basket Analytics Platform",
      description: "A multi-tenant retail analytics SaaS where store managers upload their transaction data and instantly run market basket analysis to see which products sell together and where revenue really comes from.",
      image: img("assortment-dashboard", "01-dashboard.webp"),
      technologies: ["React", "Flask", "SQLAlchemy", "Apriori", "pandas", "JWT", "Multi-tenant"],
      github: "https://github.com/ibrahim123-sia/Assortment-Dashboard",
      category: "data",
      detail: {
        role: "Full-stack developer — Flask API, React frontend, analytics engine",
        stack: "React · Vite · Tailwind · Flask · SQLAlchemy · JWT · mlxtend (Apriori) · pandas · ReportLab",
        overview:
          "Retailers sit on transaction data but rarely turn it into merchandising decisions. This platform gives each store its own secure workspace: managers upload a CSV or Excel export and the system runs Apriori association-rule mining over their baskets, surfacing product affinities, bundles, and revenue and seasonality patterns. A super-admin tier provisions stores, manages manager accounts, and audits activity, while every store's data stays fully isolated in its own dataset. Managers can tune support, confidence, and lift thresholds, export PDF/CSV reports, and opt into scheduled nightly re-analysis.",
        highlights: [
          "Multi-tenant architecture with per-store data isolation, role-based access (super admin vs. store manager), and a full audit log of every sensitive action.",
          "On-demand market basket analysis on uploads up to 1M rows, with interactive support/confidence/lift controls to trade detail for speed.",
          "Self-service exports (PDF/CSV) plus optional automated nightly re-analysis emails so insights stay current without manual reruns.",
        ],
        gallery: [
          { src: img("assortment-dashboard", "01-dashboard.webp"), title: "Analytics Dashboard", caption: "A single landing view summarizing the store's uploaded transactions and headline market-basket metrics at a glance." },
          { src: img("assortment-dashboard", "02-association-rules.webp"), title: "Association Rules", caption: "Apriori-mined rules show which products are bought together, ranked by support, confidence, and lift so buyers can act on real affinities." },
          { src: img("assortment-dashboard", "03-network-graph.webp"), title: "Product Network Graph", caption: "An interactive graph maps product relationships as connected nodes, making cross-sell clusters easy to spot visually." },
          { src: img("assortment-dashboard", "04-product-bundles.webp"), title: "Product Bundles", caption: "Suggested bundles group frequently co-purchased items, giving managers ready-made promotion and shelf-placement ideas." },
          { src: img("assortment-dashboard", "05-revenue-analysis.webp"), title: "Revenue Analysis", caption: "Breaks down where revenue actually comes from across products, so merchandising effort follows the money." },
          { src: img("assortment-dashboard", "06-seasonal-analysis.webp"), title: "Seasonal Analysis", caption: "Reveals how demand shifts over time, helping stores plan inventory and campaigns around seasonal peaks." },
        ],
      },
    },
    {
      id: 3,
      title: "NoChat — AI Assistant & Image Generator",
      description: "An all-in-one AI assistant that combines context-aware chat and text-to-image generation in one interface, with accounts, a public image community, and a credit-based billing system.",
      image: img("nochat", "01-chat.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "Groq", "Stripe", "ImageKit", "JWT"],
      github: "https://github.com/ibrahim123-sia/NoChat",
      liveDemo: "https://no-chat-y2my.vercel.app",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — React frontend, Node/Express API, auth & payments",
        stack: "React · Node.js · Express · MongoDB · Groq (Llama 3.1) · ImageKit · JWT · Stripe · Nodemailer",
        overview:
          "Most people juggle separate tools for chatting with an AI and generating images. NoChat unifies both in a single app: users hold natural, context-aware conversations powered by an LLM and generate images from text prompts without switching apps. Accounts are secured with JWT auth and email OTP verification, chats persist per user, and generated images can be published to a shared community gallery. A credit system — with Stripe checkout and webhook-verified top-ups — meters text and image usage, making the product monetization-ready.",
        highlights: [
          "Unified text chat and text-to-image generation, with recent-history context sent to the model for coherent, efficient conversations.",
          "Credit-based usage metering (text and image priced separately) backed by real Stripe checkout and webhook-confirmed payments.",
          "Community gallery of published creations plus secure accounts with OTP email verification and password reset.",
        ],
        gallery: [
          { src: img("nochat", "01-chat.webp"), title: "AI Chat", caption: "A conversational workspace where users ask questions and generate content, with per-user chat history saved automatically." },
          { src: img("nochat", "02-community.webp"), title: "Community Gallery", caption: "AI-generated images that users choose to publish appear in a shared gallery for everyone to browse." },
          { src: img("nochat", "03-credits.webp"), title: "Credits & Plans", caption: "Users pick a credit package and pay securely through Stripe; credits are added only after payment is verified by webhook." },
        ],
      },
    },
    {
      id: 4,
      title: "Vehicle Diagnostic Analysis — Voice-to-Diagnosis Assistant",
      description: "A tool that lets drivers or mechanics describe a car problem out loud, then transcribes the recording and returns a structured diagnosis — problem type, severity, and repair recommendations.",
      image: img("vehicle-diagnostic-analysis", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "AssemblyAI", "Groq", "LLMs"],
      github: "https://github.com/ibrahim123-sia/Vehicle-Diagnostic-Analysis",
      category: "data",
      detail: {
        role: "Full-stack developer — React frontend, Node/Express API, speech + LLM pipeline",
        stack: "React · Node.js · Express · Multer (chunked upload) · AssemblyAI (speech-to-text) · Groq (Llama 3.3 70B)",
        overview:
          "Describing a car fault in writing is awkward, and raw complaints are hard to act on. This tool lets a user record or upload audio/video describing the issue; large files are handled through resilient chunked uploads, then AssemblyAI transcribes the speech. The transcript is scanned against a library of 80+ automotive keywords and analyzed by an LLM that returns a structured diagnosis — the main problem, category, severity, specific issues, and a mechanic-style repair recommendation. The result turns a spoken complaint into an organized, triage-ready report.",
        highlights: [
          "Speech-to-diagnosis pipeline: audio is transcribed, keyword-matched across 80+ vehicle fault terms, and analyzed into structured JSON.",
          "LLM-generated diagnosis with problem type, severity rating, specific issues, and actionable repair recommendations.",
          "Robust chunked upload and merge flow so large recordings upload reliably, with automatic cleanup of temporary files.",
        ],
        gallery: [
          { src: img("vehicle-diagnostic-analysis", "01-home.webp"), title: "Record & Analyze", caption: "The main screen where a user records or uploads a description of the vehicle problem and receives an automated diagnostic breakdown." },
        ],
      },
    },
    {
      id: 5,
      title: "SkillBridge — AI Learning Path Recommender",
      description: "An AI assistant that turns a learning goal, current skill level, and weekly availability into a focused 4–6 week roadmap with curated, real-world resources.",
      image: img("learning-path-recommender", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "Gemini", "Groq", "Tailwind"],
      github: "https://github.com/ibrahim123-sia/Learning-Path-Recommender",
      liveDemo: "https://learning-path-recommender-2gdj.vercel.app",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — React frontend, Node/Express API, LLM integration",
        stack: "React · Tailwind CSS · Axios · Node.js · Express · Google Gemini / Groq / OpenRouter",
        overview:
          "Learners are overwhelmed by endless resource lists and rarely know where to start. SkillBridge asks a few simple questions — the goal, background, current skills, and time available — and uses an LLM to generate a realistic, week-by-week roadmap instead of a firehose of links. Each week comes with prioritized topics, curated resources from real platforms like freeCodeCamp, Coursera, and YouTube, and a concrete milestone to build. The result is a clear starting point and an immediate next step tailored to the individual.",
        highlights: [
          "Personalized 4–6 week roadmaps generated from just four inputs, structured into weekly topics, resources, and milestones.",
          "Curated links to real, mostly-free learning platforms rather than generic AI-invented references.",
          "Provider-flexible LLM backend (Gemini / Groq / OpenRouter) with a Vercel-ready deployment.",
        ],
        gallery: [
          { src: img("learning-path-recommender", "01-home.webp"), title: "Landing & Goal Entry", caption: "A clean entry point that introduces the assistant and invites the user to describe what they want to learn." },
          { src: img("learning-path-recommender", "02-create-path.webp"), title: "Create Your Path", caption: "A short form captures goal, background, current skills, and weekly time — everything the AI needs to build a realistic roadmap." },
        ],
      },
    },
    {
      id: 6,
      title: "AI Study-Session Planner",
      description: "An assistant that turns a short-term academic goal into a concrete day-by-day study schedule across multiple courses, balancing workload and giving priority subjects extra revision time.",
      image: img("study-session-planner", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "Groq", "Tailwind"],
      github: "https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant",
      liveDemo: "https://study-session-planner-assistant-gyn.vercel.app",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — React frontend, Node/Express API, LLM integration",
        stack: "React · Tailwind CSS · Node.js · Express · Groq (Llama 3.x models)",
        overview:
          "Students know what they need to prepare for but struggle to turn that intention into a realistic plan. This assistant takes the goal, the courses and topics involved, daily hours, available days, and intensity, then generates a balanced 1–2 week schedule that assigns topics to specific days and sessions. It allocates time proportionally by course priority, automatically gives high-priority courses about 15% extra revision time, and adjusts session density and breaks to the chosen intensity — producing an actionable timetable a student can actually follow.",
        highlights: [
          "Multi-course scheduling that distributes daily hours proportionally by course weight and spreads difficult topics across days.",
          "Priority-aware planning: high-priority courses receive ~15% extra revision time, with intensity controlling session density and breaks.",
          "Date-based schedules mapped onto the student's real available days, with resilient model fallback across several Groq models.",
        ],
        gallery: [
          { src: img("study-session-planner", "01-home.webp"), title: "Planner Home", caption: "A single-screen planner where the student enters their goal, courses, available days, and daily hours to generate a balanced study schedule." },
        ],
      },
    },
    {
      id: 7,
      title: "AI-Powered Notes Workspace",
      description: "A full-stack MERN notes workspace with rich-text editing, voice-to-text transcription and AI study tools, built during an internship at 10Pearls.",
      image: img("notes-workspace", "01-notes-dashboard.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "TipTap", "Groq", "JWT"],
      github: "https://github.com/ibrahim123-sia/ibrahim-ali-mern-10pshine",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — internship, 10Pearls",
        stack: "React · Vite · Tailwind · TipTap · dnd-kit · Node.js · Express · MongoDB · JWT · Groq (LLM + Whisper)",
        overview:
          "A personal notes workspace where you capture ideas as rich-text notes and keep them organized with categories, tags, checklists and drag-and-drop ordering. You can record voice notes directly in the browser and have them automatically transcribed, with options to clean up, summarize or keep the raw text. Built-in AI helpers suggest titles, summaries, tags and categories, and can turn any note into flashcards or a multiple-choice quiz for studying. Every account is secured with JWT login, and each user manages their own profile, avatar and password.",
        highlights: [
          "Record voice notes in the browser and get them transcribed automatically, with cleanup, summary or raw modes.",
          "AI study tools generate flashcards and multiple-choice quizzes from any note, plus one-tap title, tag and summary suggestions.",
          "Flexible organization with pin, favorite, archive and soft-delete, categories, tags, checklists, drag-to-reorder and custom colors, fonts and light/dark themes.",
        ],
        gallery: [
          { src: img("notes-workspace", "01-notes-dashboard.webp"), title: "Notes Dashboard", caption: "Your notes at a glance in a clean workspace, where you can create, pin, favorite and organize entries by category and tag." },
          { src: img("notes-workspace", "02-profile.webp"), title: "Profile & Account", caption: "Manage your account details, update your avatar and change your password from a dedicated profile page." },
        ],
      },
    },
    {
      id: 8,
      title: "Nowhere — Full-Stack Clothing E-Commerce Store",
      description: "A full-stack MERN clothing store where shoppers filter by category, size, colour, and price, check out, and track orders in real time — all managed through a role-based admin dashboard.",
      image: img("nowhere", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
      github: "https://github.com/ibrahim123-sia/Nowhere",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React · Node/Express · MongoDB · JWT · Nodemailer",
        overview:
          "Nowhere is an online clothing store built on the MERN stack, giving customers a complete shopping experience from browsing the latest collections to checkout and real-time order tracking. Shoppers can filter products by category, size, colour, and price and always know exactly where their order stands. Behind the scenes, the store team runs the business from a dedicated admin portal — adding and updating products, managing stock and pricing, and processing orders from one simple dashboard. I built the platform end to end, including secure signup/login with email OTP verification, role-based access for users and admins, and a full checkout flow.",
        highlights: [
          "Real-time order tracking so customers always know their order status.",
          "Smart filtering and search by category, price range, and sorting.",
          "Role-based access with a dedicated admin dashboard for products, stock, and orders.",
        ],
        gallery: [
          { src: img("nowhere", "01-home.webp"), title: "Homepage", caption: "A modern landing page introducing the store's latest clothing collections." },
          { src: img("nowhere", "02-catalog.webp"), title: "Browse & filter", caption: "Shop the catalog with filters for category, price, and sorting." },
          { src: img("nowhere", "03-product.webp"), title: "Product detail", caption: "A detailed product page with imagery and add-to-cart." },
          { src: img("nowhere", "03-login.webp"), title: "Customer sign-in", caption: "Secure, OTP-verified sign-in for shoppers." },
          { src: img("nowhere", "04-about.webp"), title: "About the store", caption: "Brand story and shopping information for customers." },
          { src: img("nowhere", "04-login.webp"), title: "Account access", caption: "Account creation with email OTP verification." },
        ],
      },
    },
    {
      id: 9,
      title: "Naqsh — Fashion Jewellery E-Commerce Store",
      description: "A full-stack online store for fashion jewellery, clutches, and organizers built for the Pakistani market, with occasion-based shopping, OTP-verified accounts, and PayFast or cash-on-delivery checkout.",
      image: img("naqsh", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "PayFast", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Naqsh",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · Cloudinary · Nodemailer",
        overview:
          "Naqsh is a fashion-jewellery storefront built for shoppers in Pakistan, offering necklaces, earrings, rings, bangles, pendants, and anklets in Kundan, Meenakari, and stone-studded styles, alongside clutches, evening bags, and jewellery organizers. Customers can shop by occasion — bridal, festive, party, or everyday — and filter by style, colour, and budget, then pay online via PayFast or by cash on delivery. I built the full platform: the storefront with rich filtering, OTP-verified signup and password reset, a guest cart that merges on login, and order history with tracking. The business owner manages products, orders, and customers through an admin dashboard, with no code required.",
        highlights: [
          "Occasion-based shopping with filters for category, material, colour, size, and price.",
          "Email OTP verification, guest-to-user cart merge, and PayFast or cash-on-delivery checkout.",
          "Admin dashboard for managing products, orders, and customer accounts.",
        ],
        gallery: [
          { src: img("naqsh", "01-home.webp"), title: "Homepage", caption: "An inviting landing page showcasing jewellery collections and occasion-based shopping." },
          { src: img("naqsh", "02-catalog.webp"), title: "Browse & filter", caption: "Shop the collection with filters for style, material, colour, occasion, and budget." },
          { src: img("naqsh", "03-product.webp"), title: "Product detail", caption: "Detailed jewellery view with imagery, pricing, and add-to-cart." },
          { src: img("naqsh", "03-login.webp"), title: "Customer sign-in", caption: "Secure, OTP-verified sign-in for returning shoppers." },
          { src: img("naqsh", "04-about.webp"), title: "About Naqsh", caption: "Brand story and shopping details for the Pakistani market." },
          { src: img("naqsh", "04-login.webp"), title: "Account access", caption: "Account creation with email verification and password recovery." },
        ],
      },
    },
    {
      id: 10,
      title: "The Vintage Drop — Antiques & Plants E-Commerce Platform",
      description: "A full-stack luxury store for vintage-inspired decor, indoor plants, succulents, and artisan planters, with rich style/material filtering, OTP-verified accounts, and PayFast or cash-on-delivery checkout in PKR.",
      image: img("vintage-drop", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "PayFast", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Vintage-Drop",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · Cloudinary · Nodemailer",
        overview:
          "The Vintage Drop is a luxury e-commerce platform blending classic vintage aesthetics with modern botanical living, selling antique-style pots and vases, rare indoor houseplants, succulents, and curated plant-and-pot bundles. Shoppers browse curated categories and filter by style, material, plant traits, and size, then check out via PayFast or cash on delivery with PKR pricing. I built the complete platform: the elegant storefront with a slide-over cart and guest-cart merging, secure accounts with OTP verification and password reset, and an admin dashboard with sales analytics, product CRUD, and order management. Product media is handled through Cloudinary so the catalog stays easy to maintain.",
        highlights: [
          "Rich filtering by style, material, plant traits, and size across curated categories.",
          "Slide-over cart with guest-cart merging and PayFast or cash-on-delivery checkout in PKR.",
          "Admin dashboard with real-time sales analytics, product CRUD, and order status management.",
        ],
        gallery: [
          { src: img("vintage-drop", "01-home.webp"), title: "Homepage", caption: "An elegant landing page introducing vintage decor, plants, and curated bundles." },
          { src: img("vintage-drop", "02-catalog.webp"), title: "Browse & filter", caption: "Shop the collection with filters for style, material, plant traits, and size." },
          { src: img("vintage-drop", "03-product.webp"), title: "Product detail", caption: "A detailed product page with imagery, pricing, and add-to-cart." },
          { src: img("vintage-drop", "03-login.webp"), title: "Customer sign-in", caption: "Secure, OTP-verified sign-in for returning shoppers." },
          { src: img("vintage-drop", "04-about.webp"), title: "About The Vintage Drop", caption: "The brand story behind its vintage-meets-botanical collection." },
          { src: img("vintage-drop", "04-login.webp"), title: "Account access", caption: "Account creation with email verification and password recovery." },
        ],
      },
    },
    {
      id: 11,
      title: "Zephyr — Full-Stack Perfume E-Commerce Store",
      description: "A full-stack online perfume store where customers browse men's and women's fragrance collections, check out with JazzCash, get email confirmations, and track orders — with a complete admin portal.",
      image: img("zephyr", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "JazzCash", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Zephyr",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · Cloudinary · Nodemailer",
        overview:
          "Zephyr is a full-stack online perfume store where customers browse men's and women's fragrance collections, add items to their cart, and check out using JazzCash mobile payments. After placing an order, shoppers receive an email confirmation and can track their order status. I built the entire platform — the customer storefront with secure JWT accounts, the JazzCash checkout, Cloudinary-hosted product imagery, and email notifications — plus a dedicated admin portal that gives the business owner full control to add and update products, manage and update orders, and view registered customers.",
        highlights: [
          "JazzCash mobile-payment checkout with automatic email order confirmations.",
          "Order tracking for customers and JWT-secured accounts.",
          "Admin portal for managing products, orders, and registered customers.",
        ],
        gallery: [
          { src: img("zephyr", "01-home.webp"), title: "Homepage", caption: "A polished landing page introducing men's and women's fragrance collections." },
          { src: img("zephyr", "02-catalog.webp"), title: "Browse fragrances", caption: "Shop the perfume catalog across men's and women's collections." },
          { src: img("zephyr", "03-product.webp"), title: "Product detail", caption: "A detailed fragrance page with imagery, pricing, and add-to-cart." },
          { src: img("zephyr", "03-login.webp"), title: "Customer sign-in", caption: "Secure sign-in so shoppers can check out and track orders." },
          { src: img("zephyr", "04-about.webp"), title: "About Zephyr", caption: "The brand story behind the fragrance collection." },
          { src: img("zephyr", "04-login.webp"), title: "Account access", caption: "Account creation for a personalized shopping and order-tracking experience." },
        ],
      },
    },
    {
      id: 12,
      title: "Hadi Decor — Luxury Home Decor & Lighting Store",
      description: "A full-stack online store for a Pakistani luxury home-decor and lighting brand, selling chandeliers, lanterns, marble tables, and ambient lamps with PKR pricing and cash-on-delivery.",
      image: img("hadi-home-decor", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Hadi-Home-Decor",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · Cloudinary",
        overview:
          "Hadi Decor is a luxury home-decor and lighting storefront built for a Pakistani brand selling chandeliers, calligraphy mirrors, marble center tables, decorative vases, and ambient lamps. The site gives shoppers a rich catalog with PKR pricing and cash-on-delivery across the country, while the business owner runs everything from a single admin dashboard. I built the complete platform end to end — the customer storefront, secure accounts and cart, and the back-office tools for managing products, orders, and users. Product images and content are managed through Cloudinary, so the catalog can be updated without touching code.",
        highlights: [
          "Complete catalog with PKR pricing and nationwide cash-on-delivery checkout.",
          "Admin dashboard for full product, order, and customer management with image uploads.",
          "Customer accounts, cart, and support/policy pages (About, FAQs, Contact, order tracking).",
        ],
        gallery: [
          { src: img("hadi-home-decor", "01-home.webp"), title: "Homepage", caption: "A luxury landing page introducing the brand's chandeliers, lamps, and decor collections." },
          { src: img("hadi-home-decor", "02-catalog.webp"), title: "Shop the catalog", caption: "Browse the full range of lighting and home-decor pieces with clear PKR pricing." },
          { src: img("hadi-home-decor", "03-product.webp"), title: "Product detail", caption: "Detailed product view with imagery, pricing, and add-to-cart." },
          { src: img("hadi-home-decor", "03-login.webp"), title: "Customer sign-in", caption: "Secure sign-in so returning shoppers can access their cart and orders." },
          { src: img("hadi-home-decor", "04-about.webp"), title: "About the brand", caption: "Brand story and delivery details, including cash-on-delivery and shipping care." },
          { src: img("hadi-home-decor", "04-login.webp"), title: "Account access", caption: "Account creation and access for a personalized shopping experience." },
        ],
      },
    },
    {
      id: 13,
      title: "Hoor's Clothes Brand — Fashion Storefront",
      description: "An online clothing storefront where shoppers browse new arrivals and best sellers by category, view product details, and add items to a cart — a fast, responsive React shopping experience.",
      image: img("hoors-clothes", "01-home.webp"),
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/ibrahim123-sia/Hoor-s-Clothes-brand-",
      category: "ecommerce",
      detail: {
        role: "Frontend developer — sole developer",
        stack: "React · Vite · Tailwind CSS",
        overview:
          "Hoor's Clothes Brand is an online clothing store designed to let customers shop comfortably from home. The storefront highlights new arrivals, best-selling items, and browsable clothing categories, with a clean product experience that carries shoppers from discovery to cart. I built the responsive React front end, including the marketing homepage, category-filtered product listings, product detail pages, and add-to-cart flow. The result is a fast, mobile-friendly shopping experience focused on simplicity and ease of use.",
        highlights: [
          "Marketing homepage with hero, best sellers, new arrivals, testimonials, and newsletter signup.",
          "Category-filtered product listings with dedicated product detail pages.",
          "Responsive, Tailwind-styled UI with an add-to-cart shopping flow.",
        ],
        gallery: [
          { src: img("hoors-clothes", "01-home.webp"), title: "Homepage", caption: "A welcoming landing page featuring best sellers, new arrivals, and brand highlights." },
          { src: img("hoors-clothes", "02-products.webp"), title: "Shop by category", caption: "Browse the clothing collection with category filtering to quickly find a style." },
          { src: img("hoors-clothes", "03-product-detail.webp"), title: "Product detail", caption: "A focused product page with imagery and add-to-cart." },
        ],
      },
    },
    {
      id: 14,
      title: "Trading Journal",
      description: "A MERN trading journal for logging forex, gold and crypto trades and tracking win rate and cumulative P&L on a live statistics dashboard.",
      image: img("trade-journal", "01-dashboard.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
      github: "https://github.com/ibrahim123-sia/Trade-Journal",
      category: "fullstack",
      detail: {
        role: "Full-stack developer",
        stack: "React · Vite · Tailwind CSS · React Router · Axios · Node.js · Express · MongoDB",
        overview:
          "A trading journal for logging every forex, gold and crypto trade with full context, including currency pair, session, direction, entry and exit price, lot size, pips and the reasoning behind the trade. The dashboard summarizes performance at a glance with total trades, winning and losing counts, win rate and cumulative profit and loss. The trade history can be filtered by outcome, and each entry can be viewed, edited or deleted. Profit/loss and pips are calculated automatically when left blank, with price formatting tuned to each instrument.",
        highlights: [
          "Performance dashboard with total trades, win/loss counts, win rate and cumulative P&L aggregated on the server.",
          "Detailed trade log with quick filtering by winning or losing trades in a clean, sortable history table.",
          "Streamlined entry that auto-calculates P&L and pips and adapts price precision per instrument (crypto, gold, forex).",
        ],
        gallery: [
          { src: img("trade-journal", "01-dashboard.webp"), title: "Statistics Dashboard", caption: "Key trading metrics such as win rate and total P&L sit above a full history of your logged trades, with filters for wins and losses." },
          { src: img("trade-journal", "02-add-trade.webp"), title: "Add Trade", caption: "Log a new trade with pair, session, direction, entry and exit prices, lot size and your reasoning, with P&L and pips filled in automatically." },
        ],
      },
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
