//  Going to perform CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient        // this helps us in performing crud operation
const OrderID = mongodb.OrderID;

const 
const connectionURL = 'mongodb://127.0.0.1:27017'       // this is  'mongodb://IP_of_localhost:PORT_no'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log(error)
    }

    const db = client.db(databaseName);
    
    // db.collection('users').insertOne({      //insertOne is async in nature 
    //     name:'Deepesh',                     // for handling asyn nature we use callback, .then cand .catch 
    //     age:20
    // },(error,result)=>{
    //     if(error){
    //         return  console.log("Something went unwell...")
    //     }

    //     console.log(result.ops)     // it give [ { name: 'Deepesh', age: 20, _id: 6071ee3044e05240c4ae28fe } ]
    //     console.log(result.ops[0]._id)
    // })


    // db.collection('Nam').insertMany([
    //     {
    //         name:"amit",
    //         age:21
    //     },{
    //         name:'sumit',
    //         age:'20'
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("Some is not good")
    //     }

    //     console.log(result.ops)
    //     // below is the otpt of above line
    //     //   { name: 'amit', age: 21, _id: 6071ef39d329a91f58818a56 },
    //     //   { name: 'sumit', age: '20', _id: 6071ef39d329a91f58818a57 }
    //     // ]

    // })


    // db.collection('taskGiven').insertMany([
    //     {
    //         description:"learn node",
    //         completed:false
    //     },{
    //         description:'become fit',
    //         completed:false
    //     },{
    //         description:'Do CP',
    //         completed:true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("Please check...")
    //     }
    //     console.log(result.ops)
    // })






})