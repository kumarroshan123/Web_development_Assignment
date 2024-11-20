import { useEffect, useState } from 'react'
import Card from './components/Card';

function App() {
  const [user, setUser] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(()=>{
    if(shouldFetch){
      let f=async()=>{
        let res= await fetch("https://jsonplaceholder.typicode.com/users");
        let data= await res.json();
        console.log(data);
        setUser(data);
     }
     f();
    }
  },[shouldFetch])
  return (
    <>
      {(user.length==0) && <button onClick={()=>{
          setShouldFetch(true);
      }}>Fetch the data</button>}
      {user.length>0 &&
        user.map((ele)=>{
          return <Card key={ele.id} {...ele} />
        })
      }
    </>
  )
}

export default App
