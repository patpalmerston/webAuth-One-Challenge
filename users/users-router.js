const express = require('express');
const Users = require('./users-model');

const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'could not find users' });
		});
});

module.exports = router;
