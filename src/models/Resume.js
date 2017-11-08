const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResumeSchema = new Schema({

})

const Resume = mongoose.model('Resume', ResumeSchema)
module.exports = Resume