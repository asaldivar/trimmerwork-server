const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const JobSchema = new Schema({
	companyName: String,
	companyWebsite: String,
	companyEmail: String,
	jobTitle: String,
	jobDescription: String,
	jobLocation: String,
	jobCompensation: String,
	jobCategory: String,
	jobType: String,
	jobAccommodations: String,
	jobApplication: String
})

const Job = mongoose.model('Job', JobSchema)
module.exports = Job