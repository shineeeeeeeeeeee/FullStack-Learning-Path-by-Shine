
// all birds specific routes stored here

const express = require('express')
const router = express.Router()

// define the home page router
router.get('/', (req, res) => {
    res.send('Birds home page')
});

// define the about page router
router.get('/about', (req, res) => {
    res.send('About birds')
});

module.exports = router

