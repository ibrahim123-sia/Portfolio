import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data';
import Link from '../components/Link';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

// One labelled row on the page grid
const Row = ({ label, children }) => (
  <Reveal className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
    <h2 className="label md:col-span-3">{label}</h2>
    <div className="md:col-span-9">{children}</div>
  </Reveal>
);

const About = () => {
  const { personalInfo, skillGroups, education, certifications } = portfolioData;

  return (
    <section aria-labelledby="about-title" className="page pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading as="h1" id="about-title" eyebrow={personalInfo.title} title="About" />

      <Reveal className="mt-10 md:grid md:grid-cols-12 md:gap-8">
        <div className="space-y-6 text-xl leading-relaxed md:col-span-8 md:col-start-4 lg:text-2xl lg:leading-snug">
          {personalInfo.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] md:col-span-9 md:col-start-4">
          <Link to="/#experience" className="link">
            Experience
          </Link>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="link">
            Resume (PDF)
          </a>
        </p>
      </Reveal>

      <div className="mt-16">
        <Row label="Skills">
          <dl className="divide-y divide-rule">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[160px_1fr] sm:gap-6">
                <dt className="text-[15px] font-medium">{group.title}</dt>
                <dd className="text-[15px] leading-relaxed text-muted">{group.skills.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Row>

        <Row label="Education">
          <h3 className="display text-4xl">{education.degree}</h3>
          <p className="mt-2 text-lg">{education.institution}</p>
          <p className="label mt-2">{education.period}</p>
          <dl className="mt-6 grid gap-6 border-t border-rule pt-6 sm:grid-cols-3">
            <div>
              <dt className="label">CGPA</dt>
              <dd className="mt-2 text-[15px]">{education.cgpa}</dd>
            </div>
            <div>
              <dt className="label">Honours</dt>
              <dd className="mt-2 text-[15px]">{education.honours}</dd>
            </div>
            <div>
              <dt className="label">Final year project</dt>
              <dd className="mt-2 text-[15px]">{education.project}</dd>
            </div>
          </dl>
        </Row>

        <Row label="Certifications">
          <ul className="divide-y divide-rule">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 first:pt-0">
                <div>
                  <h3 className="text-[15px] font-medium">{cert.name}</h3>
                  <p className="mt-1 text-[15px] text-muted">{cert.issuer}</p>
                </div>
                <p className="label flex items-center gap-4">
                  {cert.date}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.name}`}
                      className="link inline-flex items-center gap-1 text-ink"
                    >
                      Verify
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </section>
  );
};

export default About;
