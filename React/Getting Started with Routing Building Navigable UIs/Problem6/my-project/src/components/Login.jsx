const Login = () => {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;