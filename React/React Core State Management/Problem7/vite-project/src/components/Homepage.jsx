import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const HomePage = () =>{
    let [data,setData]=useState([]);
    useEffect(()=>{
        let d=async()=>{
            let res= await fetch("https://jsonplaceholder.typicode.com/users");
            let fetchdata =  await res.json();
            setData(fetchdata);
        }
        d();
    },[]);
    return (
    <div>
        {data.map((ele)=><Product key={ele.id}  {...ele} />)}
    </div>
    );
}

export default HomePage;