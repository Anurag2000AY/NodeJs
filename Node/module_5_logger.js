function log(req, res, next) {
    console.log('Logging.......')
    next() // to terminate the request response cycle so our request will not hang
}

module.exports = log