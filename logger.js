const EventEmitter = require('events');
const uuid = require('uuid');


class logger extends EventEmitter {
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(),msg});

    }
}

//module.exports = logger;
const Logger = new logger();

Logger.on('message',data=> console.log('called Listener',data));

Logger.log('hello world');
Logger.log('hello ');
Logger.log(' world');