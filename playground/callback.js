// setTimeout(()=>{
//     console.log("PRINT AFTER 2 SEc")
// },(2000))

// const names = ['Deepesh','Arpit','Deepti'];
// const name = names.filter((name)=>{
//     return name.length>4 
// })

// console.log(name)

// const geoCode = (address,callback)=>{
//     setTimeout(()=>{
//         const data = {
//             longitude : 0,
//             latitude:0
//         }
    
//         callback(data) 
//     },2000)

// }

// geoCode('delhi',(data)=>{
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })


const add = (a,b,callback)=>{
    setTimeout(() => {
        const sum = a+b;
        callback(sum);
    }, 2000);

}

add(1,22,(ans)=>{
    console.log(ans)
})
