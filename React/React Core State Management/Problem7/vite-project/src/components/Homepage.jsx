import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const HomePage = () =>{
    let [data,setData]=useState([]);
    let [cursor,setCursor]= useState({x:0,y:0});

    useEffect(()=>{
        let d=async()=>{
            let res= await fetch("https://jsonplaceholder.typicode.com/users");
            let fetchdata =  await res.json();
            setData(fetchdata);
        }
        d();
    },[]);
    useEffect(()=>{
       function movement(e){
           setCursor({x:e.screenX,y:e.screenY});
       }
       document.addEventListener("mousemove",movement);
    });
    
    return (
    <div>
        <h2>Cursor Co-ordinates: X={cursor.x} Y={cursor.y}</h2>
        {data.map((ele)=><Product key={ele.id}  {...ele} />)}
    </div>
    );
}

export default HomePage;