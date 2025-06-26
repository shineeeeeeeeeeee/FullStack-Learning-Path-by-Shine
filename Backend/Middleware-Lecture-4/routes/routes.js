// Route-specific : /student -> only for students, /admin -> only for admins. How to facilitate?? Here's how

const express = require('express')
const router = express.Router()

// if user not logged in then redirect to login (auth check) and to check if user is student or not, vice-versa for admin
// middleware
const auth = function(req, res, next){
    console.log("In middleware")

    req.user = {userId:1, role:"student"};

    if(req.user){
        next(); // if user == valid then next
    }else{
        res.json({
            success:false,
            message:"Not a valid user"
        })
    }
}

const isStudent = function(req, res, next){
    console.log("In student middleware")

    if(req.user.role === "student"){
        next(); // if user == valid then next
    }else{
        res.json({
            success:false,
            message:"Access denied: This route is only for students"
        })
    }
}

const isAdmin = function(req, res, next){
    console.log("In admin middleware")

    if(req.user.role === "admin"){
        next(); // if user == valid then next
    }else{
        res.json({
            success:false,
            message:"Access denied: This route is only for admins"
        })
    }
}

// routes
router.get("/student", auth, isStudent, (req, res) => {
    console.log("This is student route")
    res.send("Students specific page")
}); // goes to /student address -> check auth() -> check isStudent() -> if valid then respond the request

router.get("/admin", auth, isAdmin, (req, res) => {
    console.log("This is admin route")
    res.send("Admins specific page")
});

module.exports = router

