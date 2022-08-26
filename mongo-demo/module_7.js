// Module 7 CRUD operation using mongoose


// // Lec 4 Connecting to MongoDB

// // loading mongoose object
// const { connect } = require('mongoose')
// const mongoose = require('mongoose')

// //connecting to the mongoDB database

// // playground-> name of the database
// // connect method returns promise
// mongoose.connect('mongodb://localhost/playground') // takes connection string
//     .then(()=> console.log('connected to MongoDB......'))
//     .catch(err => console.error('Could not connect to MongoDB'))

// //-----------------------------------------------------------------

// // Lec 5 Schemas

// // loading mongoose object
// const { connect } = require('mongoose')
// const mongoose = require('mongoose')

// //connecting to the mongoDB database

// // playground-> name of the database
// // connect method returns promise
// mongoose.connect('mongodb://localhost/playground') // takes connection string
//     .then(()=> console.log('connected to MongoDB......'))
//     .catch(err => console.error('Could not connect to MongoDB'))

// // defining the schema
// const courseSchema = new mongoose.Schema({
//     name: String,
//     author: String,
//     tags: [String],
//     date: { type: Date, default: Date.now },
//     isPulished: Boolean
// })



// //-----------------------------------------------------------------

// // Lec 6 Models

// // loading mongoose object
// const { connect } = require('mongoose')
// const mongoose = require('mongoose')

// //connecting to the mongoDB database

// // playground-> name of the database
// // connect method returns promise
// mongoose.connect('mongodb://localhost/playground') // takes connection string
//     .then(()=> console.log('connected to MongoDB......'))
//     .catch(err => console.error('Could not connect to MongoDB'))

// // defining the schema
// const courseSchema = new mongoose.Schema({
//     name: String,
//     author: String,
//     tags: [String],
//     date: { type: Date, default: Date.now },
//     isPulished: Boolean
// })
// // Making the model****

// // returns class
// const Course = mongoose.model('Course', courseSchema)
// const course = new Course({
//     name: 'Node.js Course',
//     author: 'Mosh',
//     tags: ['node', 'backend'],
//     isPublished: true
// })




// //-----------------------------------------------------------------

// // Lec 7 Saving a Document

// // loading mongoose object
// const { connect } = require('mongoose')
// const mongoose = require('mongoose')

// //connecting to the mongoDB database

// // playground-> name of the database
// // connect method returns promise
// mongoose.connect('mongodb://localhost:27017/playground') // takes connection string
//     .then(()=> console.log('connected to MongoDB......'))
//     .catch(err => console.error('Could not connect to MongoDB'))

// // defining the schema
// const courseSchema = new mongoose.Schema({
//     name: String,
//     author: String,
//     tags: [String],
//     date: { type: Date, default: Date.now },
//     isPulished: Boolean
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'Angular Course',
//         author: 'Mosh',
//         tags: ['angular', 'frontend'],
//         isPublished: true
//     })

//     // saving the document in the database****
//     // it is asynchronous operation
//     // this method returns a promise
//     // when we save this course in mongoDb it wil assing this a id
//     const result = await course.save()
//     console.log(result)
// }
// createCourse()



//-----------------------------------------------------------------

// Lec 8 Querying a document

// loading mongoose object
const { connect } = require('mongoose')
const mongoose = require('mongoose') 

//connecting to the mongoDB database

// playground-> name of the database
// connect method returns promise
mongoose.connect('mongodb://localhost:27017/playground') // takes connection string
    .then(()=> console.log('connected to MongoDB......'))
    .catch(err => console.error('Could not connect to MongoDB'))

// defining the schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPulished: Boolean
})

// Making the model

// returns class
const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true
    })

    // saving the document in the database****
    // it is asynchronous operation
    // this method returns a promise
    // when we save this course in mongoDb it wil assing this a id
    const result = await course.save()
    console.log(result) 
}


// querying a document***

async function getCourses() {
    // finding all document
    //const courses = await Course.find()

    // more complex query
    const courses = await Course
        .find({ author: 'Mosh'})
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    
    
    console.log(courses)
}
getCourses()