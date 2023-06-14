console.log('logging......');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); //경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 2, 'Same!');
console.assert(2 === 3, 'Not Same!');

//print object
const summer = { name: 'JeongMin', age: 31, hobbit: { name: '눕기' } };
console.log(summer);
console.table(summer);
console.dir(summer, { showHidden: true, depth: 0 });

// measuring tiem
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
// console.countReset('a function');
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();
