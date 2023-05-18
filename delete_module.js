const express=require("express");
const db=require("./db");
const client=require("./client");
const delete_module=express.Router();
delete_module.delete("/",async (req,res)=>{
    await client.connect();
    const result=await client.db(db.db_name).collection(db.collection).deleteOne({"e_id":req.body.e_id});
    if(result.deletedCount>0){
        res.json({"message":"record deleted successfully"});
    }else{
        res.json({"message":"record not deleted successfully"});
    }
});
module.exports=delete_module;