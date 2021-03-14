const postman_request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query=37.8267,-122.4233';


const forecast = ((latitude,longitude,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query='+latitude+','+longitude;

    postman_request({url:url,json : true},(error,response)=>{
        if(error){
            callback("Unable to connect to the internet",undefined);
        }else if(response.body.error){
            callback("Please enter correct location",undefined);
        }else{
            callback(undefined,`It is currently ${response.body.current.temperature} out and the cloudcover is ${response.body.current.cloudcover}`)
        }
    })


})

module.exports = forecast;