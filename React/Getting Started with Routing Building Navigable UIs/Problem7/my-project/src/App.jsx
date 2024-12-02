import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
 let navigate=useNavigate();
  return (
    <>
      <nav>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/about")}>About</button>
        <button onClick={()=>navigate("/products")}>Products</button>
        <button onClick={()=>navigate("/contact")}>Contact</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
