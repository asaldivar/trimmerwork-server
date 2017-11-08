const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TrimmerSchema = new Schema({
	name: String,
	location: String,
	skillLevel: String,
	references: Boolean,
	accommodations: Boolean,
	workType: String,
	coverLetter: String,
	contactInfo: String,
	certification: Boolean
})

const Trimmer = mongoose.model("Trimmer", TrimmerSchema)
module.exports = Trimmer