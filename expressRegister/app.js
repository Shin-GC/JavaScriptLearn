const express = require('express');
const app = express()
const userRouter = require('./routes/userApi')
// const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.locals.pretty = true;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', userRouter)
app.listen(3000, () => console.log('connected, 3000'));

