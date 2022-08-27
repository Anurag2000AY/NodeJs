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



// //-----------------------------------------------------------------

// // Lec 8 Querying a document

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


// // querying a document***

// async function getCourses() {
//     // finding all document
//     //const courses = await Course.find()

//     // more complex query
//     const courses = await Course
//         .find({ author: 'Mosh', isPublished})
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
    
    
//     console.log(courses)
// }
// getCourses()



//-----------------------------------------------------------------

// // Lec 9 Comparision Query Operators

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


// // querying a document***

// async function getCourses() {
//     // finding all document
//     //const courses = await Course.find()

//     // // more complex query
//     // const courses = await Course
//     //     .find({ author: 'Mosh', isPublished})
//     //     .limit(10)
//     //     .sort({ name: 1 })
//     //     .select({ name: 1, tags: 1 })
    
//     // comparision Operator in Moogoose*****
//             // eq (equal)
//             // ne (not equal)
//             // gt (greater than)
//             // gte (greater than or equal to)
//             // lt (less than)
//             // lte (less than or equal to )
//             // in
//             // nin (not in)
            
//     // comparision query example
//     const courses = await Course
//         // let imagine or courses has price property
//         // let say we want to find course which are of 10$
//         // .find({price: {$gt : 10, $lte: 20}}) // applying operator

//         // let say we want to find course with 10$ 15$ or 20$
//         .find({price: {$in:[10,15,20]}})
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
    
//     console.log(courses)
// }
// getCourses()


// //--------------------------------------------------------------------------------------


// // Lec 10 Logical Query Operators

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


// // querying a document***

// async function getCourses() {
//     // Logical Operator
//         // or
//         // and
    
//     const courses = await Course
//         //.find({ author: 'Mosh'})
//         .find()
//         .and([{author: 'Mosh'},{name: 'Node.js Course'}])
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//     console.log(courses)
    
// }
// getCourses()




// //--------------------------------------------------------------------------------------


// // Lec 11 Logical Query Operators

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


// // querying a document***

// async function getCourses() {

//     // Using regular expressions***
//     const courses = await Course
//         // regular expressions

//         // Starts with mosh
//         .find({ author: /^Mosh/ })
        
//         // Ends with Hamedani
//         .find({ author: /Hamedani$/i }) // case insensitive
        
//         // Contains Mosh
//         .find({author: /.*Mosh.*/i})
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//     console.log(courses)
    
// }
// getCourses()





// //--------------------------------------------------------------------------------------


// // Lec 12 Counting

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


// // querying a document***

// async function getCourses() {
 
//     const courses = await Course
//         .find({ author: 'Mosh'})
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//         // returns the count of document match this criteria
//         .count()
//     console.log(courses)
    
// }
// getCourses()


//--------------------------------------------------------------------------------------


// // Lec 13 Pagination

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


// // querying a document***

// async function getCourses() {

//     // pagination
//     const pageNumber = 2
//     const pageSize = 10
 
//     const courses = await Course
//         .find({ author: 'Mosh' })
//         .skip((pageNumber-1)*pageSize)
//         .limit(pageSize)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//     console.log(courses)
    
// }
// getCourses()




// //--------------------------------------------------------------------------------------


// // // Lec 17 Updating Document

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


// // querying a document***

// async function getCourses() {

//     // pagination
//     const pageNumber = 2
//     const pageSize = 10
 
//     const courses = await Course
//         .find({ author: 'Mosh' })
//         .skip((pageNumber-1)*pageSize)
//         .limit(pageSize)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//     console.log(courses)
    
// }


// // Updating a mongodb Document

// async function updateCourse(id) {
//     // approach1 : Query first
//     // findById()
//     // Modify its properties
//     // save()

//     // Approach 2: Update first
//     // Update Directly
//     // Optinally: get the update document


//     // Approach 1
//     const course = await Course.findById(id)
//     if (!course) return
//     course.author = 'Another Author'

//     // Method 2
//     // course.set({
//     //     author: 'Another Author'
//     // })

//     const result = await course.save()
//     console.log(result)

// }

// updateCourse('63087d31201296696427b586')



//--------------------------------------------------------------------------------------


// // Lec 18 Updating a Document Update First

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


// // querying a document***

// async function getCourses() {

//     // pagination
//     const pageNumber = 2
//     const pageSize = 10
 
//     const courses = await Course
//         .find({ author: 'Mosh' })
//         .skip((pageNumber-1)*pageSize)
//         .limit(pageSize)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//     console.log(courses)
    
// }


// // Updating a mongodb Document

// async function updateCourse(id) {
//     // approach1 : Query first
//     // findById()
//     // Modify its properties
//     // save()

//     // Approach 2: Update first
//     // Update Directly
//     // Optinally: get the update document


//     // // Approach 1
//     // const course = await Course.findById(id)
//     // if (!course) return
//     // course.author = 'Another Author'

//     // // Method 2
//     // // course.set({
//     // //     author: 'Another Author'
//     // // })

//     // const result = await course.save()
//     // console.log(result)


//     // Approach 2
//     // update multiple document
//     // const res = await Course.update({ _id: id }, {
//     //     $set: {
//     //         author: 'Mosh'
//     //     }
//     // })


//     //findByIdAndUpdate
//     const res = await Course.findByIdAndUpdate({ _id: id }, {
//         $set: {
//             author: 'Anurag'
//         }
//     }, {new: true}) // {nwe, true} used for display the update document}

//     console.log(res)

// }

// updateCourse('63087d31201296696427b586')





//---------------------------------------------------------------------------------

// // Lec 19 Removing Documents

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

    // pagination
    const pageNumber = 2
    const pageSize = 10
 
    const courses = await Course
        .find({ author: 'Mosh' })
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log(courses)
    
}


// Updating a mongodb Document

// async function updateCourse(id) {
    // approach1 : Query first
    // findById()
    // Modify its properties
    // save()

    // Approach 2: Update first
    // Update Directly
    // Optinally: get the update document


    // // Approach 1
    // const course = await Course.findById(id)
    // if (!course) return
    // course.author = 'Another Author'

    // // Method 2
    // // course.set({
    // //     author: 'Another Author'
    // // })

    // const result = await course.save()
    // console.log(result)


    // Approach 2
    // update multiple document
    // const res = await Course.update({ _id: id }, {
    //     $set: {
    //         author: 'Mosh'
    //     }
    // })


//     //findByIdAndUpdate
//     const res = await Course.findByIdAndUpdate({ _id: id }, {
//         $set: {
//             author: 'Anurag'
//         }
//     }, {new: true}) // {nwe, true} used for display the update document}

//     console.log(res)

// }

// updateCourse('63087d31201296696427b586')


// Removing Course

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id })
    // const result = await Course.deleteMany{_id: id}
    // getting the document that are deleted
    const course = await Course.findByIdAndRemove(id)
    console.log(course)
}
removeCourse('63087d31201296696427b586')