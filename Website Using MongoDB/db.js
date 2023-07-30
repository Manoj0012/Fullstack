const mg=require("mongodb");
const mC=mg.MongoClient;


let d;
async function getdatabase(){
    let database=await mC.connect('mongodb://127.0.0.1:27017');
    d=database.db("sstudent");
    if(!d) throw Error;
    return d;
}

  module.exports={
    getdatabase
  }