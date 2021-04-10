//  Going to perform CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient        // this helps us in performing crud operation

const connectionURL = 'mongodb://127.0.0.1:27017'       // this is  'mongodb://IP_of_localhost:PORT_no'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log(error)
    }

    console.log("Connected successfully....");
})