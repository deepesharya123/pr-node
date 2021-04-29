const jwt = require('jsonwebtoken');
const User = require('../models/user')

const auth = async function (req,res,next){
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = await jwt.verify(token,process.env.MY_SECRET);
        const user = await User.findOne({ _id:decoded._id , 'tokens.token':token });
        
        if(!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        console.log(req.user)
        console.log("GAP")
        console.log(req.token)
        
        next();
        // console.log(token)
    }catch(e){
        console.log(e)
        res.status(401).send("Please Authenitcate")
    }

}

module.exports = auth;