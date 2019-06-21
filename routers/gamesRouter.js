const express = require('express');
const router = express.Router();

const Games = require('./gamesModel.js');

router.get('/', (req, res) => {
  Games.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(
      { message: "NOPE", error: err }
    ))
})

router.post('/', (req, res) => {
  const game = req.body;
  Games.add(game)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json(
      { message: "NOPE", error: err }
    ))
})

module.exports = router;