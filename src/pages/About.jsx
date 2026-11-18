import React from 'react';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../data';
import Link from '../components/Link';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  const { personalInfo, skillGroups, education, certifications } = portfolioData;

  return (
    <>
      <section aria-labelledby="about-title" className="page pb-20 pt-12 sm:pb-24 sm:pt-16">
        <SectionHeading
          as="h1"
          id="about-title"
          eyebrow={personalInfo.title}
          title="About me"
        />
        <Reveal className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {personalInfo.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Reveal>
        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/#experience" className="text-link">
            See my experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="text-link">
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume (PDF)
          </a>
        </Reveal>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-title" className="section border-t border-line">
        <div className="page">
          <SectionHeading id="skills-title" title="Skills" />
          <Reveal as="dl" className="divide-y divide-line border-y border-line">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid gap-2 py-5 sm:grid-cols-[200px_1fr] sm:gap-10">
                <dt className="font-bold text-content">{group.title}</dt>
                <dd className="leading-relaxed text-muted">{group.skills.join(', ')}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Education and certifications */}
      <section aria-labelledby="education-title" className="section border-t border-line">
        <div className="page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="education-title" title="Education" />
            <Reveal className="card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-content">{education.degree}</h3>
              <p className="mt-1 text-[15px] text-muted">{education.institution}</p>
              <p className="mt-1 text-sm text-faint">{education.period}</p>
              <dl className="mt-6 space-y-3 text-[15px]">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-faint">CGPA</dt>
                  <dd className="font-medium text-content">{education.cgpa}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-faint">Honours</dt>
                  <dd className="font-medium text-content">{education.honours}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-faint">Final year project</dt>
                  <dd className="font-medium text-content">{education.project}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div>
            <SectionHeading id="certs-title" title="Certifications" />
            <Reveal as="ul" className="divide-y divide-line border-y border-line">
              {certifications.map((cert) => (
                <li key={cert.name} className="py-5">
                  <h3 className="font-bold text-content">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium"
                    >
                      Verify certificate
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
