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
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-colors hover:bg-emerald-700 hover:text-white sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppFloat;
