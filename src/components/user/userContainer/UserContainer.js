import React from "react";
import Register from "../register/Register";
import Login from "../login/Login";

const UserContainer = ({ user, setUser }) => {
  return (
    <div className="user-container">
      <Register />
      <Login user={user} setUser={setUser} />
    </div>
  );
};

export default UserContainer;
