const express=require('express');
const app=express();
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/'+'index.html');
});
app.get('/home',(req,res)=>{
res.send("<h1>Welcome<h1>"+"NAME:"+req.query['Name']+"<br>"+"EMAIL:"+req.query['email']);
}).listen(3060,()=>{
    console.log("server running:http://localhost:3060");
});