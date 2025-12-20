import React from 'react';
import { MessageCircle } from 'lucide-react';
import { portfolioData } from '../data';

const WhatsAppFloat = () => {
  const phoneNumber = portfolioData.personalInfo.phone.replace(/\D/g, ''); // Remove non-digits
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20${encodeURIComponent(portfolioData.personalInfo.name.split(' ')[0])}!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bottom-1/2 translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
        <span className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45"></span>
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-0 animate-ping group-hover:opacity-20"></span>
    </a>
  );
};

export default WhatsAppFloat;