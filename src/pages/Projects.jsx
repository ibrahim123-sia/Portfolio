import React, { useState, useMemo, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

// Case-study modal is only needed on click — load it on demand.
const ProjectModal = lazy(() => import('../components/ProjectModal'));

// How many projects to show before the "Show more" reveal.
const INITIAL_VISIBLE = 4;

// Filter labels per category, in the order they should appear.
const filterMeta = [
  { id: 'ai_ml', label: 'AI / ML' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'fullstack', label: 'Web Apps' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Only offer filters for categories that actually have projects.
  const filters = useMemo(() => {
    const present = new Set(portfolioData.projects.map((p) => p.category));
    return [
      { id: 'all', label: 'All Projects' },
      ...filterMeta.filter((f) => present.has(f.id)),
    ];
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filteredProjects.length - visibleProjects.length;

  const selectFilter = (id) => {
    setActiveFilter(id);
    setShowAll(false);
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects at the intersection of AI & the web"
          subtitle="A selection of systems where intelligent features meet solid full-stack engineering. Open any project for a full case study."
        />

        {/* Filters */}
        <Reveal className="mb-14 flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => selectFilter(filter.id)}
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

        {/* Alternating rows */}
        <div className="space-y-16 md:space-y-24">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.id}>
              <ProjectCard
                project={project}
                reversed={i % 2 === 1}
                onOpen={setActiveProject}
              />
            </Reveal>
          ))}
        </div>

        {/* Show more / less */}
        {filteredProjects.length > INITIAL_VISIBLE && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="btn-secondary group"
            >
              {showAll ? 'Show less' : `Show ${hiddenCount} more project${hiddenCount === 1 ? '' : 's'}`}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Case-study modal */}
      <AnimatePresence>
        {activeProject && (
          <Suspense fallback={null}>
            <ProjectModal
              project={activeProject}
              onClose={() => setActiveProject(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
