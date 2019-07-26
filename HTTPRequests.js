// The below requests can be used with the "REST Client" plugin to perform HTTP Requests inside of VS Code

// Test the connection with the DB
GET http://localhost:5000/DiscussionBoard/Test

###

// Get the Discussion board
GET http://localhost:5000/DiscussionBoard/Board

###

// Signup a user
POST http://localhost:5000/DiscussionBoard/SignUp
content-type: application/json

{
    "username": "Jack100",
	"email": "jack.flanagan100@email.com",
	"password": "password100",
	"confirmPassword": "password100"
}

###

// Login to the system with valid credentials
POST http://localhost:5000/DiscussionBoard/Login
content-type: application/json

{
    "username": "Jack100",
	"email": "jack.flanagan100@email.com",
	"password": "password100"
}

###

// add a post to the db with valid credentials
POST http://localhost:5000/DiscussionBoard/Add
content-type: application/json

{
    "itemID": "100",
	"username": "Jack100",
	"email": "jack.flanagan100@email.com",
	"password": "password100",
	"content": "This is my first post"
}

###

// update a post within the db with valid credentials
PUT http://localhost:5000/DiscussionBoard/UpdatePost
content-type: application/json

{
	"itemID": "100",
	"username": "Jack100",
	"email": "jack.flanagan100@email.com",
	"password": "password100",
	"content": "This is my Actual First post"
}

###

// delete a post within the db with valid credentials
DELETE http://localhost:5000/DiscussionBoard/DeletePost
content-type: application/json

{
	"itemID": "100",
	"username": "Jack100",
	"email": "jack.flanagan100@email.com",
	"password": "password100",
}
