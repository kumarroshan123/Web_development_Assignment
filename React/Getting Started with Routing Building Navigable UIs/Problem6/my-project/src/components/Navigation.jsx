import {
    Routes,
    Route,
    Link,
    Outlet,
    NavLink,
    Navigate,
  } from "react-router-dom";
export let Navigation = () => {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
      </nav>
    );
  };
  