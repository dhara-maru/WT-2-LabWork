const ee = require('event')
let eventEmitter = new EventEmitter();


eventEmitter.on('myEvent', (msg) => {
   console.log(msg);
});


eventEmitter.emit('myEvent', "First event");