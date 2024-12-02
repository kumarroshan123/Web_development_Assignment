import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let f=async()=>{
        let response= await fetch("https://fakestoreapi.com/products");
        let data= await response.json();
        setProducts(data);
    }
    f();
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
