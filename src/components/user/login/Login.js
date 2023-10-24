import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <input type="text" id="usernameLogin" placeholder="Username" />
        <input type="password" id="passwordLogin" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
