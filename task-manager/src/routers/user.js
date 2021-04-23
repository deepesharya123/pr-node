const express = require('express');
const User  = require('../models/user');
const router = new express.Router();


router.post('/users', async (req,res)=>{
    const user = new User(req.body);
    // by using of async await
    try{
        await user.save()
        res.status(200).send(user);
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

router.post('/users/login',async(req,res)=>{
    try{
        console.log(req.body.email)
        console.log(req.body.password)
        const user = await User.findByCredentials(req.body.email,req.body.password);
        console.log(user)
        res.send(user);
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/users', async (req,res)=>{

    try{
        const users = await User.find({});
        if(!users)
            return res.send("There are not users");

        res.send(users);
    }catch(e){
        res.status(400).send(e);
    }
    // with then catch block
    // User.find({}).then((user)=>{            // this will return all users   
    //     res.status(200);
    //     res.send(user);
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })
})

router.get('/users/:id', async (req,res)=>{
    const _id = req.params.id;

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