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
    .catch((er)=>{ 
        res.status(400);
        console.log(er);
        res.send(er);
    })

})

app.post('/tasks',(req,res)=>{
    const task = new Task(req.body);

    task.save().then(()=>{
        res.statuscode = 200;
        res.send(task);
    }).catch(()=>{
        res.statuscode = 400;
        res.send(e);
    })
})


app.listen(port,
    ()=> console.log("Listening on port "+port)
);