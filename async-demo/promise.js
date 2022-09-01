// Lec 6 Promises

// creating a promise object
const p = new Promise((resolve, reject) => {
    // Kick off some async workd
    //...
    setTimeout(() => {
        resolve(1) // pending => resolved, fullfilled
        // in case of error return error object

        // pending=> rejected
        reject(new Error('message'))// message that we pass here will be stored in the property called message
},2000)
    
    // in case of error return error object
    //reject(new Error('message'))
})


// consuming promise // chaining methods
p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message))