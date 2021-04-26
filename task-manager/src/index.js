const express = require('express');
require('./db/mongoose');

const User = require('./models/user') ;
const Task = require('./models/task');

const userRouter = require('./routers/user'); 
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req,res,next)=>{
//     console.log(req.method+" "+req.path)
//     if(req.method==='GET'){
//         return res.send("Currently disabled the get request");
//     }
//     next();
// })

// app.use((req,res,next)=>{
//     res.status(503).send("Site is under maintaince")
// })

app.use(express.json());            // for parsing the objects  we use  express
app.use(userRouter);
app.use(taskRouter);

// const jwt = require('jsonwebtoken');
// const dowork = async ()=>{
//     const token = await jwt.sign( { _id:'sahi kaam karo'} , 'asdfasdf',{expiresIn:'2 days'});

//     console.log(token);
//     const data = await jwt.verify(token,'asdfasdf');
//     console.log(data)
// }
// dowork()


app.listen(port,
    ()=> console.log("Listening on port "+port)
);

// const Task = require('./models/task');
// const User = require('./models/user');


// way of getting the user as well as lined author profile
const work = async function(){
    // const task = await Task.findById('60853a82078a5d225c92b604');
    // console.log(task)
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    // const user = await User.findById('608539848c6b72373c88ceaf');
    // await user.populate('tasks').execPopulate(); 
    // console.log(user.tasks);

}

work()
// Lecture 122 completed     