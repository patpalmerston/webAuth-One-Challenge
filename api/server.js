const express = require('express');
const configureMiddleware = require('./middleware')


const server = express();

configureMiddleware(server)

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2>We are Live</h2>`);
});

module.exports = server;
