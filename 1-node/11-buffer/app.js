// Fixed-size chunk of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi ');
console.log(buf); // Unicode 형태로 표현이 됨
console.log(buf.length);
console.log(buf[0]); // Ascii Code로 표현이 됨
console.log(buf[1]); // Ascii Code로 표현이 됨
console.log(buf[2]); // Ascii Code로 표현이 됨
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(3); // 사이즈가 3개인 Buffer를 만듬
const buf3 = Buffer.allocUnsafe(3); // fast
buf2[0] = 72;
buf2[1] = 105;
buf2[2] = 32;
buf2.copy(buf3);
console.log(buf2);
console.log(buf2.toString());
console.log(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
