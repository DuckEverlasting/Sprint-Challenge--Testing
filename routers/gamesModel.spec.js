const db = require('../data/dbConfig.js');

const { find, add } = require('./gamesModel.js');

describe('Games model', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });

  it('should set the environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('find function', () => {
    it('should return an empty array if nothing has been added', async () => {
      let actual = await find();
      let expected = []
      expect(actual).toEqual(expected);
    })
    it('should return an array of games if games have been added', async () => {
      let game1 = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      let game2 = {
        title: 'Metroid',
        genre: 'Action',
        releaseYear: 1986
      }

      await db('games').insert(game1);
      await db('games').insert(game2);

      let games = await find();
      expect(games.length).toEqual(2);
      
    })
  })

  describe('add function', () => {
    it('should add a game', async () => {
      let game = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      let games = await db('games');
      expect(games.length).toEqual(0)
      
      await add(game);

      games = await db('games');
      expect(games.length).toEqual(1);
    })

    it('should add the defined game', async () => {
      let game = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      await add(game);

      let games = await db('games');
      let gameTitles = games.map(game => game.title)
      let gameGenres = games.map(game => game.genre)
      let gameYears = games.map(game => game.releaseYear)
      expect(gameTitles).toContain(game.title);
      expect(gameGenres).toContain(game.genre);
      expect(gameYears).toContain(game.releaseYear);
    })
  })
});