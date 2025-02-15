const request = require('supertest');
const app = require('../app'); // Assuming app is exported from app.js
let server;

beforeAll((done) => {
  // Start the server before tests and pass done to wait for server to start
  server = app.listen(0, () => done());  // Ensure Jest waits for server startup
});

afterAll(async () => {
  // Ensure the server is closed after the tests
  if (server) {
    await server.close();
  }
});

describe('GET /', () => {
  it('should return Hello, Jenkins!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jenkins!');
  });
});
