import React, { useState, useEffect } from 'react';
import { Calendar, Code, Star, GitBranch, Users, TrendingUp, Zap, Loader2, ExternalLink } from 'lucide-react';

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contributionData, setContributionData] = useState([]);
  
  const githubUsername = "ibrahim123-sia";
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  // Fetch contribution data using GraphQL
  const fetchContributions = async (username, token) => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  weekday
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { username }
        }),
      });

      if (!response.ok) {
        throw new Error(`GitHub GraphQL error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
      
      // Flatten all contribution days into a single array
      const allDays = weeks.flatMap(week => week.contributionDays);
      return allDays;
      
    } catch (error) {
      console.error('Error fetching contributions:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        const headers = token ? {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        } : {
          'Accept': 'application/vnd.github.v3+json'
        };

        // Fetch contributions if token exists
        let contributions = [];
        if (token) {
          contributions = await fetchContributions(githubUsername, token);
        }

        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`, {
          headers
        });
        
        if (!userResponse.ok) {
          throw new Error(`GitHub API error: ${userResponse.status}`);
        }
        
        const userData = await userResponse.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
        const languages = {};
        
        reposData.forEach(repo => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
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
          repos: reposData.slice(0, 6)
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
  }, [githubUsername, token]);

  // Render contribution graph with real or simulated data
  const renderContributionGraph = () => {
    const hasRealContributions = contributionData && contributionData.length > 0;
    
    // If no real data, create simulated data that looks realistic
    let dataToUse = [];
    
    if (hasRealContributions) {
      // Use real contribution data
      dataToUse = contributionData.slice(-364); // Last 52 weeks
    } else {
      // Create realistic simulated data (not random)
      // More activity on weekdays, less on weekends
      const today = new Date();
      const daysInYear = 364; // 52 weeks
      
      for (let i = daysInYear - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        
        // More likely to have activity on weekdays
        let baseLevel = isWeekend ? Math.random() * 0.3 : Math.random() * 0.7;
        
        // Add some pattern - more activity mid-week
        if (dayOfWeek === 2 || dayOfWeek === 3) baseLevel += 0.2;
        
        // Some days with high activity
        if (Math.random() < 0.05) baseLevel = 0.9 + Math.random() * 0.1;
        
        const level = Math.floor(baseLevel * 5);
        
        dataToUse.push({
          contributionCount: level,
          date: date.toISOString().split('T')[0],
          weekday: dayOfWeek
        });
      }
    }

    // Group into weeks (7 days per week, 52 weeks)
    const weeks = [];
    for (let week = 0; week < 52; week++) {
      const weekDays = dataToUse.slice(week * 7, (week + 1) * 7);
      weeks.push(weekDays);
    }

    // Function to get color based on contribution count
    const getColorClass = (count) => {
      if (count === 0) return 'bg-gray-100 dark:bg-gray-800';
      if (count === 1) return 'bg-green-100 dark:bg-green-900';
      if (count === 2) return 'bg-green-300 dark:bg-green-700';
      if (count === 3) return 'bg-green-400 dark:bg-green-600';
      return 'bg-green-500 dark:bg-green-500'; // 4+ contributions
    };

    return (
      <div className="flex w-full" style={{ gap: '3px' }}>
        {weeks.map((week, weekIndex) => (
          <div 
            key={weekIndex} 
            className="flex flex-col flex-1" 
            style={{ gap: '3px' }}
          >
            {week.map((day, dayIndex) => (
              <div 
                key={`${weekIndex}-${dayIndex}`}
                className={`${getColorClass(day.contributionCount)} rounded-[2px] hover:scale-125 transition-transform aspect-square min-h-[10px] relative group`}
                title={`${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}
              >
                {/* Tooltip-like element on hover for better UX */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {day.contributionCount} contribution{day.contributionCount !== 1 ? 's' : ''}
                  <div className="text-[10px] text-gray-300">
                    {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // The rest of your component remains the same...
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mt-8">
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
          <span className="text-gray-600 dark:text-gray-400 mb-2">
            Fetching GitHub data for @{githubUsername}...
          </span>
          <span className="text-sm text-gray-500">
            {token ? 'Using GitHub token' : 'Using public API (limited)'}
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mt-8">
        <div className="text-center py-8">
          <div className="text-yellow-500 mb-4">
            <Zap className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            GitHub Connection Issue
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error}
          </p>
          
          <div className="space-y-3">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-xl w-full justify-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Visit GitHub Profile Directly
            </a>
            <p className="text-sm text-gray-500">
              Or check console for detailed error information
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mt-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <img 
          src={githubData.avatarUrl} 
          alt={githubData.name}
          className="w-14 h-14 rounded-full mr-4 border-2 border-gray-300 dark:border-gray-600"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${githubUsername}&background=3b82f6&color=fff&size=128`;
          }}
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {githubData.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 flex items-center">
            <Code className="w-4 h-4 mr-1" />
            @{githubUsername}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Repositories</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {githubData.publicRepos}
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Stars</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {githubData.totalStars}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Followers</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {githubData.followers}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Following</span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {githubData.following}
          </div>
        </div>
      </div>

      {/* Contribution Graph - With real or realistic data */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-green-500 mr-2" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Recent Activity
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {contributionData && contributionData.length > 0 
                ? 'Actual contribution graph' 
                : 'Simulated contribution graph'}
            </span>
            {!(contributionData && contributionData.length > 0) && token && (
              <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                Token needed
              </span>
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
          <div className="w-full">
            {renderContributionGraph()}
          </div>
          
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Mon</span>
            <span>Sun</span>
          </div>
          
          {!(contributionData && contributionData.length > 0) && (
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Add a GitHub token to see actual contribution data
            </div>
          )}
        </div>
      </div>

      {/* The rest of your component remains exactly the same... */}
      {/* Top Languages */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Top Languages
        </h4>
        <div className="space-y-3">
          {githubData.topLanguages.map((lang, index) => {
            const percentage = Math.round((lang.count / githubData.publicRepos) * 100);
            
            return (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Repos */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recent Projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {githubData.repos.slice(0, 4).map((repo, index) => (
            <a
              key={index}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                    {repo.name}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {repo.description || 'No description'}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0 ml-2" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-3">
                  {repo.language && (
                    <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Link to GitHub */}
      <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-900 dark:hover:to-gray-800 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
        >
          <Code className="w-5 h-5 mr-3 group-hover:animate-pulse" />
          <div className="text-left">
            <div className="font-semibold">View Complete GitHub Profile</div>
            <div className="text-xs text-gray-300 opacity-80">github.com/{githubUsername}</div>
          </div>
        </a>
       
      </div>
    </div>
  );
};

export default GitHubStats;