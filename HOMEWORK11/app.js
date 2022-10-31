const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;
let date = new Date();
let message = require('./personalmodule.js');

const server = http.createServer((req, res) => {
  
  const os = require("os");
  const userInfo = os.userInfo();
  let userName = userInfo.username;

  let content = '';
  content += getRow('Date of request:', date );
  content += getRow(message() + ',',  userName);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(content);
});

function getRow(title, text) {
  return ` ${title} ${text} \n`
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
