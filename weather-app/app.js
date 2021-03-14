const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const halfAddress = process.argv[2];
var address = halfAddress;
if(process.argv[3]!==undefined)
    address+=" "+process.argv[3];

console.log(address)

if(address){
    geocode(address,(error,data)=>{

        if(error){
            return console.log(error)
        }
    
    
        forecast(data.latitude,data.longitude, (error, data) => {
            
            if(error)
                 return console.log(error)
    
            console.log('Error', error)
            console.log('Data', data)
        })
    
    })
    
}else{
    console.log("Please providwe the address")
}