import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { RouterProvider } from './components/Link';
import { useRouter } from './router';
import { portfolioData } from './data';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import NotFound from './pages/NotFound';

const SITE = 'https://syedibrahimali.vercel.app';

// Per-page title and description (the home values match index.html).
const routes = {
  '/': {
    Page: Home,
    title: 'Syed Ibrahim Ali | AI Engineer & Full-Stack Developer',
    description:
      'Syed Ibrahim Ali, AI Engineer & Full-Stack Developer in Karachi. Building business solutions with agentic AI and automation: AI agents, RAG assistants, GoHighLevel AI and full-stack products.',
  },
  '/projects': {
    Page: Projects,
    title: 'Projects | Syed Ibrahim Ali',
    description:
      'Seventeen projects by Syed Ibrahim Ali: AI agents and assistants, SaaS platforms, data and analytics, e-commerce and developer tools.',
  },
  '/about': {
    Page: About,
    title: 'About | Syed Ibrahim Ali',
    description:
      'About Syed Ibrahim Ali, AI Engineer & Full-Stack Developer: skills, education at Muhammad Ali Jinnah University and certifications.',
  },
};

// /projects/<key> is a case study page
const resolveRoute = (path) => {
  if (routes[path]) return routes[path];
  const match = path.match(/^\/projects\/([\w-]+)$/);
  const project = match && portfolioData.projects.find((p) => p.key === match[1]);
  if (!project) return null;
  return {
    Page: CaseStudy,
    props: { project },
    title: `${project.name}: ${project.title} | Syed Ibrahim Ali`,
    description: project.summary,
  };
};

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const Routes = () => {
  const { location } = useRouter();
  const route = resolveRoute(location.path);

  // Keep the document head in sync with the current page.
  useEffect(() => {
    const title = route ? route.title : 'Page not found | Syed Ibrahim Ali';
    const url = `${SITE}${location.path === '/' ? '/' : location.path}`;
    document.title = title;
    if (route) {
      setMeta('meta[name="description"]', 'content', route.description);
      setMeta('meta[property="og:description"]', 'content', route.description);
      setMeta('meta[name="twitter:description"]', 'content', route.description);
    }
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[name="robots"]', 'content', route ? 'index, follow' : 'noindex');
  }, [route, location.path]);

  // Scroll to the #section in the URL, or to the top on a page change.
  useEffect(() => {
    if (!location.scroll) return;
    const id = location.hash.slice(1);
    if (id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.path, location.hash, location.key, location.scroll]);

  if (!route) return <NotFound />;
  const { Page, props } = route;
  return <Page key={location.path} {...props} />;
};

function App() {
  return (
    <RouterProvider>
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          <Routes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </RouterProvider>
  );
}

export default App;
