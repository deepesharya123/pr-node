const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/user') ;
const Task = require('./models/task');

const port = process.env.PORT || 3000;

app.use(express.json());            // for parsing by express

app.post('/users',(req,res)=>{

    const user = new User(req.body);

    user.save()
    .then(()=> {
        res.send(req.body)
        console.log(req.body)

    })
    .catch((e)=>{ 
        res.status(400);
        console.log(e);
        res.send(e);
    })

})

app.get('/users',(req,res)=>{
    User.find({}).then((user)=>{            // this will return all users   
        res.status(200);
        res.send(user);
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

app.get('/users/:id',(req,res)=>{
    const _id = req.params.id;

    User.findById({_id}).then((user)=>{
        if(!user){
            return res.status(404).send("No user found")
        }

        res.send(user);
    }).catch((er)=>{
        return res.status(500).send("Some Server error");
    })
})

//  Task api's
app.post('/tasks',(req,res)=>{
    const task = new Task(req.body);

    task.save().then(()=>{
        res.statuscode = 200;
        res.send(task);
    }).catch((e)=>{
        res.statuscode = 400;
        res.send(e);
    })
})

app.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((er)=>{
        res.status(500).send(e)
    })
})

app.get('/tasks/:id',(req,res)=>{
    const _id = req.params.id
    Task.findById({_id}).then((task)=>{
        if(!task){
            return res.status(400).send("No task found")
        }

        res.send(task)
    }).catch((er)=>{
        return res.status(500).send(er)
    })
})


app.listen(port,
    ()=> console.log("Listening on port "+port)
);








// Lecture 95 completed