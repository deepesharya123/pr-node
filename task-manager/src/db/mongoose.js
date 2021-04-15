const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

// me.save().then(()=> console.log(me))
// .catch((error)=> console.log(error))



// const task  = new Task({
//     description:"    learning node.js",
//     completed:true
// })
// task.save().then((re)=> console.log(task)).catch((er)=> console.log(er))