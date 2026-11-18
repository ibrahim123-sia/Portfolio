import React from 'react';
import { portfolioData } from '../data';
import Link from './Link';

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;

  const profiles = [
    { label: 'GitHub', href: personalInfo.github },
    { label: 'LinkedIn', href: personalInfo.linkedin },
    { label: 'YouTube', href: personalInfo.youtube },
    { label: 'Upwork', href: personalInfo.upwork },
    { label: '8x Careers', href: personalInfo.portfolio8x },
    { label: 'HiringMine', href: personalInfo.hiringmine },
  ];

  return (
    <footer className="border-t border-ink">
      <div className="page grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="display text-4xl">{personalInfo.name}</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
            {personalInfo.title}. {personalInfo.tagline}
          </p>
          <a href={`mailto:${personalInfo.email}`} className="link mt-5 inline-block text-[15px]">
            {personalInfo.email}
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <p className="label">Pages</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {pages.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="label">Elsewhere</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[15px]">
            {profiles.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-quiet">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page">
        <p className="label flex flex-wrap justify-between gap-2 border-t border-rule py-6">
          <span>
            © {currentYear} {personalInfo.name}
          </span>
          <span>{personalInfo.location}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
