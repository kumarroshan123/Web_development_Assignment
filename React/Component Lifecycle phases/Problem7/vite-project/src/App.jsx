import { useState } from 'react'
import Timer from './components/Timer';
import Scroll from './components/Scroll';

function App() {
  const [check, setCheck] = useState(false);
  const [sub,setsub]= useState(false);

  return (
    <>
       <h2>Timer <input type="checkbox" onClick={()=>{
        setCheck(!check);
       }} /></h2>
       {check?<Timer />:""}
       <h2>Subscribe to See Scroll Event <input type="checkbox" onClick={()=>{
        setsub(!sub);
       }} /></h2>
       {sub?<Scroll />:""}
    </>
  )
}

export default App
