let Product=(props)=>{
  let {name,username,email,address,phone}=props;
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{name}</h3>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {`${address?.street}, ${address?.city}, ${address?.zipcode}`}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default Product;