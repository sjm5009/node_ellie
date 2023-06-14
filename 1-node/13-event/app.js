const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('summer', callback1);

emitter.on('summer', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('summer', { message: '1' });
emitter.emit('summer', { message: '2' });
// emitter.removeListener('summer', callback1);
emitter.removeAllListeners();
emitter.emit('summer', { message: '3' });
