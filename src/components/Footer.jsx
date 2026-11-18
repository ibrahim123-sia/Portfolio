import React from 'react';
import { Github, Linkedin, Mail, Youtube, Briefcase, BadgeCheck } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';
import { portfolioData } from '../data';
import Link from './Link';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;

  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: personalInfo.youtube, label: 'YouTube' },
    { icon: SiUpwork, href: personalInfo.upwork, label: 'Upwork' },
    { icon: Briefcase, href: personalInfo.portfolio8x, label: '8x Careers' },
    { icon: BadgeCheck, href: personalInfo.hiringmine, label: 'HiringMine' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-line">
      <div className="page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-[15px] font-bold text-content">{personalInfo.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {personalInfo.title}. {personalInfo.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm text-muted hover:text-content">
              {item.label}
            </Link>
          ))}
        </nav>

        <ul className="flex flex-wrap gap-2">
          {socials.map(({ icon, href, label }) => {
            const Icon = icon;
            return (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="icon-btn h-10 w-10"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="page">
        <p className="border-t border-line py-6 text-sm text-faint">
          © {currentYear} {personalInfo.name}. {personalInfo.location}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
