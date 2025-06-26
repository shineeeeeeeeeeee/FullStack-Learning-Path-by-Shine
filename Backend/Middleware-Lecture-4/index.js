const express = require('express') // to include an object -> express
const app = express() // to create an app and initialize it
const port = 3000 // An address to serve an application

const route = require('./routes/routes')
app.use('/api', route) // mounting

// loading middleware in the app -> inbuilt middleware [ to convert into valid js object ]
app.use(express.json())

// Middleware is a function that comes in between request and respond cycle as a layer, middleware can use data to verify or print data log and even validate it.
// error handling, auth/authorization or even to execute code

// for example: in case of protected routes, middleware authenticates the requests and if satisfies, it allows the respond.

// req -> logging -> auth -> validation -> respond -> creation of middleware
const loggingMiddleware = function (req, res, next){
    console.log("Logging event")
    next()
}
app.use(loggingMiddleware); // loading into app
const authMiddleware = function (req, res, next){
    console.log("Authentication event")
    next() // next only when request pass through otherwise a respond sent (not authenticated)
}
app.use(authMiddleware);
const validateMiddleware = function (req, res, next){
    console.log("Validation event")
    next()
}
app.use(validateMiddleware); // order matters

// A request sent to home page path, and a respond given with a message
app.get('/', (req, res) => {
    console.log("Main route")
    //console.log(req.body)
    res.send('Hello World')
    // this doesn't send body hence middleware is used to parse the json from the body appropriately to use in our code. -> express.json() [middleware]
})

// app is listening to port: 3000 to server incoming requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Types: App-level, Route-level, ErrorHandling-level, BuiltIn-level & ThirdParty-level -> install [npm i cookie-parser]
