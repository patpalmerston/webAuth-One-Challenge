const express = require('express');
const configureMiddleware = require('./middleware')

const usersRouter = require('../users/users-router')


const server = express();

configureMiddleware(server)

server.use('/api/users', usersRouter);

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2>We are Live</h2>`);
});

module.exports = server;
