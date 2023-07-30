const express=require('express');
const app=express();
const parse=require('body-parser');
const urlen=parse.urlencoded({extended:false});
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/'+'index.html');
});
app.post('/home',urlen,(req,res)=>{
res.send("<h1>Welcome<h1>"+"NAME:"+req.body.Name+"<br>"+"EMAIL:"+req.body.email);
}).listen(3000,()=>{
    console.log("server running:http://localhost:3000");
});