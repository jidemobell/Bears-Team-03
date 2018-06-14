const bcrypt = require('bcrypt') // Password hashing tool
const jwt = require('jwt-simple') // Json web token, for protected routes 
const User = require('../models/User')
const Expense = require('../models/Expense')

// Create JWT based on userID
const userToken = user => {
  const timeStamp = new Date().getTime()
  return jwt.encode({ sub: user._id, iat: timeStamp }, process.env.JWT_SECRET)
} 

// Create User
module.exports.createUser= (req, res, next) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  }) 

  // Hash password using Bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    if(err) { return next(err) }

    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) { return next(err) }

      newUser.password = hash 

      User.createUser(newUser, (err, user) => {
        if(err) {
          res.json({
            success: false,
            error: err
          })
        } else {
            res.json({
              success: true,
              token: userToken(user)
            })
        }
          
      })
    })
  })
}

// Sign In User
module.exports.signIn = (req, res) => {
  res.json({
    success: true,
    token: userToken(req.user)
  })
}

// User Dashboard
module.exports.userDashboard = (req, res) => {
  User.findOne({ '_id': req.user._id }, '-password', (err, user) => {
    if(err) {
      res.json({
        success: false,
        error: err
      })
    } else {
        Expense.find({'user': req.user._id}, (err, expenses) => {
          if(err) {
            res.json({
              success: false,
              error: err
            })
          } else {
              res.json({
                success: true,
                user: user,
                expenses: expenses
              })
          }
        })
    }
  })
}

module.exports.updateUser = (req, res) => {
  let updUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email
  }

  User.findByIdAndUpdate(req.user._id, updUser, { new: true }, (err, user) => {
    if(err) {
      res.json({
        success: false,
        error: err
      })
    } else {
        Expense.find({'user': req.user._id}, (err, expenses) => {
          if(err) {
            res.json({
              success: false,
              error: err
            })
          } else {
              res.json({
                success: true,
                user: user,
                expenses: expenses
              })
          }
        })
    }
  })
}
