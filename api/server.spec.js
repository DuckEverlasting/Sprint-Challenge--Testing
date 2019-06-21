const supertest = require('supertest');

const db = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });

  describe('GET / (basic api test)', () => {
    it('responds 200', async () => {
      await supertest(server)
        .get('/')
        .expect(200);
    });
    it('responds with "I LIVE"', async () => {
      await supertest(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ message: 'I LIVE' })
      })
    });
  });
})