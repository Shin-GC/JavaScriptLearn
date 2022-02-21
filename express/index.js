const express = require("express")

// const path = require("path")
// const {getJson} = require("./func");
// const app = express()
// const router = express.Router()
// const mongoose = require("mongoose")
// const port = 3000
//
// app.listen(port, () => console.log(`서버 ON\nPort : ${port}`))
// app.locals.pretty = true
// app.set("view engine", "pug")
// app.set("views", "./views")
// mongoose.connect("mongodb://127.0.0.1:27017/nodejs", {
//   useNewUrlParser: true,
//   }.then(() => {
//     console.log("Coneected")
//   })
//     .catch((e) => {
//       console.log(e.message)
//     })
// )
//
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   saveData: {
//     type: Date,
//     default: Date.now,
//   }
// })
//
// const User = mongoose.model("User", userSchema)
//
// const me = new User({
//   name: "Shin",
//   age: 25,
// })
//
// me.save().then(()=> {console.log(me)})
//   .catch((e) => console.log(e.message))
// //
// // app.get("/:name", (req, res) => {
// //   func.getJson(req.params.name).then(response =>{
// //     console.log(req.params.name)
// //     res.send(`${response[0].name}<br>주소 : ${response[0].address}<br>이메일 : ${response[0].email} `)
// //   })
// // })
//
// //
// // app.get("/c200", (req, res) => {
// //   getJson("c200")
// //     .then(response => {
// //       console.log(response[0])
// //       res.render(path.join(__dirname, './views/index.pug'), response[0])
// //     })
// //
// // })
// //
// // // food = ["돈까스", "치킨", "피자", "감자튀김"]
// // app.get('/user/:name', function (req, res) {
// //   res.send('<H1>' + req.params.name + ', Hello !</H1>')
// // })
// //
// // app.get("/data", (req, res) => {
// //   res.send("<h1>Data 사이트 입니다.</h1>")
// // })
// //
// // app.get("/food", (req, res) => {
// //   res.send(`${func.randomFood()}`)
// // })
const app = express();
const users = ['신', '광', '천']
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const header = {'Content-Type': 'text/html; charset=utf-8'};

app.use('/', indexRouter)
app.use('/', userRouter)

// app.get('/users', (req, res) => {
//   res.writeHead(200, header);
//   res.end(`<h1>${users}<h1></h1>`, "utf-8")
// })
//
// app.get(`/users/:id`, (req, res) => {
//   res.writeHead(200, header);
//   const userName = users[req.params.id - 1];
//   res.end(`<h1>${userName}</h1>`)
// })

app.get('*', (req, res) => {
  res.end(`<h1>아직 서비스 하지 않는 페이지</h1>`)
})


app.listen(3000)