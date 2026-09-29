import React from 'react';
import { Github, Linkedin, Mail, Youtube, Briefcase, ArrowUp } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';
import { portfolioData } from '../data';

const navItems = ['Home', 'About', 'Projects', 'Services', 'Contact'];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;

  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: personalInfo.youtube, label: 'YouTube' },
    { icon: SiUpwork, href: personalInfo.upwork, label: 'Upwork' },
    { icon: Briefcase, href: personalInfo.portfolio8x, label: '8x Careers' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-line">
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface">
              <span className="font-display text-sm font-semibold text-content">
                SIA
              </span>
            </div>
            <span className="font-display text-lg font-semibold text-content">
              {personalInfo.name}
            </span>
          </a>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-faint">
            {personalInfo.title} — {personalInfo.tagline}.
          </p>

          {/* Quick links */}
          <nav className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-underline text-sm text-muted hover:text-content"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="mt-7 flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="icon-btn"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-faint">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-faint transition-colors hover:text-content"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
