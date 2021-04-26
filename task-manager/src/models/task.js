const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({         
    // As we declare here 'Task' but the database 
    //     will be tasks plural and letters samll                              
    description:{
        type:String,
        required:true,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})

const Task =mongoose.model('Task',taskSchema);


module.exports = Task;