const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/user') ;
const Task = require('./models/task');

const port = process.env.PORT || 3000;

app.use(express.json());            // for parsing the objects  we use  express

app.post('/users', async (req,res)=>{
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

app.get('/users', async (req,res)=>{

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

app.get('/users/:id', async (req,res)=>{
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

app.patch('/users/:id',async(req,res)=>{
    const allowed  = ['name','age','email','password'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update)=> allowed.includes(update))

    if(!isValidOperation){
        res.status(400).send("Please enter valid fields");
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body , {new:true,runValidators:true});

        if(!user){
            return res.status(400).send("No user exost");
        }

        res.send(user);
    }catch(e){
        res.status(400).send("Please check your fileds");
    }
})

app.delete('/users/:id', async(req,res)=>{
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

//  Task api's

app.post('/tasks', async (req,res)=>{
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

app.get('/tasks', async (req,res)=>{

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

app.get('/tasks/:id', async (req,res)=>{
    
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

app.patch('/tasks/:id',async(req,res)=>{
    const allowed = ['completed','description'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowed.includes(update));

    if(!isValidOperation){
        return res.status(404).send("Please enter the valid fields");
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!task){
            return res.status(404).send("No user found ");
        }
        res.send(task);
    }catch(e){
        res.status(400).send("No user found")
    }
})

app.delete('/tasks/:id',async(req,res)=>{
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

app.listen(port,
    ()=> console.log("Listening on port "+port)
);








// Lecture 100 completed