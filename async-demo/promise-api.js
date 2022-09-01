// Mod 6

// Lec 9 Creating a setted Promise

// already resolved promise
// const p =Promise.resolve({ id: 1 })
// p.then(result => console.log(result))

// already rejected promise
// const p =Promise.reject(new Error('reason for rejection...'))
// p.catch(error => console.log(error))


//---------------------------------------------------------
// Lec 10 Running Promises in parallel

// creating two promises in parallel
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async operation 1....')
//         resolve(1)
//     }, 2000)
// })

// when promise got rejected
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1....')
       reject(new Error('because something failed'))
    }, 2000)
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2....')
        resolve(2)
    }, 2000)
})

// calling all method of Promise class it takes the array of Promises
// it returns the new promise when all the promises of this array will be resolved
// Promise.all([p1, p2])
//     .then(result => console.log(result))

// Promise with error handling
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message))
    
// note if any of the promise is failed then all are considered to be rejected


// sometime if display something when one async operations is completed

// //creating two promises in parallel
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async operation 1....')
//         resolve(1)
//     }, 2000)
// })

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async operation 2....')
//         resolve(2)
//     }, 2000)
// })

// Promise.race([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error', err.message))
  