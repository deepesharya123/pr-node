const express = require('express');
const Task = require('../models/task') 
const router = new express.Router(); 


router.post('/tasks', async (req,res)=>{
    const task = new Task(req.body);

    try{
        await task.save();
        res.send(task);
        console.log(task);
    }catch(e){
        res.status(500).send("Please make sure you are correct");
    }

    // //  done by then catch
    // task.save().then(()=>{
    //     res.statuscode = 200;
    //     res.send(task);
    // }).catch((e)=>{
    //     res.statuscode = 400;
    //     res.send(e);
    // })
})

router.get('/tasks', async (req,res)=>{

    try{
        const tasks = await Task.find({});
        if(!tasks)
            return res.send("Nop user exist");
        
        res.send(tasks)
    }catch(e){
        res.status(404).send("No use exist");
    }


    // then catch for d oing work
    // Task.find({}).then((tasks)=>{
    //     res.send(tasks)
    // }).catch((er)=>{
    //     res.status(500).send(e)
    // })

})

router.get('/tasks/:id', async (req,res)=>{
    
    const _id = req.params.id;
    try{
        const task = await Task.find({_id});
        if(!task){
            return res.send("No use exist");
        }

        res.send(task);
    }catch(e){
        res.send("No user found").status(500);
    }
    // by then catch block
    // const _id = req.params.id
    // Task.findById({_id}).then((task)=>{
    //     if(!task){
    //         return res.status(400).send("No task found")
    //     }

    //     res.send(task)
    // }).catch((er)=>{
    //     return res.status(500).send(er)
    // })
})

router.patch('/tasks/:id',async(req,res)=>{
    const allowed = ['completed','description'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowed.includes(update));

    if(!isValidOperation){
        return res.status(404).send("Please enter the valid fields");
    }
    try{
        // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        
        const task = await Task.findById(req.params.id);
        updates.forEach((update) => task[update] = req.params[update] );

        if(!task){
            return res.status(404).send("No user found ");
        }
        await task.save()
        res.send(task);
    }catch(e){
        res.status(400).send("No user found")
    }
})

router.delete('/tasks/:id',async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).send("No user found");
        }
        res.send(task);
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router;
