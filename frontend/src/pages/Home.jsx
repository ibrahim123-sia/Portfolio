import React from 'react';
import { ArrowRight, Code, Cpu, Database } from 'lucide-react';
import { portfolioData } from '../data';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
              <span className="text-sm font-medium">MERN Stack Developer & AI/ML Enthusiast</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-primary-600 dark:text-primary-400">
                {portfolioData.personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {portfolioData.personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Tech Stack */}
          <div className="animate-slide-up">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                Tech Stack
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Frontend</h4>
                    <p className="text-gray-600 dark:text-gray-400">React, Tailwind, JavaScript</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Backend</h4>
                    <p className="text-gray-600 dark:text-gray-400">Node.js, Express, MongoDB</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">AI/ML</h4>
                    <p className="text-gray-600 dark:text-gray-400">TensorFlow, OpenCV, Python</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;