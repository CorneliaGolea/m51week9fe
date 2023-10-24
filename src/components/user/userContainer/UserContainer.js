import React from "react";
import Register from "../register/Register";
import Login from "../login/Login";

const UserContainer = () => {
  return (
    <div className="UserContainer">
      <Register />
      <Login />
    </div>
  );
};

export default UserContainer;