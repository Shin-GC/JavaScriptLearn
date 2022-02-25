const express = require('express');
const router = express.Router()
const memberModel = require('../models/schemas/memberSchema')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/membersAPI")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


router.get('/api/members', async (req, res) => {
  try {
    const listMembers = await memberModel.find({})
    res.status(200).json(listMembers)
    console.log("GET 요청 수행 완료 [리스트]")
  } catch (e) {
    res.status(500).json({
      message: "User 조회 실패",
    });
  }
})

router.get('/api/members/:id', async (req, res) => {
  const {id} = req.params;
  const member = await memberModel.findOne(({id}))
  try {
    if (member) {
      res.json(member)
      console.log("GET 요청 수행 완료")
    } else {
      res.status(404).json({message: '일치하는 멤버가 없습니다.'})
      console.log("GET 요청 수행 실패")
    }
  } catch (e) {
    res.status(500).json({
      message: "User 조회 실패",
    })
  }
})

router.post('/api/members', async (req, res) => {
  const newMember = new memberModel(req.body);
  try {
    newMember.save();
    res.json(newMember)
    console.log("POST 요청 수행 완료")

  } catch (e) {
    res.status(500).json({message: "유저 업데이트 실패"})
    console.log("User 업데이트 실패")
  }
})

router.patch('/api/members/:id', async (req, res) => {
  const {id} = req.params;
  const newInfo = req.body;

  try {
    const member = await memberModel.updateOne({id}, newInfo)
    res.json({message: "Update Success"})
    console.log("수정 성공")
  } catch (e) {
    res.status(500).json({message: "Update Failed"})
    console.log("수정 실패")
  }

})

router.delete('/api/members/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const member = await memberModel.deleteOne({id})
    res.json({message: "Delete Success"})
  } catch (e) {
    res.status(500).json({message: "Delete Failed"})
  }
})

module.exports = router