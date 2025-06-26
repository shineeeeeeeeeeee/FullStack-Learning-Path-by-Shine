const express = require('express')
const app = express()
const port = 3000

// import routes
const item = require('./routes/item')
const bird = require('./routes/bird')

// load
app.use('/api', item)
app.use('/filter', bird)

// -> /api/ -> home, /api/items -> post, /api/items/id -> put/delete

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// requests : get, post, put, delete

// // get request - to fetch
// app.get('/', (req, res) => {
//     // res.send('Got a GET Request')
//     res.sendFile('./dummy.html', {
//         root:__dirname
//     });
// });

// // post request - to post/add
// app.post('/items', (req, res) => {
//     // res.send('Got a POST Request')
//     res.json({ x:1, y:2, z:3 });
// });

// // put request - to update
// app.put('/items/:id', (req, res) => {
//     res.send('Got a PUT Request')
// });

// // delete request - to remove
// app.put('/items/:id', (req, res) => {
//     res.send('Got a DELETE Request')
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

