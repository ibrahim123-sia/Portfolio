import React, { useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { RouterProvider } from './components/Link';
import { useRouter } from './router';
import Home from './pages/Home';
import Projects from './pages/Projects';
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
      'Selected work by Syed Ibrahim Ali: Propel, AtriumDesk, Nowhere, Acadex and Pairly, plus smaller AI and full-stack projects.',
  },
  '/about': {
    Page: About,
    title: 'About | Syed Ibrahim Ali',
    description:
      'About Syed Ibrahim Ali, AI Engineer & Full-Stack Developer: skills, education at Muhammad Ali Jinnah University and certifications.',
  },
};

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const Routes = () => {
  const { location } = useRouter();
  const route = routes[location.path];

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
    const id = location.hash.slice(1);
    if (id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.path, location.hash, location.key]);

  const Page = route ? route.Page : NotFound;
  return <Page />;
};

function App() {
  return (
    <RouterProvider>
      <LazyMotion features={domAnimation}>
        <div className="flex min-h-screen flex-col bg-bg font-sans text-muted">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
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
      </LazyMotion>
    </RouterProvider>
  );
}

export default App;
