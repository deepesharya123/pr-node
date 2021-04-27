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

// const multer = require('multer');
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000    //the size in bytes
//     },
//     fileFilter(req,file,cb){
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error("Please upload a .pdf file "))
//         // }
//         if(!file.originalname.match(/.(doc|docx)$/)){
//             return cb(new Error("Please upload a word file."))
//         }

//         cb(undefined,true)
//     }
// })
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send();
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
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

// work()

// Lecture 128 completed     