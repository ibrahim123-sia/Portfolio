import React, { Suspense, lazy, useEffect, useLayoutEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { RouterProvider } from './components/Link';
import { useRouter } from './router';
import { portfolioData } from './data';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Services from './pages/Services';
import About from './pages/About';
import NotFound from './pages/NotFound';

// The contact page pulls in EmailJS, so it loads on demand
const Contact = lazy(() => import('./pages/Contact'));

const SITE = 'https://syedibrahimali.vercel.app';
const OG_IMAGE = `${SITE}/og-image.jpg`;

// Per-page title and description (the home values match index.html)
const routes = {
  '/': {
    Page: Home,
    title: 'Syed Ibrahim Ali | AI Engineer & Full-Stack Developer',
    description:
      'Syed Ibrahim Ali, AI Engineer & Full-Stack Developer in Karachi. Building business solutions with agentic AI and automation: AI agents, RAG assistants, GoHighLevel AI and full-stack products.',
  },
  '/projects': {
    Page: Projects,
    title: 'Work | Syed Ibrahim Ali',
    description:
      'Seventeen projects by Syed Ibrahim Ali, grouped by the problem they solve: AI agents, assistants that answer from your data, platforms, dashboards, online stores and smaller AI tools.',
  },
  '/services': {
    Page: Services,
    title: 'Services | Syed Ibrahim Ali',
    description:
      'AI agents, RAG assistants that answer from your data, GoHighLevel AI setup and full products, built by Syed Ibrahim Ali, AI Engineer & Full-Stack Developer in Karachi.',
  },
  '/about': {
    Page: About,
    title: 'About | Syed Ibrahim Ali',
    description:
      'About Syed Ibrahim Ali, AI Engineer & Full-Stack Developer in Karachi: experience at Co-Ventech and YES! Automotive, BS Computer Science at Muhammad Ali Jinnah University, certifications and tools.',
  },
  '/contact': {
    Page: Contact,
    title: 'Contact | Syed Ibrahim Ali',
    description:
      'Contact Syed Ibrahim Ali, AI Engineer & Full-Stack Developer in Karachi, by email, WhatsApp, Upwork or LinkedIn.',
  },
};

const absolute = (src) => (src ? new URL(src, SITE).href : OG_IMAGE);

// Structured data for one project page
const projectJsonLd = (project, url) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: project.name,
  alternateName: project.title,
  description: project.summary,
  url,
  image: absolute(project.image),
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  dateCreated: String(project.year),
  keywords: project.stack.join(', '),
  sameAs: [project.github, project.live].filter(Boolean),
  author: { '@type': 'Person', '@id': `${SITE}/#person`, name: portfolioData.personalInfo.name, url: `${SITE}/` },
});

// /projects/<key> is a project page
const resolveRoute = (path) => {
  if (routes[path]) return routes[path];
  const match = path.match(/^\/projects\/([\w-]+)$/);
  const project = match && portfolioData.projects.find((p) => p.key === match[1]);
  if (!project) return null;
  return {
    Page: CaseStudy,
    props: { project },
    project,
    title: `${project.name}: ${project.title} | Syed Ibrahim Ali`,
    description: project.summary,
    image: absolute(project.image),
  };
};

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const Routes = () => {
  const { location } = useRouter();
  const route = useMemo(() => resolveRoute(location.path), [location.path]);

  // Keep the document head in sync with the current page
  useEffect(() => {
    const title = route ? route.title : 'Page not found | Syed Ibrahim Ali';
    const url = `${SITE}${location.path === '/' ? '/' : location.path}`;
    const image = route?.image || OG_IMAGE;
    document.title = title;
    if (route) {
      setMeta('meta[name="description"]', 'content', route.description);
      setMeta('meta[property="og:description"]', 'content', route.description);
      setMeta('meta[name="twitter:description"]', 'content', route.description);
    }
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:image"]', 'content', image);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[name="robots"]', 'content', route ? 'index, follow' : 'noindex');

    if (!route?.project) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(projectJsonLd(route.project, url));
    document.head.appendChild(script);
    return () => script.remove();
  }, [route, location.path]);

  // Every page change starts at the top, unless the link points at a #section
  // or asked to keep the scroll position
  useLayoutEffect(() => {
    if (!location.scroll) return;
    const id = location.hash.slice(1);
    if (id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.path, location.search, location.hash, location.key, location.scroll]);

  if (!route) return <NotFound />;
  const { Page, props } = route;
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Page key={location.path} {...props} />
    </Suspense>
  );
};

function App() {
  return (
    <RouterProvider>
      <div className="shell">
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Routes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </RouterProvider>
  );
}

export default App;
