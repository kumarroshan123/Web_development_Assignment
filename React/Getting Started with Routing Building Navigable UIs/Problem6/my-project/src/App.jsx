import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import  Users  from "./components/Users";
import { Navigation } from "./components/Navigation";

function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
