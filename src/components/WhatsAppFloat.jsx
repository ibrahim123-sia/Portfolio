import React from 'react';
import { MessageCircle } from 'lucide-react';
import { portfolioData } from '../data';

const WhatsAppFloat = () => {
  const phoneNumber = portfolioData.personalInfo.phone.replace(/\D/g, '');
  const firstName = portfolioData.personalInfo.name.split(' ')[0];
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20${encodeURIComponent(
    firstName
  )}!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 border border-accent bg-accent px-3.5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-ink hover:bg-ink sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
