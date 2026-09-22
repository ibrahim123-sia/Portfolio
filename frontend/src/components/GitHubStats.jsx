import React, { useState, useEffect } from 'react';
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

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contributionData, setContributionData] = useState([]);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const fetchContributions = async (username, authToken) => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks { contributionDays { contributionCount date weekday } }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables: { username } }),
      });
      if (!response.ok) throw new Error(`GitHub GraphQL error: ${response.status}`);
      const data = await response.json();
      if (data.errors) throw new Error(data.errors[0].message);
      const weeks =
        data.data.user.contributionsCollection.contributionCalendar.weeks;
      return weeks.flatMap((week) => week.contributionDays);
    } catch (err) {
      console.error('Error fetching contributions:', err);
      return [];
    }
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const headers = token
          ? {
              Authorization: `Bearer ${token}`,
              Accept: 'application/vnd.github.v3+json',
            }
          : { Accept: 'application/vnd.github.v3+json' };

        let contributions = [];
        if (token) contributions = await fetchContributions(githubUsername, token);

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
        setContributionData(contributions);
      } catch (err) {
        console.error('Detailed error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [token]);

  const getColorClass = (count) => {
    if (count === 0) return 'bg-surface-2';
    if (count <= 2) return 'bg-accent/40';
    if (count <= 4) return 'bg-accent/70';
    return 'bg-accent';
  };

  const renderContributionGraph = () => {
    const days = contributionData.slice(-364);
    const weeks = [];
    for (let w = 0; w < Math.ceil(days.length / 7); w++) {
      weeks.push(days.slice(w * 7, w * 7 + 7));
    }
    return (
      <div className="w-full overflow-x-auto pb-1">
        <div className="flex min-w-max gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={`${wi}-${di}`}
                  className={`${getColorClass(
                    day.contributionCount
                  )} h-3 w-3 rounded-[2px] transition-transform`}
                  title={`${day.contributionCount} contribution${
                    day.contributionCount !== 1 ? 's' : ''
                  } on ${new Date(day.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

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

  const hasContributions = contributionData.length > 0;

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

      {/* Contribution graph (only when real data is available) */}
      {hasContributions && (
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-content" />
            <h4 className="font-display text-base font-semibold text-content">
              Contribution Activity
            </h4>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            {renderContributionGraph()}
          </div>
        </div>
      )}

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
                      className="h-2 rounded-full bg-gradient-to-r from-zinc-300 to-white transition-all duration-700"
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
