const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');

const router = express.Router();
// const router = require('express').Router()

router.post('/register', (req, res) => {
	let { username, password } = req.body;
	const hash = bcrypt.hashSync(password, 8);

	Users.add({ username, password: hash })
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to register user' });
		});
});

module.exports = router;
