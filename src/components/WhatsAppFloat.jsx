import React from 'react';
import { MessageCircle } from 'lucide-react';
import { portfolioData } from '../data';

const WhatsAppFloat = () => {
  const phoneNumber = portfolioData.personalInfo.phone.replace(/\D/g, '');
  const firstName = portfolioData.personalInfo.name.split(' ')[0];
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20${encodeURIComponent(
    firstName
  )}!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  // Phones: a small round icon kept clear of the home indicator (the page has
  // matching bottom padding in App). Tablet and up: a labelled button.
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-paper shadow-[0_1px_2px_rgba(20,20,20,0.2)] transition-colors hover:bg-ink md:bottom-6 md:right-6 md:h-auto md:w-auto md:rounded-none md:px-3.5 md:py-2.5 md:shadow-none"
    >
      <MessageCircle className="h-5 w-5 md:h-4 md:w-4" strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
