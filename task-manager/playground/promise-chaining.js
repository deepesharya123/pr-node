require('../src/db/mongoose');
const User = require('../src/models/user')

// 6076e8b83383ea044849924a

// User.findByIdAndUpdate('6076e8b83383ea044849924a',{ age:121}).then((user)=>{
//     console.log(user)
//      return User.countDocuments({age:121})
// }).then((res)=>{
//     console.log(res)
// }).catch((er)=>{
//     console.log(er)
// })

const UpdateAgeandCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id, { age } );
    const count = await User.countDocuments({age});

    return count;
}

UpdateAgeandCount('6076e8b83383ea044849924a',20).then((userCon)=>{
    console.log(userCon)
}).catch((er)=>{
    console.log(er)
})