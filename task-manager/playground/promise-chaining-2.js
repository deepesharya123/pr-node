require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndUpdate('6076e94cfa8eaf3da0f279e7',{completed:true}).then((res)=>{
//     console.log(res);
// }).catch((er)=>{
//     console.log(er);
// })


// this is promise chainging
// Task.findByIdAndRemove('6076e962f8397b2e149acb4e').then((res)=>{
//     console.log(res)
//     return Task.countDocuments({completed:false})
// }).then((res)=>{
//     console.log(res)
// })
// .catch((er)=>{
//     console.log(er)
// })


const deleteTaskAndCount = async(id)=>{
    const taskDeleted = await Task.findByIdAndDelete(id);
    const con = await Task.countDocuments({completed:false});
    return { taskDeleted,con}; 
}

deleteTaskAndCount('6077e17375abc505681f8275').then((res)=>{
    console.log(res)
}).catch((er)=>{
    console.log(er);
})