const express = require('express');
const app = express()
const userRouter = require('./routes/userApi')
// const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')
const Strategy = require('passport-local').Strategy;
const session = require('express-session')
const userModel = require("./models/schemas/userSchema");
const hash = require("./utils/hash-password");

// // Body의 데이터를 불러오기 위한 두가지 설정
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.json())
// //-----------------------------------------------
// Passport를 사용하기 위한 설정
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//   })
// )
// app.use(passport.initialize());
// app.use(passport.session());
//-------------------------------------


app.locals.pretty = true;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', userRouter)



app.listen(3000, () => console.log('connected, 3000'));

