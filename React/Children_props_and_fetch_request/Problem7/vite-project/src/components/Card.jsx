let Card=(props)=>{
   return (
    <div className="card" onClick={props.onclick}>
     <h1>Title:{props.title}</h1>
     </div>
   );
}

export default Card