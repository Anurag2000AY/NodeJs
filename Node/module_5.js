// Module 5
//-------------

//--------------------------------------------------------
// // Lec 3 Creating Custom Middleware

// const express = require('express')
// const app = express()

// // custome Middleware Function
// const logger = require('./module_5_logger')

// // creating the custom middleware fuction ***
//     // next-> used to point next fuction to execute
//     // to terminate the request response cycle

// // shifiting it into different module
// // app.use(function (req, res, next) {
// //     console.log('Logging.......')
// //     next() // to terminate the request response cycle so our request will not hang
// // })

// app.use(logger)

// app.use(function (req, res, next) {
//     console.log('Authenticating....')
//     next() // to terminate the request response cycle so our request will not hang
// })


// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // adding dynamic listener
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//====================================================================================================================
// Lec 7 configuration

// // configuration module***
// const config = require('config')
// const logger = require('./module_5_logger')
// const Joi = require('joi')
// const express = require('express')
// const app = express()

// // adding the middleware**
// app.use(express.json())


// //configuration
// console.log('Application Name :' + config.get('name'))
// console.log('Mail Server :'+ config.get('mail.host'))

// // adding dynamic listener
// //------------------------------
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//================================================================================================================
// Lec 8 Debugging

// // loading debug module**
// const startupDebugger = require('debug')('app:startup')
// // database dubugger
// const dbDebugger = require('debug')('app:dp')

// const logger = require('./module_5_logger')
// const express = require('express')
// const app = express()

// if (app.get('env') === "development") {
//     app.use(morgan('tiny'))
//     startupDebugger('Morgan enabaled.......')
// }

// // db work
// dbDebugger('connected to the database')

// // adding dynamic listener
// //------------------------------
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//================================================================================================================
// Lec 9 Templating Engine

// const express = require('express')
// const app = express()


// // setting templating engine
// app.set('view engine', 'pug')
// // setting path of views
// app.set('views', './views')

// // setting the endpoint for the home page
// app.get('/', (req, res)=> {
//     //res.send('This is Home page')
//     res.render('index', {title:'my express app', message: 'Hello amigo..'})
// })

// const port= process.env.PORT || 3000
// app.listen(port, () => console.log(`listening on port ${port}.........`))


//--------------------------------------------------------------------