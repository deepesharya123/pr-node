const doWorkByPromise = new Promise((reject,resolve)=>{
    // reject('This is the error');
       resolve("This is good")
});

doWorkByPromise.then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})