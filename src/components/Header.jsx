import React, { useState } from 'react';
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
  const { location } = useRouter();

  // "Work" stays current on case study pages too
  const isActive = (to) =>
    !to.includes('#') && (location.path === to || location.path.startsWith(`${to}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="page flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-2xl leading-none text-ink">
          {portfolioData.personalInfo.name}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? 'page' : undefined}
              className="link-quiet text-[15px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 p-2 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-rule md:hidden">
          <ul className="page divide-y divide-rule">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                  className="block py-4 font-serif text-3xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
