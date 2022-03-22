const EventEmitter = require('events');

//create class
class myemitter extends EventEmitter{}

//init object
const myEmitter = new myemitter();

//event listener
myEmitter.on('event',() => console.log('event fired!'));

//init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
