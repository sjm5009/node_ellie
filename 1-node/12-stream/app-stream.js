const fs = require('fs');

const data = [];
/* const readStream = fs
  .createReadStream('./file.txt', {
    // highWaterMark: 8, // 64 Kbytes
    // encoding: 'utf-8',
  })
  .once('data', (chunk) => {
    data.push(chunk);
    // console.count('data');
  })
  .on('end', () => {
    console.log(data.join('') + '✨');
  })
  .on('error', (error) => console.error(error));
 */
const beforeMem = process.memoryUsage().rss;
const readStream = fs.createReadStream('./file.txt');
readStream.once('data', (chunk) => {
  data.push(chunk);
  readStream.close();
});
readStream.on('close', () => {
  console.log(data.join(''));

  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});
readStream.on('error', (error) => console.error(error));
