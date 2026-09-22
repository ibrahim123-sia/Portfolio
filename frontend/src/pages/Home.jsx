import React from 'react';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data';

const Home = () => {
  const { personalInfo } = portfolioData;
  const reduce = useReducedMotion();

  const item = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
        };

  const meta = [
    { label: 'Currently', value: 'AI Engineer' },
    { label: 'Focus', value: 'Agentic AI & automation' },
    { label: 'Based in', value: personalInfo.location },
  ];

  return (
    <section id="home" className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-20 sm:pt-40">
        {/* Hero */}
        <div className="flex flex-col gap-6">
          <Motion.span {...item(0)} className="badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-on" />
            Available for work
          </Motion.span>

          <Motion.h1
            {...item(0.08)}
            className="max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-content"
          >
            I build AI-driven business platforms.
          </Motion.h1>

          <Motion.p
            {...item(0.16)}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            AI Engineer & Full-Stack Developer working on large platforms,
            automation systems, and retrieval-based AI products — from the model
            layer down to the architecture that runs it.
          </Motion.p>

          <Motion.div {...item(0.24)} className="mt-3 flex flex-wrap items-center gap-3.5">
            <a href="#projects" className="btn-primary group">
              View work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </Motion.div>
        </div>

        {/* Meta cards */}
        <Motion.div
          {...item(0.34)}
          className="mt-20 grid gap-5 sm:grid-cols-3"
        >
          {meta.map((m) => (
            <div key={m.label} className="card flex flex-col gap-2 p-7">
              <span className="text-sm text-faint">{m.label}</span>
              <span className="text-lg font-medium text-content">{m.value}</span>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Home;
