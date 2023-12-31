const fs = require('fs');
const zlib = require('zlib'); // node에서 압축할 수 있는 lib

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  fs.readFile('file.txt', (_, data) => {
    // res.end(data);
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
  });
});
server.listen(3000);
