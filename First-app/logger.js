// Module 2 Lec 4

var url = 'http://mylogger.io/log';

function log(message) {
    //send an HTTP request
    console.log(message)
}
// this syntax is used to export object
//module.exports.log = log

// this syntax is used to export single properties like fuctions
module.exports = log




// // Lec 12 Extending event Emmitter


// const EventEmitter = require('events')

// var url = 'http://mylogger.io/log';

// class Logger extends EventEmitter{
// // log method(not fuction in class)
//    log(message) {
//         //send an HTTP request
//         console.log(message)
    
//         // raising event
//         this.emit('messageLogged',{name: 'Anurag', roll: 1909069})
//     }
// }

// mudule.exports=Logger
