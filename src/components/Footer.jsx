import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const links = [
    ['GitHub', personalInfo.github],
    ['LinkedIn', personalInfo.linkedin],
    ['Upwork', personalInfo.upwork],
    ['YouTube', personalInfo.youtube],
  ];

  return (
    <footer className="site">
      <div className="wrap">
        <span>{personalInfo.name}. AI Engineer in Karachi, Pakistan.</span>
        <nav aria-label="Elsewhere">
          {links.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
