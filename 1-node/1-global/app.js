const fs = require('fs');

console.log(global);

global.hello = () => {
  global.console.log('Hello Function');
};

global.hello();
hello();
