import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Bot, Boxes } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
} from 'react-icons/si';
import { m as Motion, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data';

const techStrip = [
  { name: 'Agentic AI', Icon: Bot },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'FastAPI', Icon: SiFastapi },
  { name: 'RAG', Icon: Boxes },
  { name: 'MongoDB', Icon: SiMongodb },
];

const Home = () => {
  const { personalInfo } = portfolioData;
  const reduce = useReducedMotion();

  // Slide-only entrance (no opacity fade) so prerendered HTML paints content
  // immediately — an opacity:0 initial would render invisible in the static HTML.
  const item = (delay) =>
    reduce
      ? {}
      : {
          initial: { y: 16 },
          animate: { y: 0 },
          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
        };

  return (
    <section id="home" className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-16 pb-16 sm:pt-20">
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
              AI Engineer &amp;<br className="hidden sm:block" />{' '}
              <span className="text-accent">Full-Stack</span> Developer
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
                alt={`${personalInfo.name} — ${personalInfo.title}`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="400"
                height="400"
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

        {/* Tech strip — continuously scrolling icon marquee */}
        <Motion.div
          {...item(0.4)}
          className="mt-16 border-t border-line pt-8"
        >
          {reduce ? (
            // Reduced motion — static, centered, no scroll
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {techStrip.map((tech) => (
                <li
                  key={tech.name}
                  title={tech.name}
                  className="flex items-center gap-2.5 text-faint"
                >
                  <tech.Icon className="h-7 w-7" aria-hidden="true" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="group relative overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
              }}
            >
              <ul
                className="flex w-max items-center gap-14 animate-marquee-ltr group-hover:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {[...techStrip, ...techStrip].map((tech, i) => (
                  <li
                    key={`${tech.name}-${i}`}
                    title={tech.name}
                    className="flex shrink-0 items-center gap-2.5 text-faint transition-colors hover:text-accent"
                  >
                    <tech.Icon className="h-7 w-7" aria-hidden="true" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
              {/* Accessible, static list for screen readers */}
              <ul className="sr-only">
                {techStrip.map(({ name }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </Motion.div>
      </div>
    </section>
  );
};

export default Home;
