const express = require('express');
let User = require("../user.js")
const router = express.Router();
const isAlphanumeric = require("../Validator/IsAlphanumeric")
const isEmpty = require("../Validator/IsEmpty")
const bcrypt = require('bcrypt');
const Validator = require('validator');

// GET DiscussionBoard/Test
// Returns a test message back to the user
// Public Access
router.get("/Test", (req, res) => {
    res.status(555).send("Message: This Is A Test Message");
});

// POST DiscussionBoard/SignUp
// Allows user to be added if user and email are valid, hashes password then stores in db
// Public Access
router.post("/SignUp", (req, res) => {

    let checkUsername = req.body.username;
    
    if (isAlphanumeric(checkUsername) && !isEmpty(checkUsername)) {
        

        if(req.body.password == req.body.confirmPassword){
            console.log(req.body.password)
            console.log(req.body.confirmPassword)
            let addUser = new User({

                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
    
            })
    
            if (Validator.isEmail(req.body.email)) {
    
                bcrypt.hash(req.body.password, 10)
                    .then((hash) => {
                        addUser.password = hash
                        addUser.save()
                        res.status(200).send("Added New Item")
                    })
                    .catch(err => res.status(555).json({
                        "Fault": `${err}`
                    }))
    
            } else {
                res.status(555).send("Please Enter A Valid Email")
            }
        } else { 
            res.status(555).send("Error: Passwords Do Not Match, Please Try Again")
        }

        
    } else {
        res.status(555).send("Please Enter A Valid Username")
    }
});

router.post("/Login", (req, res) => {

    // take details from request and store
    // search db by username
    // hash password using the salt
    // verify they match
    let emailMatch;
    let storedEmail;
    let passwordMatch;

    User.findOne({
            "username": req.body.username
        })
        .then((user) => {
           
            storedEmail = user.email
            return bcrypt.compare(req.body.password, user.password)
        })
        .then((same => {
            if (same) {
                passwordMatch = true;
                if (req.body.email === storedEmail) {
                    emailMatch = true
                } else emailMatch = false;

                if (passwordMatch && emailMatch) {
                    res.status(200).send("User Login Succesful")
                } else {
                    res.status(555).send("Incorrect Login Details, Please Try Again")
                }
            } else {
                res.status(555).send("Incorrect Login Details, Please Try Again")
            }
        }))
        .catch(err => res.status(555).send(`Error: ${err}`))
});











module.exports = router;