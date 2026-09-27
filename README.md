# Syed Ibrahim Ali — Portfolio

Personal portfolio of **Syed Ibrahim Ali**, an AI Engineer & Full-Stack Developer.
A fast, single-page React application with a dark "Ink Blue on Navy" theme, filterable
project case studies, and a live GitHub activity panel.

**Live:** https://syedibrahimali.vercel.app

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Single-page experience** — Home, About, Projects, Services and Contact, with a sticky
  header, scroll-spy navigation and smooth in-page anchoring.
- **Project case studies** — each project opens a modal with a client-perspective overview,
  outcome highlights and an image slider (keyboard + swipe navigation) where every screenshot
  has its own caption.
- **Filterable work** — filter projects by category (AI / ML, E-Commerce, Data & Analytics,
  Web Apps) with a "show more" reveal.
- **Live GitHub panel** — public repositories, stars, top languages and an authentic GitHub
  contribution calendar, fetched from GitHub's public API (no token shipped to the browser).
- **Contact form** — sends messages via EmailJS, with WhatsApp as a quick fallback.
- **Motion** — subtle, tasteful Framer Motion reveals that honour `prefers-reduced-motion`.
- **SEO-ready** — semantic metadata, Open Graph / Twitter cards, JSON-LD `Person` structured
  data, `sitemap.xml` and `robots.txt`.
- **Optimised assets** — project screenshots are resized and served as WebP (~76 MB → ~3.6 MB).

---

## 🛠️ Tech Stack

| Area        | Tools                                                        |
| ----------- | ----------------------------------------------------------- |
| Framework   | React 19, Vite 7                                            |
| Styling     | Tailwind CSS 3, custom CSS design tokens                    |
| Animation   | Framer Motion                                               |
| Icons       | lucide-react                                                |
| Integrations| EmailJS (contact), react-github-calendar, GitHub REST API   |
| Tooling     | ESLint, PostCSS, Autoprefixer, sharp (image optimisation)   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/ibrahim123-sia/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev        # start the dev server → http://localhost:5173
```

### Production build

```bash
npm run build      # output to dist/
npm run preview    # preview the production build locally
```

### Lint

```bash
npm run lint
```

> **Environment variables:** none are required. The GitHub panel uses GitHub's public API and
> `react-github-calendar`, so no personal access token is shipped in the client bundle.

---

## 📁 Project Structure

```
Portfolio/
├── public/                     # static assets (resume, robots.txt, sitemap.xml, favicon)
├── src/
│   ├── assets/projects/<name>/ # per-project case-study screenshots (WebP)
│   ├── components/             # Header, Footer, ProjectCard, ProjectModal, GitHubStats, …
│   ├── pages/                  # Home, About, Projects, Services, Contact
│   ├── data.js                 # single source of truth for all portfolio content
│   ├── index.css               # design tokens + component classes
│   ├── App.jsx
│   └── main.jsx
├── index.html                  # document head, SEO metadata, JSON-LD
├── tailwind.config.js          # theme tokens (Ink Blue on Navy)
├── vercel.json                 # SPA rewrite rules
└── vite.config.js
```

All copy, projects, services and experience live in **`src/data.js`** — update content there
without touching components.

---

## 🎨 Design

A dark **"Ink Blue on Navy"** system: a deep navy ground (`#0A0F1A`), a blue accent
(`#4C8DFF`), and **DM Sans** throughout. Colour tokens are defined once in
`tailwind.config.js` and `src/index.css` and reused across every component.

---

## ☁️ Deployment

Deployed on **Vercel** as a static SPA. `vercel.json` rewrites all routes to `/` so client-side
anchors resolve, while `robots.txt`, `sitemap.xml` and the Google verification file are served
directly. On Vercel, set the project's **Root Directory** to the repository root.

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact

- **Email:** syedibrahimali1111@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/syed-ibrahim-ali-sia/
- **GitHub:** https://github.com/ibrahim123-sia
