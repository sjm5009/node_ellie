const http = require('http');
const http2 = require('http2'); // https 배포할 때 변경될 예정
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('inconming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  const url = req.url;
  /* if (url === '/') template(res, 'Welcome!');
  else if (url === '/courses') template(res, 'Courses!');
  else template(res, 'Not Found!'); */

  res.setHeader('Content-Type', 'text/html');
  let read;
  if (url === '/') {
    read = fs.createReadStream('./html/index.html');
  } else if (url === '/courses') {
    read = fs.createReadStream('./html/courses.html');
  } else {
    read = fs.createReadStream('./html/not-found.html');
    res.statusCode = 404;
  }

  if (read) read.pipe(res);
  else {
    res.write(`<body><h1>Stream not created</h1></body>`);
    res.end();
  }
});

server.listen(8000);

const template = (res, text) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Summer Test</title></head>');
  res.write(`<body style="background-color: black; color: white;"><h1>${text}</h1></body>`);
  res.write('</html>');
};
