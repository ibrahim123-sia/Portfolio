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
    hiringmine: "https://www.hiringmine.com/peopleprofile/syedibrahimali",
    resume: "/Syed_Ibrahim_Ali_Resume.pdf",
    // Short hero bio
    bio: "I build complete business solutions — the AI layer that automates decisions and workflows, and the full-stack architecture, backends, and interfaces that make it run in production.",
    // Roles shown in the hero "Currently" card
    currently: [
      { title: "AI Engineer", company: "Yes Automotive · Remote (US)" },
      { title: "Full-Stack Developer", company: "CoVentech · Karachi" },
    ],
    // Longer form for the About section (kept tight — 2 short paragraphs)
    about: [
      "I'm an AI Engineer and Full-Stack Developer who builds complete business solutions — the AI layer that automates decisions and workflows, and the architecture, backends, and interfaces beneath it that make everything run in production.",
      "My core interest is agentic AI in production: systems where AI uses tools, context, and structured workflows to complete real business tasks reliably. I work with RAG, LLM APIs, and MCP on top of a full-stack foundation in React, Next.js, Node.js, Python, and FastAPI.",
    ],
  },

  // Headline metrics reused across the hero and sections
  stats: [
    { value: "20", label: "Projects Built" },
    { value: "3", label: "Professional Roles" },
    { value: "10", label: "AI Projects" },
    { value: "30+", label: "Technologies" },
  ],

  // Skills grouped by domain (chips, not arbitrary percentages)
  skillGroups: [
    {
      title: "AI & Machine Learning",
      key: "ai_ml",
      skills: [
        "Agentic AI",
        "RAG Architectures",
        "LLM APIs (Groq, Gemini, OpenAI)",
        "Model Context Protocol (MCP)",
        "Vector Databases (ChromaDB)",
        "Speech-to-Text (Whisper, AssemblyAI)",
        "AI Automation",
        "LangGraph & LangChain (multi-agent)",
        "Machine Learning (scikit-learn, mlxtend)",
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
        "Redux Toolkit",
        "Tailwind CSS",
        "React Native (Expo)",
      ],
    },
    {
      title: "Backend",
      key: "backend",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Rust (Axum, Tokio)",
        "REST APIs & WebSockets",
        "JWT Auth & RBAC",
        "Multi-tenant Architecture",
      ],
    },
    {
      title: "Databases",
      key: "database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "MSSQL", "SQLAlchemy"],
    },
    {
      title: "Tools & Practices",
      key: "tools",
      skills: [
        "Git & GitHub",
        "Docker",
        "Postman",
        "Unit Testing (Mocha/Chai)",
        "SonarQube",
        "Agile / SDLC",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "AtriumDesk — Multi-Tenant AI Student Portal (SaaS)",
      description: "A multi-tenant AI student-portal SaaS — a separate database per university — so any institution can be onboarded. A RAG assistant over each school's own website (with voice), AI job & scholarship matching, an end-to-end support desk, and full admin, analytics and super-admin tooling. Muhammad Ali Jinnah University (MAJU) is the pilot tenant.",
      image: img("atriumdesk", "screenshot-1-ai-chatbot.webp"),
      technologies: ["React", "Redux", "Node.js", "FastAPI", "MongoDB", "ChromaDB", "RAG", "LLMs", "Multi-tenant SaaS"],
      github: "https://github.com/ibrahim123-sia/AtriumDesk",
      category: "ai_ml",
      detail: {
        role: "Founder & lead engineer — sole developer (product, architecture, AI, full stack)",
        stack: "React 19 · Redux Toolkit · Node/Express · FastAPI · MongoDB (database-per-tenant) · ChromaDB · sentence-transformers · Groq / Gemini / Ollama LLMs · faster-whisper (voice)",
        overview:
          "Universities run student help across scattered channels — email threads, notice boards, and staff answering the same questions all day. AtriumDesk replaces that with one AI-powered portal. I designed it multi-tenant (a separate database and vector collection per university) so any institution can be onboarded through a self-service setup. Students get instant, grounded answers from an AI assistant that reads the university's own website and documents, plus AI-matched jobs and scholarships and a tracked support desk — while staff and admins get dashboards, analytics and full audit control. Muhammad Ali Jinnah University is the pilot tenant; sample data was shared for evaluation.",
        highlights: [
          "One AI assistant answers admissions, fees and campus questions using Retrieval-Augmented Generation over each university's own content — with voice input, multi-provider LLM failover, and a safety filter.",
          "AI job & scholarship matching with skill-gap analysis against an uploaded CV and LLM \"why you fit\" explanations, so students act on the right opportunities.",
          "Support issues tracked end-to-end and routed to the right department, with live status and email + in-app notifications.",
          "True multi-tenant SaaS: database-per-tenant isolation, a super-admin panel with tenant billing and impersonation, and real per-tenant LLM token & request usage tracking.",
          "Admin analytics, a one-screen live system-health check, self-service knowledge-base scraping (4.8k+ chunks), and a complete audit trail.",
        ],
        gallery: [
          { src: img("atriumdesk", "screenshot-1-ai-chatbot.webp"), title: "AI Assistant — RAG + voice", caption: "Students ask real questions like admission requirements; the assistant answers instantly from the university's own website with grounded detail, follow-up suggestion chips, and voice input." },
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
      title: "Sprintlog — Autonomous Multi-Agent EOD Reporting",
      description: "An autonomous multi-agent AI system that eliminates manual end-of-day reporting. It reads the day's GitHub commits and diffs, reasons about what actually changed through a LangGraph pipeline, and drafts and sends a personalised EOD progress email — per user, on their own schedule.",
      image: img("sprintlog", "01-dashboard.webp"),
      technologies: ["Python", "FastAPI", "LangGraph", "LangChain", "Gemini", "PostgreSQL", "APScheduler", "Agentic AI"],
      github: "https://github.com/ibrahim123-sia/sprintlog-agent",
      category: "ai_ml",
      detail: {
        role: "AI engineer — sole developer (agent design, orchestration, backend)",
        stack: "FastAPI · LangGraph · LangChain · Google Gemini · PostgreSQL (Neon) · APScheduler · SMTP · Jinja2",
        overview:
          "Reviewing your own commits every evening and writing an EOD report for a PM is repetitive and easy to forget. Sprintlog automates the whole flow with a chain of specialised agents: a Collector pulls the day's commits and diffs from GitHub, a Context agent reads the diffs (not just commit messages) to understand what really changed, a Prioritizer separates high-impact work from maintenance noise, a Writer drafts the email in the user's chosen tone, and a Sender delivers it and logs it. Each user configures their own repos, schedule, and tone, so the system runs for a whole team, not one hardcoded setup.",
        highlights: [
          "Five-agent LangGraph pipeline — Collector, Context, Prioritizer, Writer, Sender — each with a single responsibility and typed hand-offs.",
          "Reasons over actual code diffs rather than commit messages, so the report reflects real work, not how it was labelled.",
          "Multi-user by design: per-user repos, tone, and dynamic APScheduler cron jobs, with every sent report logged to PostgreSQL.",
        ],
        gallery: [
          { src: img("sprintlog", "01-dashboard.webp"), title: "Generated EOD Report", caption: "A finished end-of-day email drafted by the Writer agent from the day's prioritised code changes." },
        ],
      },
    },

    {
      id: 3,
      title: "Assortment Dashboard — Market Basket Analytics SaaS",
      description: "A multi-tenant retail analytics SaaS where store managers upload transaction data and run market basket analysis to see which products sell together, which bundles to promote, how customers segment, and where revenue really comes from.",
      image: img("assortment-dashboard", "01-dashboard.webp"),
      technologies: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL", "Apriori", "pandas", "JWT", "Multi-tenant"],
      github: "https://github.com/ibrahim123-sia/Assortment-Dashboard",
      category: "data",
      detail: {
        role: "Full-stack developer — sole developer (FastAPI backend, analytics engine, React frontend)",
        stack: "React 19 · Vite · Tailwind · FastAPI · SQLAlchemy 2.0 (PostgreSQL / SQLite) · JWT · pandas · mlxtend (Apriori) · APScheduler · ReportLab",
        overview:
          "Retailers sit on transaction data but rarely turn it into merchandising decisions. This platform gives each store its own secure workspace: managers upload a CSV or Excel export and the system runs Apriori association-rule mining over their baskets, surfacing product affinities, recommended bundles, an interactive product-relationship graph, RFM customer segments, and revenue and seasonal trends. A super-admin tier provisions stores, manages manager accounts, and audits activity, while every store's data stays fully isolated. Managers can tune support, confidence, and lift thresholds, export PDF/CSV reports, and opt into scheduled re-analysis with email summaries.",
        highlights: [
          "Multi-tenant architecture with per-store data isolation, role-based access (super admin vs. store manager), login lockout, and a full audit log of every sensitive action.",
          "Market basket analysis on uploads up to 1M rows with tunable support/confidence/lift, plus RFM segmentation, cohort retention, period-over-period comparison, and a bundle discount simulator.",
          "Interactive force-directed product network graph, \"customers who bought X also bought…\" recommendations, and self-service PDF/CSV exports.",
          "Scheduled background re-analysis (APScheduler) with optional email summaries, and server-side caching for fast repeat loads.",
        ],
        gallery: [
          { src: img("assortment-dashboard", "01-dashboard.webp"), title: "Analytics Dashboard", caption: "A single landing view summarizing the store's transactions, revenue, top products, and recent association rules at a glance." },
          { src: img("assortment-dashboard", "02-association-rules.webp"), title: "Association Rules", caption: "Apriori-mined rules show which products are bought together, ranked by support, confidence, and lift so buyers can act on real affinities." },
          { src: img("assortment-dashboard", "03-network-graph.webp"), title: "Product Network Graph", caption: "An interactive force-directed graph maps product relationships as connected nodes, making cross-sell clusters easy to spot visually." },
          { src: img("assortment-dashboard", "04-product-bundles.webp"), title: "Product Bundles", caption: "Suggested bundles group frequently co-purchased items, giving managers ready-made promotion and shelf-placement ideas." },
          { src: img("assortment-dashboard", "05-revenue-analysis.webp"), title: "Revenue Analysis", caption: "Breaks down where revenue actually comes from across products, countries, and years, so merchandising effort follows the money." },
          { src: img("assortment-dashboard", "06-seasonal-analysis.webp"), title: "Seasonal Analysis", caption: "Reveals how demand shifts over months and seasons, helping stores plan inventory and campaigns around peaks." },
        ],
      },
    },
    {
      id: 4,
      title: "Acadex — Multi-Tenant School Management SaaS",
      description: "A multi-tenant SaaS for schools: a super admin onboards each school, and every school runs admissions, attendance, grading, fees, announcements, and analytics from its own isolated workspace with Admin, Teacher, and Student portals.",
      image: img("acadex", "01-dashboard.webp"),
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Recharts", "Multi-tenant SaaS"],
      github: "https://github.com/ibrahim123-sia/Acadex",
      category: "fullstack",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 18 · Vite · Tailwind CSS 4 · Recharts · Node.js · Express · PostgreSQL (Neon serverless) · JWT · bcrypt",
        overview:
          "Schools juggle admissions, attendance, grades, and fees across spreadsheets and disconnected tools. Acadex gives each school one platform with role-based portals. A Super Admin registers schools as tenants with branding, plan, and status, and sees cross-tenant KPIs; each School Admin gets a live dashboard, student and faculty directories, class sections, fee management with per-student receipts, and targeted announcements; teachers see their classes and rosters; students see their grades, attendance, and fee status. Every record carries a school_id and every query is tenant-scoped, so a school can only ever see its own data.",
        highlights: [
          "Row-level multi-tenancy on a shared PostgreSQL database — cost-efficient to scale on serverless Postgres while keeping every school's data isolated.",
          "Four role-based portals (Super Admin, School Admin, Teacher, Student) with JWT auth, bcrypt hashing, role-guarded routes, and fully parameterized SQL.",
          "Live analytics — fee-status and students-by-class charts, cross-tenant revenue and headcount KPIs, and a platform-wide audit log.",
        ],
        gallery: [
          { src: img("acadex", "01-dashboard.webp"), title: "School Admin Dashboard", caption: "Live KPIs, fee-status and students-by-class charts, and recent admissions for one school's isolated workspace." },
        ],
      },
    },
    {
      id: 5,
      title: "AI Code Reviewer — Stateless Automated Code Review",
      description: "Paste code in any major language and get senior-developer feedback — bugs, OWASP security issues, style and best-practice violations — with line numbers, drop-in fixes, and a 0–10 quality score. Fully stateless: nothing is stored.",
      image: img("ai-code-reviewer", "01-review.webp"),
      technologies: ["Python", "FastAPI", "React", "Gemini", "Groq", "Docker", "LLMs"],
      github: "https://github.com/ibrahim123-sia/ai-code-reviewer",
      category: "ai_ml",
      detail: {
        role: "Full-stack + AI engineer — sole developer",
        stack: "FastAPI (Python 3.12) · Pydantic · Pygments · Google Gemini · Groq (gpt-oss-120b fallback) · React · Vite · Tailwind · Docker Compose",
        overview:
          "Code review is the bottleneck on most small teams. This tool gives instant, senior-level review for any snippet up to 10,000 characters. It auto-detects the language across 15+ options using regex heuristics and Pygments lexical analysis, sends a strict-schema prompt to Gemini at low temperature for deterministic line numbers, and transparently falls back to Groq if Gemini rate-limits — with zero downtime. Responses are coerced into a Pydantic schema, severity synonyms normalised, and rendered as a quality score, executive summary, and filterable issue cards. Nothing is persisted: code lives in memory for the seconds it takes to review, then it's gone.",
        highlights: [
          "Dual-provider inference — Gemini primary with automatic Groq fallback on 503/429 — so reviews never fail on free-tier demand spikes.",
          "Smart language detection over 15+ languages, structured JSON output validated against a Pydantic schema, and one automatic retry on parse discrepancy.",
          "100% stateless and private by design: no database, no sessions, no disk — which also makes it trivially horizontally scalable.",
        ],
        gallery: [
          { src: img("ai-code-reviewer", "01-review.webp"), title: "Review Results", caption: "Quality score, executive summary, and severity-tagged issues with line numbers and suggested fixes." },
        ],
      },
    },
    {
      id: 6,
      title: "AI SEO Analyzer — On-Page SEO Audit & Rank Check",
      description: "Paste any public URL and an optional keyword to get an evidence-based on-page SEO report — missing meta, weak headings, images without alt text, thin content — plus the site's current search rank, keyword suggestions, a 0–10 score, and a downloadable vector PDF.",
      image: img("ai-seo-analyzer", "01-report.webp"),
      technologies: ["Node.js", "Express", "React", "Gemini", "cheerio", "Docker", "LLMs"],
      github: "https://github.com/ibrahim123-sia/ai-seo-analyzer",
      category: "ai_ml",
      detail: {
        role: "Full-stack + AI engineer — sole developer",
        stack: "Node.js · Express · axios + cheerio · Google Gemini · DuckDuckGo rank check · React · Vite · Tailwind · Docker Compose",
        overview:
          "Most SEO tools hand you generic advice. This one scans the live page — title, meta description, canonical, heading structure, image alt coverage, word count — checks where the domain actually ranks for a target keyword, and has Gemini write a report that references what was found (\"no meta description\") rather than what to consider. Issues come back by severity with drop-in fixes, alongside 3–6 realistic keyword suggestions and a one-click executive PDF. Input is SSRF-protected at the DNS level, and the whole service is stateless — nothing about the URL or page survives the response.",
        highlights: [
          "Evidence-based AI reports: Gemini is prompted with the real scan data and a strict JSON-only contract, validated and retried once on schema failure.",
          "Free rank tracking via DuckDuckGo (no API key), executive vector PDF export, and severity-categorised issues with concrete fixes.",
          "Security-first input handling — rejects localhost, private ranges, encoded IPs, and hosts resolving to private IPs before any fetch.",
        ],
        gallery: [
          { src: img("ai-seo-analyzer", "01-report.webp"), title: "SEO Report", caption: "Radial score dial, rank card, severity-filtered issue list, and keyword chips generated from a live page scan." },
        ],
      },
    },
    {
      id: 7,
      title: "AI Task Manager — MERN + AI Agent + GitHub MCP",
      description: "A full-stack task manager with a built-in AI assistant that can also talk to GitHub through the Model Context Protocol — built to understand MCP host/client/server architecture in practice.",
      image: img("ai-task-manager", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "MCP", "LLMs", "GitHub API"],
      github: "https://github.com/ibrahim123-sia/AI-GitHub-Task-Manager",
      category: "ai_ml",
      detail: {
        role: "Full-stack + AI engineer — sole developer",
        stack: "React (Vite) · Node.js · Express · MongoDB · AI agent service · MCP client (SSE / stdio) · @modelcontextprotocol/server-github",
        overview:
          "An AI assistant is only useful when it can act on the tools a team already uses. This task manager wires an AI agent into a MERN app and gives it two kinds of capability: local task functions backed by MongoDB, and a real MCP client that connects to the GitHub MCP server over JSON-RPC (SSE or stdio). The agent detects when a request is about GitHub, parses the intent into a tool call, performs the protocol handshake, discovers available tools, and executes the call — so the same chat can manage your tasks and query your repositories.",
        highlights: [
          "Working MCP host → client → server flow: connect, list tools, and call tools against the official GitHub MCP server.",
          "Intent routing inside the agent decides between local task functions and MCP tool calls.",
          "Supports both SSE (remote) and stdio (local) MCP transports.",
        ],
        gallery: [
          { src: img("ai-task-manager", "01-home.webp"), title: "AI Assistant & Tasks", caption: "The task board alongside the AI assistant that can create tasks or query GitHub through MCP." },
        ],
      },
    },
    {
      id: 8,
      title: "NoChat — AI Assistant & Image Generator",
      description: "An all-in-one AI assistant that combines context-aware chat and text-to-image generation in one interface, with accounts, a public image community, a credit-based billing system, and a companion mobile app.",
      image: img("nochat", "01-chat.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "Groq", "Stripe", "ImageKit", "JWT", "React Native"],
      github: "https://github.com/ibrahim123-sia/NoChat",
      liveDemo: "https://no-chat-y2my.vercel.app",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — React web client, Expo mobile app, Node/Express API, auth & payments",
        stack: "React 19 · Node.js · Express 5 · MongoDB · Groq (Llama 3.1) · ImageKit · JWT · Stripe · Nodemailer · Expo / React Native",
        overview:
          "Most people juggle separate tools for chatting with an AI and generating images. NoChat unifies both in a single app: users hold natural, context-aware conversations powered by an LLM and generate images from text prompts without switching apps. Accounts are secured with JWT auth and email OTP verification, chats persist per user, and generated images can be published to a shared community gallery. A credit system — with Stripe hosted checkout and signed-webhook confirmation — meters text and image usage, making the product monetization-ready. A companion Expo / React Native app brings the same experience to mobile.",
        highlights: [
          "Unified text chat and text-to-image generation, with conversation-history context sent to the model and Markdown-rendered replies with syntax highlighting.",
          "Credit-based usage metering (text and image priced separately) backed by real Stripe checkout and webhook-confirmed payments — never the redirect URL.",
          "Community gallery of published creations, secure accounts with OTP email verification and password reset, API rate limiting, and a companion mobile app.",
        ],
        gallery: [
          { src: img("nochat", "01-chat.webp"), title: "AI Chat", caption: "A conversational workspace where users ask questions and generate content, with per-user chat history saved automatically." },
          { src: img("nochat", "02-community.webp"), title: "Community Gallery", caption: "AI-generated images that users choose to publish appear in a shared gallery for everyone to browse." },
          { src: img("nochat", "03-credits.webp"), title: "Credits & Plans", caption: "Users pick a credit package and pay securely through Stripe; credits are added only after payment is verified by webhook." },
        ],
      },
    },
    {
      id: 9,
      title: "Vehicle Diagnostic Analysis — Video-to-Diagnosis Assistant",
      description: "A tool that lets drivers or mechanics record a video describing a car problem, then transcribes the audio and returns a structured diagnosis — problem type, severity, and repair recommendations.",
      image: img("vehicle-diagnostic-analysis", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "AssemblyAI", "Groq", "LLMs", "ffmpeg"],
      github: "https://github.com/ibrahim123-sia/Vehicle-Diagnostic-Analysis",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — React frontend, Node/Express API, speech + LLM pipeline",
        stack: "React 19 · Node.js · Express · Multer (chunked upload) · ffmpeg · AssemblyAI (speech-to-text) · Groq (Llama 3.3 70B)",
        overview:
          "Describing a car fault in writing is awkward, and raw complaints are hard to act on. This tool lets a user record a video describing the issue directly in the browser; large recordings are handled through resilient 2 MB chunked uploads merged server-side, then AssemblyAI transcribes the speech. The transcript is scanned against a library of 90+ automotive fault keywords and analyzed by an LLM that returns a structured diagnosis — the main problem, category, severity, specific issues, and a mechanic-style repair recommendation. The result turns a spoken complaint into an organized, triage-ready report.",
        highlights: [
          "Speech-to-diagnosis pipeline: video audio is transcribed, keyword-matched across 90+ vehicle fault terms grouped by category, and analyzed into strict structured JSON.",
          "LLM-generated diagnosis with problem type, severity rating, specific issues, technical keywords, and actionable repair recommendations.",
          "In-browser recording with live preview, robust chunked upload-and-merge so large recordings upload reliably, and automatic cleanup of temporary files.",
        ],
        gallery: [
          { src: img("vehicle-diagnostic-analysis", "01-home.webp"), title: "Record & Analyze", caption: "The main screen where a user records a description of the vehicle problem and receives an automated, severity-coded diagnostic breakdown." },
        ],
      },
    },
    {
      id: 10,
      title: "NoWrite — AI-Powered Notes Workspace",
      description: "A full-stack MERN notes workspace with a TipTap rich-text editor, voice-to-text transcription, and AI study tools that turn notes into flashcards and quizzes — built during the 10Pearls SHINE program.",
      image: img("notes-workspace", "01-notes-dashboard.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "TipTap", "Groq", "JWT", "Mocha/Chai"],
      github: "https://github.com/ibrahim123-sia/ibrahim-ali-mern-10pshine",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — 10Pearls SHINE program",
        stack: "React 19 · Vite · Tailwind · TipTap · dnd-kit · Node.js · Express 5 · MongoDB · JWT · Groq (LLM + Whisper) · Mocha / Chai / Sinon / Supertest",
        overview:
          "A personal notes workspace where you capture ideas as rich-text notes and keep them organized with categories, tags, checklists and drag-and-drop ordering. You can record voice notes directly in the browser and have them transcribed automatically. Built-in AI helpers suggest titles and tags, and can turn any note into flashcards or a multiple-choice quiz for studying. Every account is secured with JWT login, each user manages their own profile and avatar, and the backend is covered by a Mocha/Chai test suite with in-memory MongoDB.",
        highlights: [
          "Record voice notes in the browser and get them transcribed to text automatically via Groq Whisper.",
          "AI study tools generate flashcards and multiple-choice quizzes from any note, plus one-tap title and tag suggestions.",
          "Flexible organization — pin, favorite, archive, categories, tags, checklists, drag-to-reorder, custom colors and fonts, light/dark theme — with a tested backend (Mocha, Chai, Sinon, Supertest, c8 coverage).",
        ],
        gallery: [
          { src: img("notes-workspace", "01-notes-dashboard.webp"), title: "Notes Dashboard", caption: "Your notes at a glance in a clean workspace, where you can create, pin, favorite and organize entries by category and tag." },
          { src: img("notes-workspace", "02-profile.webp"), title: "Profile & Account", caption: "Manage your account details, update your avatar and change your password from a dedicated profile page." },
        ],
      },
    },
    {
      id: 11,
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
      id: 12,
      title: "StudyPlanner Pro — AI Study-Session Planner",
      description: "An assistant that turns a short-term academic goal into a concrete day-by-day study schedule across multiple courses, balancing workload and giving priority subjects extra revision time.",
      image: img("study-session-planner", "01-home.webp"),
      technologies: ["React", "Node.js", "Express", "Groq", "Tailwind"],
      github: "https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant",
      liveDemo: "https://study-session-planner-assistant-gyn.vercel.app",
      category: "ai_ml",
      detail: {
        role: "Full-stack developer — React frontend, Node/Express API, LLM integration",
        stack: "React 19 · Tailwind CSS · Node.js · Express 5 · Groq (Llama 3.3 / 3.1, Gemma 2 fallback)",
        overview:
          "Students know what they need to prepare for but struggle to turn that intention into a realistic plan. This assistant takes the goal, the courses and topics involved, priority weight and difficulty per course, daily hours, available days, and intensity, then generates a balanced day-by-day schedule that assigns topics to specific dates and sessions. It allocates time proportionally by course weight, automatically gives high-priority courses about 15% extra revision time, and adjusts session density and breaks to the chosen intensity — producing an actionable timetable a student can actually follow.",
        highlights: [
          "Multi-course scheduling that distributes daily hours proportionally by course weight and spreads difficult topics across days.",
          "Priority-aware planning: courses weighted above 70 receive ~15% extra revision time, with intensity controlling session density and breaks.",
          "Date-based schedules mapped onto the student's real available days, with study guidance and a resilient model fallback list across several Groq models.",
        ],
        gallery: [
          { src: img("study-session-planner", "01-home.webp"), title: "Planner Home", caption: "A single-screen planner where the student enters their goal, courses, available days, and daily hours to generate a balanced study schedule." },
        ],
      },
    },
    {
      id: 13,
      title: "Naqsh — Fashion Jewellery E-Commerce Store",
      description: "A full-stack online store for fashion jewellery, clutches, and organizers built for the Pakistani market, with occasion-based shopping, OTP-verified accounts, and PayFast or cash-on-delivery checkout.",
      image: img("naqsh", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "PayFast", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Naqsh",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 18 · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · PayFast · Cloudinary · Nodemailer",
        overview:
          "Naqsh is a fashion-jewellery storefront built for shoppers in Pakistan, offering necklaces, earrings, rings, bangles, pendants, and anklets in Kundan, Meenakari, and stone-studded styles, alongside clutches, evening bags, and jewellery organizers. Customers can shop by occasion — bridal, festive, party, or everyday — and filter by style, colour, and budget, then pay online via PayFast (server-side hash generation with a confirmation page) or by cash on delivery. I built the full platform: the storefront with rich filtering, rate-limited OTP-verified signup and password reset, a persistent cart, and order history with tracking. The business owner manages products, orders, and customers through a role-protected admin dashboard, with no code required.",
        highlights: [
          "Occasion-based shopping with filters for category, material, colour, size, and price.",
          "Email OTP verification (6-digit, 5-minute expiry, rate-limited), persistent cart, and PayFast or cash-on-delivery checkout.",
          "Admin dashboard for managing products (with Cloudinary uploads), orders, and customer accounts.",
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
      id: 14,
      title: "Zephyr — Full-Stack Perfume E-Commerce Store",
      description: "A full-stack online perfume store where customers browse men's and women's fragrance collections, check out with JazzCash or cash on delivery, and track orders — with a complete admin portal.",
      image: img("zephyr", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "JazzCash", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Zephyr",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 18 · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · JazzCash · Cloudinary · Nodemailer",
        overview:
          "Zephyr is a full-stack online perfume store where customers browse men's and women's fragrance collections, filter, sort and search the catalog, add items to a persistent cart, and check out using JazzCash hosted checkout (signed secure-hash flow) or cash on delivery. After placing an order, shoppers can track its status from confirmation to delivery. I built the entire platform — the customer storefront with OTP-verified JWT accounts and profile management, the payment flows, Cloudinary-hosted product imagery, and transactional emails — plus a dedicated admin portal that gives the business owner full control to add and update products, manage orders, and view registered customers.",
        highlights: [
          "JazzCash hosted checkout with secure-hash signing, plus cash on delivery, with order confirmation and status tracking.",
          "Persistent cart with guest/authenticated merge, email-OTP authentication with password reset, and rate limiting on sensitive endpoints.",
          "Admin portal for managing products, orders, and registered customers with Cloudinary image uploads.",
        ],
        gallery: [
          { src: img("zephyr", "01-home.webp"), title: "Homepage", caption: "A polished landing page introducing men's and women's fragrance collections." },
          { src: img("zephyr", "02-catalog.webp"), title: "Browse fragrances", caption: "Shop the perfume catalog across men's and women's collections with filters and search." },
          { src: img("zephyr", "03-product.webp"), title: "Product detail", caption: "A detailed fragrance page with imagery, pricing, and add-to-cart." },
          { src: img("zephyr", "03-login.webp"), title: "Customer sign-in", caption: "Secure sign-in so shoppers can check out and track orders." },
          { src: img("zephyr", "04-about.webp"), title: "About Zephyr", caption: "The brand story behind the fragrance collection." },
          { src: img("zephyr", "04-login.webp"), title: "Account access", caption: "Account creation for a personalized shopping and order-tracking experience." },
        ],
      },
    },
    {
      id: 15,
      title: "The Vintage Drop — Antiques & Plants E-Commerce Platform",
      description: "A full-stack luxury store for vintage-inspired decor, indoor plants, succulents, and artisan planters, with rich style/material filtering, OTP-verified accounts, and PayFast or cash-on-delivery checkout in PKR.",
      image: img("vintage-drop", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "PayFast", "Cloudinary", "JWT", "Framer Motion"],
      github: "https://github.com/ibrahim123-sia/Vintage-Drop",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 18 · Redux Toolkit · Tailwind CSS · Framer Motion · Node/Express · MongoDB · JWT · PayFast · Cloudinary · Nodemailer",
        overview:
          "The Vintage Drop is a luxury e-commerce platform blending classic vintage aesthetics with modern botanical living, selling antique-style planters and vases, rare indoor houseplants, succulents and cacti, wall hangings, and curated plant-and-pot bundles across six categories. Shoppers browse curated collections and filter by style, material, colour, and size, then check out in two steps via PayFast or cash on delivery with PKR pricing. I built the complete platform: the animated storefront with a slide-over cart and guest-cart merging, secure accounts with rate-limited OTP verification and OTP-based password reset, and a role-protected admin dashboard with overview metrics, product CRUD, order status management, and user management. Product media is handled through Cloudinary so the catalog stays easy to maintain.",
        highlights: [
          "Rich filtering, sorting, and search by category, collection, material, colour, size, and price across six curated categories.",
          "Slide-over cart with guest-to-user cart merging and a two-step checkout supporting PayFast or cash on delivery in PKR.",
          "Admin dashboard with overview metrics, product CRUD, order status management, user management, and a database seeder for quick setup.",
        ],
        gallery: [
          { src: img("vintage-drop", "01-home.webp"), title: "Homepage", caption: "An elegant landing page introducing vintage decor, plants, and curated bundles." },
          { src: img("vintage-drop", "02-catalog.webp"), title: "Browse & filter", caption: "Shop the collection with filters for style, material, colour, and size." },
          { src: img("vintage-drop", "03-product.webp"), title: "Product detail", caption: "A detailed product page with imagery, pricing, and add-to-cart." },
          { src: img("vintage-drop", "03-login.webp"), title: "Customer sign-in", caption: "Secure, OTP-verified sign-in for returning shoppers." },
          { src: img("vintage-drop", "04-about.webp"), title: "About The Vintage Drop", caption: "The brand story behind its vintage-meets-botanical collection." },
          { src: img("vintage-drop", "04-login.webp"), title: "Account access", caption: "Account creation with email verification and password recovery." },
        ],
      },
    },
    {
      id: 16,
      title: "Nowhere — Full-Stack Clothing E-Commerce Store",
      description: "A full-stack MERN clothing store where shoppers filter by collection, category, size, colour, and gender, check out with PayPal, and track orders — all managed through a role-based admin dashboard.",
      image: img("nowhere", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "PayPal", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Nowhere",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 18 · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · PayPal · Cloudinary · Nodemailer",
        overview:
          "Nowhere is an online clothing store built on the MERN stack, giving customers a complete shopping experience from browsing the latest collections to checkout and order tracking. Shoppers can filter products by collection, category, size, colour, gender, and brand, keep a persistent guest cart that merges into their account on login, and pay through PayPal. Behind the scenes, the store team runs the business from a role-protected admin panel — adding and updating products with Cloudinary image uploads, managing stock and pricing, and processing orders from one dashboard. I built the platform end to end, including secure signup/login with rate-limited email OTP verification, forgot/reset password flows, and a full checkout flow.",
        highlights: [
          "PayPal checkout with payment method and status tracked on every order, plus \"My Orders\" history and per-order tracking pages.",
          "Persistent guest cart that merges into the user account on login, with filtering by collection, category, size, colour, gender, and brand.",
          "Role-based access with a dedicated admin dashboard for products, orders, and users, and Cloudinary-backed image uploads.",
        ],
        gallery: [
          { src: img("nowhere", "01-home.webp"), title: "Homepage", caption: "A modern landing page introducing the store's latest clothing collections." },
          { src: img("nowhere", "02-catalog.webp"), title: "Browse & filter", caption: "Shop the catalog with filters for collection, category, size, colour, and gender." },
          { src: img("nowhere", "03-product.webp"), title: "Product detail", caption: "A detailed product page with imagery and add-to-cart." },
          { src: img("nowhere", "03-login.webp"), title: "Customer sign-in", caption: "Secure, OTP-verified sign-in for shoppers." },
          { src: img("nowhere", "04-about.webp"), title: "About the store", caption: "Brand story and shopping information for customers." },
          { src: img("nowhere", "04-login.webp"), title: "Account access", caption: "Account creation with email OTP verification." },
        ],
      },
    },
    {
      id: 17,
      title: "Hadi Decor — Luxury Home Decor & Lighting Store",
      description: "A full-stack online store for a Pakistani luxury home-decor and lighting brand, selling chandeliers, fanuse, fancy tables, wall decor, and premium lighting, with PayPal or cash-on-delivery checkout and full order tracking.",
      image: img("hadi-home-decor", "01-home.webp"),
      technologies: ["React", "Redux", "Node.js", "MongoDB", "PayPal", "Cloudinary", "JWT"],
      github: "https://github.com/ibrahim123-sia/Hadi-Home-Decor",
      category: "ecommerce",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 18 · Redux Toolkit · Tailwind CSS · Node/Express · MongoDB · JWT · PayPal · Cloudinary · Nodemailer",
        overview:
          "Hadi Decor is a luxury home-decor and lighting storefront built for a Pakistani brand selling chandeliers, fanuse, fancy tables, wall decor, and premium lighting. The site gives shoppers a rich catalog with collection pages and a filter sidebar, a cart and checkout flow with PayPal or cash-on-delivery payments, and order tracking with status updates (Processing, Shipped, Delivered, Cancelled). The business owner runs everything from a single role-protected admin dashboard. I built the complete platform end to end — the customer storefront, secure accounts with email OTP verification and OTP-based password reset, and the back-office tools for managing products, orders, and users. Product images are managed through Cloudinary, so the catalog can be updated without touching code.",
        highlights: [
          "Complete catalog with collection pages, filter sidebar, PayPal or cash-on-delivery checkout, and order tracking with status updates.",
          "Admin dashboard for full product, order, and customer management with Cloudinary image uploads.",
          "OTP-verified accounts with rate-limited endpoints, plus support pages (About, FAQs, Contact, Features) and newsletter capture.",
        ],
        gallery: [
          { src: img("hadi-home-decor", "01-home.webp"), title: "Homepage", caption: "A luxury landing page introducing the brand's chandeliers, lamps, and decor collections." },
          { src: img("hadi-home-decor", "02-catalog.webp"), title: "Shop the catalog", caption: "Browse the full range of lighting and home-decor pieces with filters and clear pricing." },
          { src: img("hadi-home-decor", "03-product.webp"), title: "Product detail", caption: "Detailed product view with imagery, pricing, and add-to-cart." },
          { src: img("hadi-home-decor", "03-login.webp"), title: "Customer sign-in", caption: "Secure sign-in so returning shoppers can access their cart and orders." },
          { src: img("hadi-home-decor", "04-about.webp"), title: "About the brand", caption: "Brand story and delivery details." },
          { src: img("hadi-home-decor", "04-login.webp"), title: "Account access", caption: "Account creation and access for a personalized shopping experience." },
        ],
      },
    },
    {
      id: 18,
      title: "Live Load Tester — Real-Time HTTP Load Testing (Rust)",
      description: "Paste a public API URL, choose request count and concurrency, and watch response times, success rate, and requests-per-second stream live over WebSocket — with an exact P95 in the final summary. Stateless, SSRF-protected, and cancellable mid-run.",
      image: img("rust-load-tester", "01-dashboard.webp"),
      technologies: ["Rust", "Axum", "Tokio", "WebSockets", "React", "Recharts", "Docker"],
      github: "https://github.com/ibrahim123-sia/rust-load-tester",
      category: "fullstack",
      detail: {
        role: "Full-stack developer — sole developer (Rust backend, React frontend)",
        stack: "Rust · Axum · Tokio · Reqwest · tokio::sync::Semaphore · WebSockets · React · Vite · Tailwind · Recharts · Docker Compose",
        overview:
          "Most load testers make you wait for a report. This one streams metrics as the test runs: the Rust backend gates in-flight requests with a Tokio semaphore so concurrency is strictly enforced, collects results through a bounded channel into a thread-safe stats aggregator, and broadcasts a progress snapshot every 100ms over WebSocket. The React dashboard plots latency and throughput live and shows a final summary with exact P95. Closing the tab or clicking cancel aborts every in-flight request instantly. Server-side caps, per-request and overall timeouts, and three layers of SSRF defence (blocklist, DNS resolution check, redirect re-validation) keep it safe to expose.",
        highlights: [
          "Strict concurrency control with a Tokio semaphore, verified by a test that tracks peak simultaneous in-flight requests.",
          "Producer–consumer telemetry over a bounded mpsc channel with batched 100ms WebSocket snapshots — the socket is never flooded.",
          "Defence in depth: SSRF blocklist, DNS-level private-IP check, redirect re-validation, and graceful cancellation via CancellationToken.",
        ],
        gallery: [
          { src: img("rust-load-tester", "01-dashboard.webp"), title: "Live Dashboard", caption: "Real-time metric cards and a latency/throughput chart updating every 100ms while the test runs." },
        ],
      },
    },
    {
      id: 19,
      title: "Trade Journal",
      description: "A MERN trading journal for logging forex, gold and crypto trades and tracking win rate and cumulative P&L on a live statistics dashboard.",
      image: img("trade-journal", "01-dashboard.webp"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
      github: "https://github.com/ibrahim123-sia/Trade-Journal",
      category: "fullstack",
      detail: {
        role: "Full-stack developer — sole developer",
        stack: "React 19 · Vite · Tailwind CSS · React Router 7 · Axios · Node.js · Express · MongoDB (Mongoose)",
        overview:
          "A trading journal for logging every forex, gold and crypto trade with full context — pair, session (Tokyo/London/New York/Sydney), timeframe, direction, entry and exit price, lot size, outcome, and the reasoning behind the trade. The dashboard summarizes performance at a glance with total trades, winning and losing counts, win rate and cumulative profit and loss, aggregated on the server through a dedicated stats endpoint. Each entry can be viewed, edited or deleted, profit/loss and pips are calculated automatically when left blank, and a persistent dark mode makes long review sessions easy on the eyes.",
        highlights: [
          "Performance dashboard with total trades, win/loss counts, win rate and cumulative P&L aggregated on the server.",
          "Full CRUD trade log with rich fields — pair, session, timeframe, direction, lot size, outcome and rationale — plus a per-trade detail page.",
          "Auto-calculated P&L and pips from entry/exit and direction, a health-check endpoint, and a persistent light/dark theme.",
        ],
        gallery: [
          { src: img("trade-journal", "01-dashboard.webp"), title: "Statistics Dashboard", caption: "Key trading metrics such as win rate and total P&L sit above a full, date-sorted history of your logged trades." },
          { src: img("trade-journal", "02-add-trade.webp"), title: "Add Trade", caption: "Log a new trade with pair, session, direction, entry and exit prices, lot size and your reasoning, with P&L and pips filled in automatically." },
        ],
      },
    },
    {
      id: 20,
      title: "Hoor's — Children's Clothing Boutique Storefront",
      description: "A responsive storefront for a handcrafted children's clothing brand — dresses, frocks, and party wear — where shoppers browse by category, view product galleries, and order or request a custom design directly over WhatsApp.",
      image: img("hoors-clothes", "01-home.webp"),
      technologies: ["React", "Vite", "Tailwind CSS", "WhatsApp API"],
      github: "https://github.com/ibrahim123-sia/Hoor-s-Clothes-brand-",
      category: "ecommerce",
      detail: {
        role: "Frontend developer — sole developer",
        stack: "React 19 · Vite 7 · React Router 7 · Tailwind CSS 3",
        overview:
          "Hoor's is a boutique storefront for a children's clothing brand selling handcrafted dresses, frocks, and party wear. Small brands often don't need a full checkout system — they take orders over WhatsApp. So the storefront is built around that: shoppers browse a curated catalog by category, open a product to see a multi-image gallery with ratings and details, and place an order or request a custom design through a WhatsApp deep link with a pre-filled message for that item. I built the fast, mobile-friendly React front end, including the marketing homepage with best sellers, new arrivals, testimonials, and newsletter, plus category routes and product detail pages.",
        highlights: [
          "WhatsApp ordering — \"Purchase This Product\" and \"Custom Order\" buttons deep-link to WhatsApp with a pre-filled message for the selected item, so no checkout backend is needed.",
          "Category browsing (Dresses, Frocks, Party wear) with product detail pages featuring multi-image galleries, ratings, and itemized details.",
          "Responsive, brand-themed UI with a cart indicator, mobile menu, and curated home sections.",
        ],
        gallery: [
          { src: img("hoors-clothes", "01-home.webp"), title: "Homepage", caption: "A welcoming landing page featuring best sellers, new arrivals, and brand highlights." },
          { src: img("hoors-clothes", "02-products.webp"), title: "Shop by category", caption: "Browse dresses, frocks, and party wear with category filtering to quickly find a style." },
          { src: img("hoors-clothes", "03-product-detail.webp"), title: "Product detail", caption: "A focused product page with an image gallery and one-tap WhatsApp ordering." },
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
      features: ["Document Q&A / RAG", "AI Assistants", "FastAPI LLM Backends", "Vector Search & Context Retrieval"]
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
      description: "Production-grade web apps and multi-tenant SaaS products built with the MERN stack, Next.js, and clean, maintainable architecture.",
      features: ["Custom Web & SaaS Apps", "Multi-tenant Architecture", "Responsive UI/UX", "Performance Optimization"]
    },
    {
      id: 5,
      title: "Backend & API Development",
      icon: "backend",
      description: "Robust server-side systems and APIs with Node.js, Express, and FastAPI — secure, well-tested, and ready to scale.",
      features: ["REST API Development", "Authentication & RBAC", "Payment Integrations", "Unit Testing"]
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
      description: "Building and maintaining a multi-application AI business platform for a US-based automotive services company operating across multiple locations. Design and deliver AI-driven systems that automate core business operations — from intelligent call analysis with human-in-the-loop review to media processing and lead pipeline automation — alongside the backend services and interfaces that support them. Work from client requirements and feedback cycles, collaborating asynchronously across US time zones.",
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "CoVentech",
      type: "On-site · Karachi, Pakistan",
      period: "Aug 2026 - Present",
      description: "Working on production applications with Next.js, Node.js, and MongoDB as part of an in-house engineering team. Implement Figma designs into responsive, production-ready interfaces, build backend features, and iterate on client-driven requirements through regular feedback cycles.",
    },
    {
      id: 3,
      title: "MERN Stack Developer — SHINE Program",
      company: "10Pearls Pakistan",
      type: "Remote",
      period: "Apr 2026 - Jun 2026",
      description: "Selected for the intensive 10Pearls SHINE program focused on Node.js and React. Delivered a full-stack AI-powered notes application (NoWrite) with a tested backend in a professional engineering environment, reinforcing code quality and iterative delivery. Awarded a certificate of completion.",
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

// ---------------------------------------------------------------------------
// Repo index — every project above, in display order, with its GitHub link.
// Handy for the "All projects" / footer list and for quick reference.
// ---------------------------------------------------------------------------
export const repoLinks = [
  { name: "AtriumDesk",                  url: "https://github.com/ibrahim123-sia/AtriumDesk" },
  { name: "Sprintlog",                   url: "https://github.com/ibrahim123-sia/sprintlog-agent" },
  { name: "Assortment Dashboard",        url: "https://github.com/ibrahim123-sia/Assortment-Dashboard" },
  { name: "Acadex",                      url: "https://github.com/ibrahim123-sia/Acadex" },
  { name: "AI Code Reviewer",            url: "https://github.com/ibrahim123-sia/ai-code-reviewer" },
  { name: "AI SEO Analyzer",             url: "https://github.com/ibrahim123-sia/ai-seo-analyzer" },
  { name: "AI Task Manager (MCP)",       url: "https://github.com/ibrahim123-sia/AI-GitHub-Task-Manager" },
  { name: "NoChat",                      url: "https://github.com/ibrahim123-sia/NoChat" },
  { name: "Vehicle Diagnostic Analysis", url: "https://github.com/ibrahim123-sia/Vehicle-Diagnostic-Analysis" },
  { name: "NoWrite",                     url: "https://github.com/ibrahim123-sia/ibrahim-ali-mern-10pshine" },
  { name: "SkillBridge",                 url: "https://github.com/ibrahim123-sia/Learning-Path-Recommender" },
  { name: "StudyPlanner Pro",            url: "https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant" },
  { name: "Naqsh",                       url: "https://github.com/ibrahim123-sia/Naqsh" },
  { name: "Zephyr",                      url: "https://github.com/ibrahim123-sia/Zephyr" },
  { name: "The Vintage Drop",            url: "https://github.com/ibrahim123-sia/Vintage-Drop" },
  { name: "Nowhere",                     url: "https://github.com/ibrahim123-sia/Nowhere" },
  { name: "Hadi Decor",                  url: "https://github.com/ibrahim123-sia/Hadi-Home-Decor" },
  { name: "Live Load Tester",            url: "https://github.com/ibrahim123-sia/rust-load-tester" },
  { name: "Trade Journal",               url: "https://github.com/ibrahim123-sia/Trade-Journal" },
  { name: "Hoor's",                      url: "https://github.com/ibrahim123-sia/Hoor-s-Clothes-brand-" },
];