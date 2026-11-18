import React from 'react';
import { Icon } from './Icons';
import { portfolioData } from '../data';

const WhatsAppFloat = () => {
  const { personalInfo } = portfolioData;
  const firstName = personalInfo.name.split(' ')[0];
  const message = `Hi ${firstName}! I saw your portfolio and would like to discuss a project.`;

  // Phones: a round icon (the page has matching bottom padding, see .shell).
  // From 768px: a labelled button.
  return (
    <a
      href={`${personalInfo.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa"
    >
      <Icon name="whatsapp" size={20} />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
