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
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg transition-all duration-300 hover:bg-emerald-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-line bg-black/90 px-3 py-2 text-sm text-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFloat;
