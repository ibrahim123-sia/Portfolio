import React from 'react';
import { Cpu, Code, Database, Brain } from 'lucide-react';
import { portfolioData } from '../data';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I provide comprehensive solutions that bridge traditional web development 
            with cutting-edge AI technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {portfolioData.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">1. Planning</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Requirement analysis and architecture design
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">2. Development</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Agile development with clean, maintainable code
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">3. AI Integration</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Implementing intelligent features and models
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">4. Deployment</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Testing, optimization, and production deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;