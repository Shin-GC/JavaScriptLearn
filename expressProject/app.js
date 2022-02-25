const express = require('express')
const app = express()
const members = require('./members.js')
const apiMembers = require('./routes/apiMembers')
app.use(express.json());

// app.get('/api/members', (req, res) => {
//   const {team} = req.query;
//
//   if (team) {
//     const teamMembers = members.filter((m) => m.team === team);
//     res.send(teamMembers)
//     console.log("GET 요청 수행 완료")
//   } else {
//     res.send(members)
//     console.log("GET 요청 수행 완료")
//   }
//
// })
// app.get('/api/members/:id', (req, res) => {
//   const {id} = req.params;
//   const member = members.find((m) => m.id === Number(id))
//
//   if (member) {
//     res.send(member)
//     console.log("GET 요청 수행 완료")
//   } else {
//     res.status(404).send({message: '일치하는 멤버가 없습니다.'})
//     console.log("GET 요청 수행 실패")
//   }
// })
//
// app.post('/api/members', (req, res) => {
//   const newMember = req.body;
//   members.push(newMember);
//   console.log("POST 요청 수행 완료")
//   res.send(newMember)
// })
//
// app.put('/api/members/:id', (req, res) => {
//   const {id} = req.params;
//   const newInfo = req.body;
//   const member = members.find((m) => m.id === Number(id))
//
//   if(member) {
//     Object.keys(newInfo).forEach((prop) => {
//       member[prop] = newInfo[prop];
//     });
//     res.send(member);
//     console.log("PUT 요청 수행 완료")
//   }
//   else {
//     res.status(404).send({message: "no Member"})
//     console.log("PUT 요청 수행 실패")
//   }
// })
//
// app.delete('/api/members/:id', (req, res) => {
//   const {id} = req.params
//   const membersCount = members.length
//   const delIndex = members.findIndex((member) => member.id === Number(id))
//
//   if (delIndex !== -1) {
//     members.splice(delIndex, 1)
//   }
//
//   if(members.length < membersCount) {
//     res.send({message: 'Deleted Success'})
//     console.log("Delete 요청 수행 완료")
//   }
//   else {
//     res.status(404).send({message: 'no Member'})
//     console.log("Delete 요청 수행 실패")
//   }
// })

function logger(req, res, next) {
  console.log(req.url);
  next();
}
app.use(logger)
app.use('/', apiMembers)

app.listen(3000, () => {
  console.log("Server Start")
})