const postman_request = require('postman-request')

const url  ='http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query=37.8267,-122.4233&units=m';

// json:true this statement help us to parse the string data to the json object and after which i can 
//  directly use the follwing statemne console.log(response.body)

postman_request({ url:url ,json : true},(error,response)=>{
    
    // console.log(response.body.current.pressure)
    console.log(`It  is currently ${response.body.current.temperature} degrees out and there is ${response.body.current.feelslike} chance of raining`)

    console.log(response.body.current.weather_descriptions[0])


})