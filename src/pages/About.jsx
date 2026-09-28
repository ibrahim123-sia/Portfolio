import React, { Suspense, lazy } from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data';
import SkillCard from '../components/SkillCard';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';

// GitHub activity is below the fold and pulls a heavy calendar chunk — defer it.
const GitHubStats = lazy(() => import('../components/GitHubStats'));

// Split a stat value into its number and trailing symbol (e.g. "5+" → "5" / "+")
const splitStat = (value) => {
  const match = String(value).match(/^([\d.]+)(.*)$/);
  return match ? { num: match[1], sym: match[2] } : { num: value, sym: '' };
};

const About = () => {
  const { personalInfo, skillGroups, experience, education, stats } = portfolioData;

  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="About Me"
          icon={User}
          title="Engineering intelligent, production-grade systems"
          subtitle="Bridging modern AI tooling with a full-stack foundation to ship solutions that hold up in the real world."
        />

        {/* Headline stats — big number + accent symbol (reference style) */}
        <Reveal className="mb-14 grid grid-cols-2 gap-8 border-y border-line py-8 sm:grid-cols-4">
          {stats.map((stat) => {
            const { num, sym } = splitStat(stat.value);
            return (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold tracking-tight text-content sm:text-5xl">
                  <CountUp to={Number(num)} />
                  {sym && <span className="text-accent">{sym}</span>}
                </div>
                <div className="mt-1.5 text-sm text-faint">{stat.label}</div>
              </div>
            );
          })}
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left — narrative + skills */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal className="card rounded-2xl p-8">
              <h3 className="mb-5 font-display text-xl font-bold text-content">
                Who I Am
              </h3>
              <div className="space-y-4 leading-relaxed text-muted">
                {personalInfo.about.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="card rounded-2xl p-8" delay={0.08}>
              <h3 className="mb-6 font-display text-xl font-bold text-content">
                Skills & Expertise
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillCard key={group.key} group={group} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — experience & education */}
          <div className="space-y-6">
            <Reveal className="card rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-content" />
                <h3 className="font-display text-xl font-bold text-content">
                  Experience
                </h3>
              </div>
              <div className="space-y-7">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative border-l border-line pl-6"
                  >
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent" />
                    <h4 className="font-semibold text-content">{exp.title}</h4>
                    <p className="text-sm text-content">{exp.company}</p>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-faint">
                      <span>{exp.period}</span>
                      {exp.type && (
                        <>
                          <span className="text-faint">•</span>
                          <span>{exp.type}</span>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="card rounded-2xl p-8" delay={0.08}>
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-content" />
                <h3 className="font-display text-xl font-bold text-content">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative border-l border-line pl-6"
                  >
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent" />
                    <h4 className="font-semibold text-content">{edu.degree}</h4>
                    <p className="text-sm text-content">{edu.institution}</p>
                    <p className="mt-0.5 text-xs text-faint">{edu.year}</p>
                    {edu.cgpa && (
                      <p className="mt-2 text-sm text-muted">
                        <span className="font-semibold text-muted">CGPA:</span>{' '}
                        {edu.cgpa}
                      </p>
                    )}
                    {edu.award && (
                      <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                        <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted" />
                        <span>{edu.award}</span>
                      </p>
                    )}
                    {edu.coursework && (
                      <p className="mt-2 text-xs leading-relaxed text-faint">
                        <span className="font-semibold text-muted">
                          Coursework:
                        </span>{' '}
                        {edu.coursework}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* GitHub activity */}
        <Reveal className="mt-8">
          <Suspense fallback={null}>
            <GitHubStats />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
