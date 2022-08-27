// Module 8 Mongo Data Validation

// // Lec 1 Validation

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
//     name: {type: String, required: true},
//     author: String,
//     tags: [String],
//     isPublished: Boolean,
//     date: { type: Date, default: Date.now },
//     isPulished: Boolean,
//     price: Number
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         // name: 'Angular Course',
//         author: 'Mosh',
//         tags: ['angular', 'frontend'],
//         isPublished: true,
//         price: 15
//     })

//     try {
//         //await course.validate()

//         // course.validate((err) => {
//         //     if(err){}
//         // })

//         // or

//         const result = await course.save()
//         console.log(result)
//     }
//     catch (ex) {
//         console.log(ex.message)
//     }
    
// }

// createCourse()




// //----------------------------------------------------------------------------------------

// // Lec 2 Built in Validator

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
//     // adding additional validator
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//         //match: /patter/

//     },
//     category: {
//         type: String,
//         // if category is other than that we will get an error
//         enum: ['web', 'mobile', 'network'],
//         required: true
//     },
//     author: String,
//     tags: [String],
//     isPublished: Boolean,
//     date: { type: Date, default: Date.now },
//     // Using built in validation
//     price: {
//         type: Number,
//         required: function() {return this.isPublished}
//     }
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'Angular Course',
//         category: '-',
//         author: 'Mosh',
//         tags: ['angular', 'frontend'],
//         isPublished: true,
//         price: 15
//     })

//     try {
//         //await course.validate()

//         // course.validate((err) => {
//         //     if(err){}
//         // })

//         // or

//         const result = await course.save()
//         console.log(result)
//     }
//     catch (ex) {
//         console.log(ex.message)
//     }
    
// }

// createCourse()



// //----------------------------------------------------------------------------------------

// // Lec 3 Custom Validators

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
//     // adding additional validator
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//         //match: /patter/

//     },
//     category: {
//         type: String,
//         // if category is other than that we will get an error
//         enum: ['web', 'mobile', 'network'],
//         required: true
//     },
//     author: String,
    
//     // custom validator***
//     // How to ensure that at least one tag must be listed in every course
//     tags: {
//         type: Array,
//         validate: {
//             validator: function (v) {
//                 return v && v.lenght>0
//             },
//             message: 'A course mush have at leat one tag'
//         }
//     },
//     isPublished: Boolean,
//     date: { type: Date, default: Date.now },
//     // Using built in validation
//     price: {
//         type: Number,
//         required: function() {return this.isPublished}
//     }
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'Angular Course',
//         category: '-',
//         author: 'Mosh',
//         tags: null,
//         isPublished: true,
//         price: 15
//     })

//     try {
//         //await course.validate()

//         // course.validate((err) => {
//         //     if(err){}
//         // })

//         // or

//         const result = await course.save()
//         console.log(result)
//     }
//     catch (ex) {
//         console.log(ex.message)
//     }
    
// }

// createCourse()

//----------------------------------------------------------------------------------------

// // Lec 4 Async Validator

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
//     // adding additional validator
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//         //match: /patter/

//     },
//     category: {
//         type: String,
//         // if category is other than that we will get an error
//         enum: ['web', 'mobile', 'network'],
//         required: true
//     },
//     author: String,
    
//     // custom validator***
//     // How to ensure that at least one tag must be listed in every course
//     tags: {
//         type: Array,
//         // validate: {
//         //     validator: function (v) {
//         //         return v && v.lenght>0
//         //     },
//         //     message: 'A course mush have at leat one tag'
//         // }

//         // using async validator
//         validate: {
//             isAsync: true,
//             validator: function (v, callback) {
//                 setTimeout(() => {
//                     const result = v && v.lenght > 0
//                     callback(result)
//                 },4000)
//             },
//             message: 'A course mush have at leat one tag'
//         }
//     },
//     isPublished: Boolean,
//     date: { type: Date, default: Date.now },
//     // Using built in validation
//     price: {
//         type: Number,
//         required: function() {return this.isPublished}
//     }
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'Angular Course',
//         category: '-',
//         author: 'Mosh',
//         tags: null,
//         isPublished: true,
//         price: 15
//     })

//     try {
//         //await course.validate()

//         // course.validate((err) => {
//         //     if(err){}
//         // })

//         // or

//         const result = await course.save()
//         console.log(result)
//     }
//     catch (ex) {
//         console.log(ex.message)
//     }
    
// }

// createCourse()


//----------------------------------------------------------------------------------------

// // Lec 5 Validation Error

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
//     // adding additional validator
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//         //match: /patter/

//     },
//     category: {
//         type: String,
//         // if category is other than that we will get an error
//         enum: ['web', 'mobile', 'network'],
//         required: true
//     },
//     author: String,
    
//     // custom validator***
//     // How to ensure that at least one tag must be listed in every course
//     tags: {
//         type: Array,
//         validate: {
//             validator: function (v) {
//                 return v && v.lenght>0
//             },
//             message: 'A course mush have at leat one tag'
//         }
//     },
//     isPublished: Boolean,
//     date: { type: Date, default: Date.now },
//     // Using built in validation
//     price: {
//         type: Number,
//         required: function() {return this.isPublished}
//     }
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'Angular Course',
//         category: '-',
//         author: 'Mosh',
//         tags: null,
//         isPublished: true,
//         price: 15
//     })

//     try {
//         //await course.validate()

//         // course.validate((err) => {
//         //     if(err){}
//         // })

//         // or

//         const result = await course.save()
//         console.log(result)
//     }

//     // Explorin errors
//     catch (ex) {
//         // iterating over all the properties
//         for (field in ex.errors) {
//             //console.log(ex.errors[field])
//             console.log(ex.errors[field].message)
//         }
//     }
    
// }

// createCourse()




//---------------------------------------------------------------------------------
// Lec 6 SchemaType Options

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
//     // adding additional validator
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//         //match: /patter/

//     },
//     category: {
//         type: String,
//         // if category is other than that we will get an error
//         enum: ['web', 'mobile', 'network'],
//         required: true,

//         // additional properties**
//         lowercase: true,
//         // uppercase: true,
//         trim: true // remove padding
//     },
//     author: String,
    
//     // custom validator***
//     // How to ensure that at least one tag must be listed in every course
//     tags: {
//         type: Array
//     },
//     isPublished: Boolean,
//     date: { type: Date, default: Date.now },
//     // Using built in validation
//     price: {
//         type: Number,
//         required: function () { return this.isPublished },
//         min: 10,
//         max: 200,
//         // defining custorm properties
//         get: v => Math.round(v),
//         set: v => Math.round(v)
//     }
// })

// // Making the model

// // returns class
// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'Angular Course',
//         category: 'Web',
//         author: 'Mosh',
//         tags: ['frontend'],
//         isPublished: true,
//         price: 15.8
//     })

//     try {
//         //await course.validate()

//         // course.validate((err) => {
//         //     if(err){}
//         // })

//         // or

//         const result = await course.save()
//         console.log(result)
//     }

//     // Explorin errors
//     catch (ex) {
//         // iterating over all the properties
//         for (field in ex.errors) {
//             //console.log(ex.errors[field])
//             console.log(ex.errors[field].message)
//         }
//     }
    
// }
  
// createCourse()


