const jobsRouter = require('express').Router()
const Job = require('../models/Job')

jobsRouter.route('/')
	.get((req, res) => {
	  Job.find((err, jobs) => {
	  	console.log('in here')
	  	if (err) {
	  		console.log('error')
	  		return res.send(err)
	  	}

	  	return res.json(jobs)
	  })
	})
	.post((req, res) => {
	  res.status(200).json({ message: 'create a job!' });
	})
	.delete((req, res) => {
	  res.status(200).json({ message: 'DELETE a job!' });
	});

module.exports = jobsRouter