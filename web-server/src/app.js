const path = require('path')
const express = require('express');
const app = express();
const hbs = require('hbs')

// console.log(__dirname)          // console.log(__filename)

// below is the default path for storing the static content
const publicDirectoryPath=  path.join(__dirname,'../public')

// below is the changed path for storing the static content, along with this we have to tell the views also
const  viewsPath = path.join(__dirname,'../templates/views')

// partialspPath
const partialspPath = path.join(__dirname,'../templates/partials');

// below line is used to tell the views to see the viewsPath as the template intead if views
app.set('views',viewsPath) 

//always used to tell the view engine to search for hbs file
app.set('view engine', 'hbs')

// registering partila on hbs
hbs.registerPartials(partialspPath);

// below line is used for showing up the static content that is stroed in the public folder
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Deepesh Arya'
    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About page",
        name:"Deepesh Arya"
    })

})

app.get('/weather',(req,res)=>{
    
    const rqa= req.query.address;

    if(!rqa){
        return res.send("Please provide the address");
    }

    res.send({
        forecast:"IT SHOW THE FORECAST DATA",
        geocode:"IT SHOWS THE GEOCODE DATA",
        addressss:rqa
    })


})

app.get('/products',(req,res)=>{
    
    if(!req.query.search){
        console.log("NOTHING TO SEARCH")
        return res.send("UNABLE TO SERVE");
    }

    res.send(req.query.search)
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title:"HELP PAGE",
        name:"Deepesh Arya"
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:"Deepesh Arya",
        errorMessage:"help NOT FOUND"
    })
})

app.get('/*',(req,res)=>{

    res.render('404',{
        title:'404',
        name:"Deepesh Arya",
        errorMessage:"PAGE NOT FOUND"
    })

})
app.listen(3000,()=> console.log("SERVER IS ON PORT 3000"));



// app.get('/help',(req,res)=>{
//     res.send([
//         {
//             name:'Deepesh Arya'
//         },{
//             name:"ARPIT ARYA"
//         },{
//             name:"Deepti Arya"
//         }
//     ])
// })
