import React from 'react';
import { portfolioData } from '../data';
import Link from '../components/Link';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import FeaturedProject from '../components/FeaturedProject';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section aria-labelledby="hero-title" className="page pb-6 pt-10 sm:pb-10 sm:pt-16">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-8">
          <p className="label">{personalInfo.title}</p>
          <h1
            id="hero-title"
            className="display mt-6 text-[4rem] leading-[0.92] sm:text-[6.5rem] lg:text-[8.5rem]"
          >
            {personalInfo.name}
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-snug sm:text-2xl">{personalInfo.tagline}</p>

          <p className="mt-8 max-w-2xl border-t border-rule pt-4 text-[15px] leading-relaxed text-muted">
            <span className="label mb-1 block text-ink">Currently</span>
            {personalInfo.currently}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/#work" className="btn-primary">
              View work
            </Link>
            <Link to="/#contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </Reveal>

        <Reveal className="md:col-span-4 md:pt-12">
          <figure className="max-w-[280px] border border-ink p-2 md:ml-auto md:max-w-none">
            <img
              src="/Mypic.jpg"
              alt={`Portrait of ${personalInfo.name}`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="460"
              height="460"
              className="aspect-square w-full object-cover grayscale-[15%]"
            />
            <figcaption className="label px-1 pb-1 pt-3">Karachi, Pakistan</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

const FeaturedWork = () => {
  const { projects } = portfolioData;
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="page py-16 sm:py-24">
      <SectionHeading
        id="work-title"
        eyebrow="01 / Selected work"
        title="Featured work"
        action={
          <Link to="/projects" className="link pb-2 text-[15px]">
            All {projects.length} projects
          </Link>
        }
      />
      <div className="mt-10">
        {featured.map((project, i) => (
          <FeaturedProject key={project.key} project={project} index={i} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

const WhatIBuild = () => (
  <section aria-labelledby="build-title" className="page py-16 sm:py-24">
    <SectionHeading id="build-title" eyebrow="03 / Services" title="What I build" />
    <ol className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
      {portfolioData.whatIBuild.map((item, i) => (
        <Reveal as="li" key={item.title} className="border-t border-rule py-8">
          <p className="label">{String(i + 1).padStart(2, '0')}</p>
          <h3 className="display mt-4 text-3xl">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
        </Reveal>
      ))}
    </ol>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <FeaturedWork />
    <section id="experience" aria-labelledby="experience-title" className="page py-16 sm:py-24">
      <SectionHeading id="experience-title" eyebrow="02 / Experience" title="Experience" />
      <div className="mt-10">
        <Experience />
      </div>
    </section>
    <WhatIBuild />
    <section id="contact" aria-labelledby="contact-title" className="page py-16 sm:py-24">
      <SectionHeading
        id="contact-title"
        eyebrow="04 / Contact"
        title="Let's work together"
        subtitle="Tell me about your project or role. I usually reply within a day."
      />
      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  </>
);

export default Home;
