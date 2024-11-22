import { useEffect, useState } from 'react'
import Post from './components/Post';

function App() {
  let [data,setData]=useState([]);
  let [page,setPage]=useState(1);
  let [pagecount,setPagecount]=useState(1);
  let [search,setsearch]=useState("");

  useEffect(()=>{
    let f= async()=>{
      let res=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=7`);
      let post = await res.json();
      let count=Math.ceil((res.headers.get("X-Total-Count"))/7);
      setPagecount(count);
      setData(post);
    }
    f();
  },[page]);

  let filterdata= data.filter((ele)=>{
    return (ele.title.toLowerCase().includes(search.toLowerCase()) ||
    ele.body.toLowerCase().includes(search.toLowerCase()));
  });


  return (
    <>
    <div></div>
    <div className='search-container'>
      <input type="text" onChange={(e)=>{
          setsearch(e.target.value);
      }} placeholder='Search' className='search-input' />
    </div>
    <div>
      {filterdata.map((ele,i)=>{
           return <Post key={i} {...ele} />
      })}
    </div>
    <div className='pagination'>
        {Array.from({length:pagecount}).map((ele,i)=>{
           return (
               <button key={i+1} data-id={i+1} onClick={()=>{
                setPage(i+1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
               }} className={`page ${i+1==page?"selected":""}`} >{i+1}</button>
              )
        })}
    </div>
    </>
  )
}

export default App
