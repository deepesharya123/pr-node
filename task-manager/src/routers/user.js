const express = require('express');
const User  = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');
//  except login and register route all other routes need to be authenticate
//  and for authentication they do need to use token

// creating user
router.post('/users', async (req,res)=>{
    const user = new User(req.body);
    // by using of async await
    try{
        await user.save()
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

// geting user form the id
router.get('/users/:id', async (req,res)=>{
    const _id = req.params.id;
z
    try{
        const user = await User.findById({_id});

        if(!user){
            return res.send("no user exist");
        }

        res.send(user);
    }catch(e){
        res.status(500).send("No user found ");
    }

    // User.findById({_id}).then((user)=>{
    //     if(!user){
    //         return res.status(404).send("No user found")
    //     }

    //     res.send(user);
    // }).catch((er)=>{
    //     return res.status(500).send("Some Server error");
    // })
})

// updating the user from its id
router.patch('/users/:id',async(req,res)=>{
    const allowed  = ['name','age','email','password'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update)=> allowed.includes(update))

    if(!isValidOperation){
        res.status(400).send("Please enter valid fields");
    }

    try{
        // const user = await User.findByIdAndUpdate(req.params.id, req.body , {new:true,runValidators:true});

        const user = await User.findById(req.params.id);
        updates.forEach((update)=>{
            user[update] = req.body[update]
        })

        if(!user){
            return res.status(400).send("No user exost");
        }
        await user.save();
        res.send(user);
    }catch(e){
        res.status(400).send("Please check your fileds");
    }
})

// deleting the user form id
router.delete('/users/:id', async(req,res)=>{
    try{    
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send("No user found");
        }
        res.send(user);
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router;