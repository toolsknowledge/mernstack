const express=require("express");
const cors=require("cors");
const get_module=require("./get_module");
const post_module=require("./post_module");
const put_module=require("./put_module");
const delete_module=require("./delete_module");
const app=express();
app.use(cors());
app.use(express.json());
app.use("/fetch",get_module);
app.use("/insert",post_module);
app.use("/update",put_module);
app.use("/delete",delete_module);
app.listen(8080,()=>{
    console.log("server listening port no.8080");
});