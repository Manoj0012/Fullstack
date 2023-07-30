const express=require("express");
const fs=require("fs");
const parse=require("body-parser");
const db=require("./db");
const { get } = require("http");
const app=express();
app.use(parse.urlencoded({extended:false}));
app.set(__dirname);
console.log(__dirname);
app.get('/',(req,res)=>{
       fs.readFile('E:/VS-Front end/Nodejs/Express/PROGRAM4/front/index.html',(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
       })      
})
app.get('/add',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM4/front/add.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.get('/read',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM4/front/read.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.get('/update',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM4/front/update.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.get('/delete',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM4/front/delete.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})

app.post('/addd',async(req,res)=>{
    const m= await db.getdatabase();
    const col=m.collection("student");
    let book={Name:req.body.UName,Email:req.body.Email};
    await col.insertOne(book);
    console.log("data inserted");
    return res.redirect('/');
})
app.post('/readd',async(req,res)=>{
    let d= await db.getdatabase();
    let col=d.collection("student");
    const re=await col.findOne({Name:req.body.UName});
    console.log(re);
    return res.redirect('/');
})
app.post('/uupdate',async(req,res)=>{
    let d=await db.getdatabase();
    let col=d.collection("student");
    let r=await col.updateOne({Name:req.body.UName},{$set:{Email:req.body.Email}});
    console.log("updated");
    return res.redirect('/');
})
app.post('/ddelete',async(req,res)=>{
    let d=await db.getdatabase();
    let col=d.collection("student");
   let r= await col.deleteOne({Name:req.body.UName});
    console.log("data deleted");
    await console.log(r);
    return res.redirect('/');
})

.listen(8000);