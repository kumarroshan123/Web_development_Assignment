import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
        const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
        const data = await response.json();
        setProduct(data.data);
    };
    fetchProductDetails();
  }, [id]);

  if (!product) return <p>No product found!</p>;

  return (
    <div className="container product-details-page">
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};

export default ProductDetails;
