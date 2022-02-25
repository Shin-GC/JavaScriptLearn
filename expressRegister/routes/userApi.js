const mongoose = require('mongoose')
const express = require('express');
const hash = require('../utils/hash-password')
const userModel = require('../models/schemas/userSchema')
const router = express.Router()
const passport = require('passport')
const Strategy = require('passport-local');
const session = require('express-session')
const bodyParser = require("body-parser");


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



//
// router.post('/login', async (req, res) => {
//   const inputId = req.body.user_id
//   const pw = req.body.password
//   const user = await userModel.findOne({'user_id': inputId})
//
//   try {
//     if (user.user_id === inputId && user.password === hash.cryptoPassword(pw, user.salt)) {
//       res.status(200).json({
//         message: `Login succeed : ${user.user_id}`
//       })
//     } else {
//       res.status(404).json({
//         message: `Login failed : 아이디와 비밀번호를 확인해주세요.`
//       })
//     }
//   } catch (e) {
//     res.send(`로그인 오류 -> ${e}`)
//   }
// })

// router.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//   })
// )
// router.use(passport.initialize());
// router.use(passport.session());
// passport.use(
//   new Strategy(async (user_id, password, done) => {
//     console.log(`전달 받은 값 \n 아이디 => ${user_id}\n 비밀번호 => ${password}`)
//     const userData = await userModel.findOne({user_id: user_id})
//
//     if (userData === null) {
//       //아이디가 없는 경우
//       console.log("아이디가 존재하지 않습니다.")
//       done(null, false)
//     } else if (userData.password === hash.cryptoPassword(password, userData.salt)) {
//       // 로그인 성공
//       done(null, userData)
//     } else {
//       // 비밀번호가 틀린 경우
//       console.log("비밀번호가 틀렸습니다.")
//       done(null, false)
//     }
//
//   }))
// // 위에서 false가 올 경우 serialize가 작동하지 않고, false가 아닌 값이 오면 작동한다.
// passport.serializeUser((user, done) => {
//   console.log("최초 인증된 유저 =>", user);
//   done(null, user); // 브라우저에게 쿠키를 세션 내부적으로 저장.
// })
//
// passport.deserializeUser((user, done) => {
//   console.log("이미 인증된 유저 =>", user);
//   done(null, user) // req.user 전달 ( 사용자에게 전달 )
// })
//
// router.post('/login',
//   passport.authenticate("local", {
//     successRedirect: "/", // 성공 했을 경우 res.redirect("/")
//     failureRedirect: "/login",
//   })
// )

// Body의 데이터를 불러오기 위한 두가지 설정
router.use(bodyParser.urlencoded({extended: false}))
router.use(express.json())
//-----------------------------------------------

// Passport를 사용하기 위한 설정

router.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
router.use(passport.initialize());
router.use(passport.session());
//-------------------------------------

// body username,password
passport.use(
  new Strategy(async (username, password, done) => {
    console.log("전달 받은 값", username, password);
    try {
      const userData = await userModel.findOne({user_id: username});
      // username: elice, password: 1234,ObjectId:123213213

      if (userData === null) {
        // 아이디가 없는 경우
        done(null, false);
      } else if (userData.password === hash.cryptoPassword(password, userData.salt)) {
        // 로그인 성공
        done(null, userData);
      } else {
        done(null, false);
        // 비밀번호 틀림.
      }
    }
    catch (e) {
      console.log('로그인 에러 발생 => ', e.message)
    }
  })
);

passport.serializeUser((user, done) => {
  console.log("최초 인증된 유저", user);
  done(null, user); // 여기서 브라우저한테 쿠키(입장권) 세션 내부적으로 저장.
});

passport.deserializeUser((user, done) => {
  console.log("이미 인증된 유저", user);
  done(null, user); // req.user 갱신
});

router.use((req, res, next) => {
  console.log(req.session)
  next();
})
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/", // 성공했을 때 res.redirect("/") 같은말
    failureRedirect: "/login", // 실패했을 때 res.redirect("/login") 같은말
  })
);

router.get('/login', (req, res) => {
  res.render('login.pug');
})

router.get("/", (req, res) => {
  console.log(`req.user 정보 => `, req.user);
  if (req.user === undefined) {
    res.send("로그인이 필요합니다");
  } else {
    res.send(`<h1>${req.user.user_id}님 환영합니다.</h1>
<a href="/logout">로그아웃</a>`);
  }
});

router.get('/logout', (req, res) => {
  req.logout()
  console.log('Log out => ', req.session)
  res.redirect('/')
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