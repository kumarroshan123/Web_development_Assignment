import { useEffect, useRef } from 'react'

function App() {
  let inputfocus= useRef(null);
  let refdiv= useRef(null);
  useEffect(()=>{
    handlefocus();
  },[])


  let handlefocus=()=>{
    inputfocus.current.focus();
    console.log(inputfocus.current?.value);
  }

  function handlechange(){
     const currentvalue= inputfocus.current?.value;
     document.getElementById("name").textContent=currentvalue;
  } 

  function handlecolor(){
     refdiv.current.style.backgroundColor=refdiv.current.style.backgroundColor==="black"?"orange":"black";
  }

  console.log(inputfocus.current?.value);
  return (
    <>
      <div>
        <input type="text" ref={inputfocus} onChange={handlechange} />
        <button onClick={handlefocus} >Focus </button>
        <h1 id="name"></h1>
      </div>

      <div ref={refdiv} onClick={handlecolor} style={{backgroundColor:"black"}}>
         <h1>Click here to change color of box</h1>
      </div>
    </>
  )
}

export default App
