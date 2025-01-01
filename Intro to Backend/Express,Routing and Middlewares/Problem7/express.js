const express= require("express");
const checkmiddleware=require("./checkmiddleware")
const app=express()
app.use(express.json());

app.post("/",checkmiddleware,(req,res)=>{
   res.status(200).json({message:"data received"});
});

app.listen(3000,()=>{
    console.log("server is running in http://localhost:3000");
});