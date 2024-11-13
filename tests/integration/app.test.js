const request = require('supertest');
const app = require('../../src/app');

describe('GET /repos', () => {
  it('should return repository metrics', async () => {
    const response = await request(app).get('/repos?username=octocat');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
