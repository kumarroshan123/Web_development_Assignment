import { useEffect, useState } from "react"
let Scroll=()=>{
    let [scroll,setScroll]=useState(0);
    useEffect(()=>{
        const handleScroll = () => {
            setScroll(window.scrollY);
            console.log(window.scrollY);
          };
      
          document.addEventListener("scroll", handleScroll);
        return ()=>{
            document.removeEventListener("scroll", handleScroll);
        }
    },[]);
    return (
        <>
        <h3>Scroll Position</h3>
        <h1>{scroll}px</h1>
        </>
    );
}

export default Scroll