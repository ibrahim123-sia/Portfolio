import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';
import Link from './Link';
import { useRouter } from '../router';

const navItems = [
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouter();

  // Add a hairline border once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to) => !to.includes('#') && location.path === to;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg/90 backdrop-blur transition-colors ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-content hover:text-content">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong text-xs font-bold">
            SIA
          </span>
          <span className="text-[15px] font-bold">{portfolioData.personalInfo.name}</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? 'page' : undefined}
              className={`rounded-lg px-3.5 py-2 text-[15px] font-medium ${
                isActive(item.to) ? 'text-content' : 'text-muted hover:text-content'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 rounded-lg p-2 text-muted hover:text-content md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="page animate-fade-in border-t border-line pb-4 pt-2 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              aria-current={isActive(item.to) ? 'page' : undefined}
              className={`block rounded-lg px-2 py-3 text-base font-medium ${
                isActive(item.to) ? 'text-content' : 'text-muted hover:text-content'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
