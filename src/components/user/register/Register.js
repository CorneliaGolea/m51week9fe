import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <form className="registerForm">
        <input type="text" id="usernameRegister" placeholder="Username" />
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="passwordRegister" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
