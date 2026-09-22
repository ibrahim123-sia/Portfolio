import React, { useState } from 'react';
import { portfolioData } from '../data';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai_ml', label: 'AI / ML' },
  { id: 'fullstack', label: 'Full Stack' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects at the intersection of AI & the web"
          subtitle="A selection of systems where intelligent features meet solid full-stack engineering."
        />

        {/* Filters */}
        <Reveal className="mb-10 flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-accent text-accent-ink'
                  : 'border border-line text-muted hover:border-line-strong hover:text-content'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.09}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
