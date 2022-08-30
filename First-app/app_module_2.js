// // Lec 6 First Node app

// function sayHello(name) {
//     console.log('Hello '+ name)
// }

// //sayHello('Mosh')
// console.log(window)
 

// // Module 2 Lec 5

// // Loading a Module
 
// require('./logger.js')
// //or without .js extension
// var logger = require('./logger')

// //best practice to import the module as a object in constant variable
// const log = require('./logger')
// log('message')


//===============================================================================================

// Lec 7 Path Module

// const path = require('path') // if we have the name of the module we can directly enter it

// var pathObj = path.parse(__filename)

// console.log(pathObj)





// lec 8 OS Module

// const os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()


// // traditional method
// //console.log('Total Memory ' + totalMemory)

// // Template string
// // ES6 / ES2015: ECMAScript 6

// console.log(`Total Memory: ${totalMemory/(1024*1024)}
// freeMemory: ${freeMemory/(1024*1024)}`)



// // Lec 9 file system Module

// const fs = require('fs')

// // using synchronous methods

// // returns array of files
// const files = fs.readdirSync('./')
// console.log(files)

// // asynchronous form
// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err)
//     else console.log('Result',files)
// })

//=================================================================================================

// // Lec 10 Event Module

// // first uppercase reperesnt it is class
// const EventEmitter = require('events')

// // instantionation of event class
// const emmitter = new EventEmitter();

// // Register a listener

// //emmiter.addListner or
// emmitter.on('messageLogged', function(){
//     console.log('Listener called')
// })

// //raise an event
// // emit-> making a noise or produce something
// emmitter.emit('messageLogged')

//===========================================================================

// // Lec 11 Event Arguement

// // first uppercase reperesnt it is class
// const EventEmitter = require('events')

// // instantionation of event class
// const emmitter = new EventEmitter();

// // Register a listener

// //emmiter.addListner or

// //we can use arrow fuction fuction(arg)
// emmitter.on('messageLogged', (arg)=>{
//     console.log('Listener called',arg)
// })

// //raise an event
// // emit-> making a noise or produce something

// // passing more values as object
// emmitter.emit('messageLogged',{id:1, url:'http://'})


// // Exrecise

// const EventEmitter = require('events')
// const emmiter = new EventEmitter()

// // adding listner
// emmiter.on('logging', (args)=>{
//     console.log(args)
// })

// // raising event

// emmiter.emit('logging',{name: 'Anurag', roll: 1909069})

//=============================================================================================

// // Lec 12 Extending EventEmitter

// half cosde is in logger module.

// const EventEmitter = require('events')

// const Logger = require('./logger.js')
// const logger =new Logger()


// // adding listner
// logger.on('messageLogged', (args)=>{
//     console.log(args)
// })

// logger.log('message')

// ==============================================================================================

// // Lec 13 HTTP Modules
// const http = require('http')


//-------------------------------------------------------
// const { SocketAddress } = require('net')
// //const server = http.createServer()
// // // adding listner for checking connection
// // server.on('connection', (socket) => {
// //     console.log('new connection....')
// // })
//----------------------------------------------------------

// // more used method

// // function(req,res) or arrow fuction
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('hello World')
//         res.end()
//     }

//     // handling various routes
//     // we can send databse query or html file or other type of objects as a response
//     if (req.url === '/api/courses') {
//         // sending JSON file as a list of coureses from database
//         res.write(JSON.stringify([1, 2, 3]))
//         res.end()
//     }
// })

// // adding listner to the port
// server.listen(3000) // listen on port no. 3000

// console.log('Listenign on port 3000...')



