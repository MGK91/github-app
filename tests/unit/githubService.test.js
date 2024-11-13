const { fetchRepos, calculateMetrics } = require('../../src/services/githubService');

describe('GitHub Service', () => {
  it('should fetch repositories', async () => {
    const repos = await fetchRepos('octocat');
    expect(repos).toBeInstanceOf(Array);
  });

  it('should calculate metrics for a repo', async () => {
    const metrics = await calculateMetrics('octocat/Hello-World');
    expect(metrics).toHaveProperty('deploymentFrequency');
    expect(metrics).toHaveProperty('leadTime');
  });
});
