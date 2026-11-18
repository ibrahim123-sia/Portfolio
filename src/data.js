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
    // Hero on Home
    role: "AI Engineer and Full-Stack Developer",
    intro:
      "I build AI agents, assistants that answer from your own data, and the full products around them, for businesses that want AI to do real work. Based in Karachi, working with clients worldwide.",
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

  // Skills grouped by area ("Tools I use" on About)
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
      skills: ["Node.js", "Express", "Python", "FastAPI", "Rust", "REST APIs", "Auth and roles", "Multi-tenant SaaS"],
    },
    {
      title: "Data and tools",
      skills: ["MongoDB", "PostgreSQL", "Docker", "Cloudflare Workers", "Vercel", "GitHub Actions", "Git"],
    },
  ],

  // All projects, in display order. The first five are featured on Home.
  // `year` is the year of the first commit, `problems` the problems it solves
  // (see problemList; the first one is its group on the Work page) and
  // `commits` the commit count on the featured products.
  // Each project gets its own page at /projects/<key>.
  projects: [
    {
      key: "propel",
      featured: true,
      name: "Propel",
      title: "Real Estate Agency Website, CRM and AI Assistants",
      summary: "One app that runs a real estate agency: website, listings, leads, viewings and two AI assistants.",
      problem:
        "Real estate agencies usually run their website, listings, leads and viewings in separate tools, so leads slip through and the team copies the same data by hand.",
      built:
        "Propel puts all of it in one app. The agency publishes listings on its own website, every lead from every channel lands in one inbox, and visitors book viewings at real free times. An AI assistant answers visitors on the website and WhatsApp, and a second one helps the team, changing data only after an admin confirms. It is one Next.js app running on Cloudflare Workers with PostgreSQL.",
      features: [
        "Property search with filters and a map, plus listing, project and agent pages.",
        "Leads from the website, WhatsApp, email and property portals land in one inbox, with scoring and assignment.",
        "Visitors book viewings at real free times, with reminders and calendar sync.",
        "The team assistant can also be used from Claude through an MCP server, with the same confirm-first rule.",
        "Page builder, blog and SEO tools, so the agency runs its own site without a developer.",
      ],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Drizzle ORM", "Cloudflare Workers", "Tailwind CSS", "LLM APIs", "MCP"],
      problems: ["act", "answer", "run"],
      commits: 321,
      year: 2026,
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
      featured: true,
      name: "AtriumDesk",
      title: "AI Help Desk and Student Assistant for Universities",
      summary: "An AI assistant and help desk that answers students from their own university's website.",
      problem:
        "Students ask the same questions every day, and staff answer them by email, phone and at the counter.",
      built:
        "AtriumDesk gives each university an AI assistant that answers from the university's own website and documents, with sources, plus a help desk for everything the assistant can't solve. Each university gets its own database, so one platform can serve many institutions, and a university can add the assistant to its own website with one line of code.",
      features: [
        "Answers come from the university's own website and documents, with source links and voice input.",
        "Support requests go to the right department, with internal notes, reply drafts and email alerts.",
        "Jobs and scholarships are matched to each student's CV and CGPA.",
        "Admins see analytics, the questions the assistant got wrong, and a full audit log.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "FastAPI", "ChromaDB", "RAG", "Cloudflare"],
      problems: ["answer", "run"],
      commits: 54,
      year: 2026,
      github: "https://github.com/ibrahim123-sia/AtriumDesk",
      live: "https://atriumdesk-web.syedibrahimali.workers.dev",
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
      featured: true,
      name: "Nowhere",
      title: "Clothing Store with an AI Shopping Agent",
      summary: "A clothing store where Iris, an AI shopping agent, finds the right item and places the order after the shopper confirms.",
      problem: "Shoppers leave when they can't find the right item, size or colour quickly.",
      built:
        "Nowhere is a complete clothing store with Iris, an AI shopping agent on every page. Iris searches the catalogue, picks size and colour, fills the bag and places a cash-on-delivery order, but only after the shopper presses Confirm, and the server checks every step. The store itself covers filters, reviews with fit notes, guest checkout, promo codes, order tracking and an admin dashboard.",
      features: [
        "Iris speaks English, Urdu and Roman Urdu, and works for guests and signed-in customers.",
        "Iris can also track, cancel or re-order a past order.",
        "Guest checkout with cash on delivery, promo codes and order tracking.",
        "Admin dashboard with sales, low-stock alerts and order management.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Groq", "Gemini", "Tailwind CSS"],
      problems: ["act", "sell"],
      commits: 127,
      year: 2025,
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
      ],
    },
    {
      key: "acadex",
      featured: true,
      name: "Acadex",
      title: "AI-Powered Platform to Run Schools, Colleges and Universities",
      summary: "One platform to run a school, college or university, with an AI tutor and teacher assistant built in.",
      problem:
        "Schools and universities run admissions, classes, exams and fees across spreadsheets and separate tools.",
      built:
        "Acadex brings all of it into one platform, with a separate, secure workspace for every institution. It adapts to the kind of institution, so a school works in classes and terms and a university in programs, semesters and GPA. AI is built in where it saves time, always with a person in control: a tutor that answers from the course material and a teacher assistant whose drafts are used only after approval.",
      features: [
        "Admissions, attendance, timetables, exams, results and fees in one place.",
        "Separate dashboards for administrators, teachers, students and parents.",
        "Early warnings for students who need help.",
        "Online fee payments with JazzCash, Easypaisa or Stripe.",
      ],
      stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Tailwind CSS", "Gemini", "Groq", "Cloudflare"],
      problems: ["run", "answer"],
      commits: 249,
      year: 2024,
      github: "https://github.com/ibrahim123-sia/Acadex",
      image: cover("acadex", "00-preview.webp"),
      gallery: [
        { src: img("acadex", "00-preview.webp"), title: "Administrator dashboard", caption: "Students, staff, classes and fees collected, with fee status and students by class." },
      ],
    },
    {
      key: "pairly",
      featured: true,
      name: "Pairly",
      title: "AI Sales Insights That Show Which Products Sell Together",
      summary: "Shows shop owners which products sell together and explains it in plain English.",
      problem:
        "Shop owners have years of sales data but rarely know which products to bundle or which customers are slipping away.",
      built:
        "Pairly reads an uploaded sales file and shows which products sell together, which bundles to offer and which customers need attention. An AI layer explains the results in plain English and answers questions like \"What should I bundle with coffee?\", and every number it mentions is checked against the real analytics first. Each store gets its own private workspace.",
      features: [
        "Upload a CSV or Excel file and see which products customers buy together.",
        "Ready-made bundle ideas with a discount simulator.",
        "Customer groups such as loyal and at risk, plus revenue and seasonal trends.",
        "PDF and CSV exports, and scheduled re-analysis with email summaries.",
      ],
      stack: ["Python", "FastAPI", "PostgreSQL", "pandas", "React", "Recharts", "LLM APIs", "Cloudflare"],
      problems: ["numbers", "answer"],
      commits: 74,
      year: 2025,
      github: "https://github.com/ibrahim123-sia/Pairly",
      live: "https://pairly.syedibrahimali.workers.dev",
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
    {
      key: "sprintlog",
      name: "Sprintlog",
      title: "AI Agents That Write the End-of-Day Report",
      summary: "AI agents that read the day's GitHub commits and email a short end-of-day report.",
      problem:
        "Reviewing your own commits every evening and writing a progress report for a manager is repetitive and easy to forget.",
      built:
        "Sprintlog runs the whole flow with five agents in a LangGraph pipeline. One collects the day's commits and code changes, one works out what actually changed, one separates important work from small fixes, one writes the email in the user's chosen tone, and the last sends it and logs it. Each user sets their own repositories, schedule and tone.",
      features: [
        "Reads the code changes, not just the commit messages.",
        "Each user's report runs on their own schedule as a background job.",
        "Every sent report is saved to PostgreSQL.",
      ],
      stack: ["Python", "FastAPI", "LangGraph", "LangChain", "Gemini", "PostgreSQL", "APScheduler"],
      problems: ["act"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/sprintlog-agent",
      gallery: [],
    },
    {
      key: "ai-task-manager",
      name: "AI Task Manager",
      title: "Task Manager with an AI Assistant and GitHub MCP",
      summary: "A task manager whose AI assistant can also work with your GitHub repositories through MCP.",
      problem: "An AI assistant is only useful when it can act in the tools a team already uses.",
      built:
        "A MERN task manager with an AI assistant that handles two kinds of requests. Task requests run against MongoDB. GitHub requests go through an MCP client that connects to the official GitHub MCP server, discovers its tools and calls them. I built it to learn in practice how MCP hosts, clients and servers fit together.",
      features: [
        "The assistant decides whether a request is about tasks or about GitHub.",
        "Connects to the GitHub MCP server, lists its tools and calls them.",
        "Falls back to simple local intent parsing when the AI service is unavailable.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "MCP", "Gemini"],
      problems: ["act"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/AI-GitHub-Task-Manager",
      gallery: [],
    },
    {
      key: "vehicle-diagnostic-analysis",
      name: "Vehicle Diagnostic Analysis",
      title: "From a Spoken Car Problem to a Repair Report",
      summary: "Record a video describing a car problem and get a structured repair report.",
      problem:
        "Describing a car fault in writing is awkward, and spoken complaints are hard for a workshop to act on.",
      built:
        "A driver or mechanic records a short video in the browser. The app uploads it in small chunks, turns the speech into text with AssemblyAI, checks it against more than 90 common vehicle faults and asks an LLM for a structured report: the main problem, how serious it is and what to repair.",
      features: [
        "Recording in the browser with a live preview.",
        "Large recordings upload reliably in 2 MB chunks.",
        "A severity-coded report with the full transcript.",
      ],
      stack: ["React", "Node.js", "Express", "AssemblyAI", "Groq", "ffmpeg"],
      problems: ["tools"],
      year: 2025,
      github: "https://github.com/ibrahim123-sia/Vehicle-Diagnostic-Analysis",
      gallery: [
        { src: img("vehicle-diagnostic-analysis", "01-home.webp"), title: "Record and analyse", caption: "Record a description of the problem and get a diagnosis." },
      ],
    },
    {
      key: "nowrite",
      name: "NoWrite",
      title: "AI Notes App, Built at 10Pearls",
      summary: "A notes app with voice notes, AI flashcards and quizzes, built during the 10Pearls SHINE program.",
      problem: "Notes pile up and rarely get reviewed or studied.",
      built:
        "NoWrite is a MERN notes app with a rich-text editor, categories, tags, checklists and drag-and-drop ordering. Voice notes recorded in the browser are turned into text, and AI helpers suggest titles and tags and turn any note into flashcards or a quiz. I built it during the 10Pearls SHINE program, with a backend covered by automated tests.",
      features: [
        "Voice notes turned into text.",
        "Flashcards and quizzes generated from any note.",
        "Backend tested with Mocha, Chai, Sinon and Supertest.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "TipTap", "Groq"],
      problems: ["tools"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/ibrahim-ali-mern-10pshine",
      gallery: [
        { src: img("notes-workspace", "01-notes-dashboard.webp"), title: "Notes", caption: "Create, pin and organise notes by category and tag." },
        { src: img("notes-workspace", "02-profile.webp"), title: "Profile", caption: "Account details, avatar and password." },
      ],
    },
    {
      key: "trade-journal",
      name: "Trade Journal",
      title: "Trading Journal with Live Statistics",
      summary: "A journal for forex, gold and crypto trades that tracks win rate and profit.",
      problem:
        "Traders who don't log their trades can't see which sessions, pairs or setups actually make money.",
      built:
        "Trade Journal records each trade with its pair, session, timeframe, direction, entry and exit, lot size and the reason behind it. The dashboard shows total trades, wins and losses, win rate and total profit, calculated on the server, and fills in profit and pips automatically when they are left blank.",
      features: [
        "Win rate and total profit from a dedicated statistics endpoint.",
        "Add, view, edit and delete trades.",
        "Light and dark theme.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB"],
      problems: ["numbers"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/Trade-Journal",
      gallery: [
        { src: img("trade-journal", "02-add-trade.webp"), title: "Add a trade", caption: "Pair, session, direction, prices, lot size and the reason for the trade." },
        { src: img("trade-journal", "01-dashboard.webp"), title: "Statistics dashboard", caption: "Trading statistics above the full trade history." },
      ],
    },
    {
      key: "naqsh",
      name: "Naqsh",
      title: "Jewellery Store for a Client",
      summary: "A live online store for a client's jewellery brand, with PayFast or cash-on-delivery checkout.",
      problem:
        "A brand selling fashion jewellery, clutches and organizers needed its own store with online payments and an admin panel.",
      built:
        "Naqsh is a MERN store where shoppers browse collections, filter and sort, keep a cart and pay through PayFast or cash on delivery. Accounts are verified with an email code, and the owner manages products, orders and customers from an admin dashboard with image uploads to Cloudinary.",
      features: [
        "PayFast checkout signed on the server.",
        "Email code sign-up with rate limiting.",
        "Admin dashboard for products, orders and users.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "PayFast", "Cloudinary"],
      problems: ["sell"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/Naqsh",
      live: "https://naqshbynoor.vercel.app",
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
      title: "Perfume Store",
      summary: "An online perfume store with JazzCash or cash-on-delivery checkout and an admin portal.",
      problem: "A perfume seller needs online payments, order tracking and a simple way to manage stock.",
      built:
        "Zephyr is a MERN store where shoppers browse fragrance collections, filter and search, keep a cart that follows them after sign-in, and pay through JazzCash or cash on delivery. They can track each order, and the owner manages products, orders and users from an admin dashboard.",
      features: [
        "JazzCash hosted checkout with signed requests.",
        "The cart carries over from guest to signed-in.",
        "Email code sign-up and password reset.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JazzCash", "Cloudinary"],
      problems: ["sell"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/Zephyr",
      live: "https://zephyrperfume.vercel.app",
      gallery: [
        { src: img("zephyr", "01-home.webp"), title: "Home page", caption: "Men's and women's fragrance collections." },
        { src: img("zephyr", "02-catalog.webp"), title: "Catalogue", caption: "Filters and search across the collection." },
        { src: img("zephyr", "03-product.webp"), title: "Product page", caption: "Photos, price and add to cart." },
        { src: img("zephyr", "03-login.webp"), title: "Sign in", caption: "Customer sign-in." },
        { src: img("zephyr", "04-about.webp"), title: "About page", caption: "The brand story." },
        { src: img("zephyr", "04-login.webp"), title: "Create account", caption: "Account sign-up." },
      ],
    },
    {
      key: "hadi-decor",
      name: "Hadi Decor",
      title: "Home Decor and Lighting Store",
      summary: "An online store for a luxury home decor and lighting brand, with PayPal checkout and order tracking.",
      problem:
        "A decor brand selling chandeliers, lamps and tables needs a catalogue and checkout it can run without a developer.",
      built:
        "Hadi Decor is a MERN store with collection pages, filters, a cart and PayPal checkout. Customers follow each order from processing to delivered, and the owner manages products, orders and users from a role-protected admin dashboard.",
      features: [
        "PayPal checkout.",
        "Order tracking with status updates.",
        "Email code sign-up and password reset.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "PayPal", "Cloudinary"],
      problems: ["sell"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/Hadi-Home-Decor",
      gallery: [
        { src: img("hadi-home-decor", "01-home.webp"), title: "Home page", caption: "Chandeliers, lamps and decor collections." },
        { src: img("hadi-home-decor", "02-catalog.webp"), title: "Catalogue", caption: "The full range with filters and prices." },
        { src: img("hadi-home-decor", "03-product.webp"), title: "Product page", caption: "Photos, price and add to cart." },
        { src: img("hadi-home-decor", "03-login.webp"), title: "Sign in", caption: "Customer sign-in." },
        { src: img("hadi-home-decor", "04-about.webp"), title: "About page", caption: "The brand story and delivery details." },
        { src: img("hadi-home-decor", "04-login.webp"), title: "Create account", caption: "Account sign-up." },
      ],
    },
    {
      key: "vintage-drop",
      name: "The Vintage Drop",
      title: "Vintage Decor and Plants Store",
      summary: "An online store for vintage decor and indoor plants, with PayFast or cash-on-delivery checkout.",
      problem:
        "A shop selling planters, plants and antique decor in many styles needs a catalogue that is easy to filter.",
      built:
        "The Vintage Drop is a MERN store with six categories, filters for material, colour, size and price, a slide-over cart and a two-step checkout with PayFast or cash on delivery. The admin dashboard shows overview numbers and manages products, orders and users.",
      features: [
        "Six categories with detailed filters.",
        "Guest cart that merges into the account on sign-in.",
        "PayFast or cash-on-delivery checkout.",
      ],
      stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "PayFast", "Cloudinary"],
      problems: ["sell"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/Vintage-Drop",
      gallery: [
        { src: img("vintage-drop", "01-home.webp"), title: "Home page", caption: "Vintage decor, plants and curated bundles." },
        { src: img("vintage-drop", "02-catalog.webp"), title: "Catalogue", caption: "Filters for style, material, colour and size." },
        { src: img("vintage-drop", "03-product.webp"), title: "Product page", caption: "Photos, price and add to cart." },
        { src: img("vintage-drop", "03-login.webp"), title: "Sign in", caption: "Customer sign-in." },
        { src: img("vintage-drop", "04-about.webp"), title: "About page", caption: "The brand story." },
        { src: img("vintage-drop", "04-login.webp"), title: "Create account", caption: "Sign-up with email verification." },
      ],
    },
    {
      key: "ai-code-reviewer",
      name: "AI Code Reviewer",
      title: "Instant Code Review with AI",
      summary: "Paste code and get bugs, security issues and fixes with line numbers and a score out of 10.",
      problem:
        "Code review is the bottleneck on most small teams, and quick feedback on a snippet usually means waiting for someone senior.",
      built:
        "Paste up to 10,000 characters of code in any of 15+ languages. The tool detects the language, asks Gemini for a review in a strict format, and shows a score, a short summary and each issue with its line number and a suggested fix. If Gemini is busy it switches to Groq. Nothing is stored: there is no database and no session.",
      features: [
        "Detects the language on its own.",
        "Switches to a second AI provider when the first is busy.",
        "Code is reviewed in memory and discarded.",
      ],
      stack: ["Python", "FastAPI", "React", "Gemini", "Groq", "Docker"],
      problems: ["tools"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/ai-code-reviewer",
      gallery: [],
    },
    {
      key: "ai-seo-analyzer",
      name: "AI SEO Analyzer",
      title: "On-Page SEO Audit with AI",
      summary: "Paste a URL to get an SEO report with search rank, a score and a PDF.",
      problem: "Most SEO tools give generic advice instead of saying what is actually wrong on the page.",
      built:
        "The tool fetches the live page, reads its title, meta description, headings, image alt text and word count, checks where the site ranks for a keyword, and has Gemini write a report based on what it actually found. Issues come with fixes, a score out of 10, keyword ideas and a one-click PDF. Private and local addresses are blocked before any page is fetched.",
      features: [
        "Reports based on the real page scan, not generic tips.",
        "Free rank check with no API key.",
        "PDF export of the full report.",
      ],
      stack: ["Node.js", "Express", "React", "Gemini", "Docker"],
      problems: ["tools"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/ai-seo-analyzer",
      gallery: [],
    },
    {
      key: "live-load-tester",
      name: "Live Load Tester",
      title: "Real-Time HTTP Load Testing in Rust",
      summary: "Load test an API and watch response times and throughput update live.",
      problem:
        "Most load testers make you wait for a report at the end instead of showing what happens during the test.",
      built:
        "Paste a public API URL, choose how many requests to send and how many run at once, and watch response times, success rate and requests per second update every 100 ms over a WebSocket. The Rust backend never runs more requests at once than you asked for, reports an exact P95 at the end, and stops every request immediately if you cancel. Private addresses, and redirects to them, are blocked.",
      features: [
        "Live updates every 100 ms.",
        "Exact P95 in the final summary.",
        "Cancel stops every request in flight.",
      ],
      stack: ["Rust", "Axum", "Tokio", "WebSockets", "React", "Recharts", "Docker"],
      problems: ["tools"],
      year: 2026,
      github: "https://github.com/ibrahim123-sia/rust-load-tester",
      gallery: [],
    },
  ],

  // GitHub section on Home. Used as is when the GitHub API can't be reached;
  // otherwise the repository count and the repo cards come from the API.
  github: {
    username: "ibrahim123-sia",
    repos: 44,
    commitsLastYear: 760,
    // Repo cards, by project key, with the repo's main language
    repoCards: [
      { key: "propel", name: "Propel", language: "TypeScript" },
      { key: "acadex", name: "Acadex", language: "TypeScript" },
      { key: "atriumdesk", name: "AtriumDesk", language: "JavaScript" },
      { key: "pairly", name: "Pairly", language: "Python" },
      { key: "nowhere", name: "Nowhere", language: "JavaScript" },
      { key: "sprintlog", name: "sprintlog-agent", language: "Python" },
    ],
  },

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
      location: "Karachi, Pakistan",
      type: "Remote",
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

// Preview image for every project: the cover for featured projects, else the
// first screenshot. Projects without real screenshots stay text-only (null).
for (const project of portfolioData.projects) {
  if (!project.image) project.image = project.gallery[0]?.src ?? null;
}

// The problems a project solves, in display order. A project's first problem
// is its main group on the Work page; Home links each one to /projects?problem=.
export const problemList = [
  { slug: "act", title: "AI that takes action", description: "Agents that search, update records or place orders in your own systems, and ask a person before anything risky." },
  { slug: "answer", title: "AI that answers from your data", description: "Assistants that reply from your website, documents or database, show their sources and say when they do not know." },
  { slug: "run", title: "One platform to run your organisation", description: "Multi-user systems that replace spreadsheets and separate tools for an agency, school or university." },
  { slug: "numbers", title: "Make sense of your numbers", description: "Dashboards that turn sales or trading data into clear next steps." },
  { slug: "sell", title: "Sell online", description: "Complete online stores with local and international payments and an admin panel the owner runs alone." },
  { slug: "tools", title: "Smaller AI tools", description: "Focused tools for code review, SEO, load testing, notes and vehicle diagnostics." },
];

export const problemBySlug = Object.fromEntries(problemList.map((p) => [p.slug, p]));
// Each problem's colour is a CSS variable of the same name (index.css)
export const problemColor = (slug) => `var(--${slug})`;
export const projectsFor = (slug) => portfolioData.projects.filter((p) => p.problems.includes(slug));
