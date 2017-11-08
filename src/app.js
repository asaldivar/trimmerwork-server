const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

app.use('/api',routes)
app.use(bodyParser.json())
app.use(cors())

// db
mongoose.connect('mongodb://localhost:27017/trimmerwork')
const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback){
  console.log("Connection Succeeded")
})


app.listen(process.env.PORT || 8079)

app.listen(process.env.PORT || 8081)