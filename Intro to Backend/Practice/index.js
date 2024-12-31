const express= require("express");
const fs= require("fs");
const app= express();
app.use(express.json())//middleware parse the body of the request
app.get("/",(req,res)=>{
    res.end("This is home page changed")
});

app.get("/data",(req,res)=>{
   fs.readFile("./db.json","utf-8",(err,data)=>{
    if(err){
        res.send(err);
    }else{
        let parsedata= JSON.parse(data);
        res.send(parsedata[0]);
    }
   })
});

app.post("/data",(req,res)=>{
    let data = fs.readFileSync("./db.json","utf-8");
    let parsedata= JSON.parse(data);
    parsedata.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(parsedata));
    res.send("The new data is added");
})

app.listen(8080,()=>{
    console.log("Running server to http://localhost:8080")
})