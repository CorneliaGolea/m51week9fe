import React from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import UserPanel from "../userPanel/UserPanel";

const UserContainer = ({ user, setUser, setUsers }) => {
  return (
    <div className="user-container">
      <Register />
      <Login user={user} setUser={setUser} setUsers={setUsers} />
      <UserPanel setUsers={setUsers} />
    </div>
  );
};

export default UserContainer;
