const axios = require('axios');
const { githubToken, githubApiUrl } = require('../config/config');

async function fetchRepos(username) {
  const response = await axios.get(`${githubApiUrl}/users/${username}/repos`, {
    headers: { Authorization: `token ${githubToken}` },
  });
  return response.data;
}

async function calculateMetrics(repo) {
  const commitsResponse = await axios.get(`${githubApiUrl}/repos/${repo}/commits`, {
    headers: { Authorization: `token ${githubToken}` },
  });
  
  const commits = commitsResponse.data;
  const leadTime = (new Date(commits[0].commit.committer.date) - new Date(commits[commits.length - 1].commit.committer.date)) / (1000 * 60 * 60 * 24);

  return {
    deploymentFrequency: commits.length,
    leadTime,
  };
}

module.exports = { fetchRepos, calculateMetrics };
