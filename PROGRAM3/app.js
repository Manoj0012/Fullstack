const express=require("express");
const fs=require("fs");
const parse=require("body-parser");
const { dirname } = require("path");
const app=express();
app.set('view engine','hbs');
console.log(__dirname);
app.set('views',__dirname+'/views');
app.use(parse.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();
    });
});
    app.post("/home",(req,res)=>{
        fs.writeFile("info.json",JSON.stringify(req.body),(err)=>{
            res.redirect('/detail')
        })
    })
    app.get("/detail",(req,res)=>{
       var a=fs.readFileSync('info.json');
       var b=JSON.parse(a);
      res.render('handle',{data:b});
    }).listen(8000,()=>{-
   console.log("http://localhost:8000");
});