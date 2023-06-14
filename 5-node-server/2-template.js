const http = require('http');
const ejs = require('ejs');

const name = 'Summer';
const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }, { name: 'REACT' }, { name: 'NEXT' }, { name: 'NODE' }];
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const url = req.url;
  let read;
  if (url === '/') {
    read = ejs.renderFile('./template/index.ejs', { name });
  } else if (url === '/courses') {
    read = ejs.renderFile('./template/courses.ejs', { courses });
  } else {
    read = ejs.renderFile('./template/not-found.ejs', { name });
  }

  if (read) read.then((data) => res.end(data)).catch(console.log);
  else {
    res.write(`<body><h1>Stream not created</h1></body>`);
    res.end();
  }
});

server.listen(8000);
