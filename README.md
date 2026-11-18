# Syed Ibrahim Ali — Portfolio

Personal portfolio of **Syed Ibrahim Ali**, an AI Engineer & Full-Stack Developer.
A fast React application in white, ink and one green, where real product screenshots
carry the colour, with a page for every project.

**Live:** https://syedibrahimali.vercel.app

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Pages** — Home, Work (`/projects`, filtered by problem with `?problem=act|answer|run|numbers|sell|tools`),
  a page per project at `/projects/<key>`, Services, About and Contact. A tiny History API
  router in `src/router.js` keeps per-page titles, descriptions, canonical links and Open
  Graph tags in sync, with no router dependency. Page changes fade with the View
  Transitions API where the browser supports it.
- **Home** — a 3D stack of three real screenshots that follows the pointer, six problem
  tiles, stacked cards for the five main products, a live GitHub section (repo count and
  repos from the public GitHub API, cached in `sessionStorage`, with static fallbacks in
  `data.js`, plus the contribution graph from `react-github-calendar`), and a replay of
  Iris, the shopping agent in Nowhere, with working Confirm, Not now and Replay buttons.
- **Project pages** — problem, what was built, features, stack, a screenshot gallery with a
  lightbox, and previous/next links. Projects without screenshots get a "cat README" preview.
- **Contact** — email with a copy button, an EmailJS form, WhatsApp, Upwork and LinkedIn.
- **Accessibility** — visible focus, alt text on every image, `aria-live` on the agent demo,
  and `prefers-reduced-motion` turns every animation off.
- **SEO-ready** — per-page metadata, JSON-LD `Person` (with `worksFor`, `alumniOf`,
  `knowsAbout`) and a `SoftwareApplication` entry on each project page, a static first paint
  that also serves as the crawler fallback, `sitemap.xml` and `robots.txt`.
- **Performance** — the header and hero paint from static HTML before React runs, hero fonts
  are preloaded, secondary pages and lower Home sections load on demand, and every
  screenshot also gets an 800px WebP copy at build time (vite-imagetools) served via `srcset`.

---

## 🛠️ Tech Stack

| Area        | Tools                                                        |
| ----------- | ----------------------------------------------------------- |
| Framework   | React 19, Vite 7                                            |
| Styling     | Tailwind CSS 3 (tokens) and plain CSS ported from the design |
| Fonts       | Sora, Manrope, JetBrains Mono (self-hosted via @fontsource) |
| Integrations| EmailJS (contact), GitHub REST API, react-github-calendar   |
| Tooling     | ESLint, PostCSS, Autoprefixer, sharp, vite-imagetools       |

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
├── public/                     # resume, Mypic.jpg, og-image.jpg, robots.txt, sitemap.xml, favicons
├── src/
│   ├── assets/projects/<key>/  # project screenshots (WebP)
│   ├── components/             # Header, Footer, Win (browser frame), GitHubSection, AgentDemo, Cta, …
│   ├── pages/                  # Home, Projects (Work), CaseStudy, Services, About, Contact, NotFound
│   ├── data.js                 # single source of truth for all portfolio content
│   ├── router.js               # minimal History API routing (no dependency)
│   ├── index.css               # design tokens and component styles
│   ├── App.jsx
│   └── main.jsx
├── index.html                  # document head, SEO metadata, JSON-LD, static first paint
├── tailwind.config.js          # colour and font tokens
├── vercel.json                 # SPA rewrite rules
└── vite.config.js
```

All copy, projects, experience, education and certifications live in **`src/data.js`** —
update content there without touching components. Each project lists the `problems` it
solves (the first is its group on the Work page). The static hero in `index.html` repeats
the Home hero text, so update both when that copy changes.

---

## 🎨 Design

White (`#FFFFFF`), ink (`#0E1111`) and one green (`#0E9F6E`, `#0B7A55` for text), with soft
panels (`#F4F5F3`). Each problem group has its own dot colour. **Sora** for headings,
**Manrope** for text, **JetBrains Mono** only in the agent demo and code previews. 3D is used
only on real product screens. Tokens live in `tailwind.config.js` and `src/index.css`.

---

## ☁️ Deployment

Deployed on **Vercel** as a static SPA. `vercel.json` rewrites extensionless routes
(`/projects`, `/projects/<key>`, `/services`, `/about`, `/contact`) to `/` so client-side routing works, while `robots.txt`, `sitemap.xml` and the Google verification file are served
directly. On Vercel, set the project's **Root Directory** to the repository root.

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact

- **Email:** syedibrahimali1111@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/syed-ibrahim-ali-sia/
- **GitHub:** https://github.com/ibrahim123-sia
