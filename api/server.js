const express = require('express');

const server = express();

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2>We are Live</h2>`);
});

module.exports = server;
