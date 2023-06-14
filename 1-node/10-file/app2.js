const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf-8') //
  .then(console.log) //
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', '파일에 글을 쓰는 중입니다📢\n') //
  .catch(console.error);
// fs.writeFile('./file.txt', '덮어쓰기📢').catch(console.error);
fs.appendFile('./file.txt', '이어서 글을 쓰는 중입니다📄') //
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt').catch(console.error);
  });

// copy
// fs.copyFile('./file.txt', './file2.txt').catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') //
  .then(console.table) //
  .catch(console.error);
