const { text } = require("body-parser");

function app(){
    fetch('http://127.0.0.1:5500/fetch/data.html')
    .then((res)=>res.text())
    .then(data=>{
        var par=new DOMParser;
        var d=par.parseFromString(data,'text/html');
        var n=d.querySelector('h1').textContent;
        var r=d.querySelector('p').textContent;
        var p=d.querySelector('span').textContent;
        var i=d.querySelector('img').src;

        document.querySelector('#name').innerHTML=n;
        document.querySelector('#roll').innerHTML=r;
        document.querySelector('#phone').innerHTML=p;
        document.querySelector('#img').src=i;
    })
}





