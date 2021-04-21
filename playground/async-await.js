const doWork = async ()=>{
    throw new Error("Somehting is not giid")
    return 'Deepesh '
}

doWork().then((re)=>{
    console.log(re)
}).catch((er)=>{
    console.log(er)
})   