const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining schema
var userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

//defining model
var User = mongoose.model("users", userSchema);

module.exports = User;