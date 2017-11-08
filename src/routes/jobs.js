const jobsRouter = require('express').Router()
const Job = require('../models/Job')

jobsRouter.route('/')
	.get((req, res) => {
	  Job.find((err, jobs) => {
	  	if (err) return res.json(err)

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