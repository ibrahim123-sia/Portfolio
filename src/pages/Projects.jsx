import React, { useState } from 'react';
import { portfolioData } from '../data';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import CaseStudy from '../components/CaseStudy';

const Projects = () => {
  const [active, setActive] = useState(null);
  const { featuredProjects, moreProjects } = portfolioData;

  return (
    <>
      <section aria-labelledby="projects-title" className="page pb-20 pt-12 sm:pb-24 sm:pt-16">
        <SectionHeading
          as="h1"
          id="projects-title"
          eyebrow="Work"
          title="Projects"
          subtitle="AI products and full-stack apps I designed and built. The five below are my best work; smaller projects follow."
        />
        <div className="space-y-6 sm:space-y-8">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.key}>
              <FeaturedProject project={project} index={i} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="more-title" className="section border-t border-line">
        <div className="page">
          <SectionHeading id="more-title" eyebrow="More work" title="Smaller projects" />
          <Reveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moreProjects.map((project) => (
              <li key={project.key}>
                <ProjectCard project={project} />
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <CaseStudy project={active} onClose={() => setActive(null)} />
    </>
  );
};

export default Projects;
