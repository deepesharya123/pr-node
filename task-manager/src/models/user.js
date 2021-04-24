const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs'); // for hashing the password
const jwt = require('jsonwebtoken');    // fore creating the token
const uniqueValidator = require('mongoose-unique-validator');

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
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


    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

// methods method are accessabel from the instance
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = await jwt.sign({_id:user._id.toString()},'hereComesOurSecret');
    
    user.tokens = user.tokens.concat({token});
   
    return token;
}

//  static mehotds are accessable on the models
userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({email});
    console.log(email)
    if(!user){
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error("Unable to login");
    }
    return user
}


// this is middleware , middleware means that comes in between
// userSchema.{either pre or post } these are the time when it shod run
// userSchema.pre('name of the event when it sd run',(dunctiof));

userSchema.pre('save',async function(next){
    
    const user = this;

    if(user.isModified('password')){
        //  we are checking that whether password is 
        // hashed from before or not
        user.password = await bcrypt.hash(user.password,8);
    }

    next();
})

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User',userSchema);
    
module.exports = User