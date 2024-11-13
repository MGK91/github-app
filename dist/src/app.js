const express = require('express');
const { fetchRepos, calculateMetrics } = require('./services/githubService');
const app = express();

app.get('/repos', async (req, res) => {
  const { username } = req.query;
  try {
    const repos = await fetchRepos(username);
    const metrics = await Promise.all(
      repos.map(async (repo) => {
        const { deploymentFrequency, leadTime } = await calculateMetrics(repo.full_name);
        return { repo: repo.name, deploymentFrequency, leadTime };
      })
    );
    res.json(metrics);
  } catch (error) {
    console.error('Error fetching repository metrics:', error.message);
    res.status(500).json({ error: 'Failed to fetch repository metrics' });
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

module.exports = app;
