const { fetchRepos, calculateMetrics } = require('../../src/services/githubService');

describe('GitHub Service', () => {
  it('should fetch repositories', async () => {
    const repos = await fetchRepos('MGK91');
    expect(repos).toBeInstanceOf(Array);
  });

  it('should calculate metrics for a repo', async () => {
    const metrics = await calculateMetrics('MGK91/github-app');
    expect(metrics).toHaveProperty('deploymentFrequency');
    expect(metrics).toHaveProperty('leadTime');
  });
});
