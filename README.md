# Syed Ibrahim Ali — Portfolio

Personal portfolio of **Syed Ibrahim Ali**, an AI Engineer & Full-Stack Developer.
A fast React application with a calm, dark "Ink Blue on Navy" theme, featured project case
studies, and a live GitHub activity panel.

**Live:** https://syedibrahimali.vercel.app

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Three pages** — Home (hero, featured projects, experience, what I build, contact),
  Projects (five featured projects plus a "More work" grid) and About (skills, education,
  certifications). A tiny History API router in `src/router.js` keeps per-page titles,
  descriptions and canonical links in sync, with no router dependency.
- **Project case studies** — each project opens a modal with the problem it solves, key
  features, stack and an image slider (keyboard navigation) where every screenshot has its
  own caption.
- **Live GitHub panel** — public repositories, stars, top languages and an authentic GitHub
  contribution calendar, fetched from GitHub's public API (no token shipped to the browser).
- **Contact form** — sends messages via EmailJS, with WhatsApp as a quick fallback.
- **Motion** — only a subtle fade-in on scroll (Framer Motion), off under `prefers-reduced-motion`.
- **SEO-ready** — per-page metadata, Open Graph / Twitter cards, JSON-LD `Person`
  (with `worksFor`) structured data, `sitemap.xml` and `robots.txt`.
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
│   ├── assets/projects/<key>/  # per-project cover.jpg (4:3) + case-study screenshots (WebP)
│   ├── components/             # Header, Footer, FeaturedProject, ProjectCard, ProjectModal, …
│   ├── pages/                  # Home, Projects, About, NotFound
│   ├── data.js                 # single source of truth for all portfolio content
│   ├── router.js               # minimal History API routing (no dependency)
│   ├── index.css               # design tokens + component classes
│   ├── App.jsx
│   └── main.jsx
├── index.html                  # document head, SEO metadata, JSON-LD
├── tailwind.config.js          # theme tokens (Ink Blue on Navy)
├── vercel.json                 # SPA rewrite rules
└── vite.config.js
```

All copy, projects, experience, education and certifications live in **`src/data.js`** —
update content there without touching components. To set a featured project's card image,
add `src/assets/projects/<key>/cover.jpg` (or `cover.webp`) at 4:3; until then the first
screenshot is used.

---

## 🎨 Design

A dark **"Ink Blue on Navy"** system: a deep navy ground (`#0A0F1A`), a blue accent
(`#4C8DFF`), and **DM Sans** throughout. Colour tokens are defined once in
`tailwind.config.js` and `src/index.css` and reused across every component.

---

## ☁️ Deployment

Deployed on **Vercel** as a static SPA. `vercel.json` rewrites extensionless routes
(`/projects`, `/about`) to `/` so client-side routing works, while `robots.txt`, `sitemap.xml` and the Google verification file are served
directly. On Vercel, set the project's **Root Directory** to the repository root.

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact

- **Email:** syedibrahimali1111@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/syed-ibrahim-ali-sia/
- **GitHub:** https://github.com/ibrahim123-sia
