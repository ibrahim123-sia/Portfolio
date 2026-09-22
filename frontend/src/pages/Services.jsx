import React from 'react';
import { Lightbulb, Code2, Cpu, Rocket } from 'lucide-react';
import { portfolioData } from '../data';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const process = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'Understand the problem, users, and constraints before writing code.',
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'Agile development with clean, maintainable, well-tested code.',
  },
  {
    icon: Cpu,
    title: 'Integrate AI',
    description: 'Layer in agentic AI, RAG, and automation where it adds real value.',
  },
  {
    icon: Rocket,
    title: 'Ship & Iterate',
    description: 'Optimize, deploy, and keep it reliable after launch.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What I do"
          title="Services built around AI & full-stack delivery"
          subtitle="From agentic AI systems to the full-stack products they live in — end to end."
        />

        {/* Services grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <Reveal className="mb-12">
            <span className="eyebrow">How I work</span>
            <h3 className="mt-4 text-2xl font-semibold text-content">
              A simple, dependable process
            </h3>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-accent-soft text-accent-on">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-base font-semibold text-content">
                    {step.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
