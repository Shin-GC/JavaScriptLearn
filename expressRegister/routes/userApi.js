const mongoose = require('mongoose')
const express = require('express');
const hash = require('../utils/hash-password')
const userModel = require('../models/schemas/userSchema')
const router = express.Router()

mongoose.connect("mongodb://127.0.0.1:27017/UserAPI")
  .then(() => {
    console.log("Connected to MongoDB => UserAPI");
  })
  .catch((err) => {
    console.log(err);
  });

router.get('/list', async (req, res) => {
  try {
    const userList = await userModel.find({})
    res.status(200).json(userList)
    console.log("GET 요청 수행 완료 [리스트]")
  } catch (e) {
    res.status(500).json({
      message: `Get failed -> ${e}`
    })
    console.log("GET 유저 리스트 조회 실패")
  }
})

router.get('/login', (req, res) => {
  res.render('login.pug');
})

router.post('/login', async (req, res) => {
  const inputId = req.body.user_id
  const pw = req.body.password
  const user = await userModel.findOne({'user_id': inputId})

  try {
    if (user.user_id === inputId && user.password === hash.cryptoPassword(pw, user.salt)) {
      res.status(200).json({
        message: `Login succeed : ${user.user_id}`
      })
    } else {
      res.status(404).json({
        message: `Login failed : 아이디와 비밀번호를 확인해주세요.`
      })
    }
  } catch (e) {
    res.send(`로그인 오류 -> ${e}`)
  }
})

router.get('/register', (req, res) => {
  res.render('register.pug');
})

router.post('/register', async (req, res) => {
  const salt = hash.createSalt()
  const userInfo = {
    user_id: req.body.user_id,
    salt: salt,
    password: hash.cryptoPassword(req.body.password, salt),
    email: req.body.email,
  }
  const newUser = await new userModel(userInfo)
  try {
    newUser.save()
    res.status(200).json({
      message: "create succeed"
    })
    console.log(newUser)
  } catch (e) {
    res.status(500).json({
      message: `create failed: ${e}`
    })
    console.log("POST : 유저 생성 실패")
  }
})


module.exports = router