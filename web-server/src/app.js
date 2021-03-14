const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('Hello there');
})

app.get('/help',(req,res)=>{
    res.send('HELP PAGE')
})

app.get('/about',(req,res)=>{
    res.send('ABOUT PAGE')
})

app.get('/weather',(req,res)=>{
    res.send('This is the page that will show up the weather informatio')
})

app.listen(3000,()=> console.log("SERVER IS ON PORT 3000"));
