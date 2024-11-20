import { useEffect, useState } from 'react'
import Card from './components/Card';

function App() {
  let [data,setData]= useState([]);
  let [newdata,setNewdata]= useState({id:null,userId:"",title:""});
  useEffect(()=>{
    let f=async()=>{
       let res= await fetch(`https://jsonplaceholder.typicode.com/albums`);
       let albumdata = await res.json();
       setData(albumdata);
    }
    f();
  },[]);

  function handleSubmit(){
      let f = async()=>{
        let method= newdata.id?"PUT":"POST";
        let res= await fetch(`https://jsonplaceholder.typicode.com/albums/${newdata.id || ""}`,{
          method:method,
          body:JSON.stringify({...newdata,id:Date.now}),
          headers:{"Content-Type": "application/json"}
        });
        let albumdata= await res.json();
        console.log(albumdata)
        if(method=="PUT"){
          setData((prev)=>prev.map((ele)=>(ele.id!==albumdata.id)?ele:albumdata));
          alert("Successfully Updated Old title");
        }else{
          setData((prev)=>[albumdata,...prev]);
          alert("New Title is Added");
        }
        
        setNewdata({id:null, userId:"", title:"" });
      }
      f();
  }
  function handleCardClick(ele){
      setNewdata(ele);
  }
  return (
    <>
     <div className='form'>
        <span><h3>UserId:</h3></span>
        <input type="number" value={newdata.userId} onChange={(e)=>{
          setNewdata({...newdata,userId:e.target.value})
        }} placeholder='Enter the UserID' />
        <span><h3>Title:</h3></span>
        <input type="text" value={newdata.title} onChange={(e)=>{
          setNewdata({...newdata,title:e.target.value})
        }} placeholder='Enter the Title' />
        <button onClick={handleSubmit}>Submit</button>
     </div>
     <div>
      {data.map((ele)=>{
        return <Card key={ele.id} {...ele} onclick={()=>handleCardClick(ele)} />
      })}
     </div>
    </>
  )
}

export default App
