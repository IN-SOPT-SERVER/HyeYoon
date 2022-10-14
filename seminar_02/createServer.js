const http = require("http");

const port = 3000;

http
  .createServer((req, res) => { // 서버를 만든다!
    res.write("<h1>IN SOPT SERVER!</h1>");
    res.end("<p>awesome</p>");
  })
  .listen(port, () => { // listen: 서버를 동작시킨다!
    console.log(`${port} 번 포트에서 대기중 !`);
  });