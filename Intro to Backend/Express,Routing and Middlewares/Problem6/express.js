const express= require("express");
const app= express();
const {usersrouter}=require("./users.routes");
const {todosrouter}=require("./todos.routes");

app.use("/todos",todosrouter);
app.use("/users",usersrouter);

app.listen(3000,()=>{
   console.log("server is running in http://localhost:3000");
});