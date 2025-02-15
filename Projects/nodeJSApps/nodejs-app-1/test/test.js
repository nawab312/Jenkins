// test/test.js
const request = require('supertest');
const app = require('../index');  // Assuming the server is exported from index.js

describe('GET /', () => {
  it('should return Hello, Jenkins!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jenkins!');
  });
});
