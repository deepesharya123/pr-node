const postman_request = require('postman-request');

const geocode =(address,callback)=>{
    // encodeURIComponent this does help tonot crashing the site if ? OR @ or any other special char is passed
    const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg'

    postman_request({ url : geoCodeURL , json : true },( error, response)=>{
        if(error){
            callback('Unable to connect to the location services ',undefined);
        }else if( response.body.features.length === 0 )  {
            callback('Unable to find the locatio. Try another search ',undefined)
        }else{
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name,
            })
        }   
    })

}

module.exports = geocode;