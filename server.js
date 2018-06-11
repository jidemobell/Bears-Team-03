require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const User = require('./routes/User')

// Initialize Server, Port and DB Setup
const Server = express()
const Port = process.env.port || 4000
mongoose.connect(process.env.DB_HOST)
mongoose.connection.on('connected', () => {
  console.log(`Connected to DB: ${process.env.DB_HOST}`)
})
mongoose.connection.on('error', () => {
  console.log('Failed to connect to DB')
})

// Middleware
Server.use(cors()) // Cross site requests. Basically we can call the API from our react frontend on a different port
Server.use(bodyParser.json()) // Adds a body to the request so we can send data in json format
Server.use('/user', User)
Server.use(passport.initialize()) // Initialize the Passport middleware

// Start Server
Server.listen(Port, (err) => {
  if(err) {
    console.log('Server Error', err)
  }
  console.log(`Server running on Port: ${Port}`)
})