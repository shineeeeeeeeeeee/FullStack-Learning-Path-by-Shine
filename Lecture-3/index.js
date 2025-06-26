const express = require('express') // to include an object -> express
const app = express() // to create an app and initialize it
const port = 3000 // An address to serve an application

// A request sent to home page path, and a respond given with a message
app.get('/', (req, res) => {
    res.send('Hello World')
})

// app is listening to port: 3000 to server incoming requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})