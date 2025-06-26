const express = require('express');
const router = express.Router();

// importing schema
const user = require('../models/userModel');

// routes
// CRUD Operations

// View/Read
router.get('/users', async(req, res) => {
    try {
        const users = await user.find(); // fetch all users
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
})

// Create
router.post('/users', async(req, res) => {
    try {
        const {name, age, enrollment} = req.body;
        const newUser = new user({name,age, enrollment}); // create entry
        await newUser.save(); // save our new entry

        res.status(200).json({
            success: true,
            user: newUser
        })

    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
})

// update
router.put('/users/:id', async(req, res) => {
    const {id} = req.params;
    const {name, age, enrollment} = req.body;

    try {
        const updatedUser = await user.findByIdAndUpdate(id, {name, age, enrollment});

        if(!updatedUser) 
            res.json({message: "User not found!"})

        res.status(200).json({
            success: true,
            user: updatedUser
        })

    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
})

// delete
router.delete('/users/:id', async(req, res) => {
    const {id} = req.params;

    try {
        const deletedUser = await user.findByIdAndDelete(id);

        if(!deletedUser) 
            res.json({message: "User not found!"})

        res.status(200).json({
            success: true,
            user: deletedUser
        })

    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
})


module.exports = router;
