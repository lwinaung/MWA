// "use strict";
const EventEmitter = require('events');

class Violin extends EventEmitter {
    constructor() {
        super();
        let self = this;
        setInterval(function () {
            self.emit('note');
        }, 1000);
    }    
}

var violin = new Violin();

violin.on('note', function () {
    console.log('violin is playing music');
});