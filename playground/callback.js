const doWorkByCallback = (callback)=>{

    setTimeout(()=>{
        // callback('THis is the error',undefined);
        callback(undefined,[1,2,3,4]);
    },2000)

}

doWorkByCallback((error,result)=>{
    if(error)
        return console.log(error);
        
    console.log(result)
})