const supertest = require('supertest');

const db = require('../data/dbConfig.js');
const server = require('../api/server.js');

describe('/games', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });

  describe('GET /', () => {
    it('responds 200', async () => {
      await supertest(server)
        .get('/games')
        .expect(200);
    });
    it('returns an array', async () => {
      let result;
      await supertest(server)
        .get('/games')
        .then(res => result = res.body)
      expect(result.length).toEqual(0);
    })
  });

  describe('POST /', () => {
    it('responds 201', async () => {
      let game = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };

      await supertest(server)
        .post('/games')
        .send(game)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201);
    });

    it('returns an id', async () => {
      let game = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      }
      
      let result;
      await supertest(server)
        .post('/games')
        .send(game)
        .set('Accept', 'application/json')
        .then(res => result = res.body)
      expect(typeof result).toBe("number");
    })
  })

})