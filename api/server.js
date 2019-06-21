const express = require('express');

const server = express();

server.use(express.json());

const gamesRouter = require('../routers/gamesRouter.js');

server.use('/games', gamesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'I LIVE' });
});

module.exports = server;