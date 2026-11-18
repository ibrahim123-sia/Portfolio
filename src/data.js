// Project images live in src/assets/projects/<key>/. Every file there is
// resolved at build time and looked up by (folder key, file name) via img().
const projectImages = import.meta.glob('./assets/projects/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})
const img = (key, file) => projectImages[`./assets/projects/${key}/${file}`]

// Card image for a project: its 4:3 cover (cover.webp or cover.jpg) when one
// has been added, otherwise the given screenshot.
const cover = (key, fallback) =>
  img(key, 'cover.webp') || img(key, 'cover.jpg') || img(key, fallback)

export const portfolioData = {
  personalInfo: {
    name: "Syed Ibrahim Ali",
    title: "AI Engineer & Full-Stack Developer",
    tagline: "Building business solutions with agentic AI and automation.",
    email: "syedibrahimali1111@gmail.com",
    phone: "(+92) 322-339-6443",
    whatsapp: "https://wa.me/923223396443",
    location: "Karachi, Pakistan",
    linkedin: "https://www.linkedin.com/in/syed-ibrahim-ali-sia/",
    github: "https://github.com/ibrahim123-sia",
    youtube: "https://www.youtube.com/@CodeWithSIA-i",
    upwork: "https://www.upwork.com/freelancers/~0166fe76f5f8b9d0b3",
    portfolio8x: "https://www.8x.careers/p/syed-ibrahim-ali",
    hiringmine: "https://www.hiringmine.com/peopleprofile/syedibrahimali",
    resume: "/Syed_Ibrahim_Ali_Resume.pdf",
    // About page intro (two short paragraphs)
    about: [
      "I'm a Software Engineer at Co-Ventech in Karachi and an AI Engineer for YES! Automotive in Houston. I build AI agents, RAG assistants and the full-stack products around them, for businesses that want AI to do real work: answer customers from live data, capture leads, grade sales calls and keep teams informed.",
      "Most of my work is in Next.js, React, Node.js, Python and FastAPI, with MongoDB or PostgreSQL, LLM APIs and vector databases. I'm in the final year of a BS in Computer Science at Muhammad Ali Jinnah University.",
    ],
  },

  // "What I build" on the home page
  whatIBuild: [
    {
      icon: "agent",
      title: "AI agents",
      description:
        "Agents that use tools to finish real tasks, like searching a catalogue, updating a CRM or placing an order. Risky actions wait for a person to confirm.",
    },
    {
      icon: "rag",
      title: "RAG assistants",
      description:
        "Assistants that answer from your own website, documents and live business data, show their sources and say so when they don't know.",
    },
    {
      icon: "automation",
      title: "GoHighLevel AI automation",
      description:
        "Conversation AI bots on websites and funnels that answer leads, capture their details and hand a clear summary to the sales team.",
    },
    {
      icon: "fullstack",
      title: "Full-stack products",
      description:
        "Websites, dashboards and multi-tenant SaaS apps in Next.js, React, Node.js and FastAPI, built to run in production.",
    },
  ],

  // Skills grouped by area (About page)
  skillGroups: [
    {
      title: "AI",
      skills: [
        "Agentic AI",
        "RAG",
        "LLM APIs (OpenAI, Gemini, Groq, Claude)",
        "Vector databases (pgvector, ChromaDB)",
        "Model Context Protocol (MCP)",
        "LangGraph",
        "GoHighLevel Conversation AI",
        "Speech-to-text (Whisper)",
      ],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "Auth and roles", "Multi-tenant SaaS"],
    },
    {
      title: "Data and tools",
      skills: ["MongoDB", "PostgreSQL", "Docker", "Cloudflare Workers", "Vercel", "GitHub Actions", "Git"],
    },
  ],

  // Featured work, in display order. Shown large on Home and at the top of Projects.
  featuredProjects: [
    {
      key: "propel",
      name: "Propel",
      title: "Real Estate Agency Website, CRM and AI Assistants",
      description:
        "Real estate agencies usually run their website, listings, leads and viewings in separate tools. Propel puts all of it in one app, so an agency can publish listings, catch every lead and book viewings from one place.",
      features: [
        "Property search with filters and a map, plus listing, project and agent pages.",
        "Leads from the website, WhatsApp, email and property portals land in one inbox, with scoring and assignment.",
        "Visitors book viewings at real free times, with reminders and calendar sync.",
        "An AI assistant answers visitors on the website and WhatsApp. A second one helps the team and only changes data after an admin confirms.",
        "Page builder, blog and SEO tools, so the agency runs its own site without a developer.",
      ],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Drizzle ORM", "Cloudflare Workers", "Tailwind CSS", "LLM APIs", "MCP"],
      github: "https://github.com/ibrahim123-sia/Propel",
      live: "https://propel.syedibrahimali.workers.dev",
      image: cover("propel", "01-home.webp"),
      gallery: [
        { src: img("propel", "01-home.webp"), title: "Agency home page", caption: "The demo agency's home page with the property search card." },
        { src: img("propel", "02-search.webp"), title: "Search with the map", caption: "Homes for sale with filters, a results list and a map with price pins." },
        { src: img("propel", "03-property.webp"), title: "Listing page", caption: "Gallery, key facts and the agent card, with tour booking and WhatsApp." },
        { src: img("propel", "04-admin-dashboard.webp"), title: "Admin dashboard", caption: "Leads, viewings and deals at a glance, with a leads chart and suggestions." },
        { src: img("propel", "05-property-editor.webp"), title: "Listing editor", caption: "Sections, a completeness check and autosave while the team edits a listing." },
        { src: img("propel", "06-admin-assistant.webp"), title: "Team assistant", caption: "The admin assistant answers questions about listings and leads. Any change it suggests waits for confirmation." },
      ],
    },
    {
      key: "atriumdesk",
      name: "AtriumDesk",
      title: "AI Help Desk and Student Assistant for Universities",
      description:
        "Students ask the same questions every day, and staff answer them by email, phone and at the counter. AtriumDesk gives each university an AI assistant that answers from its own website, plus a help desk for everything the assistant can't solve.",
      features: [
        "An AI assistant answers from the university's own website and documents, with source links and voice input.",
        "Support requests go to the right department, with internal notes, reply drafts and email alerts.",
        "Jobs and scholarships matched to each student's CV and CGPA.",
        "Admin panel with analytics, a list of questions the assistant got wrong, and a full audit log.",
        "One platform for many universities, each with its own separate database.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "FastAPI", "ChromaDB", "RAG", "Cloudflare"],
      github: "https://github.com/ibrahim123-sia/AtriumDesk",
      image: cover("atriumdesk", "00-guest-assistant.webp"),
      gallery: [
        { src: img("atriumdesk", "00-guest-assistant.webp"), title: "Admissions assistant", caption: "The public assistant for applicants, with starter questions about fees, documents and scholarships." },
        { src: img("atriumdesk", "screenshot-1-ai-chatbot.webp"), title: "AI assistant with voice", caption: "Students ask real questions and get answers from the university's own website, with follow-up suggestions and voice input." },
        { src: img("atriumdesk", "screenshot-2-rag-knowledge-base.webp"), title: "Knowledge base", caption: "Admins keep answers accurate by scraping the university site or uploading PDF, DOCX or TXT files." },
        { src: img("atriumdesk", "screenshot-3-ai-job-matching.webp"), title: "Job matching", caption: "A student uploads a CV and gets matching jobs, each with a short reason why they fit and which skills to build." },
        { src: img("atriumdesk", "screenshot-4-ai-scholarship-matching.webp"), title: "Scholarship matching", caption: "Only the scholarships a student qualifies for, based on CGPA and eligibility." },
        { src: img("atriumdesk", "screenshot-5-system-health.webp"), title: "System health", caption: "One screen checks the database, the vector store and the AI provider before a busy day." },
        { src: img("atriumdesk", "screenshot-6-admin-dashboard.webp"), title: "Admin dashboard", caption: "Students, staff, issues and chats at a glance, with a 7-day issue trend." },
        { src: img("atriumdesk", "screenshot-7-issue-analytics.webp"), title: "Issue analytics", caption: "Top issue types, load per department, resolution time and satisfaction." },
        { src: img("atriumdesk", "screenshot-8-audit-logs.webp"), title: "Audit logs", caption: "Every admin action, login attempt and chat is logged." },
      ],
    },
    {
      key: "nowhere",
      name: "Nowhere",
      title: "Clothing Store with an AI Shopping Agent",
      description:
        "Shoppers leave when they can't find the right item, size or colour quickly. Nowhere is a complete clothing store with Iris, an AI shopping agent that searches the catalogue, picks size and colour, fills the bag and places the order after the shopper confirms.",
      features: [
        "Iris speaks English, Urdu and Roman Urdu, and works for guests and signed-in customers.",
        "Orders are placed only after the shopper presses Confirm, and the server checks every step.",
        "Full store: filters, reviews with fit notes, guest checkout with cash on delivery, promo codes and order tracking.",
        "Admin dashboard with sales, low-stock alerts and order management.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Groq", "Gemini", "Tailwind CSS"],
      github: "https://github.com/ibrahim123-sia/Nowhere",
      live: "https://nowherecloth.vercel.app",
      image: cover("nowhere", "00-iris-preview.webp"),
      gallery: [
        { src: img("nowhere", "00-iris-preview.webp"), title: "Store with Iris open", caption: "The storefront with the Iris shopping agent open on the side." },
        { src: img("nowhere", "00-iris-add-to-bag.webp"), title: "Add to bag from the chat", caption: "Iris shows matching products with a size and colour picker." },
        { src: img("nowhere", "00-iris-checkout.webp"), title: "Order summary", caption: "Iris prepares a priced summary. Nothing is ordered until the shopper confirms." },
        { src: img("nowhere", "00-iris-order-placed.webp"), title: "Order placed", caption: "After the shopper confirms, the order is placed and shown in the chat." },
        { src: img("nowhere", "00-collection.webp"), title: "Collection filters", caption: "Filter by gender, category, size, colour, material, price and more." },
        { src: img("nowhere", "00-admin-dashboard.webp"), title: "Admin dashboard", caption: "Revenue, orders by status, a 30-day sales chart and low-stock alerts." },
        { src: img("nowhere", "01-home.webp"), title: "Home page", caption: "The store's home page." },
        { src: img("nowhere", "02-catalog.webp"), title: "Catalogue", caption: "Browsing the catalogue." },
        { src: img("nowhere", "03-product.webp"), title: "Product page", caption: "Product photos, price and add to bag." },
        { src: img("nowhere", "03-login.webp"), title: "Sign in", caption: "Customer sign-in." },
        { src: img("nowhere", "04-about.webp"), title: "About page", caption: "The brand story." },
        { src: img("nowhere", "04-login.webp"), title: "Create account", caption: "Account sign-up with email verification." },
      ],
    },
    {
      key: "acadex",
      name: "Acadex",
      title: "AI-Powered Platform to Run Schools, Colleges and Universities",
      description:
        "Schools and universities run admissions, classes, exams and fees across spreadsheets and separate tools. Acadex brings all of it into one platform, with a separate, secure workspace for every institution.",
      features: [
        "Admissions, attendance, timetables, exams, results and fees in one place.",
        "Dashboards for administrators, teachers, students and parents.",
        "An AI tutor that answers from course material, and a teacher assistant whose drafts are used only after approval.",
        "Early warnings for students who need help.",
        "Online fee payments with JazzCash, Easypaisa or Stripe.",
      ],
      stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Tailwind CSS", "Gemini", "Groq", "Cloudflare"],
      github: "https://github.com/ibrahim123-sia/Acadex",
      image: cover("acadex", "00-preview.webp"),
      gallery: [
        { src: img("acadex", "00-preview.webp"), title: "Administrator dashboard", caption: "Students, staff, classes and fees collected, with fee status and students by class." },
      ],
    },
    {
      key: "pairly",
      name: "Pairly",
      title: "AI Sales Insights That Show Which Products Sell Together",
      description:
        "Shop owners have years of sales data but rarely know which products to bundle or which customers are slipping away. Pairly reads their sales file and explains it in plain English.",
      features: [
        "Upload a CSV or Excel file and see which products customers buy together.",
        "Ready-made bundle ideas with a discount simulator.",
        "AI insights and an \"Ask Pairly\" chat, where every number is checked against the real analytics.",
        "Customer groups such as loyal and at risk, plus revenue and seasonal trends.",
        "A private workspace for each store, with PDF and CSV exports.",
      ],
      stack: ["Python", "FastAPI", "PostgreSQL", "pandas", "React", "Recharts", "LLM APIs", "Cloudflare"],
      github: "https://github.com/ibrahim123-sia/Pairly",
      image: cover("pairly", "00-ai-insights.webp"),
      gallery: [
        { src: img("pairly", "00-ai-insights.webp"), title: "Dashboard with AI insights", caption: "Short insights with a suggested action for each. Every number is checked before it is shown." },
        { src: img("pairly", "01-dashboard.webp"), title: "Store dashboard", caption: "Transactions, revenue, top products and recent product pairs at a glance." },
        { src: img("pairly", "02-association-rules.webp"), title: "Products bought together", caption: "Product pairs ranked by how often and how strongly they sell together." },
        { src: img("pairly", "03-network-graph.webp"), title: "Product network", caption: "An interactive graph of products that appear in the same baskets." },
        { src: img("pairly", "04-product-bundles.webp"), title: "Bundles", caption: "Suggested bundles for promotions and shelf placement." },
        { src: img("pairly", "05-revenue-analysis.webp"), title: "Revenue", caption: "Where revenue comes from, by product, country and year." },
        { src: img("pairly", "06-seasonal-analysis.webp"), title: "Seasons", caption: "How demand changes across months, to plan stock and campaigns." },
      ],
    },
  ],

  // Smaller "More work" grid on the Projects page (max 8)
  moreProjects: [
    {
      key: "sprintlog",
      name: "Sprintlog",
      title: "AI Agents That Write the End-of-Day Report",
      description:
        "Reads the day's GitHub commits and code changes, works out what really changed and emails a short progress report on each person's schedule.",
      features: [
        "Five agents in a LangGraph pipeline: collect, understand, prioritise, write and send.",
        "Reads the code changes, not just commit messages.",
        "Each user sets their own repos, tone and schedule.",
      ],
      stack: ["Python", "FastAPI", "LangGraph", "Gemini", "PostgreSQL"],
      github: "https://github.com/ibrahim123-sia/sprintlog-agent",
      image: img("sprintlog", "01-dashboard.webp"),
      gallery: [
        { src: img("sprintlog", "01-dashboard.webp"), title: "Generated report", caption: "An end-of-day email written from the day's code changes." },
      ],
    },
    {
      key: "ai-code-reviewer",
      name: "AI Code Reviewer",
      title: "Instant Code Review",
      description:
        "Paste code in any major language and get bugs, security issues and style problems with line numbers, suggested fixes and a score out of 10. Nothing is stored.",
      features: [
        "Detects the language on its own across 15+ languages.",
        "Falls back to a second AI provider when the first is busy.",
        "No database and no sessions: code is reviewed and forgotten.",
      ],
      stack: ["Python", "FastAPI", "React", "Gemini", "Groq", "Docker"],
      github: "https://github.com/ibrahim123-sia/ai-code-reviewer",
      image: img("ai-code-reviewer", "01-review.webp"),
      gallery: [
        { src: img("ai-code-reviewer", "01-review.webp"), title: "Review results", caption: "Score, summary and issues with line numbers and suggested fixes." },
      ],
    },
    {
      key: "ai-task-manager",
      name: "AI Task Manager (MCP)",
      title: "Task Manager with an AI Assistant and GitHub",
      description:
        "A MERN task manager with an AI assistant that manages tasks and can also read your GitHub repositories through the Model Context Protocol.",
      features: [
        "The assistant decides whether a request is about tasks or about GitHub.",
        "Connects to the official GitHub MCP server, lists its tools and calls them.",
        "Supports both remote (SSE) and local (stdio) connections.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "MCP", "LLM APIs"],
      github: "https://github.com/ibrahim123-sia/AI-GitHub-Task-Manager",
      image: img("ai-task-manager", "01-home.webp"),
      gallery: [
        { src: img("ai-task-manager", "01-home.webp"), title: "Tasks and assistant", caption: "The task board next to the AI assistant." },
      ],
    },
    {
      key: "ai-seo-analyzer",
      name: "AI SEO Analyzer",
      title: "On-Page SEO Audit",
      description:
        "Paste a URL and a keyword to get a report on missing meta tags, weak headings, images without alt text and thin content, with the page's search rank, a score and a PDF.",
      features: [
        "The report is based on what was actually found on the page.",
        "Search rank check and keyword ideas, with no paid API.",
        "Blocks private and local addresses before fetching any page.",
      ],
      stack: ["Node.js", "Express", "React", "Gemini", "Docker"],
      github: "https://github.com/ibrahim123-sia/ai-seo-analyzer",
      image: img("ai-seo-analyzer", "01-report.webp"),
      gallery: [
        { src: img("ai-seo-analyzer", "01-report.webp"), title: "SEO report", caption: "Score, search rank, issues by severity and keyword ideas." },
      ],
    },
    {
      key: "vehicle-diagnostic-analysis",
      name: "Vehicle Diagnostic Analysis",
      title: "From a Spoken Car Problem to a Repair Report",
      description:
        "A driver or mechanic records a video describing a car problem. The app turns the speech into text and returns the likely problem, how serious it is and what to repair.",
      features: [
        "Records video in the browser and uploads large files in small chunks.",
        "Matches the description against 90+ common vehicle faults.",
        "Returns problem type, severity and repair advice in a clear report.",
      ],
      stack: ["React", "Node.js", "Express", "AssemblyAI", "Groq", "ffmpeg"],
      github: "https://github.com/ibrahim123-sia/Vehicle-Diagnostic-Analysis",
      image: img("vehicle-diagnostic-analysis", "01-home.webp"),
      gallery: [
        { src: img("vehicle-diagnostic-analysis", "01-home.webp"), title: "Record and analyse", caption: "Record a description of the problem and get a diagnosis." },
      ],
    },
    {
      key: "nowrite",
      name: "NoWrite",
      title: "AI Notes App",
      description:
        "Built during the 10Pearls SHINE program: rich-text notes, voice notes turned into text, and AI flashcards and quizzes from any note.",
      features: [
        "Voice notes recorded in the browser and turned into text.",
        "Flashcards, quizzes, titles and tags suggested by AI.",
        "Backend covered by automated tests.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "Groq", "Mocha"],
      github: "https://github.com/ibrahim123-sia/ibrahim-ali-mern-10pshine",
      image: img("notes-workspace", "01-notes-dashboard.webp"),
      gallery: [
        { src: img("notes-workspace", "01-notes-dashboard.webp"), title: "Notes", caption: "Create, pin and organise notes by category and tag." },
        { src: img("notes-workspace", "02-profile.webp"), title: "Profile", caption: "Account details, avatar and password." },
      ],
    },
    {
      key: "naqsh",
      name: "Naqsh",
      title: "Jewellery Online Store",
      description:
        "An online store for fashion jewellery in Pakistan, with shopping by occasion, verified accounts and PayFast or cash-on-delivery checkout.",
      features: [
        "Shop by occasion, with filters for style, material, colour and price.",
        "Email code verification, saved cart and order history.",
        "Admin dashboard for products, orders and customers.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "PayFast", "Cloudinary"],
      github: "https://github.com/ibrahim123-sia/Naqsh",
      image: img("naqsh", "01-home.webp"),
      gallery: [
        { src: img("naqsh", "01-home.webp"), title: "Home page", caption: "Jewellery collections and shopping by occasion." },
        { src: img("naqsh", "02-catalog.webp"), title: "Catalogue", caption: "Filters for style, material, colour, occasion and budget." },
        { src: img("naqsh", "03-product.webp"), title: "Product page", caption: "Photos, price and add to cart." },
        { src: img("naqsh", "03-login.webp"), title: "Sign in", caption: "Customer sign-in." },
        { src: img("naqsh", "04-about.webp"), title: "About page", caption: "The brand story." },
        { src: img("naqsh", "04-login.webp"), title: "Create account", caption: "Sign-up with email verification." },
      ],
    },
    {
      key: "zephyr",
      name: "Zephyr",
      title: "Perfume Online Store",
      description:
        "An online perfume store with JazzCash or cash-on-delivery checkout, order tracking and an admin portal for the owner.",
      features: [
        "JazzCash checkout with signed requests, or cash on delivery.",
        "Saved cart that follows the shopper after sign-in.",
        "Admin portal for products, orders and customers.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "JazzCash", "Cloudinary"],
      github: "https://github.com/ibrahim123-sia/Zephyr",
      image: img("zephyr", "01-home.webp"),
      gallery: [
        { src: img("zephyr", "01-home.webp"), title: "Home page", caption: "Men's and women's fragrance collections." },
        { src: img("zephyr", "02-catalog.webp"), title: "Catalogue", caption: "Filters and search across the collection." },
        { src: img("zephyr", "03-product.webp"), title: "Product page", caption: "Photos, price and add to cart." },
        { src: img("zephyr", "03-login.webp"), title: "Sign in", caption: "Customer sign-in." },
        { src: img("zephyr", "04-about.webp"), title: "About page", caption: "The brand story." },
        { src: img("zephyr", "04-login.webp"), title: "Create account", caption: "Account sign-up." },
      ],
    },
  ],

  // Newest first. A company with several roles shows them as a promotion.
  experience: [
    {
      company: "Co-Ventech",
      location: "Karachi",
      type: "Full-time",
      roles: [
        { title: "Software Engineer", period: "Nov 2026 – Present" },
        { title: "Full-Stack Developer", period: "Aug 2026 – Nov 2026" },
      ],
      points: [
        "Build AI agents and RAG assistants for international clients that answer customers from live business data, capture leads and write AI summaries for sales teams.",
        "Set up GoHighLevel Conversation AI bots on client websites and funnels.",
        "Ship backend features and technical SEO fixes on live platforms.",
      ],
      stack: ["Next.js", "Node.js", "MongoDB", "LLM APIs", "Vector databases"],
    },
    {
      company: "YES! Automotive",
      companyNote: "Part of Winsome Group of Companies Holding, Inc",
      location: "Houston, TX (Remote)",
      type: "Part-time",
      roles: [{ title: "AI Engineer", period: "Dec 2025 – Present" }],
      points: [
        "Build a multi-application AI business platform for an automotive services company.",
        "AI call grading that scores calls against company scripts, with human review.",
        "Automated media processing and lead pipeline.",
        "Backend services and dashboards.",
      ],
    },
    {
      company: "10Pearls",
      companyNote: "SHINE program",
      roles: [{ title: "MERN Stack Developer", period: "Apr 2026 – Jun 2026" }],
      points: [
        "Built NoWrite, an AI notes app with rich-text notes, voice notes and AI flashcards and quizzes, on a tested Node.js backend.",
      ],
    },
  ],

  education: {
    degree: "BS Computer Science",
    institution: "Muhammad Ali Jinnah University",
    period: "Feb 2023 – Feb 2027 (expected)",
    cgpa: "3.86 / 4.00",
    honours: "Chancellor's Honour Roll, Fall 2023 and Spring 2024",
    project: "UniAssist",
  },

  certifications: [
    {
      name: "Machine Learning with Python: Build Real-World ML Models",
      issuer: "IBM on Coursera",
      date: "Sep 2026",
      url: "https://coursera.org/verify/KCA8GKOH8COS",
    },
    {
      name: "SHINE Program, MERN Stack",
      issuer: "10Pearls",
      date: "Jun 2026",
    },
    {
      name: "MERN Stack Development",
      issuer: "MAJU CELDD",
      date: "Sep 2024",
    },
  ],
};
