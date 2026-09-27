import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

const navItems = ['Home', 'About', 'Projects', 'Services', 'Contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Elevate the header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface">
              <span className="font-display text-sm font-semibold text-content">SIA</span>
            </div>
            <div className="leading-tight">
              <span className="block font-display text-sm font-semibold text-content">
                {portfolioData.personalInfo.name}
              </span>
              <span className="block text-xs text-faint">
                {portfolioData.personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-content' : 'text-muted hover:text-content'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-lg bg-surface-2 ring-1 ring-line" />
                  )}
                  {item}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-3 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink transition-all hover:bg-accent-hover"
            >
              Let's talk
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:text-content md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 animate-fade-in rounded-2xl border border-line bg-surface p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-medium text-muted transition-colors hover:bg-surface-2 hover:text-content"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-full bg-accent px-4 py-3 text-center font-semibold text-accent-ink"
              >
                Let's talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
