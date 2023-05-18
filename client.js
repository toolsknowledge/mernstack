const db=require("./db");
const {MongoClient}=require("mongodb");
const client=new MongoClient(db.url);
module.exports=client;