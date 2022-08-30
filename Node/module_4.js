
// // Lec 4 Building your first web server


// const express = require('express')
// // it returns a fuction

// // this fuction returns the object of type express
// const app = express() // app is the convention to store express object

// creating a get request
// // this method take two arguements
//     //1.path or ulr
//     //2.callback fuction ->(this fuction will be called when the http GET request arrives to that endpoint)
//             // call back function(route handler) has two arguments
//                 //1. request
//                 //2. response

// // this is called route
// app.get('/', (req, res) => {

//     res.send([1,2,3])
// })


// // creating another route
// // /api/courses -> called endpoint
// app.get('/api/courses', (req, res) => {
//     res.send('hi')
// })

// // we want to create a assing some port in our server to listen for incoming requests
// // here port is set manually
// // app.listen(3000, ()=>console.log('Listening on port 3000'))

//==================================================================================================================

// Lec 5 Environment variable
//____________________________________________________
// // here port is set dynamically
// const port = process.env.PORT || 3000

// app.listen(port, () => console.log(`listening on port ${port}....`))


//==================================================================================================================

// // Lec 7 Route parameter

// const express = require('express')
// const app = express()

// // setting the endpoint for the home page

// app.get('/', (req, res)=> {
//     res.send('This is Home page')
// })

// // setting end point to get the list of app courses
// app.get('/api/courses', (req, res) => {
//     res.send([1,2,3,4])
// })

// // setting endpoint in order to acces one element of courses
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id)
// })

// // setting multiple parameters
// // app.get('/api/post/:year/:month',(req, res) => {
// //     res.send(req.params)
// // })

// // How to read query parameters
// app.get('/api/post/:year/:month',(req, res) => {
//     res.send(req.query)
// })

// const port= process.env.PORT || 3000
// app.listen(port, () => console.log(`listening on port ${port}.........`))



//==================================================================================================================

// Lec 8 Handling http GET  request

// const express = require('express')
// const app = express()

// build courses database
// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]

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
//     if (!course) res.status(404).send('The course with the given ID was not FOUND ') //404 for object not found
//     res.send(course)
// })


// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })



//==================================================================================================================
// Lec 9 Handling http POST request

// const express = require('express')
// const app = express()

// // adding the middleware**
// app.use(express.json())

// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]

// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // endpoint for accessesing courses
// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// })

// // adding post Method**
// app.post('/api/courses',(req,res) => {
//     const course = {
//         // it is given by the data base but in this we are defining it
//         id: courses.length + 1,

//         // read from the body of request
//         // assuming the body have name property
//         name: req.body.name
//     }
//     // pushing the course into courses array
//     courses.push(course)
//     // sending the response that course is addes
//     res.send(course)
// })
 
// // endpoint for accessing specific course
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c =>c.id === parseInt(req.params.id))
//     if (!course) res.status(404).send('The course with the given ID was not FOUND ') //404 for object not found
//     res.send(course)
// })


// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//==================================================================================================================

// Lec 11 Input Validation

// adding joi module**
// const Joi = require('joi') // It returns the class

// const express = require('express')
// const app = express()

// // adding the middleware**
// app.use(express.json())

// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]

// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // adding post Method**
// app.post('/api/courses', (req, res) => {
    // // adding input validation
    // // adding schema
    // const schema = Joi.object({
    //     name: Joi.string()
    //         .min(3)
    //         .required()
    // })
    // // validating
    // const { error, value } = schema.validate(req.body)
    // if (error) {
    //     console.log(error)
    //     return res.send(error.details[0].message)
    // }
    
//     const course = {
//         // it is given by the data base but in this we are defining it
//         id: courses.length + 1,

//         // read from the body of request
//         // assuming the body have name property
//         name: req.body.name
//     }
//     // pushing the course into courses array
//     courses.push(course)
//     // sending the response that course is addes
//     res.send(course)
// })
 

// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })

//==================================================================================================================

// Lec 12 Handling Http Put request

// const Joi = require('joi')
// const express = require('express')
// const app = express()

// // adding the middleware**
// app.use(express.json())

// const courses = [
//     { id: 1, name: 'course_1' },
//     { id: 2, name: 'course_2' },
//     { id: 3, name: 'course_3' }
// ]

// // end point for the home page
// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

// // Now Put request (update)***

// app.put('/api/courses/:id', (req, res) => {
//     // Look up the course
//     // If not existing, return 404
//     const course = courses.find(c=> c.id=== parseInt(req.params.id))
//     if (!course) res.status(404).send('404 Bad Request')
    
//     // Validate
//     // if invalid, return 400 - bad reques


//     //const result = validateCourse(req.body)
        // or
//     // object destructoring
//     const { error } = validateCourse(req.body)

//     if (error) {
//         res.status(400).send(error.details[0].message)
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

// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`listening on port ${port}.....`)
// })


//  //==================================================================================================================

// // lec 13 HTTP Delete request

// const Joi = require('joi')
// const express = require('express')
// const app = express()

// // adding the middleware**
// app.use(express.json())

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




