import React from "react";
import "./Login.css";
import { useState } from "react";

import { login } from "../../../utils";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    const loggedUser = await login(username, password);
    await setUser(loggedUser);
    console.log(setUser);
  };
  return (
    <div className="login">
      <div className="loginForm">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="usernameLogin"
            placeholder="Username"
            onChange={(e) => handleChange(e, setUsername)}
          />
          <input
            type="password"
            id="passwordLogin"
            placeholder="Password"
            onChange={(e) => handleChange(e, setPassword)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
