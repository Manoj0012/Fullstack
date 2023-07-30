const bodyParser = require('body-parser');
const express=require('express');
const fs=require('fs');
const sql=require('mysql2');
const parse=require('body-parser');
const app=express();

let con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'student',
    database:'std'

});
app.use(parse.urlencoded({extended:true}));
app.set(__dirname);

app.get('/',(req,res)=>{
    fs.readFile('E:/VS-Front end/Nodejs/Express/PROGRAM5/front/index.html',(err,data)=>{
     if(err) throw err;
     res.writeHead(200,{'content-type':'text/html'});
     res.write(data)
     res.end();
    })
   
})
app.get('/add',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM5/front/add.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.get('/read',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM5/front/read.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.get('/update',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM5/front/update.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.get('/delete',(req,res)=>{
    fs.readFile("E:/VS-Front end/Nodejs/Express/PROGRAM5/front/delete.html",(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
})
app.post('/addd',(req,res)=>{
    let details=req.body
    console.log(details);
    let sql="INSERT INTO detail SET ?"
    con.query(sql,details,(err,data)=>{
        console.log("data inserted")
    });
    return res.redirect('/');
})
app.post('/uupdate',(req,res)=>{
    let id=req.body.UName
    let detail=req.body;
    let sql="UPDATE detail SET ? WHERE UName= ?";
    con.query(sql,[detail,id],(err,data)=>{
        console.log("data updated");
        console.log(data);
    })
    return res.redirect('/');
})
app.post('/readd',(req,res)=>{
 let id=req.body;
 let sql="SELECT * FROM detail WHERE ?";
 con.query(sql,id,(err,data)=>{
    if(err) throw err;
console.log(data);
 })
return res.redirect('/')
})

app.post('/ddelete',(req,res)=>{
    let id=req.body.UName;
    let sql="DELETE FROM detail WHERE UName= ?";
    con.query(sql,id,(err,data)=>{
       if(err) throw err;
   console.log("Data deleted");
    })
   return res.redirect('/')
   })






.listen(9000);