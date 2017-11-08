const resumesRouter = require('express').Router()
const Resume = require('../models/Resume')

resumesRouter.route('/')
	.get((req, res) => {
	  Resume.find((err, resumes) => {
	  	console.log('in here')
	  	if (err) {
	  		console.log('error')
	  		return res.send(err)
	  	}

	  	return res.json(resumes)
	  })
	})
	.post((req, res) => {
	  res.status(200).json({ message: 'create a resume!' });
	})
	.patch((req, res) => {
	  res.status(200).json({ message: 'create a resume!' });
	})
	.delete((req, res) => {
	  res.status(200).json({ message: 'DELETE a resume!' });
	});

module.exports = resumesRouter