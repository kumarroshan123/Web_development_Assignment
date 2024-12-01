import { createContext, useState } from "react"

export let Todocontext=createContext();

export let Todovalue=({children})=>{
     let [todo,settodo]= useState([]);
     function addtodo(value){
        let obj=[...todo];
        obj.push(value);
        settodo(obj);
     }
     function deletetodo(id){
        let obj = todo.filter((ele)=>ele.id!==id);
        settodo(obj);
     }
     return <Todocontext.Provider value={{todo,addtodo,deletetodo}}>{children}</Todocontext.Provider>
}
