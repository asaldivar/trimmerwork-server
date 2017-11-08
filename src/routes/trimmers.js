const trimmersRouter = require('express').Router()
const Trimmer = require('../models/Trimmer')

trimmersRouter.route('/')
	.get((req, res) => {
	  Trimmer.find((err, trimmers) => {
	  	console.log('in here')
	  	if (err) {
	  		console.log('error')
	  		return res.send(err)
	  	}

	  	return res.json(trimmers)
	  })
	})
	.post((req, res) => {
	  res.status(200).json({ message: 'create a trimmer!' });
	})
	.patch((req, res) => {
	  res.status(200).json({ message: 'create a trimmer!' });
	})
	.delete((req, res) => {
	  res.status(200).json({ message: 'DELETE a trimmer!' });
	});

module.exports = trimmersRouter