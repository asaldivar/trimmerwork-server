const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes')
app.use('/api',routes)

// db
mongoose.connect('mongodb://heroku_86w0zdvn:mgomru9o8qgjd3g8svi9t9iq44@ds149495.mlab.com:49495/heroku_86w0zdvn')

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("openUri", function(callback){
  console.log("Connection Succeeded")
})


app.listen(process.env.PORT || 8079)