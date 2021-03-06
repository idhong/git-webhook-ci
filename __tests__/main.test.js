'use strict';
const gitWebhook = require('../lib/index.js');
const supertest = require('supertest');
const config = {
  secret: 'some-silly-secret-you-dont-want-to-know'
};

// Run test main
describe('gitWebhookCi test', () => {
  let server;

  beforeEach(done => {
    gitWebhook(config).then(result => {
      server = result;
      done();
    });
  });

  afterEach(() => {
    server.close();
  });

  test('Expect the server start with correct configuration', () => {
    return supertest('http://localhost:8081')
      .get('/')
      .expect(404);
  });
});
