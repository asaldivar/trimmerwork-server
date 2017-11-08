const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResumeSchema = new Schema({
	name: String,
	email: String,
	location: String,
	jobTitle: String,
	jobCategory: String,
	references: Boolean,
	workExperience: String,
	coverLetter: String,
	additionalInfo: String,
	contactInfo: String
})

const Resume = mongoose.model('Resume', ResumeSchema)
module.exports = Resume