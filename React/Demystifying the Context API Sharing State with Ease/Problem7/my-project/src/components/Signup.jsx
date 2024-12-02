import { useContext, useState } from "react"
import { Usercontext } from "./usercontext";

export let Signup=()=>{
    let [username, setusername] = useState("");
    let [password, setpassword] = useState("");
    let { login } = useContext(Usercontext);
  
    return (
      <div className="signup-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful");
            login({ username, password });
          }}
          className="signup-form"
        >
          <h1>Log In</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Enter the Username"
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Enter the Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    );
  };
  