import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-primary-500 dark:hover:border-primary-400">
      {/* Icon */}
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;