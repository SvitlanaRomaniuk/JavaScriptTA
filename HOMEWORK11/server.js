const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;
const server = http.createServer((req, res) => {
  
  const os = require("os");
  const userInfo = os.userInfo();
  let userName = userInfo.username;

  let content = '';
  content += getRow('Task 1', 'System information');
  content += getRow('Current user name:', userName);
  content += getRow('OS type:', os.type);
  content += getRow('System work time:', format(os.uptime()));
  content += getRow('Current work directory:', __dirname);
  content += getRow('Server file name:', __filename);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(content);
});

function getRow(title, text) {
  return ` ${title} ${text} \n`
}

function format(seconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor(seconds % (60 * 60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
};


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
