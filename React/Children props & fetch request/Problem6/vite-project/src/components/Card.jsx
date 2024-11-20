let Card=(props)=>{
    return (
       <div>
          <h1>User's Name: {props.name}</h1>
          <h2>User's Email: {props.email}</h2>
          <p>Address: {props?.address?.street},{props?.address?.suite},{props?.address?.city}-{props?.address?.zipcode}.</p>
       </div>
    );
}
export default Card