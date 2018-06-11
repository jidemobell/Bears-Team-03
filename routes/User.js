const Router = require('express').Router()
const passport = require('passport')
const passportService = require('../Services/Passport')

const User = require('../models/User')
const Authentication = require('../controllers/Authentication')

const requireSigin = passport.authenticate('local', { session: false })

// Create User
Router.post('/create', Authentication.createUser)

// LogIn User
Router.post('/login', requireSigin, Authentication.signIn)

module.exports = Router