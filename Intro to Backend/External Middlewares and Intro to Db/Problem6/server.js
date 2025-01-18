const express= require("express");
const morgan=require("morgan");
const app=express();
morgan.token("custom",(req,res)=>{
   return [
    req.method,res.statusCode,new Date().toISOString(),`HTTP/${req.httpVersion}`,
    req.originalUrl
   ].join();
});

app.use(morgan(":custom"));

app.get("/",(req,res)=>{
    res.status(200).json({ users: ["Alice", "Bob", "Charlie"] })
});

app.post("/",(req,res)=>{
    res.status(200).send("User added successfully");
});

app.put("/:id",(req,res)=>{
    const userId = req.params.id;
    res.status(200).send(`User with UserId : ${userId}  updated successfully`);
});

app.delete("/:id",(res,req)=>{
    const userId = req.params.id;
    res.status(200).send(`User with UserId : ${userId} deleted successfully`);
})

app.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000")
})