const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/user') ;
const Task = require('./models/task');

const userRouter = require('./routers/user'); 
const taskRouter = require('./routers/task'); 

const port = process.env.PORT || 3000;

app.use(express.json());            // for parsing the objects  we use  express
app.use(userRouter);
app.use(taskRouter);

app.listen(port,
    ()=> console.log("Listening on port "+port)
);

// Lecture 105 completed