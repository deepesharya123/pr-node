// const doWorkByPromise = new Promise((reject,resolve)=>{
//     // reject('This is the error');
//        resolve("This is good")
// });

// doWorkByPromise.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })


const add = function(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },2000)
    })
}

// add(12,54)
// .then((re)=>{
//     add(re,34).then((sum2)=>{
//         console.log(sum2);
//     }).catch((er)=>{
//         console.log(er);
//     })
// }).catch((er)=>{
//     console.log(er)
// })

//  Promise chaionging is better 
add(12,54).then((res)=>{
    return add(res,34)
}).then((ans)=>{
    console.log(ans)
}).catch((er)=>{
    console.log(er)
})
