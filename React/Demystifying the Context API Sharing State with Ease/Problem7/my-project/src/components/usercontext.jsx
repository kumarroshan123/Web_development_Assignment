import { createContext, useState } from "react";

export let Usercontext= createContext();

export let Uservalue=({children})=>{
    let [userdetail,setuserdetail]=useState({});
    let [log,setlog]=useState(false);
    function login(val){
        setuserdetail(val);
        setlog(true);
    }
    function logout(){
        setuserdetail({});
        setlog(false);
    }
    return <Usercontext.Provider value={{userdetail,log,login,logout}}>{children}</Usercontext.Provider>
}