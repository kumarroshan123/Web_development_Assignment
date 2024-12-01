import { useContext, useState } from "react"
import { Todocontext } from "./todocontext";

export let TodoForm =()=>{
    let {addtodo}=useContext(Todocontext);
    let [id,setid]=useState(1);
    let [title,setTitle]=useState("");
    return (
        <>
        <form action="">
            <label htmlFor="todotitle">Todo Title:</label>
            <input type="text" id="todotitle" onChange={(e)=>{
                setTitle(e.target.value);
            }} />
            <button onClick={(e)=>{
                e.preventDefault();
                if (title.length>0){
                    let obj={id,title};
                    addtodo(obj);
                    setid((prev)=>prev+1);
                    alert("Todo is Added");
                }else{
                    alert("Todo Title input box is empty! Please input some value");
                }
            }}>Add Todo</button>
        </form>
        </>
    )
}