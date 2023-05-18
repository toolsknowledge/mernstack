const express=require("express");
const client=require("./client");
const db=require("./db");
const get_module=express.Router();
get_module.get("/",async (req,res)=>{
    await client.connect();
    const array=await client.db(db.db_name).collection(db.collection).find().toArray();
    if(array.length>0){
        res.json(array);
    }else{
        res.json({"message":"no records found"});
    }
});
module.exports=get_module;