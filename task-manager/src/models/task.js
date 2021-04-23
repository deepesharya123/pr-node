const mongoose = require('mongoose');
const validator = require('validator');

const Task =mongoose.model('Task',{         // As we declare here 'Task' but the database 
                                        //     will be tasks plural and letters samll
    description:{
        type:String,
        required:true,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = Task;