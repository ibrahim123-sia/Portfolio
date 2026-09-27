import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import {
  Calendar,
  Code,
  Star,
  GitBranch,
  Users,
  TrendingUp,
  Loader2,
  ExternalLink,
  Github,
} from 'lucide-react';

const githubUsername = 'ibrahim123-sia';

// GitHub's own contribution color scale (dark), so the graph reads exactly
// like the one on the GitHub profile page.
const githubTheme = {
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // The calendar has a fixed number of week-columns and won't stretch on its
  // own, so we measure the container and size each day-block (and its margin)
  // to fill the width exactly while keeping GitHub's block:gap proportions.
  const calWrapRef = useRef(null);
  const [block, setBlock] = useState({ size: 12, margin: 4 });

  useLayoutEffect(() => {
    const el = calWrapRef.current;
    if (!el) return;
    const WEEKS = 53;
    const PADDING = 32; // p-4 on both sides (clientWidth includes padding)
    const GUTTER = 20; // approx left offset before the first column
    const recompute = () => {
      const avail = el.clientWidth - PADDING - GUTTER;
      if (avail <= 0) return;
      const unit = avail / WEEKS; // width available per week column
      // GitHub renders blocks at ~72% of the column, gap at the rest.
      const size = Math.max(9, Math.min(18, Math.round(unit * 0.72)));
      const margin = Math.max(2, unit - size); // fractional margin fills exactly
      setBlock({ size, margin });
    };
    recompute();
    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [githubData]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Public REST endpoints work unauthenticated — no token is sent from the
        // browser, so nothing sensitive can leak in the client bundle.
        const headers = { Accept: 'application/vnd.github.v3+json' };

        const userResponse = await fetch(
          `https://api.github.com/users/${githubUsername}`,
          { headers }
        );
        if (!userResponse.ok)
          throw new Error(`GitHub API error: ${userResponse.status}`);
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
          { headers }
        );
        if (!reposResponse.ok)
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        const reposData = await reposResponse.json();
        if (!Array.isArray(reposData))
          throw new Error('GitHub API response is not an array');

        const totalStars = reposData.reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0
        );
        const languages = {};
        reposData.forEach((repo) => {
          if (repo.language)
            languages[repo.language] = (languages[repo.language] || 0) + 1;
        });
        const topLanguages = Object.entries(languages)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setGithubData({
          name: userData.name || githubUsername,
          avatarUrl: userData.avatar_url,
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          totalStars,
          topLanguages,
          repos: reposData.slice(0, 6),
        });
      } catch (err) {
        console.error('Detailed error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="card flex flex-col items-center justify-center rounded-2xl p-12">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-content" />
        <span className="text-sm text-muted">
          Fetching GitHub activity for @{githubUsername}...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card rounded-2xl p-10 text-center">
        <Github className="mx-auto mb-4 h-10 w-10 text-faint" />
        <h3 className="mb-2 font-display text-lg font-semibold text-content">
          Couldn't load live GitHub data
        </h3>
        <p className="mb-6 text-sm text-faint">{error}</p>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <Github className="h-5 w-5" />
          Visit GitHub Profile
        </a>
      </div>
    );
  }

  const stats = [
    { icon: GitBranch, label: 'Repositories', value: githubData.publicRepos },
    { icon: Star, label: 'Stars', value: githubData.totalStars },
    { icon: Users, label: 'Followers', value: githubData.followers },
    { icon: TrendingUp, label: 'Following', value: githubData.following },
  ];

  return (
    <div className="card rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <img
          src={githubData.avatarUrl}
          alt={githubData.name}
          className="h-14 w-14 rounded-full border border-line"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${githubUsername}&background=18181b&color=fff&size=128`;
          }}
        />
        <div>
          <h3 className="font-display text-xl font-bold text-content">
            {githubData.name}
          </h3>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted hover:text-content"
          >
            <Code className="h-3.5 w-3.5" />@{githubUsername}
          </a>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-line bg-surface p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <s.icon className="h-4 w-4 text-content" />
              <span className="text-xs text-faint">{s.label}</span>
            </div>
            <div className="font-display text-2xl font-bold text-content">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Contribution graph — authentic GitHub calendar (public data, no token) */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-content" />
          <h4 className="font-display text-base font-semibold text-content">
            Contribution Activity
          </h4>
        </div>
        <div
          ref={calWrapRef}
          className="overflow-x-auto rounded-xl border border-line bg-surface p-4 text-muted"
        >
          <GitHubCalendar
            username={githubUsername}
            colorScheme="dark"
            theme={githubTheme}
            blockSize={block.size}
            blockMargin={block.margin}
            fontSize={13}
          />
        </div>
      </div>

      {/* Top languages */}
      {githubData.topLanguages.length > 0 && (
        <div className="mb-8">
          <h4 className="mb-4 font-display text-base font-semibold text-content">
            Top Languages
          </h4>
          <div className="space-y-3">
            {githubData.topLanguages.map((lang) => {
              const pct = Math.round(
                (lang.count / githubData.publicRepos) * 100
              );
              return (
                <div key={lang.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-muted">{lang.name}</span>
                    <span className="text-faint">{pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-accent to-accent-on transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent repos */}
      <div className="mb-8">
        <h4 className="mb-4 font-display text-base font-semibold text-content">
          Recent Projects
        </h4>
        <div className="grid gap-3 lg:grid-cols-2">
          {githubData.repos.slice(0, 4).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-line bg-surface p-4 transition-all hover:border-line-strong"
            >
              <div className="flex items-start justify-between">
                <h5 className="truncate font-semibold text-content group-hover:text-content">
                  {repo.name}
                </h5>
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-faint group-hover:text-content" />
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-faint">
                {repo.description || 'No description'}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-faint">
                {repo.language && (
                  <span className="rounded border border-line px-2 py-0.5">
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-amber-400" />
                  {repo.stargazers_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-line pt-6 text-center">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost group w-full sm:w-auto"
        >
          <Github className="h-5 w-5" />
          View Complete GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
