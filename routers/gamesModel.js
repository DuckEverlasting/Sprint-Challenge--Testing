db = require('../data/dbConfig.js')

module.exports = {
  add,
  find,
  findById,
  update,
  remove
}

function add(game) {
  return db('games')
    .insert(game)
    .then(ids => {
      [id] = ids;
      return id;
    });
}

function find() {
  return db('games')
}

function findById(id) {
  return null
}

function update(id, changes) {
  return null
}

function remove(id) {
  return null
}