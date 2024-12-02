import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
let Privateroutes=({children})=>{
    let navigate= useNavigate();
    let auth=localStorage.getItem("token")||"";
    useEffect(()=>{
        if(!auth){
            alert("Please login");
            navigate("/login");
            return;
        }
    },[])
    return children;
}
export default Privateroutes