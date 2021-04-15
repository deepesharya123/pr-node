require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndUpdate('6076e94cfa8eaf3da0f279e7',{completed:true}).then((res)=>{
//     console.log(res);
// }).catch((er)=>{
//     console.log(er);
// })

Task.findByIdAndRemove('6076e962f8397b2e149acb4e').then((res)=>{
    console.log(res)
    return Task.countDocuments({completed:false})
}).then((res)=>{
    console.log(res)

})
.catch((er)=>{
    console.log(er)
})