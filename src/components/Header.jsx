import React, { useEffect, useState } from 'react';
import Link from './Link';
import { Icon } from './Icons';
import { useRouter } from '../router';
import { portfolioData } from '../data';

const nav = [
  { to: '/', label: 'Home', section: 'home' },
  { to: '/projects', label: 'Work', section: 'work' },
  { to: '/services', label: 'Services', section: 'services' },
  { to: '/about', label: 'About', section: 'about' },
];

// Which menu item a path belongs to: project pages count as Work
const sectionOf = (path) => {
  if (path === '/') return 'home';
  if (path.startsWith('/projects')) return 'work';
  return path.slice(1);
};

const Header = () => {
  const { location } = useRouter();
  const { personalInfo } = portfolioData;
  const current = sectionOf(location.path);
  const [solid, setSolid] = useState(false);

  // A hairline under the bar once the page scrolls
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top${solid ? ' solid' : ''}`}>
      <div className="wrap">
        <Link className="brand" to="/">
          {personalInfo.name}
        </Link>
        <nav className="menu" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={current === item.section ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gh"
            aria-label="GitHub profile"
          >
            <Icon name="github" size={20} />
          </a>
          <Link
            to="/contact"
            className="hire"
            aria-current={current === 'contact' ? 'page' : undefined}
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
