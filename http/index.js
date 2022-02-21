const http = require('http');

const users = ["Tom", "Andy", "Jerry"]

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.end("<h1>res.end Test</h1>")
  } else if (req.url === "/test") {
    res.end("<h1>test path</h1>")
  } else if (req.url.split("/")[1] === 'users') {
    const userIdx = req.url.split("/")[2]
    res.end(`<h1>${users[userIdx - 1]}`)
  } else {
    res.end("<h1> Page Not Available")
  }
});

server.listen(3000);

// let url = new URL ("https://www.google.com/search?q=test&oq=test&aqs=chrome..69i57j35i39l2j69i60l5.1608j0j7&sourceid=chrome&ie=UTF-8");
//
// console.log(`protocol : ${url.protocol}`)
// console.log(`host : ${url.host}`)
// console.log(`pathname : ${url.pathname}`)
// console.log(`query : ${url.search}`)