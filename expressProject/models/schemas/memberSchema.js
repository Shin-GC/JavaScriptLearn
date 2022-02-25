const {Schema} = require('mongoose')
const mongoose = require("mongoose");
const moment = require('moment');

const memberSchema = new Schema({
  id: Number,
  name: String,
  team: String,
  position: String,
  emailAddress: String,
  phoneNumber: String,
  admissionDate: {
    type: String,
    default: moment().format()
  },
  birthday: String,
  profileImage: String
})

const Members = mongoose.model('members', memberSchema)

module.exports = Members