const mongoose = require('mongoose');
const validator = require('validator');

console.log(process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL,{
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