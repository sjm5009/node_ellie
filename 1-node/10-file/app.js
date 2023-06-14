const fs = require('fs');

// 1. try{ renameSync(...) } catch(e) {  }
// 2. rename(..., callback(err, data))
// 3. promises.rename().then.catch(0)

// 동기 → 사용하지 않는 것이 좋음
try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (e) {
  console.error(e);
}
console.log('hello');

// 비동기
fs.rename('./text-new.txt', './text.txt', (err) => {
  console.error('err', err);
});
console.log('hello!');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);
