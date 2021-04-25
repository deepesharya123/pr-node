const express = require('express');
const Task = require('../models/task') 
const auth = require('../middleware/auth');
const router = new express.Router(); 

// creating the task
router.post('/tasks', auth,async (req,res)=>{
    const task = new Task({
        ...req.body,
        owner:req.user._id
    })
    console.log(task)
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

// getting all the tasks
router.get('/tasks', auth,async (req,res)=>{

    try{
        // const tasks = await Task.find({owner:req.user._id});
        // const task = await (await Task.find({}));
        await  req.user.populate('tasks').execPopulate();
        res.send(req.user.tasks)
     
        // if(!tasks)
            // return res.send("Nop user exist");
        
        // res.send(tasks)
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

// geting the task by its id
router.get('/tasks/:id', auth, async (req,res)=>{
    
    const _id = req.params.id;
    try{
        const task = await Task.findOne({_id, owner:req.user._id});
        if(!task){
            return res.send("No TASK FOUND ");
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

// updating the task by its id
router.patch('/tasks/:id',auth,async(req,res)=>{
    const allowed = ['completed','description'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowed.includes(update));

    if(!isValidOperation){
        return res.status(404).send("Please enter the valid fields");
    }
    try{
        // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        // const task = await Task.findById(req.params.id);
        const task  =await Task.findOne({owner:req.user._id, _id :req.params.id})

        if(!task){
            return res.status(404).send("No TAsk found ");
        }
        updates.forEach((update) => task[update] = req.body[update] );
        console.log(task)
        await task.save()
        res.send(task);
    }catch(e){
        res.status(400).send("No user found")
    }
})

// deelting the task by its id
router.delete('/tasks/:id',auth,async(req,res)=>{
    try{

        // const task = await Task.findByIdAndDelete(req.params.id);
        const task = await Task.findOneAndRemove({_id:req.params.id,owner:req.user._id});
        
        if(!task){
            return res.status(404).send("No Task found");
        }
        res.send(task);
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router;
