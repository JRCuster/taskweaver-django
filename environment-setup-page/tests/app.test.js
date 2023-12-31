const request = require('supertest');
const app = require('../app');

describe('Environment Setup Page', () => {
  test('should render the form on the root route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<form');
  });

  test('should handle form submission', async () => {
    const response = await request(app)
      .post('/generate')
      .send({
        serviceName: 'test-service',
        imageName: 'node:14',
        port: '80:80',
        envVar: 'NODE_ENV=production'
      });
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('docker-compose-services.yml');
    expect(response.text).toContain('Dockerfile.1');
    expect(response.text).toContain('test-service');
    expect(response.text).toContain('node:14');
    expect(response.text).toContain('80:80');
    expect(response.text).toContain('NODE_ENV=production');
  });
});