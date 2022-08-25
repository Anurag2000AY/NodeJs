// Module 5
//-------------

//--------------------------------------------------------
// Lec 3 Creating Custom Middleware

// // configuration module
// const config = require('config')
// const logger = require('./module_5_logger')
// const Joi = require('joi')
// const express = require('express')
// const app = express()

// // adding the middleware**
// app.use(express.json())

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


// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]
// //Get request
// //-------------------------------------
// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // endpoint for accessesing courses
// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// })
 
// // endpoint for accessing specific course
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c =>c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send('The course with the given ID was not FOUND ') //404 for object not found
//     res.send(course)
// })

// // Now Put request (update)***
// //----------------------------------

// app.put('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // If not existin, return 404
//     const course = courses.find(c=> c.id=== parseInt(req.params.id))
//     if (!course) return res.status(404).send('404 Bad Request')
    
//     // Validate
//     //---------------
//     // if invalid, return 400 - bad reques


//     //const result = validateCourse(req.body)
//     // object destructoring
//     const { error } = validateCourse(req.body)

//     if (error) {
//         return res.status(400).send(error.details[0].message)
//     }

//     // update course
//     // return the updated  course
//     course.name = req.body.name
//     res.send(course)

// })

// // defining a validation fuction
// function validateCourse(course) {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     })
//     return schema.validate(course)
// }


// // delete request**
// //----------------------------
// app.delete('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // Not exiting, return 404
//     const course = courses.find(c => c.id === parseInt(req.params.id))
    
//     if (!course) {
//         res.status(400).send('The course with given ID was not found')
//         return
//     }

//     // Delete
//     const index = courses.indexOf(course)
//     courses.splice(index, 1)
    
//     // return the same course
//     res.send(course)
// })

// // adding dynamic listener
// //------------------------------
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })


// -----------------------------------------------------------------
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

// // creating the custom middleware fuction ***
//      // to terminate the request response cycle

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



// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]
// //Get request
// //-------------------------------------
// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // endpoint for accessesing courses
// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// })
 
// // endpoint for accessing specific course
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c =>c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send('The course with the given ID was not FOUND ') //404 for object not found
//     res.send(course)
// })

// // Now Put request (update)***
// //----------------------------------

// app.put('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // If not existin, return 404
//     const course = courses.find(c=> c.id=== parseInt(req.params.id))
//     if (!course) return res.status(404).send('404 Bad Request')
    
//     // Validate
//     //---------------
//     // if invalid, return 400 - bad reques


//     //const result = validateCourse(req.body)
//     // object destructoring
//     const { error } = validateCourse(req.body)

//     if (error) {
//         return res.status(400).send(error.details[0].message)
//     }

//     // update course
//     // return the updated  course
//     course.name = req.body.name
//     res.send(course)

// })

// // defining a validation fuction
// function validateCourse(course) {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     })
//     return schema.validate(course)
// }


// // delete request**
// //----------------------------
// app.delete('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // Not exiting, return 404
//     const course = courses.find(c => c.id === parseInt(req.params.id))
    
//     if (!course) {
//         res.status(400).send('The course with given ID was not found')
//         return
//     }

//     // Delete
//     const index = courses.indexOf(course)
//     courses.splice(index, 1)
    
//     // return the same course
//     res.send(course)
// })

// // adding dynamic listener
// //------------------------------
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//--------------------------------------------------------------------------
// Lec 8 Debugging

// // loading debug module**
// const startupDebugger = require('debug')('app:startup')
// // database dubugger
// const dbDebugger = require('debug')('app:dp')


// // configuration module***
// const config = require('config')
// const logger = require('./module_5_logger')
// const Joi = require('joi')
// const morgan = require('morgan')
// const express = require('express')
// const app = express()

// if (app.get('env') === "development") {
//     app.use(morgan('tiny'))
//     startupDebugger('Morgan enabaled.......')
// }

// // db work
// dbDebugger('connected to the database')

// // adding the middleware**
// app.use(express.json())


// //configuration
// console.log('Application Name :' + config.get('name'))
// console.log('Mail Server :'+ config.get('mail.host'))

// // creating the custom middleware fuction ***
//      // to terminate the request response cycle

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



// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]
// //Get request
// //-------------------------------------
// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // endpoint for accessesing courses
// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// })
 
// // endpoint for accessing specific course
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c =>c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send('The course with the given ID was not FOUND ') //404 for object not found
//     res.send(course)
// })

// // Now Put request (update)***
// //----------------------------------

// app.put('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // If not existin, return 404
//     const course = courses.find(c=> c.id=== parseInt(req.params.id))
//     if (!course) return res.status(404).send('404 Bad Request')
    
//     // Validate
//     //---------------
//     // if invalid, return 400 - bad reques


//     //const result = validateCourse(req.body)
//     // object destructoring
//     const { error } = validateCourse(req.body)

//     if (error) {
//         return res.status(400).send(error.details[0].message)
//     }

//     // update course
//     // return the updated  course
//     course.name = req.body.name
//     res.send(course)

// })

// // defining a validation fuction
// function validateCourse(course) {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     })
//     return schema.validate(course)
// }


// // delete request**
// //----------------------------
// app.delete('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // Not exiting, return 404
//     const course = courses.find(c => c.id === parseInt(req.params.id))
    
//     if (!course) {
//         res.status(400).send('The course with given ID was not found')
//         return
//     }

//     // Delete
//     const index = courses.indexOf(course)
//     courses.splice(index, 1)
    
//     // return the same course
//     res.send(course)
// })

// // adding dynamic listener
// //------------------------------
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//---------------------------------------------------
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