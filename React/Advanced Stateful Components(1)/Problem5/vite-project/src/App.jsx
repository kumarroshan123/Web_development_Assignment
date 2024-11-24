import { useReducer } from "react"

function App() {
let [state,dispatch]= useReducer(reducer,"light");
function reducer(state,action){
  switch(action){
    case "light":return "light";
    case "dark":return "dark";
    default: return state;
  }
}
  return (
    <>
     <div className={`toggle ${state==="light"?"light":"dark"}`} >
        <h1>Toggle to change the theme</h1>
        <button onClick={()=>{
          let choice= state==="light"?"dark":"light";
          dispatch(choice);
        }}>{state}</button>
     </div>
    </>
  )
}

export default App
