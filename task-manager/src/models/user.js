const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    name:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                //  if flase then
                throw new Error("Please provide valid email")
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate (value){
            if(value < 0){
                throw new Error("Please provide some valid age")
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:7,
        validate(value){
            if(value.length<6||value.includes('password')){
                throw new Error("Please check your password");
            }
        }


    }
})

module.exports = User