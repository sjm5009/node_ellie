const path = require('path');

// 운영체제별 경로 표기법이 다름
// POSIX (Unix: Mac, Linux): '/Users/82103/Desktop/study/node_ellie/9-path/app.js'
// Windows: C:\Users\82103\Desktop\study\node_ellie\1-node\9-path\app.js
console.log(__dirname);
console.log(__filename);

console.log('Path Seperator -', path.sep); // 경로 구분자
console.log('Environment Variable Seperator -', path.delimiter); // 환경변수 구분자

// basename
console.log('Basename -', path.basename(__filename)); // 파일 정보만
console.log('Basename -', path.basename(__filename, '.js')); // 확장자 정보 제거

// dirname
console.log('Directory -', path.dirname(__filename)); // 디렉토리 정보만

//extension
console.log('Extension -', path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute', path.isAbsolute(__dirname));
console.log('isAbsolute', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder/////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
