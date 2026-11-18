# Syed Ibrahim Ali — Portfolio

Personal portfolio of **Syed Ibrahim Ali**, an AI Engineer & Full-Stack Developer.
A fast React application with a light, editorial design: warm paper, serif titles, thin
rules, and a case study page for every project.

**Live:** https://syedibrahimali.vercel.app

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Pages** — Home (hero, featured projects, experience, what I build, contact), a Projects
  index with a category filter (`?category=ai|saas|data|ecommerce|devtools`, with counts),
  a case study page per project at `/projects/<key>`, and About (skills, education,
  certifications). A tiny History API router in `src/router.js` keeps per-page titles,
  descriptions and canonical links in sync, with no router dependency.
- **Case studies** — the problem, what was built, key features, tech, screenshots and links.
- **Contact form** — sends messages via EmailJS, with WhatsApp as a quick fallback.
- **Motion** — only a short CSS fade-in on page load and underline-on-hover links, off under
  `prefers-reduced-motion`. Content is never hidden waiting for scroll, so full-page
  screenshots and crawlers see everything.
- **SEO-ready** — per-page metadata, Open Graph / Twitter cards, JSON-LD `Person`
  (with `worksFor`) structured data, `sitemap.xml` and `robots.txt`.
- **Optimised assets** — project screenshots are resized and served as WebP (~76 MB → ~3.6 MB).

---

## 🛠️ Tech Stack

| Area        | Tools                                                        |
| ----------- | ----------------------------------------------------------- |
| Framework   | React 19, Vite 7                                            |
| Styling     | Tailwind CSS 3, custom CSS design tokens                    |
| Fonts       | Instrument Serif, Inter, JetBrains Mono (self-hosted via @fontsource) |
| Icons       | lucide-react                                                |
| Integrations| EmailJS (contact)                                           |
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

> **Environment variables:** none are required.

---

## 📁 Project Structure

```
Portfolio/
├── public/                     # static assets (resume, robots.txt, sitemap.xml, favicon)
├── src/
│   ├── assets/projects/<key>/  # per-project cover.jpg (4:3) + case-study screenshots (WebP)
│   ├── components/             # Header, Footer, FeaturedProject, Experience, ContactForm, …
│   ├── pages/                  # Home, Projects, CaseStudy, About, NotFound
│   ├── data.js                 # single source of truth for all portfolio content
│   ├── router.js               # minimal History API routing (no dependency)
│   ├── index.css               # design tokens + component classes
│   ├── App.jsx
│   └── main.jsx
├── index.html                  # document head, SEO metadata, JSON-LD
├── tailwind.config.js          # theme tokens (paper, ink, deep green accent, fonts)
├── vercel.json                 # SPA rewrite rules
└── vite.config.js
```

All copy, projects, experience, education and certifications live in **`src/data.js`** —
update content there without touching components. To set a featured project's card image,
add `src/assets/projects/<key>/cover.jpg` (or `cover.webp`) at 4:3; until then the first
screenshot is used.

---

## 🎨 Design

A light, editorial system: warm paper (`#F5F2EC`), near-black ink (`#141414`), muted greys,
and one deep green accent (`#1E4D3A`) used sparingly. **Instrument Serif** for names and
titles, **Inter** for text, **JetBrains Mono** for small labels. Thin 1px rules instead of
boxed cards; no gradients, glow or glass effects. Tokens live in `tailwind.config.js` and
`src/index.css`.

---

## ☁️ Deployment

Deployed on **Vercel** as a static SPA. `vercel.json` rewrites extensionless routes
(`/projects`, `/projects/<key>`, `/about`) to `/` so client-side routing works, while `robots.txt`, `sitemap.xml` and the Google verification file are served
directly. On Vercel, set the project's **Root Directory** to the repository root.

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact

- **Email:** syedibrahimali1111@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/syed-ibrahim-ali-sia/
- **GitHub:** https://github.com/ibrahim123-sia
