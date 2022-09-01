// Module 6. Asynchronous JavaScript

// // Lec 1 Synchronous vs Asynchronous Code

// console.log('Before')

// // simulating call to database that take 2 sec

// setTimeout(() => { // this is asysnchronous or non blockin fuction
//      console.log('Reading a user from a database....')
// }, 2000)

// console.log('After')
// // by experimentation i found that order of experimentation is
// // Before
// // After
// // Reading a user from a database....


//----------------------------------------------------------------------------------------------
// Lec 2 Patterns for Dealing with Asynchronous code


// console.log('Before')
// const user = getUser(1)
// console.log(user)
// console.log('After')

// function getUser(id) {
//     // simulating call to database that take 2 sec
//     setTimeout(() => { // this is asysnchronous or non blockin fuction
//         console.log('Reading a user from a database....')
//         return {id: id, gitHubUsername: 'mosh'}
//     }, 2000)
//     return 1
// }


//----------------------------------------------------------------------------

// // Lec 3 Callbacks

// console.log('Before')
// // settting a callback fuction

// getUser(1, (user)=>{
//     console.log(user)
    
//     // Get the repositories
//     // value + name of object in which you want to store callback's result
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log(repos)
//     })

// })

// console.log('After')

// function getUser(id, callback ) {
//     // simulating call to database that take 2 sec
//     setTimeout(() => { // this is asysnchronous or non blockin fuction
//         console.log('Reading a user from a database....')
//         callback({ id: id, gitHubUsername: 'mosh' })
//     }, 2000)
// }

// // getting git hub Repo
// function getRepositories(username, callback) {
//     setTimeout(() => { // this is asysnchronous or non blockin fuction
//         console.log('Getting Repos....')
//         callback(['repo1', 'repo2', 'repo2'])
//     }, 2000)
    
// }


//----------------------------------------------------------------------------------------------

//Lec 4 Callbacks Hell

// console.log('Before')
// // settting a callback fuction


// // Asynchornous version of code which contais lot of nested fuctions like nested sql queries
// getUser(1, (user)=>{
//     console.log('user', user)
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('repos', repos)
//     })
// })

// console.log('After')

// // // Sunchronous  (better looking)
// // console.log('Before')

// // const user = getUser(1)
// // const repos = getRepositories(user.getRepositories)
// // const commits = getCommits(repos[0])

// // console.log('after')



// function getUser(id, callback ) {
//     // simulating call to database that take 2 sec
//     setTimeout(() => { // this is asysnchronous or non blockin fuction
//         console.log('Reading a user from a database....')
//         callback({ id: id, gitHubUsername: 'mosh' })
//     }, 2000)
// }

// // getting git hub Repo
// function getRepositories(username, callback) {
//     setTimeout(() => { // this is asysnchronous or non blockin fuction
//         console.log('Reading a user from a database....')
//         callback(['repo1', 'repo2', 'repo2'])
//     }, 2000)
    
// }



//----------------------------------------------------------------------------------------------

//Lec 5 Named Fuctions to Rescue

// console.log('Before')

// // Solving Callbak hell issue
// getUser(1, getRepositories)

// console.log('After')

// // replacing anonymous fuctions with the named fuctions***

// function displayCommits(commits) {
//     console.log(commits)
// }
// function getCommits(repos) {
//     getCommits(repo, displayCommits)
// }
// function getRepositories(user) {
//     getRepositories(user.gitHubUsername,getCommits)
// }

// ///
// function getUser(id, callback ) {
//     setTimeout(() => {
//         console.log('Reading a user from a database....')
//         callback({ id: id, gitHubUsername: 'mosh' })
//     }, 2000)
// }

// // getting git hub Repo
// function getRepositories(username, callback) {
//     setTimeout(() => { // this is asysnchronous or non blockin fuction
//         console.log('Reading a user from a database....')
//         callback(['repo1', 'repo2', 'repo2'])
//     }, 2000)
    
// }



//------------------------------------------------------------------------------------------------


//Lec 7 Replacing Callbacks with promises

// console.log('Before')

// getUser(1, (user)=>{
//     console.log('user', user)
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('repos', repos)
//     })

// })

// console.log('After')

// function getUser(id) {
    
//     // returning a promise***
//     return new Promise((resolve, reject) => {
//         // kick off some async work
//         setTimeout(() => { // this is asysnchronous or non blockin fuction
//             console.log('Reading a user from a database....')
//             resolve({ id: id, gitHubUsername: 'mosh' })
//         }, 2000)
//     })
    
// }

// // getting git hub Repo
// function getRepositories(username) {
//     // setting a promise
//     return new Promise((resolve, reject) => {
//         // some async work....
//         setTimeout(() => {
//             console.log('Reading a user from a database....')
//             resolve(['repo1', 'repo2', 'repo2'])
//         }, 2000)
//     })
// }
// // getting commits
// function getCommits(repo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Calling Github APi')
//             resolve(['commit'])
//         }, 2000)
//     })
// }


// //------------------------------------------------------------
// //Lec 8 Consuming Promises

// console.log('Before')

// // consuiming promise***
// // const p = getUser(1)
// // p.then (or)

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))


// console.log('After')

// function getUser(id) {
//     // returning a promise***
//     return new Promise((resolve, reject) => {
//         // kick off some async work
//         setTimeout(() => { // this is asysnchronous or non blockin fuction
//             console.log('Reading a user from a database....')
//             resolve({ id: id, gitHubUsername: 'mosh' })
//         }, 2000)
//     })
    
// }

// // getting git hub Repo
// function getRepositories(username) {
//     // setting a promise
//     return new Promise((resolve, reject) => {
//         // some async work....
//         setTimeout(() => {
//             console.log('Reading a user from a database....')
//             resolve(['repo1', 'repo2', 'repo2'])
//         }, 2000)
//     })
// }
// // getting commits
// function getCommits(repo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Calling Github APi')
//             resolve(['commit'])
//         }, 2000)
//     })
// }



//------------------------------------------------------------
// //Lec 11 Async and Await

// console.log('Before')

// // // consuming promise
// // getUser(1)
// //     .then(user => getRepositories(user.gitHubUsername))
// //     .then(repos => getCommits(repos[0]))
// //     .then(commits => console.log(commits))


// // async and await
// async function displayCommits() {
//     try {
//         const user = await getUser(1)
//         const repos = await getRepositories(user.gitHubUsername)
//         const commits = await getCommits(repos[0])
//         console.log(commits)
//     }
//     catch (err) {
//         console.log('Error', err.message)
//     }
// }
// displayCommits()



// console.log('After')

// function getUser(id) {
//     // returning a promise***
//     return new Promise((resolve, reject) => {
//         // kick off some async work
//         setTimeout(() => { // this is asysnchronous or non blockin fuction
//             console.log('Reading a user from a database....')
//             //resolve({ id: id, gitHubUsername: 'mosh' })
//             reject(new Error('Error happens'))
//         }, 2000)
//     })
    
// }

// // getting git hub Repo
// function getRepositories(username) {
//     // setting a promise
//     return new Promise((resolve, reject) => {
//         // some async work....
//         setTimeout(() => { 
//             console.log('Reading a user from a database....')
//             resolve(['repo1', 'repo2', 'repo2'])
//         }, 2000)
//     }) 
// }
// // getting commits
// function getCommits(repo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Calling Github APi')
//             resolve(['commit'])
//         }, 2000)
//     })
// }






