import React from 'react';
import Cta from '../components/Cta';
import { portfolioData } from '../data';
import { useKarachiTime } from '../useKarachiTime';

const About = () => {
  const { personalInfo, experience, education, certifications, skillGroups } = portfolioData;
  const time = useKarachiTime();

  return (
    <>
      <div className="wrap">
        <header className="ah">
          <div>
            <h1 className="h">About</h1>
            {personalInfo.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <figure className="me">
            <img src="/Mypic.jpg" alt={personalInfo.name} width="460" height="460" />
            <figcaption>
              <b>{personalInfo.name}</b>
              <span>{time ? `Karachi, ${time} now (UTC+5)` : 'Karachi, UTC+5'}</span>
            </figcaption>
          </figure>
        </header>

        <section className="sec" style={{ paddingTop: 40 }}>
          <div className="sh">
            <h2 className="h">Experience</h2>
            <p>Newest first.</p>
          </div>
          {experience.map((job) => (
            <div key={job.company} className="job">
              <div>
                <h3>{job.company}</h3>
                <p className="meta">
                  {job.companyNote ? `${job.companyNote}. ` : ''}
                  {job.location}. {job.type}.
                </p>
              </div>
              <div>
                {job.roles.map((role) => (
                  <p key={role.title} className="role">
                    {role.title}
                    <span>{role.period}</span>
                  </p>
                ))}
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="trio">
            <div>
              <h3>Education</h3>
              <p className="big">{education.degree}</p>
              <p>{education.institution}</p>
              <p className="soft">{education.period}</p>
              <p>CGPA {education.cgpa}</p>
            </div>
            <div>
              <h3>Honours</h3>
              <p className="big">Chancellor's Honour Roll</p>
              <p>Fall 2023 and Spring 2024, for outstanding academic performance.</p>
              <p className="soft">Final year project: {education.project}</p>
            </div>
            <div>
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <b>{cert.name}</b>
                    <small>
                      {cert.issuer}, {cert.date}
                      {cert.url && (
                        <>
                          .{' '}
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            Verify
                          </a>
                        </>
                      )}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="sh">
            <h2 className="h">Tools I use</h2>
            <p />
          </div>
          <div className="skills">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <div className="stackrow">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
};

export default About;
