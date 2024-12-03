import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

let Products = () => {
  let [products, setProducts] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  
  let fetchdata = async () => {
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 5;
    const sort = searchParams.get("sort") || "";
    const order = searchParams.get("order") || "";
    const filter = searchParams.get("filter") || "";
    let response = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}${
        sort ? `&sort=${sort}` : ""
      }${order ? `&order=${order}` : ""}${filter ? `&filter=${filter}` : ""}`
    );
    let data = await response.json();
    setProducts(data.data);
  };

  useEffect(() => {
    fetchdata();
  }, [searchParams]);

  return (
    <div className="container">
      <h1>Products</h1>
      <div>
        <button onClick={() => setSearchParams({ filter: "men" })}>Men</button>
        <button onClick={() => setSearchParams({ filter: "women" })}>
          Women
        </button>
        <button onClick={() => setSearchParams({ filter: "kids" })}>
          Kids
        </button>
        <button onClick={() => setSearchParams({})}>All</button>
      </div>
      <div>
        <button onClick={() =>setSearchParams({ ...Object.fromEntries(searchParams), sort: 'price', order: "asc" })}>
          Sort by Price: Low to High
        </button>
        <button onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), sort: 'price', order: "desc" })}>
          Sort by Price: High to Low
        </button>
      </div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
