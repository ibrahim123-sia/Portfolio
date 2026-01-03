// src/utils/githubApi.js

// IMPORTANT: Create a .env.local file with your GitHub token
// REACT_APP_GITHUB_TOKEN=your_token_here

export const getUserStats = async (username) => {
  const token = import.meta.env.REACT_APP_GITHUB_TOKEN || process.env.REACT_APP_GITHUB_TOKEN;
  
  if (!token) {
    console.error('GitHub token not found. Please add VITE_GITHUB_TOKEN or REACT_APP_GITHUB_TOKEN to .env file');
    return null;
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        name
        avatarUrl
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
        repositories(first: 100, isFork: false, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            name
            stargazerCount
            languages(first: 10) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
        followers {
          totalCount
        }
        following {
          totalCount
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
      })
    });

    const result = await response.json();
    
    if (result.errors) {
      console.error('GitHub GraphQL Errors:', result.errors);
      return null;
    }
    
    return result.data.user;
  } catch (error) {
    console.error('GitHub API Error:', error);
    return null;
  }
};