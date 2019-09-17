const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
// const cors = require('cors');
const session = require('express-session');

// global middleware

const sessionConfig = {
	name: 'monkey',
	secret: 'keep it secret, keep it safe',
	cookie: {
		maxAge: 1000 * 60,
		secure: false
	},
	httpONly: true,
	resave: false,
	saveUninitialized: false
};

const logger = (req, res, next) => {
	console.log(
		`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
			'Origin'
		)}`
	);
	next();
};

module.exports = server => {
	server.use(morgan('dev'));
	server.use(helmet());
	server.use(express.json());
	server.use(logger);
	// server.use(cors);
	server.use(session(sessionConfig));
};
