const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/upcloud2');

const userSchema = new mongoose.Schema({
    username:String,
    age:Number,
    email:String,
    address:String,
    income:Number,
    married:Number,
    registrationNumber:Number,
    registrationDate:String
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;