const db = require('../data/dbConfig.js');

const { find, add } = require('./gamesModel.js');

describe('Games model', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });

  it('should set the environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});