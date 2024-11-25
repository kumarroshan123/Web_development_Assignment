import { useReducer, useState } from 'react'

function App() {
 let [isvisible,dispatch]=useReducer(reducer,true);
 
 function reducer(isvisible,action){
     switch(action){
         case true: return true;
         case false:return false;
         default:return isvisible;
     }
 }
  return (
    <>
      <h1>Toggle:</h1>
      <input type="checkbox" defaultChecked="true" onClick={(e)=>{
        dispatch(e.target.checked)
      }} />
      {isvisible && <div>
        <h1>Hello,World!</h1>
        </div>}
    </>
  )
}

export default App
