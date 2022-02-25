const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new Schema({
  user_id: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  salt: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  }
})

module.exports = mongoose.model('users', UserSchema)
