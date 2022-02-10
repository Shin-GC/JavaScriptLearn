// const count = function (n) {
//   console.log(n)
//
//   if (n === 0) {
//     console.log("End!")
//   }
//   else {
//     count(n-1)
//   }
// }
// count(5)

// const fibonacci = function (n) {
//   if (n <= 1) {
//     return n
//   }
//   else {
//     return fibonacci(n-1) + fibonacci(n-2)
//   }
// }
// console.log(fibonacci(7))

// let fibonacci = function (n) {
//   if (n <= 1) {
//     return n
//   }
//   else {
//     return fibonacci(n-1) + fibonacci(n-2)
//   }
// }
//
// let myFunction = fibonacci
//
// fibonacci = null
// myFunction(5)

let fibonacci = function javaScriptfibo (n) {
  if (n <= 1) {
    return n
  }
  else {
    return javaScriptfibo(n-1) + javaScriptfibo(n-2)
  }
}

let myFunction = fibonacci
fibonacci = null

console.log(myFunction(5))