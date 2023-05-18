const express=require("express");
const db=require("./db");
const client=require("./client");
const put_module=express.Router();
put_module.put("/",async (req,res)=>{
    await client.connect();
    const result=await client.db(db.db_name)
                .collection(db.collection)
                .updateOne({"e_id":req.body.e_id},{$set:{"e_sal":req.body.e_sal,"e_designation":req.body.e_designation}});
    if(result.modifiedCount>0){
        res.json({"message":"record updated successfully"});
    }else{
        res.json({"message":"record not updated successfully"});
    }
});
module.exports=put_module;