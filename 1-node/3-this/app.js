console.log('----- function -----');
function hi() {
  console.log(this);
  console.log(this === global);
}
hi();

console.log('----- class -----');
class A {
  constructor(num) {
    this.num = num;
  }

  memberfunction() {
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberfunction();

console.log('----- global scope -----');
console.log(this);
console.log(this === module.exports);
