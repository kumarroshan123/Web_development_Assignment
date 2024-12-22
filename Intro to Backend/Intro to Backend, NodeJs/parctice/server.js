const http=require('http');

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is the Home page");
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