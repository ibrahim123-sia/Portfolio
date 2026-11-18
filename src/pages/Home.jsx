import React, { useState } from 'react';
import { ArrowRight, Bot, FileSearch, Workflow, Layers } from 'lucide-react';
import { portfolioData } from '../data';
import Link from '../components/Link';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import FeaturedProject from '../components/FeaturedProject';
import CaseStudy from '../components/CaseStudy';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';

const buildIcons = {
  agent: Bot,
  rag: FileSearch,
  automation: Workflow,
  fullstack: Layers,
};

const Hero = () => {
  const { personalInfo } = portfolioData;
  // Keep "Full-Stack" on one line so the hyphen never breaks on phones.
  const [beforeTerm, afterTerm] = personalInfo.title.split('Full-Stack');

  return (
    <section aria-labelledby="hero-title" className="page pb-20 pt-12 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-lg font-medium text-muted">{personalInfo.name}</p>
          <h1
            id="hero-title"
            className="mt-3 max-w-3xl text-[2.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-content sm:text-5xl lg:text-[3.5rem]"
          >
            {beforeTerm}
            <span className="whitespace-nowrap">Full-Stack</span>
            {afterTerm}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {personalInfo.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/#work" className="btn-primary">
              View work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/#contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src="/Mypic.jpg"
            alt={`Portrait of ${personalInfo.name}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="320"
            height="320"
            className="h-24 w-24 rounded-full border border-line-strong object-cover sm:h-28 sm:w-28 lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
};

const FeaturedWork = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="work" aria-labelledby="work-title" className="section border-t border-line">
      <div className="page">
        <SectionHeading
          eyebrow="Selected work"
          id="work-title"
          title="Featured projects"
          subtitle="Products I designed and built end to end. Open any project for screenshots and details."
          action={
            <Link to="/projects" className="text-link">
              All projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="space-y-6 sm:space-y-8">
          {portfolioData.featuredProjects.map((project, i) => (
            <Reveal key={project.key}>
              <FeaturedProject project={project} index={i} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>
      <CaseStudy project={active} onClose={() => setActive(null)} />
    </section>
  );
};

const WhatIBuild = () => (
  <section aria-labelledby="build-title" className="section border-t border-line">
    <div className="page">
      <SectionHeading id="build-title" eyebrow="Services" title="What I build" />
      <Reveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioData.whatIBuild.map((item) => {
          const Icon = buildIcons[item.icon];
          return (
            <li key={item.title} className="card p-6">
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-content">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.description}</p>
            </li>
          );
        })}
      </Reveal>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="section border-t border-line">
    <div className="page">
      <SectionHeading
        eyebrow="Contact"
        id="contact-title"
          title="Let's work together"
        subtitle="Tell me about your project or role. I usually reply within a day."
      />
      <Reveal>
        <ContactForm />
      </Reveal>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <FeaturedWork />
    <section id="experience" aria-labelledby="experience-title" className="section border-t border-line">
      <div className="page">
        <SectionHeading id="experience-title" eyebrow="Career" title="Experience" />
        <Experience />
      </div>
    </section>
    <WhatIBuild />
    <Contact />
  </>
);

export default Home;
