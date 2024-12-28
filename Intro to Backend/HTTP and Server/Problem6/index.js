const http=require("http");
const fs = require("fs");
const server= http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end("This is the homepage");
    }else if(req.url==="/aboutus"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<h3>Welcome To About Page</h3>")
    }else if(req.url==="/contactus"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end('<a href="www.masaichool.com">contact us at www.masaichool.com</a>');
    }else if(req.url==="/index"){
          const response=fs.readFileSync("index.js");
          res.writeHead(200,{"content-type":"text/html"});
          res.end(response);
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404 Not Found");
    }
});

server.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080");
})