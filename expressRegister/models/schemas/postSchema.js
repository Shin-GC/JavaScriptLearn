const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const getDate = require('../../utils/createDate')
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  time: {
    type: Date,
    default:getDate()
  }
  ,
})

module.exports = mongoose.model('posts', postSchema)
