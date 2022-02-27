const mongoose = require('mongoose')
const express = require('express');
const router = express.Router()
const userModel = require('../models/schemas/userSchema')
const postModel = require('../models/schemas/postSchema')

router.get('/', async (req, res) => {
  const posts = await postModel.find({})
  res.status(200).json(posts)
})

router.post('/create', async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const author = req.body.author;

  const newPost = new postModel(
    {
      title,
      body,
      author
    });

  try {
    newPost.save().then((post) => {
      console.log("포스트 생성 성공!");
      res.status(200).json({
        message: "create succeed",
        data: {post},
      })
    })
  } catch (e) {
    console.log(`포스트 생성 오류 => ${e}`)
  }
})


module.exports = router