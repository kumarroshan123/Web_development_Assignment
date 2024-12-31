const express= require("express");
const usersrouter= express.Router();
usersrouter.use(express.json());

let users=[
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];
usersrouter.get("/",(req,res)=>{
   res.send(users);
});

usersrouter.post("/",(req,res)=>{
    const {name,email}=req.body;
    users.push({id:users.length+1,name,email});
    res.send(users);
});


usersrouter.put("/:id",(req,res)=>{
    const {name,email}=req.body;
    users=users.filter((ele)=>ele.id!=req.params.id)
    users.push({id:req.params.id,name,email})
    res.send(users);
});

usersrouter.delete("/:id",(req,res)=>{
    users=users.filter((ele)=>ele.id!=req.params.id)
    res.send(users);
})

module.exports={usersrouter}