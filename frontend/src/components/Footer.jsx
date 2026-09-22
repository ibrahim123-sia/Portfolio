import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data';

const navItems = ['Home', 'About', 'Projects', 'Services', 'Contact'];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;

  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-line">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface">
                <span className="font-display text-sm font-semibold text-content">SIA</span>
              </div>
              <span className="font-display text-lg font-semibold text-content">
                {personalInfo.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-faint">
              {personalInfo.title} — {personalInfo.tagline}.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="mb-4 text-sm font-semibold text-content">Navigate</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="link-underline inline-block text-sm text-faint hover:text-content"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:justify-self-end">
            <h4 className="mb-4 text-sm font-semibold text-content">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-all hover:border-line-strong hover:text-content"
                >
                  <Icon className="h-5 w-5" />
                </a>
                );
              })}
            </div>
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
