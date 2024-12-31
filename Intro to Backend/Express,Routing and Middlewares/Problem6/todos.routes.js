const express= require("express");
const todosrouter= express.Router();
todosrouter.use(express.json());

let todo=[
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Do homework", completed: true }
];
todosrouter.get("/",(req,res)=>{
    res.send(todo);
});

todosrouter.post("/",(req,res)=>{
    const {title,completed}=req.body;
    todo.push({id:todo.length+1,title,completed});
    res.send(todo);
});


todosrouter.put("/:id",(req,res)=>{
    const {title,completed}=req.body;
    todo=todo.filter((ele)=>ele.id!=req.params.id);
    todo.push({id:req.params.id,title,completed});
    res.send(todo);
});

todosrouter.delete("/:id",(req,res)=>{
    todo=todo.filter((ele)=>ele.id!=req.params.id)
    res.send(todo);
})


module.exports={todosrouter}