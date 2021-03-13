const postman_request = require('postman-request');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg'

postman_request({url:url , json : true},(error,response)=>{

    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    
    console.log(longitude+ " "+latitude)

})