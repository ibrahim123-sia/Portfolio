import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Link from '../components/Link';
import { Icon } from '../components/Icons';
import { Win, ProblemChips } from '../components/Win';

// Below the fold: loaded as separate chunks so the hero renders sooner
const GitHubSection = lazy(() => import('../components/GitHubSection'));
const AgentDemo = lazy(() => import('../components/AgentDemo'));
import Cta from '../components/Cta';
import { portfolioData, problemList, problemColor, projectsFor } from '../data';

const { personalInfo, projects, experience } = portfolioData;
const byKey = Object.fromEntries(projects.map((p) => [p.key, p]));
const featured = ['propel', 'atriumdesk', 'nowhere', 'acadex', 'pairly'].map((k) => byKey[k]);
const totalCommits = featured.reduce((sum, p) => sum + (p.commits || 0), 0);

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Hero: three real screens in 3D that follow the pointer and slide in once */
const Hero = () => {
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const rigRef = useRef(null);
  const [entered, setEntered] = useState(false);

  const nowhere = byKey.nowhere;
  const iris = Math.max(0, nowhere.gallery.findIndex((g) => /checkout|order/.test(g.src)));

  useEffect(() => {
    const base = { x: 6, y: -12 };
    const rig = rigRef.current;
    const rest = `rotateX(${base.x}deg) rotateY(${base.y}deg)`;
    rig.style.transform = rest;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setEntered(true));
    });
    if (reducedMotion()) return () => cancelAnimationFrame(frame);

    const hero = heroRef.current;
    const move = (e) => {
      const r = stageRef.current.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      rig.style.transform = `rotateX(${base.x - y * 8}deg) rotateY(${base.y + x * 14}deg)`;
    };
    const leave = () => {
      rig.style.transform = rest;
    };
    hero.addEventListener('pointermove', move);
    hero.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', leave);
    };
  }, []);

  const profiles = [
    ['github', 'GitHub', personalInfo.github],
    ['linkedin', 'LinkedIn', personalInfo.linkedin],
    ['upwork', 'Upwork', personalInfo.upwork],
    ['youtube', 'YouTube', personalInfo.youtube],
  ];

  return (
    <section ref={heroRef} className={`hero${entered ? '' : ' enter'}`}>
      <div className="wrap">
        <div>
          <div className="who">
            <img className="ava" src="/Mypic.jpg" alt="" width="56" height="56" />
            <span className="avail">Available for new projects</span>
          </div>
          <h1 className="h name">{personalInfo.name}</h1>
          <p className="role">{personalInfo.role}</p>
          <p className="lede">{personalInfo.intro}</p>
          <div className="row">
            <Link className="btn go" to="/projects">
              See my work
            </Link>
            <a className="btn line" href={personalInfo.resume} download="Syed_Ibrahim_Ali_Resume.pdf">
              Download CV
            </a>
          </div>
          <ul className="social" aria-label="Profiles">
            {profiles.map(([icon, label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon name={icon} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="stats">
            <div>
              <b>{experience.length}</b>
              <span>companies I have worked with</span>
            </div>
            <div>
              <b>{Math.floor(totalCommits / 100) * 100}+</b>
              <span>commits on {featured.length} products</span>
            </div>
            <div>
              <b>3.86</b>
              <span>CGPA, Honour Roll</span>
            </div>
          </div>
        </div>
        <div ref={stageRef} className="stage" role="group" aria-label="Screens from three of my products">
          <div ref={rigRef} className="rig">
            <Win as={Link} to="/projects/acadex" project={byKey.acadex} className="w1" aria-label="Acadex" eager />
            <Win
              as={Link}
              to="/projects/propel"
              project={byKey.propel}
              className="w2"
              aria-label="Propel"
              eager
              priority="high"
            />
            <Win as={Link} to="/projects/nowhere" project={nowhere} index={iris} className="w3" aria-label="Nowhere" eager />
            <div className="pill">
              <b>Order placed by Iris</b>The AI agent in Nowhere, after the customer said yes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Featured products: sticky cards that shrink as the next one slides over
   (desktop only), with a screenshot that tilts under the pointer */
const Featured = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (reducedMotion()) return;
    const cards = cardRefs.current;
    const onScroll = () => {
      if (window.innerWidth < 860) {
        cards.forEach((c) => {
          c.style.transform = '';
          c.style.opacity = '';
        });
        return;
      }
      cards.forEach((c, i) => {
        const next = cards[i + 1];
        if (!next) {
          c.style.transform = '';
          return;
        }
        const d = next.getBoundingClientRect().top - c.getBoundingClientRect().top;
        const k = Math.max(0, Math.min(1, 1 - d / c.offsetHeight));
        c.style.transform = `scale(${1 - k * 0.05})`;
        c.style.opacity = String(1 - k * 0.5);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const tilt = (e) => {
    if (reducedMotion()) return;
    const t = e.currentTarget;
    const r = t.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    t.firstChild.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
  };
  const untilt = (e) => {
    e.currentTarget.firstChild.style.transform = '';
  };

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sh">
          <h2 className="h">Five products I built end to end</h2>
          <p>A few highlights from my work. Each one has its own page with the problem, what I built and the screens.</p>
        </div>
        <div className="stack">
          {featured.map((p, i) => (
            <article key={p.key} ref={(el) => {
                cardRefs.current[i] = el;
              }} className="feat">
              <div>
                <div className="k">
                  <ProblemChips project={p} />
                </div>
                <h3>{p.name}</h3>
                <p className="t">{p.title}</p>
                <p className="s">{p.summary}</p>
                <p className="m">
                  <span>
                    <b>{p.year}</b>
                  </span>
                  {p.commits && (
                    <span>
                      <b>{p.commits}</b> commits
                    </span>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-ink)' }}>
                      Open live demo
                    </a>
                  )}
                </p>
                <Link className="btn ink" to={`/projects/${p.key}`}>
                  Read the case study
                </Link>
              </div>
              <Link
                className="tilt"
                to={`/projects/${p.key}`}
                aria-label={`${p.name} case study`}
                onPointerMove={tilt}
                onPointerLeave={untilt}
              >
                <Win project={p} />
              </Link>
            </article>
          ))}
        </div>
        <p className="more">
          <Link className="btn line" to="/projects">
            See all projects
          </Link>
          <span>Including online stores, data dashboards and smaller AI tools.</span>
        </p>
      </div>
    </section>
  );
};

const steps = [
  ['A short call', 'You explain the job you want done. I ask about your data and tools.'],
  ['A written plan and price', 'What I will build, what it costs and when you will see it.'],
  ['Built in small pieces', 'You see working parts often, not only at the end.'],
  ['Launch and handover', 'The code, the accounts and a short guide are yours.'],
  ['Support after launch', 'I fix what comes up and help you add the next thing.'],
];

const Home = () => (
  <>
    <Hero />

    <section className="strip" aria-label="Where I work">
      <div className="wrap">
        <p>Where I work</p>
        <ul>
          {experience.map((job) => (
            <li key={job.company}>
              {job.company.replace(/\s*\(.*\)/, '')}
              <small>{job.roles[0].title}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="sec">
      <div className="wrap">
        <div className="sh">
          <h2 className="h">What do you need AI to do?</h2>
          <p>Pick the problem closest to yours. Each one opens the projects where I have already solved it.</p>
        </div>
        <div className="probs">
          {problemList.map((problem) => {
            const list = projectsFor(problem.slug);
            return (
              <Link
                key={problem.slug}
                className="prob"
                to={`/projects?problem=${problem.slug}`}
                style={{ '--c': problemColor(problem.slug) }}
              >
                <span className="top2">
                  <span className="dot" />
                </span>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                <span className="names">
                  {list
                    .slice(0, 3)
                    .map((p) => p.name)
                    .join(', ')}
                  {list.length > 3 ? ' and more' : ''}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <Featured />
    <Suspense fallback={<div style={{ minHeight: 1200 }} />}>
      <GitHubSection />
      <AgentDemo />
    </Suspense>

    <section className="sec">
      <div className="wrap">
        <div className="sh">
          <h2 className="h">How a project runs</h2>
          <p>The same five steps for a GoHighLevel bot or a full platform.</p>
        </div>
        <ol className="proc">
          {steps.map(([title, text]) => (
            <li key={title}>
              <b>{title}</b>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Cta />
  </>
);

export default Home;
