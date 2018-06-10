const Router = require('express').Router()

const User = require('../models/User')
const Authentication = require('../controllers/Authentication')

// Create User
Router.post('/create', Authentication.createUser)

module.exports = Router