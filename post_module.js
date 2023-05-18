const express=require("express");
const db=require("./db");
const post_module=express.Router();
const client=require("./client");
post_module.post("/",async (req,res)=>{
    await client.connect();
    const result=await client.db(db.db_name).collection(db.collection).insertOne({"e_id":req.body.e_id,"e_name":req.body.e_name,"e_sal":req.body.e_sal,"e_designation":req.body.e_designation,"e_dept":req.body.e_dept});
    if(result.acknowledged){
        res.json({"message":"record inserted successfully"});
    }else{
        res.json({"message":"record not inserted successfully"});
    }
})
module.exports=post_module;