//  Going to perform CRUD

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient        // this helps us in performing crud operation
// const ObjectID = mongodb.OrderID;

const {MongoClient ,ObjectID } = require('mongodb');

// const id =  new ObjectID();
// console.log(id)
// console.log(id.getTimestamp()) 
const connectionURL = 'mongodb://127.0.0.1:27017'       // this is  'mongodb://IP_of_localhost:PORT_no'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log(error)
    }

    const db = client.db(databaseName);
    
    // db.collection('users').insertOne({      //insertOne is async in nature 
    //     // _id:id,
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

    // db.collection('users').findOne({ _id :ObjectID("607299008dd8e347d4c0d8a5")  },(error,user)=>{

    //     if(error){
    //         return console.log("Unable to fetch")
    //     }

    //     console.log(user)
        
    // })
    // console.log("Find Many")
    // find does not need callback as it does return a pointer
    // to the location where our result is stored in the db and the method next to find use callback for sure bcz
    //  we will use this method for performing operation on data

    // db.collection('users').find( {age:20}).toArray((error,users)=>{ 
    //     if(error){
    //         return console("Some error")
    //     }
    //     console.log(users)
    // })              

    
    // db.collection('users').find( {age:20}).count((error,con)=>{ 
    //     if(error){
    //         return console("Some error")
    //     }
    //     console.log(con)
    // })              


    //  Task given 
    
    //  db.collection('taskGiven').find().toArray((error,res)=>{
    //     if(error){
    //         return console.log("Something is not good...")
    //     }

    //     const lastTask = res[res.length-1];
    //     console.log(lastTask)
        
    // })

    // db.collection('taskGiven').find({completed:false}).toArray((error,res)=>{
    //     if(error)
    //     return console.log("Something is  not good")

    //     const ans = res.filter((task)=> task.completed===false)
    //     console.log(ans)

    // })

//    const updatePromise =  db.collection('users').updateOne( { _id:ObjectID("6071e8b12406331f942dfb14") } ,{
//         // $set:{
//         //     name:'Mike'
//         // }
//         $inc:{
//             age:1
//         }
//     })

//     updatePromise.then((result)=>{
//         // console.log(result)
//         console.log("All you told has been done",result);
//     }).catch((error)=>{
//         console.log("Something went bad.. please forgive me")
//     })


    // db.collection('taskGiven').updateMany({completed:false},{
    //     $set:{
    //         completed:true
    //     }
    // }).then((res)=>{
    //     console.log(res)
    // }).catch((er)=>{
    //     console.log(er)
    // })

    // db.collection('users').deleteMany({
    //     age:20
    // }).then((re)=> console.log("Delete")).catch((er)=> console.log(er))

    db.collection('taskGiven').deleteOne({
        description:'become fit'
    }).then((re)=> console.log("You did it"))
    .catch((er)=> console.log(er))

})