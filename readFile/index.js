// // const fs = require('fs');
// //
// // let test = 1;
// //
// // fs.readFile('./new', 'utf-8', (err, data) => {
// //   test = 2
// // })
// // console.log(test)
//
// let num = 1;
//
// setTimeout(() => {
//   num = 2;
// }, 1000)
//
// num = 3;
//
// console.log(num)

// const EventEmitter = require('events')
//
// const myEvent = new EventEmitter();
//
// myEvent.on("test", async(value) => {
//   console.log(`Start myEvent\nData -> ${value}`)
// })
//
// myEvent.emit("test","testData")