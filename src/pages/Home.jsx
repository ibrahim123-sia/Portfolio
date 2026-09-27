import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data';

const techStrip = [
  'Agentic AI',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'FastAPI',
  'RAG',
  'MongoDB',
];

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

  return (
    <section id="home" className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-24 pb-16 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left — intro */}
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="flex flex-col gap-1">
              <Motion.p
                {...item(0.06)}
                className="flex items-center gap-1 text-2xl font-semibold text-content sm:text-3xl"
              >
                Hello
                <span className="text-accent">.</span>
              </Motion.p>
              <Motion.p
                {...item(0.12)}
                className="text-2xl font-medium text-muted sm:text-3xl"
              >
                I&rsquo;m {personalInfo.name}
              </Motion.p>
            </div>

            <Motion.h1
              {...item(0.18)}
              className="max-w-2xl text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-content"
            >
              AI Engineer &amp;<br className="hidden sm:block" /> Full-Stack Developer
            </Motion.h1>

            <Motion.p
              {...item(0.24)}
              className="max-w-xl text-lg leading-relaxed text-muted"
            >
              {personalInfo.bio}
            </Motion.p>

            <Motion.div
              {...item(0.3)}
              className="mt-3 flex flex-wrap items-center gap-3.5"
            >
              <a href="#projects" className="btn-primary group">
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download className="h-4 w-4" />
                My resume
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

          {/* Right — portrait with glow ring */}
          <Motion.div
            {...item(0.2)}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative aspect-square w-[min(78vw,400px)]">
              {/* Soft glow arc behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full opacity-80 blur-2xl"
                style={{
                  background:
                    'conic-gradient(from 160deg, rgba(76,141,255,0) 0deg, rgba(76,141,255,0.55) 120deg, rgba(139,180,255,0.15) 210deg, rgba(76,141,255,0) 340deg)',
                }}
              />
              {/* Crisp accent ring */}
              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-full border border-accent/40"
                style={{ boxShadow: '0 0 60px rgba(76,141,255,0.25)' }}
              />
              {/* Portrait */}
              <img
                src="/Mypic.jpg"
                alt={personalInfo.name}
                loading="eager"
                className="absolute rounded-full object-cover object-center shadow-2xl ring-1 ring-white/10"
                style={{
                  top: '1.75rem',
                  left: '1.75rem',
                  width: 'calc(100% - 3.5rem)',
                  height: 'calc(100% - 3.5rem)',
                }}
              />
            </div>
          </Motion.div>
        </div>

        {/* Tech strip */}
        <Motion.div
          {...item(0.4)}
          className="mt-16 border-t border-line pt-8"
        >
          <ul className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            {techStrip.map((tech) => (
              <li
                key={tech}
                className="text-sm font-medium text-faint transition-colors hover:text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
};

export default Home;
