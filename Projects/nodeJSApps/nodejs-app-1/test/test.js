const request = require('supertest');
const app = require('../app'); // Assuming app is exported from app.js
let server;

beforeAll((done) => {
  // Start the server before tests and pass done to wait for server to start
  server = app.listen(0, done); // Make sure Jest waits until the server is started
});

afterAll((done) => {
  // Ensure the server is closed after the tests
  server.close(done);
});

describe('GET /', () => {
  it('should return Hello, Jenkins!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jenkins!');
  });
});
