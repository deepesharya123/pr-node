// async and await are nothing but are easy way of writing async code



const add =  (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0|| b<0)
                return reject ('Numbers must be non negative')
            resolve(a+b);
        },2000)
    })
}

const doWork = async ()=>{                      //async await return the promise and that is 

    const sum = await add(1,99);
    const sum2 = await add(50,sum);
    const sum3 = await add(sum2,-300);
    return sum3;

}

doWork().then((re)=>{
    console.log(re)
}).catch((er)=>{
    console.log(er)
})   