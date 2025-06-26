// all items specific routes stored here

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// }
// router.use(timeLog)

// get request - to fetch
router.get('/', (req, res) => {
    res.send('Got a GET Request')
    // res.sendFile('../dummy.html', {
    //     root:__dirname
    // });
});

// post request - to post/add
router.post('/items', (req, res) => {
    // res.send('Got a POST Request')
    res.json({ x:1, y:2, z:3 });
});

// put request - to update
router.put('/items/:id', (req, res) => {
    res.send('Got a PUT Request')
});

// delete request - to remove
router.put('/items/:id', (req, res) => {
    res.send('Got a DELETE Request')
});

module.exports = router