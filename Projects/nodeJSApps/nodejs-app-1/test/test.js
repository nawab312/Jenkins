const request = require('supertest');
const app = require('../index');  // Import the app from index.js

let server;  // Declare server variable to manage the lifecycle of the server

beforeAll(() => {
  // Start the server before running tests
  server = app.listen(3000);
});

afterAll(() => {
  // Close the server after tests are finished
  server.close();
});

describe('GET /', () => {
  it('should return Hello, Jenkins!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jenkins!');
  });
});
