const http=require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        let data = fs.readFileSync("data.txt","utf-8");
        res.end(data);
    }
    else if(req.url==="/about"){
        res.end("This is the about section");
    }else{
        res.end("404: Not Found");
    }
})

server.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080");
})