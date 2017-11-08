const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const JobSchema = new Schema({

})

const Job = mongoose.model('Job', JobSchema)
module.exports = Job