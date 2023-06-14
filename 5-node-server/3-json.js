const http = require('http');

const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }, { name: 'REACT' }, { name: 'NEXT' }, { name: 'NODE' }];
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, ('Content-Type', 'application/json'));
      res.end(JSON.stringify(courses));
      // 데이터를 res.json() 이나 res.send()로 보내면 res.end()하지 않아도 알아서 종료합니다. → express js
    }
    if (method === 'POST') {
      const body = [];
      req
        .on('data', (chunk) => {
          console.log('chunk', chunk);
          body.push(chunk);
        })
        .on('end', () => {
          const bodyStr = Buffer.concat(body).toString();

          const course = JSON.parse(bodyStr);
          courses.push(course);
          res.writeHead(201);
          res.end();
        });
    }
  }
});

server.listen(8000);
