import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';
import { portfolioData } from '../data';

// The calendar (and its data request) loads only when the section is close
const GitHubCalendar = lazy(() =>
  import('react-github-calendar').then((m) => ({ default: m.GitHubCalendar }))
);

const { github, projects, personalInfo } = portfolioData;
const CACHE_KEY = 'github-profile-v2';
const WEEKS = 53;
const GAP = 3;

const languageColor = {
  TypeScript: '#3178C6',
  JavaScript: '#E3C234',
  Python: '#3572A5',
  Rust: '#DEA584',
  HTML: '#E34C26',
  CSS: '#663399',
};

const byKey = Object.fromEntries(projects.map((p) => [p.key, p]));

// The six cards, always in this order. Static values from data.js show until
// (or unless) the API answers.
const staticCards = github.repoCards.map((card) => ({
  ...card,
  description: '',
  project: byKey[card.key],
  url: byKey[card.key].github,
}));

const readCache = () => {
  try {
    return JSON.parse(sessionStorage.getItem(CACHE_KEY));
  } catch {
    return null;
  }
};

// Public endpoints, no token, so nothing sensitive ships in the bundle.
// Returns the repo count and live stats for the six repos by name, or throws
// so the static values stay.
const fetchProfile = async () => {
  const cached = readCache();
  if (cached) return cached;
  const headers = { Accept: 'application/vnd.github+json' };
  const base = `https://api.github.com/users/${github.username}`;
  const [userRes, reposRes] = await Promise.all([
    fetch(base, { headers }),
    fetch(`${base}/repos?per_page=100`, { headers }),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
  const user = await userRes.json();
  const repos = await reposRes.json();
  const stats = {};
  for (const repo of repos) {
    stats[repo.name.toLowerCase()] = {
      language: repo.language,
      updated: repo.pushed_at,
      description: repo.description || '',
      url: repo.html_url,
    };
  }
  const profile = { repos: user.public_repos, stats };
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(profile));
  } catch {
    // Storage can be blocked; the data still shows for this visit
  }
  return profile;
};

const formatUpdated = (date) =>
  new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

// True once the element is within a screen of the viewport
const useNearView = (ref) => {
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setNear(true);
      },
      { rootMargin: '100% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, near]);
  return near;
};

const Calendar = () => {
  const frameRef = useRef(null);
  const [size, setSize] = useState(13);

  useEffect(() => {
    const frame = frameRef.current;
    // Blocks fill the card width (11 to 20px); when they can't, the graph
    // scrolls and starts at the latest week, like on GitHub.
    const toLatest = () => {
      const scroller = frame.querySelector('.react-activity-calendar__scroll-container');
      if (scroller) scroller.scrollLeft = scroller.scrollWidth;
    };
    const resize = new ResizeObserver(() => {
      const fit = Math.floor((frame.clientWidth - GAP * (WEEKS - 1)) / WEEKS);
      setSize(Math.max(11, Math.min(20, fit)));
      toLatest();
    });
    const mutations = new MutationObserver(toLatest);
    resize.observe(frame);
    mutations.observe(frame, { childList: true, subtree: true });
    return () => {
      resize.disconnect();
      mutations.disconnect();
    };
  }, []);

  return (
    <div ref={frameRef} className="calbody">
      <Suspense fallback={null}>
        <GitHubCalendar
          username={github.username}
          colorScheme="light"
          theme={{ light: ['#EBEDEA', '#B7E4CF', '#6CCB9F', '#2FA877', '#0B7A55'] }}
          blockSize={size}
          blockMargin={GAP}
          blockRadius={3}
          fontSize={12}
          labels={{ totalCount: '{{count}} contributions in the last year' }}
          errorMessage="The contribution graph could not be loaded right now. It is on my GitHub profile."
        />
      </Suspense>
    </div>
  );
};

const GitHubSection = () => {
  const sectionRef = useRef(null);
  const near = useNearView(sectionRef);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!near) return;
    let active = true;
    fetchProfile()
      .then((data) => active && setProfile(data))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [near]);

  const repoCount = profile?.repos ?? github.repos;
  // Live stats fill each card; anything missing keeps the data.js value
  const cards = staticCards.map((card) => {
    const live = profile?.stats?.[card.name.toLowerCase()];
    return live
      ? {
          ...card,
          language: live.language || card.language,
          updated: live.updated || card.updated,
          description: live.description,
          url: live.url || card.url,
        }
      : card;
  });
  const profileUrl = personalInfo.github;

  return (
    <section ref={sectionRef} className="sec ghsec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sh">
          <h2 className="h">The code is public</h2>
          <p>Most of my work lives on GitHub, so you can read how I build before we talk.</p>
        </div>
        <div className="ghgrid">
          <aside className="ghcard">
            <div className="ghme">
              <img src="/Mypic.jpg" alt="" width="64" height="64" loading="lazy" decoding="async" />
              <div>
                <b>{personalInfo.name}</b>
                <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                  @{github.username}
                </a>
              </div>
            </div>
            <p>AI Engineer and Full-Stack Developer building business solutions with agentic AI and automation.</p>
            <dl>
              <div>
                <dt>{repoCount}</dt>
                <dd>repositories</dd>
              </div>
              <div>
                <dt>{github.commitsLastYear}+</dt>
                <dd>commits in the last year on my main products</dd>
              </div>
            </dl>
            <a className="btn ink" href={profileUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
              Follow on GitHub
            </a>
          </aside>
          <div className="repos">
            {cards.map(({ name, language, updated, description, url, project }) => (
              <a key={name} className="repo" href={url} target="_blank" rel="noopener noreferrer">
                <span className="rn">
                  <Icon name="github" />
                  <b>{name}</b>
                </span>
                <span className="rd">{project.summary || description}</span>
                <span className="rm">
                  {language && (
                    <span>
                      <i style={{ background: languageColor[language] || 'var(--tools)' }} />
                      {language}
                    </span>
                  )}
                  {project.commits && <span>{project.commits} commits</span>}
                  {updated && <span>Updated {formatUpdated(updated)}</span>}
                  {project.live && <span>Live demo</span>}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="cal">
          <div className="calhead">
            <b>Contribution activity</b>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              See it on GitHub
            </a>
          </div>
          {near ? <Calendar /> : <div className="calbody" />}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
