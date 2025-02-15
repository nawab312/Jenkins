const request = require('supertest');
const app = require('../app'); // Assuming app is exported from app.js
let server;

beforeAll(() => {
  // Start the server before tests
  server = app.listen(0); // Start on a random available port
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
