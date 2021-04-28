const express = require('express');
const multer = require('multer');
const sharp = require('sharp');     //sharp can used only for  images editing
const User  = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');
const { sendWelcomeEmail,sendCancelationEmail } = require('../emails/account');
//  except login and register route all other routes need to be authenticate
//  and for authentication they do need to use token

// creating user
router.post('/users', async (req,res)=>{
    const user = new User(req.body);
    // by using of async await
    try{
        await user.save()
        sendWelcomeEmail(user.email,user.name);
        const token = await user.generateAuthToken();
        res.status(201).send({user,token});

    }catch(e){
        res.status(400).send(e);
    }

    //  by then catch 
    // user.save()
    // .then(()=> {
    //     res.send(req.body)
    //     console.log(req.body)
    // })
    // .catch((e)=>{ 
    //     res.status(400);
    //     console.log(e);
    //     res.send(e);
    // })

})

// login user
router.post('/users/login',async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password);
        const token = await user.generateAuthToken();

        res.send({user,token});
    }catch(e){
        res.status(400).send(e)
    }
})

// get  the users ()
router.get('/users/me',auth, async (req,res)=>{

    res.send(req.user)

    // by the following code it return all the user 
    // try{
    //     const users = await User.find({});
       
    //     res.send(users);
    // }catch(e){
    //     res.status(500).send(e);
    // }
    // with then catch block
    // User.find({}).then((user)=>{            // this will return all users   
    //     res.status(200);
    //     res.send(user);
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })
})

router.post('/users/logout',auth,async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token;
        })
        await req.user.save()

        res.send(req.user)
    }catch(e){
        res.send(e)
    }
})

// Loguting from all the sessions
router.post('/users/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens = [];
        await req.user.save();
        console.log(req.user)
        res.send();
    }catch(e){
        res.send(500)
    }
})

// geting user form the id
// router.get('/users/:id', async (req,res)=>{
//     const _id = req.params.id;
// z
//     try{
//         const user = await User.findById({_id});

//         if(!user){
//             return res.send("no user exist");
//         }

//         res.send(user);
//     }catch(e){
//         res.status(500).send("No user found ");
//     }

//     // User.findById({_id}).then((user)=>{
//     //     if(!user){
//     //         return res.status(404).send("No user found")
//     //     }

//     //     res.send(user);
//     // }).catch((er)=>{
//     //     return res.status(500).send("Some Server error");
//     // })
// })

// updating the user from its id
router.patch('/users/me',auth,async(req,res)=>{
    const allowed  = ['name','age','email','password'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update)=> allowed.includes(update))

    if(!isValidOperation){
        res.status(400).send("Please enter valid fields");
    }

    try{
        // const user = await User.findByIdAndUpdate(req.params.id, req.body , {new:true,runValidators:true});

        // const user = await User.findById(req.user._id);
        updates.forEach((update)=>{
            req.user[update] = req.body[update]
        })

        await req.user.save();
        res.send(req.user);
    }catch(e){
        res.status(400).send("Please check your fileds");
    }
})

// deleting the user form id
router.delete('/users/me',auth, async(req,res)=>{
    try{    
        // const user = await User.findByIdAndDelete(req.user._id);
        sendCancelationEmail(req.user.email,req.user.name);
        await req.user.remove();
        res.send("ALL DONE");
    }catch(e){
        res.status(500).send()
    }
})

const upload = multer({
    // dest:'avatar',
    limits:{
        fileSize: 30000000   // number in bytes
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png|mp4)$/)){
            return cb(new Error("please upload a image/video file only"));
        }
        cb(undefined,true)
    }
})

router.post('/users/me/avatar', auth , upload.single('avatar') , async (req,res)=>{
//  req.file contains the propery that we may need to handle
// if we remove dest from the upload instacne of multer then it would directly
//  base 64 binary can be used by the folowing way
//  <img src = "data:image/jpg;base64,/paste_here_your_binary">
    

    // req.user.avatar = req.file.buffer;      
    const buffer = await sharp(req.file.buffer).resize({width:250,height:300}).png().toBuffer();
    req.user.avatar = buffer; 
    await req.user.save();

    console.log("Successfully uploaded avatar");
    res.send();
  
},(error,req,res,next)=>{   // in uploading part this is responsible for catching error
    res.status(400).send({error:error.message})
})

router.delete('/users/me/avatar',auth, upload.single('avatar') , async (req,res)=>{

    if(!req.user.avatar){
        res.status(400).send("Please check your image does not exist")
    }
    req.user.avatar = undefined;
    await req.user.save();
    res.send()

},(error,req,res,next)=>{
    res.send({error:error.message})
})

router.get('/users/:id/avatar',async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user || !user.avatar){
            throw new Error()
        }
        console.log("I am here ")
        res.set('Content-Type','image/png');
        res.set('Content-Type','video/mp4');
        
        res.send(user.avatar)

    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router;