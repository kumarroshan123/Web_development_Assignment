import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav  className='navbar '>
      <Link to="/" >
        Home
      </Link>
      <Link to="/products" >
        Products
      </Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
