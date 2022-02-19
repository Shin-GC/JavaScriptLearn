const func = require("./func")
const express = require("express")
const path = require("path")
const {getJson} = require("./func");
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const port = 3000

app.listen(port, () => console.log(`서버 ON\nPort : ${port}`))
app.locals.pretty = true
app.set("view engine", "pug")
app.set("views", "./views")
mongoose.connect("mongodb://127.0.0.1:27017/nodejs", {
  useNewUrlParser: true,
  }.then(() => {
    console.log("Coneected")
  })
    .catch((e) => {
      console.log(e.message)
    })
)

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  saveData: {
    type: Date,
    default: Date.now,
  }
})

const User = mongoose.model("User", userSchema)

const me = new User({
  name: "Shin",
  age: 25,
})

me.save().then(()=> {console.log(me)})
  .catch((e) => console.log(e.message))
//
// app.get("/:name", (req, res) => {
//   func.getJson(req.params.name).then(response =>{
//     console.log(req.params.name)
//     res.send(`${response[0].name}<br>주소 : ${response[0].address}<br>이메일 : ${response[0].email} `)
//   })
// })

//
// app.get("/c200", (req, res) => {
//   getJson("c200")
//     .then(response => {
//       console.log(response[0])
//       res.render(path.join(__dirname, './views/index.pug'), response[0])
//     })
//
// })
//
// // food = ["돈까스", "치킨", "피자", "감자튀김"]
// app.get('/user/:name', function (req, res) {
//   res.send('<H1>' + req.params.name + ', Hello !</H1>')
// })
//
// app.get("/data", (req, res) => {
//   res.send("<h1>Data 사이트 입니다.</h1>")
// })
//
// app.get("/food", (req, res) => {
//   res.send(`${func.randomFood()}`)
// })

