const fs=require("fs");
const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/signup" && req.method==="GET"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
          <form action="/signup" method="POST">
            <label for="username">Username:</label><br />
            <input type="text" id="username" name="username" required><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" required><br /><br />
            <button type="submit">Sign Up</button>
          </form>
        `);
    }else if(req.method==="POST" && req.url==="/signup"){
        let body="";
        req.on("data",(chunks)=>{
            body+=chunks;
        });
        req.on("end",()=>{
            const data=new URLSearchParams(body);
            console.log(data,body);
            const username= data.get("username");
            const password= data.get("password");
            fs.appendFile("data.txt",`${username}:${password}\n`,(err)=>{
               if(err){
                 res.writeHead(400,{"content-type":"text/html"});
                 res.end("Error saving user data");
               }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end("Successfull Sign Up");
               }
            });
        })
    }else if(req.method==="GET" && req.url==="/allusers"){
        fs.readFile("data.txt","utf-8",(err,data)=>{
            const userdata=data.split("\n").filter((line)=>line).map((line)=>line.split(":")[0]);
            res.writeHead(200,{"content-type":"text/html"});
            res.end(`${userdata.map((ele)=> `<h3>${ele}</h3>`).join("")}`);
        });
    }
});

server.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080");
})