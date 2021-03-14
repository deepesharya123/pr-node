const postman_request = require('postman-request')

// const url  ='http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query=37.8267,-122.4233&units=m';

// // json:true this statement help us to parse the string data to the json object and after which i can 
// //  directly use the follwing statemne console.log(response.body)

// postman_request({ url:url ,json : true},(error,response)=>{
    
//     // console.log(response.body.current.pressure)
//     if(error)
//         console.log("Unable to connect to internet");
//     else if(response.body.error){
//         console.log("Unable to find the location")
//     }
//     else{
//         console.log(`It  is currently ${response.body.current.temperature} degrees out and there is ${response.body.current.feelslike} chance of raining`)
//         console.log(response.body.current.weather_descriptions[0])
//     }

// })

// chalenege task
// // const postman_request = require('postman-request');

// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg'

// postman_request({url:geoCodeURL , json : true},(error,response)=>{

//     if(error){
//         console.log("Unable to connect to the internet")
//     }else if(response.body.features.length===0){
//         console.log("Unable to fetch the data, please enter valid input")
//     }else{
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
    
//         console.log(longitude+ " "+latitude)
//     }
// })