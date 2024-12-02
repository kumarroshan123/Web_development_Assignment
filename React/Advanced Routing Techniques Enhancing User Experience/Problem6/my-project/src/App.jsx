import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import {Login}  from "./components/Login";
import  Privateroutes  from "./components/Privateroutes";

function App() {
  

  return (
    <>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> }/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Privateroutes><Products /></Privateroutes>}/>
      </Routes>
    </>
  )
}

export default App
