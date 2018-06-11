const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.createUser = (newUser, callback) => {
  newUser.save(callback)
}