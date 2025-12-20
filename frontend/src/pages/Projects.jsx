import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { portfolioData } from '../data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai_ml', label: 'AI/ML' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects that showcase the intersection of web development 
            and artificial intelligence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {portfolioData.projects.length}+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              15+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Technologies Used
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              100%
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;